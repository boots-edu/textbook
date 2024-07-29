/**
 * This script is used to build the textbook from the markdown files.
 * It first parses the index file and collects all the relevant markdown files.
 * Then it concatenates all the markdown files into a single string.
 * Finally, it converts the markdown string into a PDF file.
 * 
 * Explore these plugins:
 * - https://www.npmjs.com/package/remarkable-header-ids
 * - https://www.npmjs.com/package/remarkable-auto-heading-links
 * 
 */
import markdownpdf from "markdown-pdf";
import fs from "fs";
import hljs from "highlight.js";
import through from "through2";
import cheerio from "cheerio";
import path from "path";

const PAGE_BREAK = '\n\n<div style="page-break-before: always;"></div>\n\n'
const TITLE_PAGE = `
# BOOTS: Beginner Object-Oriented TypeScript

By Greg Silber, Austin Cory Bart, and James Clause

Generated on ${new Date().toDateString()}

${PAGE_BREAK}
`;

const sourceDir = "../source/";
const indexFile = sourceDir + "index.md";
const outputPdf = "./dist/boots_textbook.pdf";
const markdownOptions: Record<string, any> = {
    "paperFormat": "Letter",
    "cssPath": "https://boots-edu.github.io/textbook/assets/css/just-the-docs-default.css"
};

export interface ChapterLine {
    unit: string;
    chapter: string;
    title: string;
    path: string;
    indent: string;
}
const CHAPTER_MATCH = /^(\s*)([\d\-]{1,2})\.? \[(.+)\]\((.+)\)/;

// Read the index file
let indexContent = fs.readFileSync(indexFile, "utf8");
// Skip to first header (line starting with #)
let indexBody = indexContent.slice(indexContent.indexOf("#"));
// Iterate through the table of contents for lines that start with a dash or number
let lines = indexBody.split("\n");
let foundFiles: ChapterLine[] = [];
let currentUnit = "";
let counter = 0;
lines.forEach((line) => {
    let match = line.match(CHAPTER_MATCH);
    if (match) {
        let [indent, chapter, title, path] = match.slice(1);
        if (chapter === "-") {
            currentUnit = "0";
            chapter = ""+counter++;
        } else if (indent === "") {
            currentUnit = chapter;
            chapter = "0";
        }
        foundFiles.push({
            unit: currentUnit,
            chapter: chapter,
            title: title,
            path: sourceDir+path,
            indent: indent
        });
    }
});

// Clean up the markdown files
const absolutePath = process.cwd().replace(/ /g, '%20').replace(/\\/g, '/').slice(0, -3)+"source/";
function cleanMarkdown(chapter: ChapterLine, content: string): string {
    let lines = content.split("\n");
    // Chomp out everything from header to first actual heading (second line that starts with a #)
    lines = lines.slice(1+lines.findIndex((line, index) => line.startsWith("#")));
    lines = lines.slice(1+lines.findIndex((line, index) => line.startsWith("#")));
    // Get rid of everything after the last heading (remove that heading too)
    lines = lines.slice(0, lines.findLastIndex((line, index) => line.startsWith("#")));
    const header = `# ${chapter.unit}.${chapter.chapter}) ${chapter.title}\n\n`;
    let full = header + lines.join("\n");
    /// Find all images and update their paths
    full = full.replaceAll(/!\[(.*?)\]\((.*?)\)/g, (match, title, url) => {
        // Need to add the current directory and sourceDir to the url
        const newUrl = url.replace("../../", absolutePath);
        console.log(newUrl);
        return `![${title}](${newUrl})`;
    });
    return full;
}

// Actually clean up the files
let preparedFiles: string[] = foundFiles.map((chapter) => {
    let content = fs.readFileSync(chapter.path, "utf8");
    if (chapter.chapter === "0") {
        return `\n# ${chapter.unit}) ${chapter.title}\n\n${PAGE_BREAK}`;
    } else {
        return cleanMarkdown(chapter, content)+PAGE_BREAK;
    }
});

// Add the table of contents
preparedFiles.unshift("# Table of Contents\n\n"+
    foundFiles.map((chapter) => {
        const enumeration = chapter.chapter === "0" ? chapter.unit : chapter.chapter;
        return `${chapter.indent}- ${enumeration}. ${chapter.title}`;
    }).join("\n") + `\n\n` + PAGE_BREAK
);

// Add the title page
preparedFiles.unshift(TITLE_PAGE)

// Set up code highlighting
const hljsOptions = {
};

// Set up markdown options for remarkable
markdownOptions["remarkable"] = {
    html: true,
    breaks: true,
    typographer: true,
    langPrefix: "language-",
    quotes: "“”‘’",
    highlight: function (str: string, lang: string) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, {
                    ...hljsOptions,
                    language: lang
                }).value;
            } catch (__) {}
        }
        return ''; // use external default escaping
    }
};

// Adjust image paths to have file:// prefix
var preProcessHtml = function() {
    return function() {
        return through(function(chunk, encoding, callback) {
            var $ = cheerio.load(chunk);

            $('img[src]').each(function() {
                var imagePath = $(this).attr('src');
                $(this).attr('src', 'file://' + (process.platform === 'win32' ? '/' : '') + imagePath);
            });

            this.push($.html());
            callback();
        });
    }
};
markdownOptions["preProcessHtml"] = preProcessHtml();

// Final output
markdownpdf(markdownOptions).concat.from.strings(preparedFiles, {}).to(outputPdf, function () {
    console.log("Created", outputPdf)
});
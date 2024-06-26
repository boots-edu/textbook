import { decode } from "./vlq";

export type SourceCodeMapping = Record<
    number,
    Record<number, [number, number]>
>;

export const EXTRACT_SOURCE_CODE_MAP =
    /[#@]\s(source(?:Mapping)?URL)=data:application\/json;base64,\s*(\S+)/;

export function extractSourceCodeMap(code: string): SourceCodeMapping {
    const sourceCodeMap = code.match(EXTRACT_SOURCE_CODE_MAP);
    if (!sourceCodeMap) {
        return {};
    }
    code = sourceCodeMap[2];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    let lines = JSON.parse(atob(code)).mappings.split(";");
    let lineMap: Record<number, Record<number, [number, number]>> = {};
    const latest = [0, 0, 0, 0];
    lines.forEach((line: string, compiledRow: number) => {
        latest[0] = 0;
        //latest[3] = 0;
        line.split(",").forEach((mapping) => {
            const offsets = decode(mapping);
            offsets.forEach((v, i) => (latest[i] += v));
            const [compiledColumn, , originalRow, originalColumn] = latest;
            if (!(compiledRow in lineMap)) {
                lineMap[compiledRow] = {};
            }
            lineMap[compiledRow][compiledColumn] = [
                originalRow,
                originalColumn,
            ];
        });
    });

    return lineMap;
}
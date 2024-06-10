({useState, useEffect} = React);
({Accordion, AccordionButton, AccordionCollapse, AccordionContext, 
  Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, 
  ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, 
  Carousel, CarouselItem, CloseButton, Col, Collapse, Container, 
  Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, 
  FormCheck, FormControl, FormFloating, FormGroup, FormLabel, 
  FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, 
  Modal, ModalBody, ModalDialog, ModalFooter, ModalTitle, 
  Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, 
  Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, 
  OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, 
  Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, 
  SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, 
  TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, 
  ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, 
  Tooltip, useAccordionButton} = ReactBootstrap);

exports = {};

function _getHtmlSelector(el) {
    if (el.tagName.toLowerCase() == "html")
        return "html";
    var str = el.tagName.toLowerCase();
    str += (el.id != "") ? "#" + el.id : "";
    if (el.className) {
        var classes = el.className.trim().split(/\s+/);
        for (var i = 0; i < classes.length; i++) {
            str += "." + classes[i]
        }
    }
    
    if(document.querySelectorAll(str).length==1) return str;
    
    return _getHtmlSelector(el.parentNode) + " > " + str;
}


let uniqueID = 0;
function addSubArea(area, headerText, type) {
  const subarea = document.createElement("div");
  subarea.className = "runnable-sub-area";
  subarea.id = "runnable-sub-area-"+uniqueID;
  uniqueID += 1;
  const header = document.createElement("strong");
  header.appendChild(document.createTextNode(headerText));
  subarea.appendChild(header);
  const body = document.createElement(type);
  subarea.appendChild(body);
  subarea.body = body;
  area.after(subarea);
  return subarea;
}

function setupExecutionZone(target, editor) {
  const runButton = document.createElement("button");
  runButton.classList.add("btn", "btn-success");
  runButton.appendChild(document.createTextNode("Run"));
  const errorArea = addSubArea(target, "Errors", "pre");
  const outputArea = addSubArea(target, "Console Log", "pre");
  const mockDocument = addSubArea(target, "React Application", "div");
  runButton.onclick = () => {
    executeCode(editor.getSession().getValue(), 
      mockDocument.body, outputArea.body, errorArea.body);
    target.classList.add("fadeIn");
    target.addEventListener("webkitAnimationEnd", () => target.classList.remove("fadeIn"), false);
    target.addEventListener("animationEnd", () => target.classList.remove("fadeIn"), false);
  };
  target.after(runButton);
}

function setupAce(target, initialCode) {
  const editor = ace.edit(target);
  editor.getSession().setUseWorker(false);
  editor.setFontSize(14);
  editor.getSession().setTabSize(2);
  editor.getSession().setUseSoftTabs(true);
  //editor.setTheme("ace/theme/monokai");
  editor.session.setMode("ace/mode/tsx");
  editor.getSession().setValue(initialCode);
  setupExecutionZone(target, editor);
  console.log(initialCode);
}

window.addEventListener('load', function() {
  document.querySelectorAll('.language-typescript.highlighter-rouge,.language-tsx.highlighter-rouge').forEach((area) => {
    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-primary");
    editButton.appendChild(document.createTextNode("✏️"));
    editButton.style.float = 'right';
    editButton.onclick = () => {
      setupAce(area, area.textContent);
      editButton.remove();
    };
    area.parentNode.insertBefore(editButton, area);
  });
});

function backupFunctions() {
  return {
    log: console.log,
    error: console.error
  }
}

function mockFunctions(backup) {
  console.log = backup.log;
  console.error = backup.error;
}

function repr(obj) {
  if(obj == null || typeof obj === 'string' || typeof obj === 'number') return String(obj);
  if(obj.length) return '[' + Array.prototype.map.call(obj, repr).join(', ') + ']';
  if(obj instanceof HTMLElement) return '<' + obj.nodeName.toLowerCase() + '>';
  if(obj instanceof Text) return '"' + obj.nodeValue + '"';
  if(obj.toString) return obj.toString();

  return String(obj);
}

function logData(data, where) {
  for (var i = 0; i < data.length; i++) {
    where.innerHTML += repr(data[i]) + ' ';
  }
  where.innerHTML += '<br />';
}

function wrapCode(code, outputArea, errorArea) {
  return `(function(){
    const backup = { log: window.console.log, error: window.console.error }
    let console = {};
    console.log = function() {
      const outputArea = document.querySelector("${_getHtmlSelector(outputArea)}");
      logData([...arguments], outputArea);
      //outputArea.innerText += [...arguments].join(" ") + "\\n";
      backup.log(...arguments);
    };
    console.error = function() {
      const errorArea = document.querySelector("${_getHtmlSelector(errorArea)}");
      //errorArea.innerText += [...arguments].join(" ") + "\\n";
      logData([...arguments], errorArea);
      backup.error(...arguments);
    };
    ${code}
  })();`;
}

function executeCode(code, mockDocument, outputArea, errorArea) {
  const backup = backupFunctions();
  outputArea.innerText = "";
  errorArea.innerText = "";
  let noErrors = true;
  compilerOptions =  {jsx: window.ts.JsxEmit.React, module: window.ts.ModuleKind.CommonJS};
  try {
    code += `\nif (typeof App !== "undefined") {ReactDOM.render(<App/>, mockDocument);}`;
    code = window.ts.transpile(code, compilerOptions);
    code = wrapCode(code, outputArea, errorArea);
    eval(code);
  } catch (e) {
    errorArea.innerText += e;
    noErrors = false;
  } finally {
    //mockFunctions(backup);
  }
  if (noErrors) {
    errorArea.innerText += "No errors";
  }
}
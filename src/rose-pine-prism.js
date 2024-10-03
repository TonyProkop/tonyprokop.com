const base = '#232136';
const surface = '#2a273f';
const overlay = '#393552';
const muted = '#6e6a86';
const subtle = '#908caa';
const text = '#e0def4';
const love = '#eb6f92';
const gold = '#f6c177';
const rose = '#ea9a97';
const pine = '#3e8fb0';
const foam = '#9ccfd8';
const iris = '#c4a7e7';
const highlightLow = '#2a283e';
const highlightMed = '#44415a';
const highlightHigh = '#56526e';

const rosePinePrism = {
  "pre[class*=\"language-\"]": {
    "background": base,
    "color": text,
    "fontSize": "18px",
  },
  "code[class*=\"language-\"]": {
    "background": base,
    "color": text
  },
  "contant": {
    "color": text
  },
  "comment": {
    "color": subtle
  },
  "prolog": {
    "color": subtle
  },
  "cdata": {
    "color": subtle
  },
  "punctuation": {
    "color": subtle
  },
  "delimiter": {
    "color": pine
  },
  "important": {
    "color": pine
  },
  "atrule": {
    "color": pine
  },
  "operator": {
    "color": pine
  },
  "keyword": {
    "color": pine
  },
  "tag": {
    "color": foam
  },
  ".tag .punctuation": {
    "color": foam
  },
  "doctype": {
    "color": foam
  },
  "variable": {
    "color": foam
  },
  "regex": {
    "color": foam
  },
  "class-name": {
    "color": foam
  },
  "selector": {
    "color": foam
  },
  "inserted": {
    "color": foam
  },
  "boolean": {
    "color": rose
  },
  "entity": {
    "color": rose
  },
  "number": {
    "color": rose
  },
  "symbol": {
    "color": rose
  },
  "function": {
    "color": rose
  },
  "string": {
    "color": gold
  },
  "char": {
    "color": gold
  },
  "property": {
    "color": gold
  },
  "attr-value": {
    "color": gold
  },
  "number": {
    "color": gold
  },
  ".attr-value .punctuation": {
    "color": gold
  },
  "parameter": {
    "color": iris
  },
  "url": {
    "color": iris
  },
  "name": {
    "color": iris
  },
  "attr-name": {
    "color": iris
  },
  "builtin": {
    "color": iris,
    "fontWeight": "bold"
  },
  "deleted": {
    "color": love
  },
}

export default rosePinePrism;

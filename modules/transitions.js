const startTransitions = {
  alphanumeric: "Alphanumeric",
  symbol: "Alphanumeric",
  whitespace: "Alphanumeric",
  xmlStart: "XML",
  xmlEnd: "ERROR"
}

const alphanumericTransitions = {
  alphanumeric: "Alphanumeric",
  symbol: "Alphanumeric",
  whitespace: "Alphanumeric",
  xmlStart: "XML",
  xmlEnd: "ERROR"
}

const xmlTransitions = {
  alphanumeric: "XML",
  symbol: "XML",
  whitespace: "XML",
  xmlStart: "ERROR",
  xmlEnd: "XMLEnd"
}

const xmlEndTransitions = {
  alphanumeric: "Alphanumeric",
  symbol: "Alphanumeric",
  whitespace: "Alphanumeric",
  xmlStart: "XML",
  xmlEnd: "ERROR",
}

const errorTransitions = {
  alphanumeric: "ERROR",
  symbol: "ERROR",
  whitespace: "ERROR",
  xmlStart: "ERROR",
  xmlEnd: "ERROR"
}

export const transitions = {
  Start: startTransitions,
  Alphanumeric: alphanumericTransitions,
  XML: xmlTransitions,
  XMLEnd: xmlEndTransitions,
  ERROR: errorTransitions
}
export const SET_OF_CHARACTERS = [
  { action: "alphanumeric", "data": "abcdefghijklmnopqrstuvwxyz0123456789".split('') },
  { action: "symbol", "data": "`~!@#$%^&*()_+=-/?.,|][{}:\"".split('') },
  { action: "whitespace", "data": "\n\r\t\\ ".split('') },
  { action: "xmlStart", "data": "<".split('') },
  { action: "xmlEnd", "data": ">".split('') }
]
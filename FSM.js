import { Log } from "./modules/log.js";
import { transitions } from "./modules/transitions.js";
import { SET_OF_CHARACTERS } from "./modules/constants.js";

// const testInput = 'The <strong>quick</strong> brown <em>fox</em> jumped over the <strong>lazy</strong> brown dog.'
const testInput = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>FSM</title><script src="./FSM.js" defer type="module"></script></head><body><div id="output"></div></body></html>`

let alphas = ''
let xml = ''

let alphanumericArr = []
let xmlArr = []

class Director {
  #output
  xmlArr
  alphanumericArr

  constructor(chars, log) {
    this._characterList = chars
    this.#output = document.querySelector('#output')
    this.log = log
    this.STATE = "Start"
    this.states = {
      Start: this.Start,
      Alphanumeric: this.AlphaNumeric,
      XML: this.XML,
      XMLEnd: this.XMLEnd,
      ERROR: this.ERROR
    }

    this.flags = {
      Start: false,
      Alphanumeric: false,
      XML: false,
      this.XMLEnd: false,
      ERROR: false
    }
  }

  WhichAction(ch) {
    let ret = ''
    let outputString = ''
    this._characterList.forEach(x => {
      if (x.data.indexOf(`${ch}`.toLowerCase()) >= 0) ret = x.action;
    })

    this.SetState(ret)

    if (this.STATE === 'ERROR') {
      throw new Error(`Illegal character detected: ${ch}`);
    }

    this.states[this.STATE](ch)

  }

  SetState(act) {
    console.log(act);
    this.STATE = transitions[this.STATE][act]
    let s = transitions[this.STATE][act]

    // this.STATE = `${s}`
  }

  Start(ch) {
  }

  AlphaNumeric(ch) {
    alphanumericArr.push(ch)
  }

  XML(ch) {
    xmlArr.push(ch)
  }

  XMLEnd(ch) {
    xmlArr.push(ch)
  }

  ERROR(ch) {

  }
}

const output = document.querySelector('#output')
const dir = new Director(SET_OF_CHARACTERS, new Log(output, false))

testInput.split('').forEach(c => {
  dir.WhichAction(c)
})

console.log(alphanumericArr.join(''))
console.log(xmlArr.join(''))
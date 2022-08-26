export class Log {
  constructor(root, autoClear = false) {
    this.root = root
    this.autoClear = autoClear
    this.store = []
    this.immediateBuffer = []
  }
  P(str, clear = true) {
    if (clear) {
      this.immediateBuffer = []
    }
    this.immediateBuffer.push(str)
    this.immediateBuffer.forEach(item => {
      let tmp = document.createElement('p')
      tmp.innerHTML = item
      this.root.appendChild(tmp)
    })
  }
}
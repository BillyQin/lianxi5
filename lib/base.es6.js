class Base {
  constructor() {
    this.eventList = []
  }

  trigger (event, msg=null) {
    this.eventList.push(event)
    if (this.eventList.length) {
      for (let i=0;i<this.eventList.length;i++) {
        if (this.eventList[i].name === event) {
          this.eventList[i].callback.call(this, msg)
          return
        }
      }
    }
  }

  on (event, callback) {
    this.eventList.push({
      name: event,
      callback
    })
  }
}

module.exports = Base
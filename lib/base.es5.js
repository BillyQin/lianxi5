function Base() {
  // this.eventList = []
  // function trigger (event, msg=null) {
  //   this.eventList.push(event)
  //   if (this.eventList.length) {
  //     for (let i=0;i<this.eventList.length;i++) {
  //       if (this.eventList[i].name === event) {
  //         this.eventList[i].callback.call(this, msg)
  //         return
  //       }
  //     }
  //   }
  // }

  // function on (event, callback) {
  //   this.eventList.push({
  //     name: event,
  //     callback
  //   })
  // }
}

Base.extend = function () {
  if (!arguments.length) {
    return Base
  }
  if (arguments[0]) {
    let key = Object.keys(arguments[0])[0]
    Base.prototype[key] = arguments[0][key]
  }
  if (arguments[1]) {
    key = Object.keys(arguments[1])[0]
    Base[key] = arguments[1][key]
  }
  return Base
}
var A = Base.extend({
  say: function (word) {
    return word
  }
})
var B = A.extend()
var b = new B
console.log(B)
console.log(b)

module.exports = Base
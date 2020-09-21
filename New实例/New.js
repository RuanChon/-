function myNew(Func, ...args) {
    const instance = {};
    if (Func.prototype) {
      Object.setPrototypeOf(instance, Func.prototype)
    }
    const res = Func.apply(instance, args)
    if (typeof res === "function" || (typeof res === "object" && res !== null)) {
      return res
    }
    return instance
  }
  
  // 测试
  function Person(name) {
    this.name = name
  }
  Person.prototype.sayName = function() {
    console.log(`My name is ${this.name}`)
  }
  const me = myNew(Person, 'Jack')
  me.sayName()
  console.log(me)
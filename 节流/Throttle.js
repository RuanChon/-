
// 如果短时间内大量触发同一事件，在函数执行过第一次后，在指定时间内不再工作，直至过了指定时间重新生效

function throttle(func, ms = 1000) {
    let canRun = true
    return function (...args) {
      if (!canRun) return
      canRun = false
      setTimeout(() => {
        func.apply(this, args)
        canRun = true
      }, ms)
    }
  }
  
  // 测试
  // 只有当侧边栏不停滚动时，则会定时触发 console
  const task = () => { console.log('run task') }
  const throttleTask = throttle(task, 1000)
  window.addEventListener('scroll', throttleTask)
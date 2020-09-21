
// 如果短时间内大量触发同一事件，只会执行一次函数

function debounce(func, ms = 1000) {
    let timer;
    return function (...args) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        func.apply(this, args)
      }, ms)
    }
  }
  
  // 测试
  // 滚动侧边栏时，停止滚动一秒内没有再滚动，则触发 console
  const task = () => { console.log('run task') }
  const debounceTask = debounce(task, 1000)
  window.addEventListener('scroll', debounceTask)
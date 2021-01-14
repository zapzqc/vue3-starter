/**
 * 节流 规定在一段时间内，只能触发一次函数。如果这段时间内触发多次函数，只有一次生效
 * 使用场景：
 * 1、鼠标不断点击触发，mousedown(单位时间内只触发一次)
 * 2、监听滚动事件，比如是否滑到底部自动加载更多
 * @param fn 回调
 * @param duration 时间间隔的阈值(单位：ms) 默认500ms
 */
export function useThrottle<F extends(...args: unknown[]) => unknown>(fn: F, duration = 1000):
() => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const throttle = (...args: Parameters<F>) => {
    if (timeoutId) {
      return;
    }
    timeoutId = setTimeout(() => {
      fn(...args);
      timeoutId = undefined;
    }, duration);
  };

  return throttle;
}

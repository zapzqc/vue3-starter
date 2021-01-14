/**
 * 防抖 在事件被触发一定时间后再执行回调，如果在这段事件内又被触发，则重新计时
 * 使用场景：
 * 1、搜索框中，用户在不断输入值时，用防抖来节约请求资源
 * 2、点击按钮时，用户误点击多次，用防抖来让其只触发一次
 * 3、window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次
 * @param fn 回调
 * @param duration 时间间隔的阈值(单位：ms) 默认1000ms
 */
export function useDebounce<F extends(...args: unknown[]) => unknown> (fn: F, duration = 1000):
() => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const debounce = (...args: Parameters<F>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
      timeoutId = undefined;
    }, duration);
  };

  return debounce;
}

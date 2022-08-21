const debounce = (fn: (arg0: any) => void, delay: number | undefined) => {
  let timer: string | number | NodeJS.Timeout | null | undefined = null;
  return (...args: any) => {
    clearTimeout(timer as number);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export default debounce;

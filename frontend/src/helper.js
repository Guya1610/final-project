export const debounce_leading = (func, timeout = 500) => {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, 500);
  };
};

export const remove_html_tag = (value) => {
  return value.replace(/<\/?[^>]+(>|$)/g, "");
};

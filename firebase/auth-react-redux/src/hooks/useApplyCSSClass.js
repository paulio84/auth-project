import { useEffect } from 'react';

const addClass = (selector, className) => {
  const s = document.querySelector(selector);
  s.classList.add(className);
};
const removeClass = (selector, className) => {
  const s = document.querySelector(selector);
  s.classList.remove(className);
};

const useApplyCSSClass = (selector, className) => {
  useEffect(() => {
    className instanceof Array
      ? className.map((cn) => addClass(selector, cn))
      : addClass(selector, className);

    return () => {
      className instanceof Array
        ? className.map((cn) => removeClass(selector, cn))
        : removeClass(selector, className);
    };
  }, [selector, className]);
};

export default useApplyCSSClass;

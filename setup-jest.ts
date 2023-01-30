import 'jest-preset-angular/setup-jest';
import { format } from 'util';

// /* global mocks for jsdom */
const mock = () => {
  let storage: { [key: string]: string } = {};
  return {
    getItem: (key: string) => (key in storage ? storage[key] : null),
    setItem: (key: string, value: string) => (storage[key] = value || ''),
    removeItem: (key: string) => delete storage[key],
    clear: () => (storage = {}),
  };
};
Object.defineProperty(window, 'localStorage', { value: mock() });
Object.defineProperty(window, 'sessionStorage', { value: mock() });
Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance'],
    };
  },
});
Object.defineProperty(window, 'scroll', {
  value: () => {
    return;
  },
});
Object.defineProperty(window, 'scrollTo', {
  value: () => {
    return;
  },
});
Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>',
});
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});

const error = global.console.error;
// makes test suite fail if there is any console errors on it
global.console.error = (...args) => {
  error(...args);
  throw new Error(format(...args));
};

/* output shorter and more meaningful Zone error stack traces */
// Error.stackTraceLimit = 2;

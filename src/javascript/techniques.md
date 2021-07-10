
# Techniques

## Throttle

Throttling is a technique with an artificial restriction on an event or function, so that it is executed no more often than in a given period of time.

#### Throttle - libs realizations

Returns a function, that, when invoked, will only be triggered at most once during a given window of time.

* [underscore.js / Throttle](https://underscorejs.org/docs/modules/throttle.html)
* [lodash.js / Throttle](https://lodash.com/docs/4.17.15#throttle)

## Debounce

Debouncing functions means that all calls will be ignored until they stop for a certain period of time.

A debounce is a higher-order function, which is a function that returns another function (named executedFunction here for clarity). This is done to form a closure around the func and wait function parameters and the timeout variable so that their values are preserved.

#### Debounce - my realization
```
function debounce (func, ms) {
  let timeout;

  // Return other function because Debounce it's wrapper / higher-order function
  return function () {

    const fnCall = () => { func.apply(this, arguments) }

    // Closure 
    clearTimeout(timeout);

    timeout = setTimeout(fnCall, ms)
  }
}
```
#### Debounce - libs realization

* [underscore.js / Debounce](https://underscorejs.org/docs/modules/debounce.html)
* [lodash.js / Debounce](https://lodash.com/docs/4.17.15#debounce)

## Closures

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
 
* [MDN / Closures](https://developer.mozilla.org/en/docs/Web/JavaScript/Closures)
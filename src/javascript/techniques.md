
# Techniques

## Throttle

Throttling is a technique with an artificial restriction on an event or function, so that it is executed no more often than in a given period of time.

``` javascript
function throttle (func, ms) {
  let isThrottled = false;
  let savedArgs;
  let savedThis;
  
  function wrapper() {
    
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    
    func.apply(this, arguments);
    
    isThrottled = true;
    
    setTimeout(function() {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
      
    }, ms);

  }
  
  return wrapper;
  
}
```

* [live example](https://jsfiddle.net/ArtemShar/wvor2fxt/6/)

#### Throttle - libs realizations

Returns a function, that, when invoked, will only be triggered at most once during a given window of time.

* [underscore.js / Throttle](https://underscorejs.org/docs/modules/throttle.html)
* [lodash.js / Throttle](https://lodash.com/docs/4.17.15#throttle)


## Debounce

Debouncing functions means that all calls will be ignored until they stop for a certain period of time.

A debounce is a higher-order function, which is a function that returns another function (named executedFunction here for clarity). This is done to form a closure around the func and wait function parameters and the timeout variable so that their values are preserved.

``` javascript
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

* [live example](https://codesandbox.io/s/debounce-7n9rm?file=/src/App.js)

#### Debounce - libs realization

* [underscore.js / Debounce](https://underscorejs.org/docs/modules/debounce.html)
* [lodash.js / Debounce](https://lodash.com/docs/4.17.15#debounce)

## Closures

A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain. A closure is the combination of a function and the lexical environment within which that function was declared.

**Example**
``` javascript
function makeAdder(x) { // makeAdder is a function factory
  return function(y) {
    return x + y;
  };
};

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

In this example, we have defined a function makeAdder(x), that takes a single argument x, and returns a new function. The function it returns takes a single argument y, and returns the sum of x and y.

In essence, makeAdder is a function factory. It creates functions that can add a specific value to their argument. In the above example, the function factory creates two new functions—one that adds five to its argument, and one that adds 10.

add5 and add10 are both closures. They share the same function body definition, but store different lexical environments. In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.


* [MDN / Closures](https://developer.mozilla.org/en/docs/Web/JavaScript/Closures)
# Classes

## static
>The static keyword defines a static method or property for a class. Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself.

The following example demonstrates several things:

1. How a static member (method or property) is defined on a class.
2. That a class with a static member can be sub-classed.
3. How a static member can and cannot be called.

``` JavaScript
class Triple {
  static customName = 'Tripler';
  static description = 'I triple any number you provide';
  static calculate(n = 1) {
    return n * 3;
  }
}

class SquaredTriple extends Triple {
  static longDescription;
  static description = 'I square the triple of any number you provide';
  static calculate(n) {
    return super.calculate(n) * super.calculate(n);
  }
}

console.log(Triple.description);            // 'I triple any number you provide'
console.log(Triple.calculate());            // 3
console.log(Triple.calculate(6));           // 18

const tp = new Triple();

console.log(SquaredTriple.calculate(3));    // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description);     // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName);      // 'Tripler'

// This throws because calculate() is a static member, not an instance member.
console.log(tp.calculate());                // 'tp.calculate is not a function'
```

**Links**:
* [developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
* [learn.javascript.ru/static-properties-methods](https://learn.javascript.ru/static-properties-methods)
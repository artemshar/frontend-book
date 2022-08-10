# Design Principles in Software Development

## SOLID

**Sources**
- https://en.wikipedia.org/wiki/SOLID
- http://principles-wiki.net/collections:robert_c._martin_s_principle_collection

### Single-responsibility principle (SRP)

There should never be more than one reason for a class to change." In other words, every class should have only one responsibility

Signs that will help you understand that the principle is violated:
* Unintentional duplication, when changes in one method affect another method result.
* A sign of a merger.

To understand and solve problems with it, think about actors / users of methods. We should split a code for different actors.

**Bad** example:
|Employe|
|-|
|+ calculatePay <br> + reportHours <br> + save |

To understand and solve problems with it, think about actors / users of methods. We should split a code for different actors.


**Good** example:
Pattern "Facade".
|Employe Facade|
|-|
|+ calculatePay <br> + reportHours <br> + save |
↓     ↓     ↓
|PayCalculator|
|-|
|+ calculatePay|

|HourReporter|
|-|
|+ reportHours|

|EmployeeSaver|
|-|
|+ saveEmployee|
↓

|Employee Data|
|-|

 
<br>
Example in JavaScript:
```javascript
//Bad

class UserSettings {
  constructor(user) {
    this.user = user;
  }

  changeSettings(settings) {
    if (this.verifyCredentials()) {
      // ...
    }
  }

  verifyCredentials() {
    // ...
  }
}

//Good

class UserAuth {
  constructor(user) {
    this.user = user;
  }

  verifyCredentials() {
    // ...
  }
}
```


### Open / Closed Principle (OCP)
//

### Liskov Substitution Principle (LSP)
//

### Interface Segregation Principle (ISP)
//

### Dependency Inversion Principle (DIP)
//
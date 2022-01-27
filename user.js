class User {
    static staticMethod() {
        alert(this === User);
      }
    
    sayHi() {
      let fieldName = "name";
      alert(`Hello, ${this[fieldName]}`);
    }
  }
  User.staticMethod = function() {
    alert(this === User);
  };
  
  User.staticMethod(); // true

  
  
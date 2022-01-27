class MegaCoffeeMachine extends CoffeeMachine {
    method() {
      alert( this.#waterAmount ); // Errore: è possibile accedervi solamente da CoffeeMachine
    }
  }
  
  
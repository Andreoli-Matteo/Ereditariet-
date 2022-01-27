class CoffeeMachine {
    #waterAmount = 0;
    #waterLimit = 200;

    #fixwaterAmount(value){
        if (value < 0) return 0;  
        if (value > this.#waterLimit) return this.#waterLimit;    
    }
    
    get waterAmount(){
        return this.#waterAmount;
    }

    set waterAmount(value) {
        if (value < 0) value = 0;
        this.#waterLimit = this.#fixwaterAmount(value);
      }
   
    constructor(power) {
        this._power = power;
 
    }
    get power(){
        return this._power;
    }
}
let coffeemachine = new CoffeeMachine();

machine.waterAmount = 100;

alert(`Power is: ${coffeeMachine.power}W`);

coffeemachine.power = 25;

coffeemachine.#fixwaterAmount(123);
coffeemachine.#waterLimit = 1000;

new CoffeeMachine().setWaterAmount(100);
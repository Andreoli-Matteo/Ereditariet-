class Rabbit extends Animal {
    constructor(name, earLength) {
        this.speed = 0;
        this.name = name;
        this.earLength = earLength;
      }
    
    hide() {
      alert(`${this.name} hides!`);
    }
    stop() {
        super.stop(); // richiama il metodo stop() dal padre
        this.hide(); // and then hide
      }
    }
    
  
  
  
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.hide(); // White Rabbit hides!
  
  
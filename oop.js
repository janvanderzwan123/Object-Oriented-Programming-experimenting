class Car {
    constructor(wheel_size, speed, color, hp, by, model) {
        this.wheel_size = wheel_size;
        this.speed = speed;
        this.color = color;
        this.hp = hp;
        this.by = by;
        this.model = model;
    }

    drive() {
        console.log(`You are driving the ${this.color} ${this.model} at ${this.speed} kmph`);
    }

    brake() {
        console.log(`You are braking the ${this.color} ${this.model} at ${this.speed} kmph`);
    }

    turn() {
        console.log(`You are turning the ${this.color} ${this.model} at ${this.speed} kmph`);
    }
}

class Ferrari extends Car {
    constructor(wheel_size, speed, color, hp, by, model, v8_serial_number) {
        super(wheel_size, speed, color, hp, by, model);
        this.v8_serial_number = v8_serial_number;
    }
}

class Toyota extends Car {
    constructor(wheel_size, speed, color, hp, by, model, i4_serial_number) {
        super(wheel_size, speed, color, hp, by, model);
        this.i4_serial_number = i4_serial_number;
    }
}

class Audi extends Car {
    constructor(wheel_size, speed, color, hp, by, model, i6_serial_number) {
        super(wheel_size, speed, color, hp, by, model);
        this.i6_serial_number = i6_serial_number;
    }
}

let Audi1 = new Audi(20, 120, 'white', 200, 'Audi', 'R8', 2345676543);
let Toyota1 = new Toyota(18, 110, 'blue', 180, 'Toyota', 'Corolla', 1234567890);
let Ferrari1 = new Ferrari(19, 150, 'red', 250, 'Ferrari', '458 Italia', 'F458123');

Audi1.drive();
Toyota1.drive();
Ferrari1.drive();

Audi1.brake();
Toyota1.brake();
Ferrari1.brake();

Audi1.turn();
Toyota1.turn();
Ferrari1.turn();


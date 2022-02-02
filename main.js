class Transport {
    constructor (name, year, maxSpeed){
        this.name = name;
        this.year = year;
        this.maxSpeed = maxSpeed;

    }
    startEngine (message){
        console.log(message);
    }
}
class Car extends Transport {
    constructor(name, year, maxSpeed){
        super(name, year, maxSpeed);
    }


}
class Airplane extends Transport {
    constructor(name, year, maxSpeed){
        super(name, year, maxSpeed);
    }
    peculiarity (what){
        console.log(what);
    }
}
mersedes = new Car ("Mersedes-Benz w210", 2001, 280);
console.log("Name:" + mersedes.name + "   Year: " + mersedes.year + "   MaxSpeed:" + mersedes.maxSpeed);
mersedes.startEngine("Двигатель запускается с помощью ключа, топлива - бензин");

shturmovik = new Airplane ("СУ-25", 1978, 970);
console.log("Name:" + shturmovik.name + "   Year:" + shturmovik.year + "   MaxSpeed:" + shturmovik.maxSpeed);
shturmovik.startEngine("RWin-Home -> с помощью этой кнопки");
shturmovik.peculiarity("Самый быстрый, военный самолет, штурмовик...")

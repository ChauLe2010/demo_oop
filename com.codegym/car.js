function Car(name,model,weight,color) {
    this.name=name;
    this.model=model;
    this.weight=weight;
    this.color=color;
    this.start=function () {
        document.write("Bat dau di");
    }
    this.stop=function () {
        document.write("Dung xe");
    }
    this.toString=function(){
        return this.name+"-"+this.model+"-"+this.weight+"-"+this.color+"<br>";
    }
}
function Main(){
    this.main=function(){
        let bmw=new Car("BMW","S200",900,"Black");
        let audi=new Car("Audi","A200",900,"White");
        document.write(bmw);
        document.write(audi.toString());
        // document.write("Name: "+bmw.name);
        // document.write("<br>Model: "+bmw.model);
        // document.write("<br>Weight: "+bmw.weight);
        audi.start();
        audi.stop();

        // let arrCar=new Array();
        // arrCar.push(bmw);
        // arrCar.push(audi);
        // document.write("<br> Ten xe: "+arrCar[0].name);
    }
}
let test=new Main();
test.main();


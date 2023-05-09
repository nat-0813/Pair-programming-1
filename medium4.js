const car = {
    make: "Toyota",
    model: "camry",
    year: 2017,
    mileage: 1500,
    color: "red",
    driveToWork: function(){
        oldMileage = this.mileage
        this.mileage += 33;
        console.log(`Output: old mileage: ${oldMileage} | new mileagea: ${this.mileage}
        `)
    },
    driveAroundTheWorld: function(){
        oldMileage = this.mileage

        this.mileage += 24000;
        console.log(`Output: old mileage: ${oldMileage} | new mileagea: ${this.mileage}
        `)
    },
    runErrands: function(x){
        oldMileage = this.mileage

        this.mileage += 30;
        console.log(`Output: old mileage: ${oldMileage} | new mileagea: ${this.mileage}
        `)
    },
    

}


car.driveToWork()
car.driveAroundTheWorld()
car.runErrands()

class car{
    constructor (name, model, year, color){
        this.name=name;
        this.model=model;
        this.year=year;
        this.color=color;
    }

}

let specs = new car("BMW","720d","2025","Black");
console.log(specs.name, specs.model, specs.year, specs.color);
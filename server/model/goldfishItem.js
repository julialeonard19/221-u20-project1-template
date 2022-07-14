function goldfish(color, size , snack, flavor){
    this.color = color;
    this.size = size;
    this.snack = snack;
    this.flavor = flavor;
    
}

exports.creategoldfish = function(color, size, snack, flavor) {
    return new goldfish(color, size, snack, flavor);
};

console.log("model running");


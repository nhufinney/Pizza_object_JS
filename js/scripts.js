//Pizza has 3 types: small, medium, large === size 1, 2, 3
//Pizza cost has 2 prices: cheese ($5) and pepperoni($7)
var Pizza = {

    pizza_size: 0,
    pizza_cost:0,
    pizza_price:0,

    size: function(input_size){
        this.pizza_size = input_size;
    },

    cost: function(input_type){
        if (input_type===1){
            this.pizza_cost = 5;
        } else {this.pizza_cost = 7;}
    },

    price: function(){
        this.pizza_price = this.pizza_size * this.pizza_cost;
    }
};

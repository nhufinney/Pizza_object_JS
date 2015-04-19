//Create Pizza prototype
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

//Create an customer object initial from Pizza prototype
var customer = Object.create(Pizza);

//JS code to run the page
$(document).ready(function() {
 $("form#pizza").submit(function(event) {
    event.preventDefault();

    var input_size = parseInt($("select#size").val());
    var input_type = parseInt($("select#type").val());

    customer.size(input_size);
    customer.cost(input_type);
    customer.price();

    $(".show_cost").text("Your price: $"+customer.pizza_price);
 });
});

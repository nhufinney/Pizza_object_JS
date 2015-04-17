var Pizza = {

    pizza_size: 0,
    pizza_type: 0,
    pizza_price:0,

    size: function(input_size){
        this.pizza_size = input_size;
    },

    type: function(input_type){
        if (input_type===1){
            this.pizza_type = 1;
        } else {this.pizza_type = 1.2;}
    },

    pizza_price: function(){
        this.pizza_price = this.pizza_size * this.pizza_type;
    }
};

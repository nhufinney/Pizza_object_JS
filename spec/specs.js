describe('Pizza', function(){
    describe("size", function(){
        it ("set the size of pizza into the property pizza_size", function(){
            var testPizza = Object.create(Pizza);
            testPizza.size(3);
            expect(testPizza.pizza_size).to.equal(3);
        });
    });

    describe("cost", function(){
        it ("set the cost of pizza into the property pizza_cost", function(){
            var testPizza = Object.create(Pizza);
            testPizza.cost(2);
            expect(testPizza.pizza_cost).to.equal(7);
        });
    });

    describe("price", function(){
        it ("calculate the price of pizza", function(){
            var testPizza = Object.create(Pizza);
            testPizza.size(3);
            testPizza.cost(1);
            testPizza.price();
            expect(testPizza.pizza_price).to.equal(15);
        });
    });

});

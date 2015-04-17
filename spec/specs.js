describe('Pizza', function(){
    describe("size", function(){
        it ("set the size of pizza into the property pizza_size", function(){
            var testPizza = Object.create(Pizza);
            testPizza.size(3);
            expect(testPizza.pizza_size).to.equal(3);
        });
    });

    describe("type", function(){
        it ("set the type of pizza into the property pizza_type", function(){
            var testPizza = Object.create(Pizza);
            testPizza.type(2);
            expect(testPizza.pizza_type).to.equal(1.2);
        });
    });



});

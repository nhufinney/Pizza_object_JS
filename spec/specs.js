describe('Pizza', function(){
    describe("size", function(){
        it ("set the size of pizza into the property pizza_size", function(){
            var testPizza = Object.create(Pizza);
            testPizza.size(3);
            expect(testPizza.pizza_size).to.equal(3);
        });
    });
});

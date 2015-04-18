//PROTOTYPE OBJECT
var Player = {

    init: function() {
        this.hand= [];
    },

    total:0,

    // count: function(){
    //     var counting =0;
    //
    //     this.hand.forEach(function(card){
    //         var card_letter = card.slice(0,2);
    //
    //         if (card_letter === "Q " || card_letter === "J " || card_letter === "K ")
    //         {
    //             counting=counting+10;
    //         } else {
    //             counting = counting+parseInt(card_letter);
    //         }
    //
    //     });
    //     this.total=counting;
    //     debugger;
    // }

    var card_letters=[];
    this.hand.forEach(function(card){
        var card_letter = card.slice(0,2);
        care_letters.push(card_letter);
    });
    var special_letter=[];
    card_letters.forEach(function(card_letter){
        if ((card_letters.length===2) && (card_letter=== "A ")){
            card_letter= "11";
        }
        if (card_letter === "Q " || card_letter === "J " || card_letter === "K "){
            card_letter="10";
        }
        //delete in array card_letters; push the 'card_letter' into a
        //special array to treat it inside a count function.
        if ((card_letters.length>=3) && (card_letter=== "A ")){
            card_letters;
        }
    }






    count: function(){
        var counting =0;

        this.hand.forEach(function(card){
            var card_letter = card.slice(0,2);

            if (card_letter === "Q " || card_letter === "J " || card_letter === "K ")
            {
                counting=counting+10;
            } else {
                counting = counting+parseInt(card_letter);
            }

        });
        this.total=counting;
        debugger;
    }
};


var BlackJack = {

    //function deal
    cards: ["", "A spade", "2 spade","3 spade","4 spade","5 spade","6 spade", "7 spade","8 spade","9 spade", "10 spade","J spade","Q spade", "K spade", "A club", "2 club","3 club","4 club","5 club","6 club","7 club","8 club", "9 club","10 club","J club", "Q club","K club", "A heart", "2 heart", "3 heart", "4 heart", "5 heart", "6 heart", "7 heart", "8 heart", "9 heart", "10 heart", "J heart", "Q heart", "K heart", "A diamond", "2 diamond", "3 diamond", "4 diamond", "5 diamond", "6 diamond","7 diamond", "8 diamond", "9 diamond", "10 diamond", "J diamond", "Q diamond","K diamond"],

    card1:"",
    card2:"",
    card3:"",
    card4:"",
    card5:"",
    card6:"",
    card7:"",
    card8:"",
    card9:"",
    card10:"",

    deal: function(){
        var random1= Math.floor(Math.random()*51+1);
        var first_card= this.cards[random1];
        this.cards.splice(random1,1);
        this.card1 = first_card;

        var random2=Math.floor(Math.random()*50+1);
        var second_card = this.cards[random2];
        this.cards.splice(random2,1);
        this.card2 = second_card;

        var random3=Math.floor(Math.random()*49+1);
        var third_card = this.cards[random3];
        this.cards.splice(random3,1);
        this.card3 = third_card;

        var random4=Math.floor(Math.random()*48+1);
        var fourth_card = this.cards[random4];
        this.cards.splice(random4,1);
        this.card4 = fourth_card;

    },

    hit1: function(){
        var random5 = Math.floor(Math.random()*47+1);
        var fifth_card = this.cards[random5];
        this.cards.splice(random5,1);
        this.card5=fifth_card;
    },

    hit2: function(){
        var random6 = Math.floor(Math.random()*46+1);
        var sixth_card = this.cards[random6];
        this.cards.splice(random6,1);
        this.card6=sixth_card;
    },

    hit3: function(){
        var random7 = Math.floor(Math.random()*45+1);
        var seventh_card = this.cards[random7];
        this.cards.splice(random7,1);
        this.card7=seventh_card;
    },

    hit4: function(){
        var random8 = Math.floor(Math.random()*44+1);
        var eighth_card = this.cards[random8];
        this.cards.splice(random8,1);
        this.card8=eighth_card;
    },

    hit5: function(){
        var random9 = Math.floor(Math.random()*43+1);
        var nineth_card = this.cards[random9];
        this.cards.splice(random9,1);
        this.card9=nineth_card;
    },

    hit6: function(){
        var random10 = Math.floor(Math.random()*42+1);
        var tenth_card = this.cards[random10];
        this.cards.splice(random10,1);
        this.card10=tenth_card;
    }

};

var playing = Object.create(BlackJack);
var player1 = Object.create(Player);
var player2 = Object.create(Player);

$(document).ready(function() {
    $("#new-game").click(function() {

        playing.deal();

        player1.init();

        player2.init();

        player1.hand.push(playing.card1, playing.card3);
        player2.hand.push(playing.card2, playing.card4);

        $("#hum1").text("Your cards: "+ playing.card1+"    &   "+playing.card3);
        $("#comp1").text("Computer cards: "+ playing.card2);


    $("#hit1").click(function() {

        playing.hit1();
        player1.hand.push(playing.card5);
        $("#hum1").text("Your cards: "+ playing.card1+"    &   "+playing.card3+"    &   "+playing.card5 );
        $("#comp1").text("Computer cards: "+ playing.card2);
        $("#hit1").hide();
        $("#hit2").show();
    });

    $("#hit2").click(function() {

        playing.hit2();
        player1.hand.push(playing.card6);
        $("#hum1").text("Your cards: "+ playing.card1+"    &   "+playing.card3+"    &   "+playing.card5+"    &   "+playing.card6);
        $("#comp1").text("Computer cards: "+ playing.card2);
        $("#hit2").hide();
        $("#hit3").show();

    });

    $("#hit3").click(function() {

        playing.hit3();
        player1.hand.push(playing.card7);
        $("#hum1").text("Your cards: "+ playing.card1+"    &   "+playing.card3+"    &   "+playing.card5+"    &   "+playing.card6+"    &   "+playing.card7);
        $("#comp1").text("Computer cards: "+ playing.card2);
        $("#hit3").hide();
        $("#hit4").show();

    });

    $("#done").click(function() {
        player1.count();
        $("#result").text("Your cards are: "+player1.total);

    });



    });
});

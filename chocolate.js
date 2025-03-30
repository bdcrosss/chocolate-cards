// script.js
$(document).ready(function() {
    const chocolates = [
        { name: "Plain Milk", image: "plain_milk.jpg", calories: 110, content: "smooth milk chocolate, ingredients: cocoa butter, milk, sugar" },
        { name: "Plain Dark", image: "plain_dark.jpg", calories: 100, content: "smooth dark chocolate, ingredients: cocoa butter, milk, sugar" },
        { name: "Plain Hybrid", image: "plain_hybrid.jpg", calories: 105, content: "smooth milk chocolate and dark chocolate side by side, ingredients: cocoa butter, milk, sugar" },
        { name: "Nut Butter Cup", image: "nutter_butter.jpg", calories: 130, content: "smooth milk chocolate, peanut butter filling, ingredients: cocoa butter, milk, sugar" },
        { name: "Bailey's Cup", image: "baileys_cup.jpg", calories: 90, content: "smooth milk chocolate with Bailey's Irish Cream filling, ingredients: cocoa butter, milk, sugar, Bailey's Cream filling" },
        { name: "Rum Barrel", image: "rum_barrel.jpg", calories: 110, content: "smooth dark chocolate with rum-coconut filling, ingredients: cocoa butter, milk, sugar, rum, coconut" },
        { name: "Orange Fondant", image: "orange_fondant.jpg", calories: 125, content: "dark chocolate with orange fondant filling, ingredients: cocoa butter, milk, sugar, orange cream, orange zest" },
        { name: "Cappuccino Cup", image: "cappuccino_cup.jpg", calories: 130, content: "dark chocolate with coffee cream filling, ingredients: cocoa butter, milk, sugar, coffee-vanilla cream, grated coffee beans" },
        { name: "Pistachio Diamond", image: "pistachio_diamond.jpg", calories: 140, content: "milk chocolate, almond butter filling, large pistachio, filling: cocoa butter, milk, sugar, nut butter, pistachio" },
        { name: "Toffee Crunch", image: "toffee_crunch.jpg", calories: 130, content: "dark chocolate, soft toffee filling, rock salt and peanut brittle, ingredients: cocoa butter, milk, sugar, toffee, salt, toffee brittle" }
    ];

    chocolates.forEach((chocolate, index) => {
        $('#container').append(`
            <div class="card" id="card-${index}">
                <img src="${chocolate.image}" alt="${chocolate.name}">
                <h3>${chocolate.name}</h3>
                <p class="info">${chocolate.calories} calories, ${chocolate.content}</p>
            </div>
        `);
    });

    $('.info').hide();

    $('#sample').click(function() {
        const randomIndex = Math.floor(Math.random() * chocolates.length);
        $(`#card-${randomIndex}`).css('background-color', 'yellow');
        const randomCode = Math.floor(Math.random() * 50) + 1;
        alert(`Your free sample code is: ${randomCode}`);
    });

    $('#calories').click(function() {
        $('.info').toggle();
    });
});

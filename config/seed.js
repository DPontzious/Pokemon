const db = require("../models");
const fs = require("fs");

// db.sequelize.query("SELECT * FROM pokemonfinder").then(data => fs.writeFile("data.json", JSON.stringify(data), function(err){
//     console.log(err);
// }));

fs.readFile("data.json", "utf-8", function (err, data) {
    const pokemon = JSON.parse(data);
    console.log(pokemon);
    // db.PokemonFinder.sync({force: true});
    pokemon[0].forEach(function (item) {
        db.PokemonFinder.create({ 
            "position": item.position, 
            "name": item.name, 
            "species": item.species,
            "height": item.height, 
            "weight": parseInt(item.weight), 
            "base_experience": item.base_expierence, 
            "numorder": item.numorder, 
            "isdault": item.isdault, 
            "image": item.image })
    })
})

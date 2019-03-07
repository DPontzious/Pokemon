module.export = function modal() {
    $('#questions-modal').modal('show')
    $("#done").on("click", function (event) {
        event.preventDefault();
        var userInput = {
            // name: $("#name").val().trim(),
            scores: [
                $("#q1").val().trim(),
                $("#q2").val().trim(),
                $("#q3").val().trim(),
                $("#q4").val().trim(),
                $("#q5").val().trim(),
                $("#q6").val().trim(),
                $("#q7").val().trim(),
                $("#q8").val().trim(),
                $("#q9").val().trim(),
                $("#q10").val().trim()
            ]
        };
        // TAkes just the scores off the userInput object
        score = userInput.scores
        // turns the strings into numbers.
        var mapScore = score.map(Number)
        const add = (a, b) => a + b
        var sumOfScores = mapScore.reduce(add)
        console.log(sumOfScores)
    })

    // for loop all the items 
    //if statement
    //find all where is_default === sumofScores 
    //math.random to pick one of the pokemon
    //and return object to the user
    

    // app.get("/api/pokemonlist", function (req, res) {
    //     var pokemonScore = 


    //     if (pokemonScore === sumOfScores) {

    //     }

    // $.ajax('/api/', userInput)
    //     .then(function (response) {
    //         console.log("scores", response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

    // $.post("/api/friends", match, function (data) {
    //     $.post("/api/friends", userData, function (data) {

    //         $("#match-name").text(data.name);
    //         $("#match-img").attr("src", data.photo);

    //         $("#results-modal").modal("toggle");
    //         console.log("posted");
    //         console.log(userData);

    //     });
    // })
    // $("#results").modal;
    // });
    // });
}

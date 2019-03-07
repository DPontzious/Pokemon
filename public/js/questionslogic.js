
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
});

// module.export = questionsModel;
$.post("/api/user_data", function (req, res) {
    // db.User.create({
    // scores: req.body
    console.log(req.body)
});

    // $.post("/api/friends", match, function (data) {
    //     $.post("/api/friends", userData, function (data) 



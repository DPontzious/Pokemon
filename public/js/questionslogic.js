

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
    
        score = userInput.scores
    // turns the strings into numbers.
    var mapScore = score.map(Number)
    const add = (a, b) => a + b
    var sumOfScores = mapScore.reduce(add)
    console.log(sumOfScores)

   
   
    // TAkes just the scores off the userInput object
    
});


// module.export = questionsModel;
    app.post("/api/userData", function (req, body) {


   
    });
   

    // $.ajax('/api/', userInput)
    // .then(function (response) {
    //     console.log("scores", response);
    // })
    // .catch(function (error) {
    //     console.log(error);
    
$('#questions-modal').modal('show')
$("#done").on("click", function (event) {
    event.preventDefault();
    var userInput = {

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

    var mapScore = score.map(Number)
    const add = (a, b) => a + b
    var sumOfScores = mapScore.reduce(add)
    console.log(sumOfScores)




    $.get("/api/pokemonfinder", function (data) {
        var array = [];
        for (let i = 0; i < data.length; i++) {
            const scoreNum = data[i].isdault;

            // console.log(scoreNum)
            if (sumOfScores === scoreNum) {
                var match = data[i].name
                array.push(match)

            }
        }
        var random = array[(Math.floor(Math.random() * 4) + 1)];
        console.log(random)
    }
    )
});
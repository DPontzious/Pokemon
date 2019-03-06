$(document).ready(function () {
    $("#done").on("click", function (event) {
        event.preventDefault();
        var userInput = {
            name: $("#name").val().trim(),
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
        // axios.post('/api/questions', userInput)
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

        $.post("/api/friends", match, function (data) {

            $("#match").text(data.name);
            $("#img").attr("src", data.photo);
            $(".img1").css('height', '200px');
            $(".img1").css('width', '200px');
        })
        $("#results").modal;
    });
})
$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("#emailSignup");
  var passwordInput = $("#passwordSignup");
  // When the signup button is clicked, we validate the email and password are not blank
  $("#signup").on("click", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    $.ajax("/api/signup", {
      type: "POST",
      data: userData
    }).then(function (resp, test) {
      location.replace("/status");
      console.log("here", resp)
      console.log("test", test)
      // if (resp.status === true) {
      //   $('#questions-modal').modal('show')
      // } else {
      //   $('#questions-modal').modal('hide')
      // }
    }

    );

  });

});
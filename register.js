$(document).ready(function () {
    $("#submit").click(function (event) {
        $.post("register.php",
        {
            name: $("#username").val(),
            email: $("#email").val(),
            password: $("#password").val(),
            phnumber: $("#phnumber").val()
        },
        function(data,status){
            $("#status").text(data);
            if(status=="success"){
                window.location.href="index.html";
            }
        });
      event.preventDefault();
    });
  });
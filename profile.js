$(document).ready(function(){
    console.log("in js");
        $.post("profile.php",
        {},
        function(data,status){
            // alert("Data: "+ data+"\n Status: "+status);
            // if(status=="success"){
            //     window.location.href="register.html";
            // }
            console.log(data);
            data=JSON.parse(data);
            console.log(data);
            $("#name").text(data.name);
            $("#password").text(data.password);
            $("#mailid").text(data._id);
            $("#phnumber").text(data.phnumber);
        });
        // e.preventDefault();
});
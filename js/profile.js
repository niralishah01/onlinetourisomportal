var name="bansari";
var user="bps12";
var email="bansari@gmail.com";
var phone="9876543210";
var city="Bharuch";
window.onload=function details(){
    document.getElementById("nm").innerHTML=name;
    document.getElementById("unm").innerHTML=user;
    document.getElementById("email").innerHTML=email;
    document.getElementById("phn").innerHTML=phone;
    document.getElementById("ct").innerHTML=city;
}

function retrieve()
{
    document.getElementById("name").value=name;
    document.getElementById("uname").value=user;
    document.getElementById("mail").value=email;
    document.getElementById("mobile").value=phone;
    document.getElementById("city").value=city;
}


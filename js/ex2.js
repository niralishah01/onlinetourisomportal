function details()
{

    var username=document.getElementById("usr").value;
    var password=document.getElementById("passwd").value;
    var repassword=document.getElementById("repasswd").value;
    console.log(username);
    if(username.length==8)
    {    
        if(password.length>=7&&password.length<=15)
        {
            if(password==repassword)
            {
                alert("registered successfully");
                location.replace("index.html");
            }
            else
            {
                alert("both password must be matched");
                document.getElementById("form1").disabled=true;
            }
        }
        else
        {
            alert("password length must be from 7 to 15 ");
        }
    }
    else
    {
        alert("username must be exactly 8 alphanumeric characters");
    }
}
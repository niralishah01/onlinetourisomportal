
function block(button)
{
    //alert("are you sure?");
    var row=button.parentNode.parentNode;
    var name=row.getElementsByTagName("td")[2].innerHTML;
    var username=row.getElementsByTagName("td")[1].innerHTML;
    if(confirm("are you sure you want to block "+name+" with username:"+username+" ???"))
    {
        var table=document.getElementById("tbl");
        table.deleteRow(row.rowIndex);
        localStorage.setItem("name",name);
        localStorage.setItem("username",username);
        location.replace("blockusers.html");
    }
}
function deletereview(button)
{
    var row=button.parentNode.parentNode;
    if(confirm("are you sure you want to delete this review ???"))
    {
        var table=document.getElementById("tbl");
        table.deleteRow(row.rowIndex);
    }
}

function addblockusers()
{
    var table=document.getElementById("users");
    var row=table.insertRow(-1);
    //add name of blocked user
    var cell=row.insertCell(-1);
    cell.innerHTML=localStorage.getItem("name");
    //add username of blocked user
    cell=row.insertCell(-1);
    cell.innerHTML=localStorage.getItem("username");

}
function request(button)
{
    var row=button.parentNode.parentNode;
    var name=row.getElementsByTagName("td")[1].innerHTML;
    var username=row.getElementsByTagName("td")[2].innerHTML;
    if(confirm("are you sure you want to accept request of travel agency??"))
    {
        var table=document.getElementById("tbl");
        table.deleteRow(row.rowIndex);
        localStorage.setItem("taname",name);
        localStorage.setItem("tauser",username);
        location.replace("acceptedrequests.html");
    }
    else
    {
        var table=document.getElementById("tbl");
        table.deleteRow(row.rowIndex);
        localStorage.setItem("tdname",name);
        localStorage.setItem("tduser",username);
        location.replace("declinedrequest.html");
    }
}

function accept()
{
    var table=document.getElementById("travels");
    var row=table.insertRow(-1);
    //add name of blocked user
    var cell=row.insertCell(-1);
    cell.innerHTML=localStorage.getItem("taname");
    //add username of blocked user
    cell=row.insertCell(-1);
    cell.innerHTML=localStorage.getItem("tauser");
}

function decline()
{
    var table=document.getElementById("travels");
    var row=table.insertRow(-1);
    //add name of blocked user
    var cell=row.insertCell(-1);
    cell.innerHTML=localStorage.getItem("tdname");
    //add username of blocked user
    cell=row.insertCell(-1);
    cell.innerHTML=localStorage.getItem("tduser");
}
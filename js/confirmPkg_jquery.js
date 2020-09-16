
$('#book').on("click",function(){
    $('#book').hide();
})

/*display confirmation details*/
$('#submit').click(function(event){
    if(confirm("are you sure with filled details??"))
    {
        var fname=$('#fname').val();
        var lname=$('#lname').val();
        var user=$('#user').val();
        var email=$('#mail').val();
        var phone=$('#phn').val();
        var package=$('#pkgname').val();
        var people=$('#people').val();
        var price=(parseInt(people)*15000).toString();
        var travel=$('input[name=travel]:checked','#form1').val();
        var date=$('#date option:selected').text();

        $('#form1').hide();

        var details=$("<i class='fa fa-user'></i> Name:  "+fname+" "+lname+"<br/><br/>"
        +"<i class='fas fa-user-circle'></i> Username:  "+user+"<br/><br/>"
        +"<i class='fa fa-envelope'></i> Email ID:  "+email+"<br/><br/>"
        +"<i class='fas fa-phone'></i> Contact no:  "+phone+"<br/><br/>"
        +"<i class='fas fa-city'></i> Package:  "+package+"<br/><br/>"
        +"<i class='fas fa-train'></i> Travelling Mode:  "+travel+"<br/><br/>"
        +"<i class='fas fa-calendar-day'></i> Preferable Date:  "+date+"<br/><br/>"
        +"<i class='fas fa-rupee-sign'></i>Amount to be paid: "+price+"<br/><br/>"
        );
        $('#booking').append(details);
        $('#details1').css('width','400px')
        $('#details1').fadeIn(2000);
    }
});

/*payment*/
$('#pay').click(function(event){
    $('#paymentdetails').fadeIn(2000);
    $('#netbanking').hide();
    $('#usingcard').hide();
})

$('#select').click(function(event){
    var pay=$('input[name=pay-option]:checked','#form2').val();
    if(pay=='Net Banking')
    {
        $('#netbanking').show();
    }
    else if(pay=='Debit/ATM Card')
    {
        $('#usingcard').show();
    }
    $('#select').hide();
})


$('#redirecttopay').on("click",function(){
    $('#paymentfooter').append('<p>Redirecting to payment gateway...</p>');
})
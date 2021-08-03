function compute(){
    var principal   = document.getElementById("principal").value;
    var rate        = document.getElementById("rate").value;
    var years       = document.getElementById("years").value;
    var interest    = principal * years * rate / 100;
    var year        = new Date().getFullYear()+parseInt(years);
	var total		= parseInt(interest);
	if (parseInt(principal) < 1) {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
	}else {
		document.getElementById("result").innerHTML = "<br>If you deposit <mark>"+principal+
    "</mark>, at an interest rate of <mark>"+rate+ "%</mark>.<br>"+
    "You will receive an amount of <mark>"+ total +"</mark> in the year <mark>"+year+"</mark>";
	}
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function ValidateAmount(){
	//Function that validates if the amount it's zero or less
	//alert (document.getElementById("principal"));
    if ((document.getElementById("principal").value)<1) {
        alert("Enter a positive number");
		document.getElementById("principal").value = 1;
        document.getElementById("principal").focus();
    }
}

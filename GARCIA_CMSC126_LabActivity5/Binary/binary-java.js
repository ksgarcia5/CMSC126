function maindisplay()
{
	var decimal = document.getElementById("decimal-input").value;

	if(decimal <= 0)
	{
		alert("Invalid Input. Please re-enter");
		document.getElementById("display-result").innerHTML = "";
		document.getElementById("display-result2").innerHTML = "";
	}
	else
	{
		displaydecimal(decimal);
		convertbinary(decimal);
	}
}

function displaydecimal(num)
{
	document.getElementById("display-result").innerHTML = "Decimal Value: " + num;
}

function convertbinary(num)
{
	var binary =[];
	var binary2 = [];
	var count = 1;
	var count2 = 1;
	var whole = parseInt(num);
	var deci = num - whole;

	for(var i = 0; whole != 0; i++)
	{
		var tempvalue = whole % 2;
		var whole = parseInt(whole / 2);
		binary.unshift(tempvalue);
		count++;
	}

	for(var i = 0; deci != 0 && i <= 15; i++)
	{
		var tempvalue2 = parseInt(deci * 2);
		var deci = (deci * 2) - tempvalue2;
		binary2.push(tempvalue2);
		count2++;
	}


	if(deci == 0)
	{
		document.getElementById("display-result2").innerHTML = "Binary Equivalent: " + binary.join('');
	}
	else
	{
		document.getElementById("display-result2").innerHTML = "Binary Equivalent: " + binary.join('') + "." + binary2.join('') + "...";
	}
}




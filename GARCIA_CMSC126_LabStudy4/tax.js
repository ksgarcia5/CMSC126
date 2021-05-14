//This is the main function, also this is where the process of displaying the result was done
function maindisplay()
{
	// Inputting necessary variables
	var income = document.getElementById("income").value;
	var dependents = document.getElementById("dependents").value;
	var grossincome = parseFloat(13 * income);

	//Declaring some variables, two variables which represents the value of ticking the checkbox was initialized to false
	var tax; var yes = false; var no = false;

	// If the user tick the checkbox, the pertained variable will be assigned with true as its variable
	if(document.getElementById("yes").checked)
	{
		yes = true;
	}

	if(document.getElementById("no").checked)
	{
		no = true;
	}

	//Assigning some variables to the returned value of specific function
  	var z = pensiondeduct(income, yes, no);
	var x = loandeduct(income);
	var y = dependentdeduct(dependents);
	var netincome = compute(x, y, z, grossincome);
	var tax = checktax(netincome);

	// Error trapping, will trigger if the user tick both checboxes, and the input is negative
	if(z == false || dependents < 0 || income < 0)
	{
		document.getElementById("display-result").innerHTML = "Tax to pay: Invalid Result!";
	}
	else
	{
		document.getElementById("display-result").innerHTML = "Tax to pay: P" + tax.toFixed(2);
	}

}



// This sub-function computes for the SSS or GSIS, depending on the user's choice
function pensiondeduct(income, x, y)
{
  	var govtdeduct;

	// Govt or Non-govt deduction
	if(x == true && y == false)
	{
		govtdeduct = parseFloat(12 * 0.09 * income);
	}
	else if(x == false && y == true)
	{
		govtdeduct = parseFloat(12 * 0.11 * income);
	}
	else // If the user tick both checkboxes, this wll be the value
	{
		govtdeduct = false;
	}

	return govtdeduct;
}




// This sub function computes for the deduction based on the number of dependents
function dependentdeduct(dependent)
{
  	var dependentdeducts;

	//Dependent Deduction, the max value is 200,000
	if(dependent >= 1 && dependent <= 4)
	{
		dependentdeducts = parseFloat(dependent * 50000);
	}
	else if(dependent > 4)
	{
		dependentdeducts = 200000;
	}
	else
	{
		dependentdeducts = 0;
	}

	return dependentdeducts;
}




// This sub-function computes for the pag-ibig and philhealth deduction annually
function loandeduct(incoming)
{
	//Annual Pag-ibig Deduction
	var pagibig = parseFloat(12 * incoming * 0.01375);

	//Annual Philhealth Deduction
	var philhealth = parseFloat(12 * incoming * 0.035);

	// Sum of Philhealth and Pag-ibig
	var total = pagibig + philhealth;

	return total;
}




// This sub-function computes for the taxable income or net income of the user after deducting necessary deductions
function compute(x, y, z, grossincome)
{
	//Total deduction
	var totaldeduct = parseFloat(50000 + x + y + z);

	//Net income
	var netincomes = parseFloat(grossincome - totaldeduct);

	return netincomes;
}






// This sub-function check the tax to be paid, based on the taxable/net income
function checktax(netincome)
{
	var tax;

	//Solving for the value of tax, this was based on the study guide
	if(netincome >= 1 && netincome <= 250000)
	{
		tax = 0;
	}
	else if(netincome >= 250001 && netincome <= 400000)
	{
		tax = parseFloat(0.2 * (netincome - 250000));
	}
	else if(netincome >= 400001 && netincome <= 800000)
	{
		tax = parseFloat(0.25 * (netincome - 400000)) + 30000;
	}
	else if(netincome >= 800001 && netincome <= 2000000)
	{
		tax = parseFloat(0.3 * (netincome - 800000)) + 130000;
	}
	else if(netincome >= 2000001 && netincome <= 8000000)
	{
		tax = parseFloat(0.32 * (netincome - 2000000)) + 490000;
	}
	else if(netincome > 8000000)
	{
		tax = parseFloat(0.35 * (netincome - 8000000)) + 2410000;
	}

	return tax;
}



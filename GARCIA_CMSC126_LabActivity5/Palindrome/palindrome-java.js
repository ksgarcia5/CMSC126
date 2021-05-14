function maindisplay()
{
	var palindrome = document.getElementById("palindrome-input").value;

	displaypalindromes(palindrome);
	checkpalindrome(palindrome);
}

function displaypalindromes(text)
{
	document.getElementById("display-result").innerHTML = "Original Text: " + text;
}

function checkpalindrome(text)
{
	text = text.toLowerCase();
	var string = [];
	var checkstring = [];
	var reverstring = [];

	var error = 0;

	string = text;
	string = string.split('');

	for(let i = 0; i < string.length; i++)
	{
		if(string[i] != ' ')
		{
			checkstring.push(string[i]);
			reverstring.unshift(string[i]);
		}
	}

	for(let i = 0; i < checkstring.length; i++)
	{
		if(checkstring[i] != reverstring[i])
		{
			error++;
		}
	}

	if(error == 0)
	{
		document.getElementById("display-result2").innerHTML = "Reversed Text: " + reverstring.join('') + " - This is a Palindrome";
	}
	else
	{
		document.getElementById("display-result2").innerHTML = "Reversed Text: " + reverstring.join('') + " - This is NOT a Palindrome";
	}

}




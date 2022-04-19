const letters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M", 
	"N", 
	"O", 
	"P",
	"Q",
	"R", 
	"S", 
	"T",
	"U",
	"V",
	"W",
	"X", 
	"Y", 
	"Z"
];

/**
 * Decodes ROT13 cipher
 * @param str Encoded ROT13 cipher.
 * @return str Decoded cipher.
 */
function rot13(str) {
	var decodedStr = "";
	
	
	for(var i=0; i<str.length; i++)
	{
		var key = getArrayKey(str[i]);
		
		// If it's a letter, decode
		if(key != -1)
		{
			decodedStr = decodedStr + getLetterBy13(str[i], key);
			
		}
		else
		{
			decodedStr = decodedStr + str[i];
		}
	}
	return decodedStr;
}

/**
 * Gets array key by first value coincidence
 * @param str Encoded ROT13 cipher.
 * @return int Array key.
 */
function getArrayKey(val)
{
	for(var i=0; i<letters.length; i++)
	{
		if(letters[i] == val)
			return i;
	}
	return -1;
}

/**
 * Gets letter by 13 places from provided 
 * letter in array
 * @param letter Letter to count from.
 * @param key Letter array key.
 * @return string Letter.
 */
function getLetterBy13(letter, key)
{
	if(key + 13 < letters.length)
	{
		return letters[key + 13];
	}
	else
	{
		return letters[key + 13 - letters.length];
	}
}

//console.log(rot13("SERR PBQR PNZC"));


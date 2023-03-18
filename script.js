// complete the given function

function palindrome(str){
	str = str.toLowerCase();
	str.replace(" ", "");
let i = 0;
	let j = str.length - 1;
	while(i < j){
		if(str[i] !== str[j]){
			return false;
		}
	}
	return true;
}
module.exports = palindrome

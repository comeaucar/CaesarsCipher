function rot13(str) {
  var arr = str.split('');
  var newStr = '';
  var finalStr = '';
  var finArr = [];

  /*if you add 13 to values over 78 they will become an unwanted symbol,
  instead you have to start back at 65 and add the difference
   */
  for(let i = 0; i < arr.length; i++){
    if(str.charCodeAt(i) > 64 && str.charCodeAt(i) < 78){
      newStr += str.charCodeAt(i) + 13 + ' ';
    }else if(str.charCodeAt(i) >= 78){
      newStr += 65 + str.charCodeAt(i) - 78 + ' ';
    }else{
      newStr += str.charCodeAt(i) + ' ';
    }
  }

  finArr = newStr.split(" ");

  for(let y = 0; y < finArr.length - 1; y++){
    var chars = String.fromCharCode(finArr[y]);
    finalStr += chars;
  }
  return finalStr;
}

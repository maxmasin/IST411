async function getBaconipsum() {
  var apiString = "https://baconipsum.com/api/";
  var theNewParagraphs = document.getElementById("newParagraphs").value;
  var newParas = document.getElementById("newFormat").value
  apiString = apiString + "?type=meat-and-filler&paras=" + theNewParagraphs;
  alert(apiString);

  var response = await fetch(apiString);

  document.getElementById("myRawData").innerHTML = "";
  document.getElementById("myFormattedData").innerHTML = "";

  var jsonData = await response.json();

  document.getElementById("myRawData").innerHTML = JSON.stringify(jsonData);

  for (var para in jsonData) {
    document.getElementById("myFormattedData").innerHTML += "<p>" + jsonData[para] + "<p>";

  }

  var newJSONData = [];
  var newCharacter;
  var newCode;
  
  for (var para in jsonData) {
     var newString = "";
    for (var chara in jsonData[para]) {
      newCharacter = jsonData[para][chara];
      newCode = newCharacter.charCodeAt(0);
        if((newCode >= 65)&&(newCode <= 90))
          newCharacter = String.fromCharCode(newCode + 1);
          
          else if ((newCode >= 110)&&(newCode <= 122))
          newCharacter = String.fromCharCode(newCode + 1);
        newString += newCharacter;

     
    }//for chara
  newJSONData.push(newString);
    
  }//for para

for (var para in newJSONData) {
    document.getElementById("myEncryptedData").innerHTML += "<p>" + newJSONData[para] + "<p>";

  }

  return true;

}
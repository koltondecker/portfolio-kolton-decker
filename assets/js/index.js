$(document).ready(function() {
    const titleNameDiv = document.getElementById("title-name");

    const titleNameText = "Kolton Decker";
    const titleNameArray = [];

    for (var i = 0; i < titleNameText.length; i++) {
        titleNameArray.push(titleNameText.charAt(i));
      }    
    // titleNameText.forEach(e => titleNameArray.push(e));
    console.log(titleNameArray);

    var count = 0;

    var typewriter = () => {
        setTimeout(() => {

            if(titleNameArray[count] === " ") {
                titleNameDiv.innerText += "\xa0";
            }
            else {
                titleNameDiv.innerText += titleNameArray[count];
            }
            count++;
            if(count < titleNameText.length) {
                typewriter();
            }
            else {
                clearTimeout();
            }
        }, 150);
    }
    
    typewriter();


});

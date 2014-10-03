/*global define */
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 100*/

document.addEventListener("DOMContentLoaded", init);

var finalHaiku;

function init() {

    createDivs();

    var generateHaikuButton = document.getElementById("haikuButton");
        generateHaikuButton.addEventListener("click", generateHaiku);
  
    var startAgainButton = document.getElementById("startOver");
        startAgainButton.addEventListener("click", createAnotherHaiku);
        
}

function createDivs() {
 
    var titleDiv = document.createElement("div");
    document.body.appendChild(titleDiv);
    
    var titleText = document.createElement("h1");
        titleText.innerHTML = "Custom Haiku Generator";
     titleText.setAttribute("ID", "title");
    titleDiv.appendChild(titleText);
    
    instructionDiv = document.createElement("div");
        instructionDiv.setAttribute("ID", "instructionDiv");
    document.body.appendChild(instructionDiv);
    
    var instructionOneText = document.createElement("h2");
        instructionOneText.innerHTML = "Enter a word and its syllable count (must be 5 syllables or less.";
        instructionOneText.setAttribute("ID", "instruction1");
    instructionDiv.appendChild(instructionOneText);

    var userWordTextField = document.createElement('textarea');
        userWordTextField.setAttribute("ID", "userWord");
        userWordTextField.setAttribute('cols', 80);
        userWordTextField.setAttribute('rows', 1);
    instructionDiv.appendChild(userWordTextField);
    
    var userWordSyllableField = document.createElement('input');
        userWordSyllableField.setAttribute("type", "number");
        userWordSyllableField.setAttribute("ID", "userSyllable");
    instructionDiv.appendChild(userWordSyllableField);
        
    var instructionTwoText = document.createElement("h2");
        instructionTwoText.innerHTML = "Click 'Generate Haiku' to make a custom haiku and enhance your serenity.";
        instructionTwoText.setAttribute("ID", "instruction2");
    instructionDiv.appendChild(instructionTwoText);

    var customHaikuButton = document.createElement("button");
        customHaikuButton.innerHTML = "Generate Haiku";
        customHaikuButton.setAttribute("ID", "haikuButton");
    instructionDiv.appendChild(customHaikuButton);

    var generatedHakiuRowsDiv = document.createElement("div");
        generatedHakiuRowsDiv.setAttribute("ID", "generatedHaikuDiv");
    document.body.appendChild(generatedHakiuRowsDiv);

    var startOverButton = document.createElement("button");
        startOverButton.innerHTML = "Click here to create another haiku";
        startOverButton.setAttribute("ID", "startOver");
    document.body.appendChild(customHaikuButton);

}

function generateHaiku() {

    var randomNumberOneSyl = (Math.floor(Math.random() * 100) % oneSyllable.length);
    var randomNumberTwoSyl = (Math.floor(Math.random() * 100) % twoSyllable.length);
    var randomNumberThreeSyl = (Math.floor(Math.random() * 100) % threeSyllable.length);
    var randomNumberFourSyl = (Math.floor(Math.random() * 100) % fourSyllable.length);
    var randomNumberFiveSyl = (Math.floor(Math.random() * 100) % fiveSyllable.length);
    var randomNumberSixSyl = (Math.floor(Math.random() *  100) % sixSyllable.length);
    
    var userWordSubmitted = document.getElementById("userWord").value;
            checkInputWithWarning(userWordSubmitted, "your word");
    var userSyllableSubmitted = document.getElementById("userSyllable").value;
            checkInputWithWarning(userSyllableSubmitted, "the syllable count");

    function checkInputWithWarning(fieldToCheck, warningString) {
        if (fieldToCheck == "") {
            alert("You forgot to enter " + warningString);
            return false;
        }
    }    

    function checkInputWithWarning(fieldToCheck, warningString) {
        if(fieldToCheck == "") {
            alert("You forgot to enter " + warningString);
            return false;
        }
    }

        instructionDiv.style.display = 'none';
        startOverButton.style.display  ='block';

    
    if (userSyllableSubmitted == 1) {
        finalHaikuString = userWordSubmitted + " " + fourSyllable[randomNumberFourSyl] + "<br>" + sixSyllable[randomNumberSixSyl] + " " + oneSyllable[randomNumberOneSyl] + "<br>" + fiveSyllable[randomNumberFiveSyl];
        
    } else if (userSyllableSubmitted == 2) {
        finalHaikuString = userWordSubmitted + " " + threeSyllable[randomNumberThreeSyl] + "<br>" + sixSyllable[randomNumberSixSyl] + " " + oneSyllable[randomNumberOneSyl] + "<br>" + fiveSyllable[randomNumberFiveSyl];
        
    } else if (userSyllableSubmitted == 3) {
        finalHaikuString = userWordSubmitted + " " + twoSyllable[randomNumberTwoSyl] + "<br>" + sixSyllable[randomNumberSixSyl] + " " + oneSyllable[randomNumberOneSyl] + "<br>" + fiveSyllable[randomNumberFiveSyl];
        
    } else if (userSyllableSubmitted == 4) {
        finalHaikuString = userWordSubmitted + " " + oneSyllable[randomNumberOneSyl] + "<br>" + threeSyllable[randomNumberThreeSyl] + " " + fourSyllable[randomNumberFourSyl] + "<br>" + fiveSyllable[randomNumberFiveSyl];
        
    } else if (userSyllableSubmitted == 5) {
        finalHaikuString = userWordSubmitted + "<br>" + sixSyllable[randomNumberSixSyl] + " " + oneSyllable[randomNumberOneSyl] + "<br>" + fiveSyllable[randomNumberFiveSyl];
    }
 
    finalHaiku = document.getElementById("generatedHaikuDiv");
        finalHaiku.innerHTML = finalHaikuString;

}

function createAnotherHaiku() {
    finalHaiku = document.getElementById("generatedHaikuDiv");
    finalHaiku.innerHTML = "";
    instructionDiv.style.display = 'initial';
    startOverButton.style.display  ='none';
}
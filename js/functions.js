/*global define */
/*jshint evil: true, nomen: false, onevar: false, strict: true, boss: true, undef: true, maxlen: 100 */

document.addEventListener("DOMContentLoaded", init);

/* Declare some global variables */

var finalHaiku, startOverButton, titleDivStyle, finalHaikuString, instructionDiv;

/* Add eventListener to buttons */

function init() {

    createDivs();

    var generateHaikuButton = document.getElementById("haikuButton");
        generateHaikuButton.addEventListener("click", generateHaiku);
  
    var startAgainButton = document.getElementById("startOver");
        startAgainButton.addEventListener("click", createAnotherHaiku);
    
    var userWordTextarea = document.getElementById("userWord");
        userWordTextarea.addEventListener("keydown", stopEnterKey, false);
    
    var userSyllableInputArea = document.getElementById("userSyllable");
        userSyllableInputArea.addEventListener("keydown", stopEnterKey, false);
    
}

/* Function to create divs with their corresponding buttons and text/input areas */

function createDivs() {

/* Next two create title and title text */
    
    var titleDiv = document.createElement("div");
        titleDiv.setAttribute("ID", "title");
    document.body.appendChild(titleDiv);
    
    var titleText = document.createElement("h1");
        titleText.innerHTML = "Custom Haiku Generator";
    titleDiv.appendChild(titleText);

/* Next one creates a single div to hold instructions and buttons and input */
    
    instructionDiv = document.createElement("div");
        instructionDiv.setAttribute("ID", "instructionDivWithButtons");
    document.body.appendChild(instructionDiv);

/* Next one creates the first set of instruction text */
    
    var instructionOneText = document.createElement("h2");
        instructionOneText.innerHTML = "Enter a word and its syllable count (must be 5 syllables or less).";
    instructionDiv.appendChild(instructionOneText);

/* Next one creates the textarea for the user to input their chosen word */

    var userWordTextField = document.createElement('textarea');
        userWordTextField.setAttribute("ID", "userWord");
        userWordTextField.setAttribute('cols', 40);
        userWordTextField.setAttribute('rows', 1);
        userWordTextField.setAttribute("placeholder", "Word");
        userWordTextField.setAttribute("Name", "userWordEntered");
    instructionDiv.appendChild(userWordTextField);

/* Next one creates the input box for the user to input the number of syllables in their chosen word */
    
    var userWordSyllableField = document.createElement('input');
        userWordSyllableField.setAttribute("type", "number");
        userWordSyllableField.setAttribute("ID", "userSyllable");
        userWordSyllableField.setAttribute("placeholder", "Syllables");
        userWordSyllableField.setAttribute("Name", "userSyllsableEntered");
    instructionDiv.appendChild(userWordSyllableField);

/* Next one creates the second set of instruction text */
        
    var instructionTwoText = document.createElement("h2");
        instructionTwoText.innerHTML = "Click 'Generate Haiku' to make a custom haiku and enhance your serenity.";
    instructionDiv.appendChild(instructionTwoText);

/* Next one creates the button that will be clicked to create the haiku */

    var customHaikuButton = document.createElement("button");
        customHaikuButton.innerHTML = "Generate Haiku";
        customHaikuButton.setAttribute("ID", "haikuButton");
    instructionDiv.appendChild(customHaikuButton);

/* Next one creates the div that will hold the text of the generated haiku  */

    var generatedHakiuRowsDiv = document.createElement("div");
        generatedHakiuRowsDiv.setAttribute("ID", "generatedHaikuDiv");
    document.body.appendChild(generatedHakiuRowsDiv);

/* Next one creates the button that can be clicked to start the haiku process over again after the first haiku is created.  This button is invisible until the first haiku has been created */
    
    startOverButton = document.createElement("button");
        startOverButton.innerHTML = "Click here to create another haiku";
        startOverButton.setAttribute("ID", "startOver");
        startOverButton.style.display = 'none';
    document.body.appendChild(startOverButton);

}

/* Function that will validate input and, if true, generate haiku from user-submitted word and syllable, along with a selection from a pre-set list of words */

function generateHaiku() {

/* Next two lines added to ensure the generatedHaikuDiv is cleared out before anything new is added.  Doesn't clear out if user word and syllable are left blank though (after generated 1 haiku, that is). */

    finalHaiku = document.getElementById("generatedHaikuDiv");
        finalHaiku.innerHTML = '';
    
/*  First part gets the values of the word and syllable entered by the user and makes sure the word is a word and the syllable is greater than 1 and less than 5.  It's *supposed* to halt if the criteria is/are wrong, but doesn't.  Good times.  */
    
    var userWordSubmitted = document.getElementById("userWord").value;
        checkInputWordWithWarning(userWordSubmitted, "Please enter a word with 5 syllables or less.");
 
    function checkInputWordWithWarning(wordToCheck, warningString) {
        if (wordToCheck <= 0 || wordToCheck >= 0 || wordToCheck == "") {
            alert(warningString);
            return false;
        } else {
            return true;
        }
    }

    var userSyllableSubmitted = document.getElementById("userSyllable").value;
        checkInputSyllableWithWarning(userSyllableSubmitted, "Please enter the number of syllables (between 1 and 5) of the word you chose.");

    function checkInputSyllableWithWarning(syllableToCheck, warningString) {
        if (syllableToCheck <= 0 || syllableToCheck >= 6 || syllableToCheck == "") {
            alert(warningString);
            return false;
        } else {
            return true;
        }
    }

/*  Next part creates 6 variables that correspond to 6 different with with respective syllable count */

    var randomNumberOneSyl = (Math.floor(Math.random() * 100) % oneSyllable.length);
    var randomNumberTwoSyl = (Math.floor(Math.random() * 100) % twoSyllable.length);
    var randomNumberThreeSyl = (Math.floor(Math.random() * 100) % threeSyllable.length);
    var randomNumberFourSyl = (Math.floor(Math.random() * 100) % fourSyllable.length);
    var randomNumberFiveSyl = (Math.floor(Math.random() * 100) % fiveSyllable.length);
    var randomNumberSixSyl = (Math.floor(Math.random() *  100) % sixSyllable.length);

/* Next section contains the if...else determination based on the syllable count of the word the user entered.  Starts with 1 user-syllable entered and goes to 5(-user syllable entered).  The goal here was to make sure that no matter what syllable count the user entered, the automatically generated words (from above) would not repeat.  Brute-forced it, but I don't know how to do the way I would like to do it (or if it's even possible).  */

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

/* And finally the final haiku is spit out to the generatedHaikuDiv  */

//    finalHaiku = document.getElementById("generatedHaikuDiv");
        finalHaiku.innerHTML = finalHaikuString;

/*  Changing div style to thematically show that it's a "different" page.  Most importantly, this hides what was seen on the inital load and just shows the generated haiku (and title).*/

    titleDivStyle = document.getElementById("title");
    
    document.getElementById("instructionDivWithButtons").style.display = 'none';
    document.getElementById("startOver").style.display = 'block';
    titleDivStyle.style.fontFamily = "Courier New, Courier, monospace";
    titleDivStyle.style.fontSize = "2em";
}

/* Next function adds the function to go from an already created haiku, back to the "main" page to create another one.  Includes various style elements.  */

function createAnotherHaiku() {

    document.getElementById("instructionDivWithButtons").style.display = "initial";
    
    titleDivStyle.style.fontFamily = "Trebuchet MS, Helvetica, sans-serif";
    titleDivStyle.style.fontSize = "1.5em";
    titleDivStyle.style.textAlign = "left";

/* This next part is *supposed* to set the generatedHaikuDiv to blank, but doesnt't.  This effect (or lack thereof) can be seen if a haiku is generated, then another one (*with an error in it* (e.g. no syllable count)) is attempted. */

    finalHaiku = document.getElementById("generatedHaikuDiv");
        finalHaiku.innerHTML = '';

    document.getElementById("userWord").value = '';
    document.getElementById("userSyllable").value = '';
    document.getElementById("generatedHaikuDiv").value = '';

    document.getElementById("startOver").style.display = "none";
}

/* Fnction to disable enter key on userWord textarea and userSyllable input  */

function stopEnterKey(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
    }
}
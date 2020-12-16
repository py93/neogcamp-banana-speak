var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var divShow = document.querySelector("#div-Show");

btnTranslate.addEventListener("click", clickEventHandler)

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickEventHandler(){
    var inputText = txtInput.value;

    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        divShow.innerText = translatedText;
    })
    .catch(errorHandler)
};


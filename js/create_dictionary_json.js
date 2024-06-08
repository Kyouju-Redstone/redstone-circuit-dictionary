let jsonWordElement = document.getElementById("json-word");
let jsonKanaElement = document.getElementById("json-kana");
let jsonDescriptionElement = document.getElementById("json-description");

document.getElementById("input-word").addEventListener("input", (event) => {
    let word = event.currentTarget.value;
    jsonWordElement.innerHTML = word;
});

document.getElementById("input-kana").addEventListener("input", (event) => {
    let kana = event.currentTarget.value;
    jsonKanaElement.innerHTML = kana;
});

document.getElementById("input-description").addEventListener("input", (event) => {
    let description = event.currentTarget.value;
    jsonDescriptionElement.innerHTML = description.replaceAll("\n", "\\n");
});

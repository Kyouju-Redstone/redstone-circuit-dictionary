let json = {
    "word": "",
    "kana": "",
    "description": "",
    "categories": []
};

let categories = Object.freeze({
    "je": 0,
    "be": 1,
    "piston": 2,
    "logic": 3,
    "military": 4,
    "trap": 5,
    "other": 6
});

let inputWordElement = document.getElementById("input-word");
let inputKanaElement = document.getElementById("input-kana");
let inputDescriptionElement = document.getElementById("input-description");
let inputCheckJeElement = document.getElementById("input-check-je");
let inputCheckBeElement = document.getElementById("input-check-be");
let inputCheckPistonElement = document.getElementById("input-check-piston");
let inputCheckLogicElement = document.getElementById("input-check-logic");
let inputCheckMilitaryElement = document.getElementById("input-check-military");
let inputCheckTrapElement = document.getElementById("input-check-trap");
let inputCheckOtherElement = document.getElementById("input-check-other");
let inputVideo1 = document.getElementById("input-video-1");
let inputVideo2 = document.getElementById("input-video-2");
let codeElement = document.createElement("code");
let codeBlockElement = document.getElementById("generated-json");
codeBlockElement.append(codeElement);

setJsonToElement();

// 用語の自動生成
inputWordElement.addEventListener("input", (event) => {
    let word = event.currentTarget.value;
    json.word = word;
    setJsonToElement();
});

// かなの自動生成
inputKanaElement.addEventListener("input", (event) => {
    let kana = event.currentTarget.value;
    json.kana = kana;
    setJsonToElement();
});

// 説明の自動生成
inputDescriptionElement.addEventListener("input", (event) => {
    let description = event.currentTarget.value;
    json.description = description;
    setJsonToElement();
});

inputCheckJeElement.addEventListener("change", (event) => {
    let category = "je";
    let isChecked = event.currentTarget.checked;
    setCategoryJson(category, isChecked);
    setJsonToElement();
});

inputCheckBeElement.addEventListener("change", (event) => {
    let category = "be";
    let isChecked = event.currentTarget.checked;
    setCategoryJson(category, isChecked);
    setJsonToElement();
});

inputCheckPistonElement.addEventListener("change", (event) => {
    let category = "piston";
    let isChecked = event.currentTarget.checked;
    setCategoryJson(category, isChecked);
    setJsonToElement();
});

inputCheckLogicElement.addEventListener("change", (event) => {
    let category = "logic";
    let isChecked = event.currentTarget.checked;
    setCategoryJson(category, isChecked);
    setJsonToElement();
});

inputCheckMilitaryElement.addEventListener("change", (event) => {
    let category = "military";
    let isChecked = event.currentTarget.checked;
    setCategoryJson(category, isChecked);
    setJsonToElement();
});

inputCheckTrapElement.addEventListener("change", (event) => {
    let category = "trap";
    let isChecked = event.currentTarget.checked;
    setCategoryJson(category, isChecked);
    setJsonToElement();
});

inputCheckOtherElement.addEventListener("change", (event) => {
    let category = "other";
    let isChecked = event.currentTarget.checked;
    setCategoryJson(category, isChecked);
    setJsonToElement();
});

// YouTube URLの自動生成
inputVideo1.addEventListener("input", (event) => {
    let url1 = event.currentTarget.value;
    if (json.videos == null) {
        json.videos = [];
        let url2 = inputVideo2.value;
        if (url2.length > 0) {
            json.videos[1] = url2;
        } else {
            delete json.videos[1];
        }
    }

    if (url1.length > 0) {
        json.videos[0] = url1;
    } else {
        delete json.videos;
    }

    setJsonToElement();
});

// YouTube URLの自動生成
inputVideo2.addEventListener("input", (event) => {
    let url = event.currentTarget.value;
    if (json.videos != null && json.videos[0] != null) {
        if (url.length > 0) {
            json.videos[1] = url;
        } else {
            delete json.videos.pop();
        }
        setJsonToElement();
    }
});

function setJsonToElement() {
    codeElement.innerHTML = JSON.stringify(json, null, "\t");
}

function setCategoryJson(category, isChecked) {
    if (isChecked) {
        json.categories.push(category);
        json.categories.sort((a, b) => categories[a] - categories[b]);
    } else {
        json.categories = json.categories.filter((e) => e != category);
    }
}

function copyJsonToClipboard() {
    navigator.clipboard.writeText(codeElement.textContent);
    alert("コピーしました。");
}

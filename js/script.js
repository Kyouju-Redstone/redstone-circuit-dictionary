main();

async function main() {
    let json = await fetchJsonDictionary();

    // 並び替え
    json.dictionary.sort((a, b) => a.kana > b.kana ? 1 : -1);

    // 辞書型でdictionaryを作成
    let dictionary = {};
    for (let e of json.dictionary) {
        let initial = e.kana.charAt(0);
        if (!(initial in dictionary)) {
            dictionary[initial] = [];
        }
        dictionary[initial].push(e);
    }

    // Elementsの作成
    let wordsElement = document.getElementById("words");
    for (let initial in dictionary) {
        // 見出しをセット
        let initialElement = document.createElement("h3");
        initialElement.id = initial;
        initialElement.classList.add("initial", "mb-4");
        initialElement.innerHTML = initial.toUpperCase();
        
        // initialWordsを生成
        let initialWordsElement = document.createElement("div");
        initialWordsElement.classList.add("initial-words", "container", "mb-5");
        initialWordsElement.appendChild(initialElement);

        for (let e of dictionary[initial]) {
            // 単語をセット
            let wordElement = document.createElement("h4");
            wordElement.classList.add("word");
            wordElement.id = e.word.replace(" ", "-");
            wordElement.innerHTML = e.word;

            // 説明をセット
            let descriptionElement = document.createElement("p");
            descriptionElement.classList.add("description");
            descriptionElement.innerText = e.description;

            let wordItemElement = document.createElement("div");
            wordItemElement.classList.add("word-item", "container", "mb-4");
            wordItemElement.appendChild(wordElement);
            wordItemElement.appendChild(descriptionElement);
            
            // initialWordsに見出しを追加
            initialWordsElement.appendChild(wordItemElement);
        }

        wordsElement.appendChild(initialWordsElement);
    }
}

async function fetchJsonDictionary() {
    return new Promise((resolve, reject) => {
        const dictionaryPath = "./dictionary.json";

        // JSONファイルを読み込む
        fetch("./dictionary.json")
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

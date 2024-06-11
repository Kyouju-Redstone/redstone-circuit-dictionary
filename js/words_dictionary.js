// カテゴリー
let categoriesEnum = Object.freeze({
    "je": "Java Edition",
    "be": "Bedrock Edition",
    "piston": "ピストンドア",
    "logic": "論理回路",
    "military": "軍事",
    "trap": "トラップ",
    "other": "その他",

});

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
        initialElement.classList.add("initial");
        initialElement.innerHTML = initial.toUpperCase();

        // initialWordsを生成
        let initialWordsElement = document.createElement("div");
        initialWordsElement.classList.add("initial-words");
        initialWordsElement.appendChild(initialElement);

        // 連想配列の最後の要素を取得
        let lastElement = dictionary[initial].slice(-1)[0];

        for (let e of dictionary[initial]) {
            // 単語をセット
            let wordElement = document.createElement("h4");
            wordElement.classList.add("word");
            wordElement.id = e.word.replaceAll(" ", "-");
            wordElement.innerHTML = e.word;

            // カテゴリーをセット
            let categoriesElement = document.createElement("div");
            categoriesElement.classList.add("categories");
            for (let cateogry of e.categories) {
                let categoryElement = document.createElement("span");
                categoryElement.classList.add("category", "category-" + cateogry);
                categoryElement.innerHTML = categoriesEnum[cateogry];
                categoriesElement.appendChild(categoryElement);
            }

            // ColumnElement
            let wordTitleColumnElement = document.createElement("div");
            wordTitleColumnElement.classList.add("word-title-column");
            wordTitleColumnElement.appendChild(wordElement);
            wordTitleColumnElement.appendChild(categoriesElement);

            // アイコンをセット
            let iconElement = document.createElement("span");
            iconElement.classList.add("open-icon", "dli-plus");
            let iconWrapElement = document.createElement("div");
            iconWrapElement.classList.add("icon-wrap");
            iconWrapElement.appendChild(iconElement);

            // アコーディオンタイトル部分にセット
            let wordTitleElement = document.createElement("div");
            wordTitleElement.classList.add("word-title");
            wordTitleElement.appendChild(wordTitleColumnElement);
            wordTitleElement.appendChild(iconWrapElement);

            /****************************************************/

            // 説明をセット
            let descriptionElement = document.createElement("p");
            descriptionElement.classList.add("description");
            descriptionElement.innerText = e.description;

            // ビデオがある場合はセット
            let videosFrameElement = document.createElement("div");
            if (e.videos != null && e.videos.length > 0) {
                videosFrameElement.classList.add("video-frame");
                for (let i = 0; i < e.videos.length && i < 2; i++) {
                    let videoElement = document.createElement("iframe");
                    videoElement.classList.add("video");
                    videoElement.src = e.videos[i].replace("youtu.be", "www.youtube.com/embed");
                    videoElement.allow = "fullscreen";
                    videosFrameElement.appendChild(videoElement);
                }
            }

            // アコーディオンインナー部分にセット
            let wordInnerElement = document.createElement("div");
            wordInnerElement.classList.add("word-inner");
            wordInnerElement.appendChild(descriptionElement);
            if (videosFrameElement.children.length > 0) {
                wordInnerElement.appendChild(videosFrameElement);
            }

            // 単語 ＋ 説明の枠にセット
            let wordItemElement = document.createElement("div");
            wordItemElement.classList.add("word-item");
            wordItemElement.appendChild(wordTitleElement);
            wordItemElement.appendChild(wordInnerElement);

            let dividerElement = document.createElement("hr");

            // initialWordsに見出しを追加
            initialWordsElement.appendChild(wordItemElement);
            if (e != lastElement) {
                initialWordsElement.appendChild(dividerElement);
            }
        }

        wordsElement.appendChild(initialWordsElement);
    }

    enableAccordion();
}

async function fetchJsonDictionary() {
    return new Promise((resolve, reject) => {
        const dictionaryPath = "./json/dictionary.json";

        // JSONファイルを読み込む
        fetch(dictionaryPath)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

// アコーディオンの処理
function enableAccordion() {
    $(function() {
        $(".word-title").click(function() {
            $(this).next(".word-inner").slideToggle();

            // アイコンの変更
            let $iconWrap = $($(this).children(".icon-wrap")[0]);
            let $icon = $(($($iconWrap).children(".open-icon"))[0]);

            if ($icon.hasClass("dli-plus")) {
                $icon.removeClass("dli-plus").addClass("dli-minus");
            } else {
                $icon.removeClass("dli-minus").addClass("dli-plus");
            }
        });
    });
}

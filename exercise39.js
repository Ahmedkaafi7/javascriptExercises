const fromSelect = document.getElementById("fromLang");
const toSelect = document.getElementById("toLang");
const translateBtn = document.getElementById("translateBtn");
const inputText = document.getElementById("inputText");
const resultDiv = document.getElementById("result");



const languages = {
    "English": "en",
    "Somali": "so",
    "Arabic": "ar",
    "French": "fr",
    "Spanish": "es",
    "German": "de",
    "Chinese": "zh",
    "Hindi": "hi",
    "Italian": "it",
    "Japanese": "ja",
    "Korean": "ko",
    "Portuguese": "pt",
    "Russian": "ru",
    "Turkish": "tr",
    "Urdu": "ur"
};



function loadLanguages() {
    for (let lang in languages) {
        const optionFrom = new Option(lang, languages[lang]);
        const optionTo = new Option(lang, languages[lang]);

        fromSelect.add(optionFrom);
        toSelect.add(optionTo);
    }

    fromSelect.value = "en";
    toSelect.value = "so";
}

loadLanguages();



async function translateText() {

    const text = inputText.value.trim();
    const fromLang = fromSelect.value;
    const toLang = toSelect.value;

    if (!text) {
        alert("Please enter text!");
        return;
    }

    resultDiv.innerText = "Translating...";

    try {

        const response = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        resultDiv.innerText = data.responseData.translatedText;

    } catch (error) {

        console.error("Error:", error);
        resultDiv.innerText = "Translation failed. Please try again.";

    }
}



translateBtn.addEventListener("click", translateText);
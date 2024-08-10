const translations = {
  "malay": {
    "morning": "pagi"
  },
  "spanish": {
    "morning": "mañana"
  },
};

export function translate(language, inputText) {

  return translations[language][inputText];
}
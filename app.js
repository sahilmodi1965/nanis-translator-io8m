// Bengali to English dictionary
const dictionary = {
  'আমি': 'I',
  'তুমি': 'You',
  'সে': 'He/She',
  'আমরা': 'We',
  'তারা': 'They',
};

// Function to translate Bengali to English
function translateBengaliToEnglish(bengaliWord) {
  return dictionary[bengaliWord] || 'Translation not found';
}

// Function to speak English word out loud
function speakEnglishWord(englishWord) {
  const speechSynthesizer = new SpeechSynthesisUtterance(englishWord);
  speechSynthesizer.lang = 'en-US';
  speechSynthesizer.rate = 1;
  window.speechSynthesis.speak(speechSynthesizer);
}

// Event listener for translate button click
document.getElementById('translate-button').addEventListener('click', (e) => {
  e.preventDefault();
  const bengaliInput = document.getElementById('bengali-input');
  const englishTranslation = document.getElementById('english-translation');
  const bengaliWord = bengaliInput.value.trim();
  if (bengaliWord) {
    englishTranslation.textContent = translateBengaliToEnglish(bengaliWord);
  } else {
    englishTranslation.textContent = '';
  }
});

// Event listener for speak button click
 document.getElementById('speak-button').addEventListener('click', () => {
  const englishTranslation = document.getElementById('english-translation').textContent;
  speakEnglishWord(englishTranslation);
});
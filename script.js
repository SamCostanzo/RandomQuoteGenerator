//#1 Array of objects to hold data for quotes.
var quotes = [
{quote: "There is no greater education than one that is self-driven", source: "Neil deGrasse Tyson"},
{quote: "Don't only practice your art, but force your way into it's secrets, for it and knowledge can raise man to the divine.", source:"Ludwig van Beethoven"},
{quote: "I was obliged to be industrious. Whoever is equally industrious will succeed equally well.", source: "Johann Sebastian Bach"},
{quote: "Try not to become a person of success, but rather try to become a person of value.", source: "Albert Einstein"},
{quote: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.", source: "Charles Darwin"},
{quote: "Great minds discuss ideas, average minds discuss events, small minds discuss people.", source: "Eleanor Roosevelt"},
{quote: "There is no easy walk to freedom anywhere, and many of us will have to pass through the valley of the shadow of death again and again before we reach the mountaintop of our desires.", source: "Nelson Mandela"},
{quote: "Be ready. Work hard. Enjoy it.", source: "Chris Hadfield", citation: "An Astronaut's guide to Life on Earth", year: "2015"},
{quote: "Practice is controlled failure", source: "Will Smith"},
{quote: "Curiosity is the wick in the candle of learning.", source: "William Arthur Ward"},
{quote: "You can choose a ready guide in some celestial voice. If you choose not to decide you still have made a choice. You can choose from phantom fears and kindness that can kill. I will choose a path that's clear. I will choose free will.", source: "Rush", citation: "Permanent Waves", year: "1980"}
];

//#2 Function to select a random quote from the array and return it.
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  randomQuote = quotes[randomNumber];
  return randomQuote;
}

//#3 Function to print the selected quote.
function printQuote() {
  var selectedQuote = getRandomQuote();
  var html = "<p class = 'quote'>" + selectedQuote.quote + "</p>";
  html += "<p class = 'source'>" + selectedQuote.source;

  if (selectedQuote.citation !== undefined) {
    html += "<span class = 'citation'>" + selectedQuote.citation + "</span>";
  }
  if (selectedQuote.year !== undefined) {
    html += "<span class = 'year'>" + selectedQuote.year + "</span>";
  }
  // html += "<p class = 'tag'>" + selectedQuote.tag;
  html += "</p>";
  document.getElementById('quote-box').innerHTML = html;
}
printQuote()

//function to generate a random background color
function randomRGB() {
  var red = Math.floor(Math.random() * 256 );
  var green = Math.floor(Math.random() * 256 );
  var blue = Math.floor(Math.random() * 256 );
  var rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
  document.body.style.background = rgbColor;
}
randomRGB();

//Load a new quote when the button is pressed.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//Load a new background color when the button is pressed.
document.getElementById('loadQuote').addEventListener("click", randomRGB, false);
//Load a new quote every 10 seconds.
setInterval("window.location.reload()", 10000);

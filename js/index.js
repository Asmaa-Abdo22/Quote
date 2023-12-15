var quoteText;
var quoteAuthor;
var ran;
function getRandom() {
  quoteText = [
    "Be yourself; everyone else is already taken.",
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  ];
  quoteAuthor = [
    " ― Oscar Wilde",
    " ― Marilyn Monroe",
    " ― Albert Einstein",
    "― Bernard M. Baruch",
  ];

  Math.random() * 4;
  ran = Math.floor(Math.random() * 4);
  document.getElementById("spotText").innerHTML = quoteText[ran];
  document.getElementById("spotAuthor").innerHTML = quoteAuthor[ran];
}

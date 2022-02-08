/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Array of quotes including quotes, source, year, citation and tags
  const quotes = [
  
    { quote: "The greatest mistake you can make in life is to be continually fearing you will make one.", 
      source: "Elbert Hubbard" },
   
    { quote: "The only way to do great work is to love what you do.", 
      source: "Steve Jobs",
      year: 2005 },
   
    { quote: "Don't criticize what you can't understand.",
      source: "Bob Dylan",
      citation: "The Times They Are A-Changin'" },
   
    { quote: "There are no traffic jams along the extra mile.", 
     source: "Roger Staubach" },
   
    { quote: "Fall seven times and stand up eight.", 
     source: "Japanese Proverb" },
   
    { quote: "You miss 100% of the shots you don't take.", 
      source: "Wayne Gretzky",
      tags: "Sport, Inspirational" },
   
    { quote: "The secret of getting ahead is getting started.", 
      source: "Mark Twain" },
   
 ];
 // console.log(quotes);


 // setInterval method used to run printQuote fucntion every 10000 milliseconds 
 let refreshInterval = window.setInterval(printQuote, 10000);


// getRandomQuote funtion
function getRandomQuote () {
  let randomNumber = Math.floor(Math.random() * quotes.length); // Generates random number between 0 and the length of quotes array.
  return quotes[randomNumber] 
}
getRandomQuote();


// printQuote function
function printQuote () {
let randomQuoteObject = getRandomQuote(); // Calls getRandomQuote function.
let html = '' ; // Starts empty string. 
html += '<p class="quote">' + randomQuoteObject.quote + '</p>' ;
html += '<p class="source">' + randomQuoteObject.source ;

// Conditional statments.....

  if ("citation" in randomQuoteObject) { 
 html += "<span class='citation'> " + randomQuoteObject.citation + "</span>";
}
  if ("year" in randomQuoteObject) { 
  html += "<span class='year'> " + randomQuoteObject.year + "</span>";
 }
  if ("tags" in randomQuoteObject) { 
  html += "<span class='tags'> " + '- tags: ' + randomQuoteObject.tags + "</span>";
 }
html += '</p>' ;
document.getElementById('quote-box').innerHTML = html;
}
printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
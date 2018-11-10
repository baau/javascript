module.exports = Phrase;

//Adds Reverse to all String types
String.prototype.reverse = function(){
  return Array.from(this).reverse().join("");
}

// // Recerse a string
//
// function reverse(stringToReverse){
//
//   return Array.from(stringToReverse).reverse().join("");
// }

// Returns true for palindrome, false otherwise.
// function palindrome(string){
//   let processedContent = string.toLowerCase();
//   return processedContent === processedContent.reverse();
// }

// Defining the Phrase Object
function Phrase(content){
  this.content = content;

 // to provide only the alphabets in the string
 this.letters = function(){
    let regex = /[A-Za-z]/g;
    return (this.content.match(regex).join("") || []);
 }
  //returns processed content for palindrome checking
  this.processedContent = function (){
    return  this.letters().toLowerCase();
  }
  // checks for palindrome content
  this.palindrome = function (){

    return this.processedContent() === this.processedContent().reverse();
  };

  // // Makes the phrase LOUDER.
  // this.louder = function(){
  //   return this.content.toUpperCase();
  // };
}

// Defining Trenalated Phrase Object
// function TranslatedPhrase(content, translation){
//   this.content = content;
//   this.translation = translation;
//
//   //returns trnslation processed for palindrome testing
//   this.processedContent = function(){
//     return this.translation.toLowerCase();
//   }
// }
//
// TranslatedPhrase.prototype = new Phrase();

"use strict";

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

    var paragraphData = ["First Paragraph", "Second Paragraph", "Third Paragraph", "Forth Paragraph"];
    
    paragraphData[4] = "Fifth Paragraph";
    paragraphData[5] = "Sixth Paragraph";
    paragraphData.push("Seventh paragraph");
   /*
    // ugly way
    
    console.log("App Started..."); 
    console.log(paragraphData[0]); 
    console.log(paragraphData[5]); 
  */
  
  // a nicer version
 /* 
  var paragraphDataLength = paragraphData.length;
  for (var index = 0; index < paragraphDataLength; index++) {
      
       console.log(paragraphData[index]); 
      
  }
  */
  
   function showParagraph(paragraph) {
      
      console.log(paragraph);
  };
  
  paragraphData.forEach(showParagraph);
  
    //declared a named function way
        function replaceFirstParagraph() {
        console.log("inside replaceFirstParagraph function");
        var firstParagraph;

        firstParagraph = document.getElementById("firstParagraph");

        firstParagraph.innerHTML = "My New Paragraph Data";
    }
    
    
    /*
    // declare an anonymous function with named alias
    var replaceFirstParagraph = function() {
        console.log("inside replaceFirstParagraph anonymous function");
        var firstParagraph;

        firstParagraph = document.getElementById("firstParagraph");

        firstParagraph.innerHTML = "My New Paragraph Data";
    };
 */   
   
    // call the replaceFirstParagraph function
    replaceFirstParagraph();


})();

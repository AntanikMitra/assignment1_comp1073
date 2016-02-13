

/*Author: Antanik Mitra
  File: app.js
  Website: http://comp1073-assign1.azurewebsites.net/
*/

"use strict";
// setup your IIFE(Immediately Invoked Function Expression)
(function () {

    console.log("App starting");
    
    //decleared a named function way
    /*
     function replaceFirstParagraph() {
 
         console.log("inside replaceFirstParagraph Function");
 
         var firstParagraph;
 
         firstParagraph = document.getElementById("firstParagraph");
 
         firstParagraph.innerHTML = "This is a paragraph";
 
     }*/
    
    // declear an anonymous function with named alias
    var replaceFirstParagraph = function () {

        console.log("inside replaceFirstParagraph anonymous Function");

        var firstParagraph;

        firstParagraph = document.getElementById("firstParagraph");

        firstParagraph.innerHTML = "A passionate and hardworking person new to this field.Having some experience as IT tech help and in front-end designing.Did some freelancing work for non charitable organizations and firms.Antanik is capable of great creativity, functionality and productivity to this field.";


    };

    var replaceHead = function () {

        console.log("inside replaceHead anonymous Function");

        var secondHead;

        secondHead = document.getElementById("secondHead");

        secondHead.innerHTML = "Who am I?";


    };
    
    
    var replaceOne = function () {

        console.log("inside replaceOne anonymous Function");

        var headOne;

        headOne = document.getElementById("headOne");

        headOne.innerHTML = "Hamid Law Office";


    };
    
    
    var replaceTwo = function () {

        console.log("inside replaceTwo anonymous Function");

        var headTwo;

        headTwo = document.getElementById("headTwo");

        headTwo.innerHTML = "Assignment1";


    };
    
    
    var replaceThree = function () {

        console.log("inside replaceHead anonymous Function");

        var headThree;

        headThree = document.getElementById("headThree");

        headThree.innerHTML = "Assignment2";


    };

    // call replaceFirstParagraph
    replaceFirstParagraph();
    // call replaceHead
    replaceHead();
   replaceOne();
   replaceTwo(); 
   replaceThree();  
})();
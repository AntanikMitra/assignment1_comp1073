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

    // call replaceFirstParagraph
    replaceFirstParagraph();
    // call replaceHead
    replaceHead();     
})();
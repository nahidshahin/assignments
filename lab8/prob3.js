"use strict";

//IIFE
(function() {
     let promise = fetch('https://dummyjson.com/recipes');
     promise.then(response => response.json()) 
     .then(json => {
        console.log(json.recipes.map(r => r.name));
     }).catch(console.error)
  })();
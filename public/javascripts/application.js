"use strict";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const heroes = {};

function animateHero(){
  if (heroes.keys.size === 0){
    let heroTemplates = $$("#hero-templates > .hero");
    console.log(heroTemplates);
    heroTemplates.forEach(e => {
      console.log(e.querySelector('h1').innerText);
    });
  }
  console.log(heroTemplates);
}

document.addEventListener("readystatechange", (event) => {
  if (document.readyState === "interactive"){
    
  }
  else {
    animateHero();
  }

});
/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Eduuuu from the console! ");
};

let generateExcuse = () => {
  let pronoun = ["My", "A", "The", "That", "This", "A ginormous", "A F*cking"];
  let subject = [
    "racoon",
    "grandma",
    "babysitter",
    "crazy girlfriend",
    "lizzard",
    "hippo",
    "puppet"
  ];
  let action = [
    "kicked my",
    "bit my",
    "ate my",
    "stole my",
    "yelled at my",
    "threw my",
    "took my"
  ];
  let possesion = [
    "car",
    "homework",
    "toe",
    "nose",
    "ass",
    "little sister",
    "ex-girlfriend",
    "hobo"
  ];
  let where = [
    "on the street",
    "in front of the president",
    "in the Wild Wild West",
    "in a galaxy far far away",
    "in Jumanji",
    "in front of my house",
    "in Neverland",
    "in the driveway"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possesionIndex = Math.floor(Math.random() * possesion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  let pronounSelected = pronoun[pronounIndex];
  let subjectSelected = subject[subjectIndex];
  let actionSelected = action[actionIndex];
  let possesionSelected = possesion[possesionIndex];
  let whereSelected = where[whereIndex];

  return (
    pronounSelected +
    " " +
    subjectSelected +
    " " +
    actionSelected +
    " " +
    possesionSelected +
    " " +
    whereSelected +
    "."
  );
};

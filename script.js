console.log("Exercice 1");
// Créez une fonction qui prend en paramètre un tableau et qui affiche en console tous les éléments de
// ce tableau.

var testTAB = [54, 22, 93, 8, 48]; //sequence exercice 1

function display_All(displayArray) // fonction affichant le tableau en paramètre
{

  var i = 0; // variable intermédiaire de l'indice
  var elementCurrent; // variable intermédiaire de l'énumération
  while (i < displayArray.length) // condition de continuation
  {
    elementCurrent = displayArray[i]; // récupération de l'élément courant
    i = i + 1; // mise à jour
    console.log(elementCurrent); // affichage des éléments courant
  }
}

display_All(testTAB);

console.log("Exercice 2");
// Créez une fonction qui prend en paramètre un tableau et qui affiche en console les 10 premiers
// éléments de ce tableau.

var testTAB2 = [1, 2, 3, 4, 5, 6, 3, 5]; //sequence commune Exercice 2 à 13

function first_10(displayArray) {

  var i = 0;// variable intermédiaire de l'indice
  var elementCurrent;// variable intermédiaire de l'énumération
  while (i < 10) // condition de continuation
  {
    elementCurrent = displayArray[i];
    i = i + 1;
    if (elementCurrent == undefined) //test conditionnel
    {
      return;
    }
    console.log(elementCurrent);
  }
}

first_10(testTAB2);

console.log("Exercice 3");
// Créez une fonction qui prend en paramètre un tableau et qui affiche en console les 10 derniers
// éléments de ce tableau.

function last_10(displayArray) {

  var i = displayArray.length - 1; // variable intermédiaire de l'indice à sa valeur maximale
  var elementCurrent;// variable intermédiaire de l'énumération
  while (i > displayArray.length - 11) // condition de continuation
  {
    elementCurrent = displayArray[i];
    i = i - 1;
    if (elementCurrent == undefined) //test conditionnel
    {
      return;
    }
    console.log(elementCurrent);
  }
}

last_10(testTAB2);

console.log("Exercice 4");
// Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie une copie de ce
// tableau dans laquelle tout les nombres ont été augmentés de 1.

function plus_1(displayArray) {
  var testTAB4 = [];
  var i = 0;// variable intermédiaire de l'indice
  var elementCurrent;// variable intermédiaire de l'énumération
  while (i < displayArray.length) // condition de continuation
  {
    elementCurrent = displayArray[i];
    i = i + 1;
    testTAB4.push(elementCurrent + 1);
  }
  console.log(testTAB4);
}
plus_1(testTAB2);

console.log("Exercice 5");
// Créez une fonction qui prend en paramètre un tableau de nombres et qui, pour tous les éléments de
// ce tableau, affiche si cet élément est pair ou non.

function isEven(n) {
  return
}

function evenOrOdd(displayArray) {

  var i = 0;// variable intermédiaire de l'indice
  var elementCurrent;// variable intermédiaire de l'énumération
  while (i < displayArray.length) // condition de continuation
  {
    elementCurrent = displayArray[i];
    i = i + 1;
    if (i % 2 == 0) //test conditionnel
    {
      console.log(elementCurrent + " true");
    } else {
      console.log(elementCurrent + " false");
    }
  }
}

evenOrOdd(testTAB2);

console.log("Exercice 6");
// Créez une fonction qui prend en paramètre un tableau de nombres, et qui renvoie la somme des
// éléments de ce tableau.

function sumTab(displayArray) {
  var elementCurrent;
  var sum = 0;

  var i = 0;// variable intermédiaire de l'indice
  var elementCurrent;// variable intermédiaire de l'énumération
  while (i < displayArray.length) // condition de continuation
  {
    elementCurrent = displayArray[i];
    i = i + 1;

    sum += elementCurrent;
  }

  return sum;
}
console.log(sumTab(testTAB2));

console.log("Exercice 7");
// Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie le nombre
// d’éléments pairs de ce tableau.

function sumEven(displayArray) {
  var elementCurrent;// variable intermédiaire de l'énumération
  var evenNumbersCount = 0;
  var i = 0;// variable intermédiaire de l'indice
  while (i < displayArray.length) // condition de continuation
  {
    elementCurrent = displayArray[i];
    i = i + 1;

    if (!(elementCurrent % 2)) //test conditionnel
    {
      evenNumbersCount++;
    }
  }
  return evenNumbersCount;
}

console.log(sumEven(testTAB2))

console.log("Exercice 8");
// Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie la valeur maximum
// de ce tableau.

function higher(displayArray) {
  var elementCurrent;// variable intermédiaire de l'énumération
  var higherNumber;
  var i = 0;// variable intermédiaire de l'indice
  while (i < displayArray.length) // condition de continuation
  {
    elementCurrent = displayArray[i];
    i = i + 1;

    if (elementCurrent > higherNumber) //test conditionnel
    {
      higherNumber = elementCurrent;
    }
  }

  return higherNumber;
}

console.log('La valeur maximale est ' + higher(testTAB2));

console.log("Exercice 9");
// Créez une fonction qui prend en paramètre un tableau de nombres et qui affiche la valeur maximum
// et minimum de ce tableau.

function minMax(displayArray) {
  var elementCurrent;// variable intermédiaire de l'énumération
  var higherNumber;
  var lowerNumber;
  var i = 0;// variable intermédiaire de l'indice
  while (i < displayArray.length) // condition de continuation
  {
    elementCurrent = displayArray[i];
    i = i + 1;

    if (elementCurrent > higherNumber) //test conditionnel
    {
      higherNumber = elementCurrent;
    }
    if (elementCurrent < lowerNumber) //second test conditionnel
    {
      lowerNumber = elementCurrent;
    }
  }

  console.log('La valeur minimale est ' + lowerNumber + ' et la valeur maximale est ' + higherNumber);
}

minMax(testTAB2);

console.log("Exercice 10");
// Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie vrai si ce tableau
// est ordonné dans l’ordre croissant, faux si ce n’est pas le cas.

function growingNumber(displayArray) {
  var elementCurrent;// variable intermédiaire de l'énumération
  var previousElt = displayArray[0];
  var i = 0;// variable intermédiaire de l'indice
  while (i < displayArray.length) // condition de continuation
  {
    elementCurrent = displayArray[i];
    i = i + 1;

    if (elementCurrent < previousElt) //test conditionnel
    {
      console.log("faux");
      return;
    } else {
      previousElt = elementCurrent;
    }
  }

  console.log("vrai");
}

growingNumber(testTAB2);

console.log("Exercice 11");
// Créez une fonction qui prend en paramètre un tableau de nombres et qui retourne un autre tableau
// de nombres constitué des éléments du tableau passé en paramètre. Dans le tableau retourné, chaque
// élément n'a qu'une seule occurrence.

function cleanArray(displayArray) {
  var i = 0;// variable intermédiaire de l'indice
  var elementCurrent;// variable intermédiaire de l'énumération
  var arrayOut = [];

  while (i < displayArray.length) // condition de continuation
  {
    elementCurrent = displayArray[i]
    if (arrayOut.indexOf(elementCurrent) === -1) //test conditionnel
    {
      arrayOut.push(elementCurrent)
    }
    i++
  }
  return arrayOut;
}
console.log(cleanArray(testTAB2));

console.log("Exercice 12")
// Créez une fonction qui prend en paramètre un tableau de nombres et qui retourne un autre tableau
// de nombres constitué des éléments du tableau passé en paramètre. Dans le tableau retourné, l'ordre
// des éléments est inversé.

function reverse(displayArray) {
  var elementCurrent;// variable intermédiaire de l'énumération
  var secondArray = [];
  var i = displayArray.length - 1;// variable intermédiaire de l'indice à sa valeur maximale
  while (i >= 0) // condition de continuation
  {
    elementCurrent = displayArray[i];
    i = i - 1
    secondArray.push(elementCurrent);
  }

  return secondArray;
}
console.log(reverse(testTAB2));

console.log("Exercice 13")
// Créez une fonction qui prend en paramètres deux tableaux de nombres et qui retourne un tableau
// correspondant à la concaténation des deux tableaux d'entiers passés en paramètres.

var testTAB13 = [33, 47, 12, 1, 9, 15, 6, 10];//sequence secondaire pour l'Exercice 13

function add(displayArray1, displayArray2) {

  var elementCurrent;// variable intermédiaire de l'énumération
  var i = 0;// variable intermédiaire de l'indice

  while (i < displayArray1.length) // condition de continuation
  {
    elementCurrent = displayArray1[i];
    displayArray2.push(elementCurrent);
    i = i + 1;

  }
  return displayArray2;
}
console.log(add(testTAB2, testTAB13));

console.log("Exercice 14");
//Créez une fonction qui prend en paramètre un tableau de chaînes de caractères, qui copie dans un
//nouveau tableau tous les éléments du tableau passé en paramètre commençant par une voyelle.

var stringArray = ['France', 'Allemagne', 'Belgique', 'Espagne', 'Italie'];//sequence

function vowel(displayArray) {
  var elementCurrent;// variable intermédiaire de l'énumération
  var newArray = [];
  var i = 0;// variable intermédiaire de l'indice
  while (i < displayArray.length) // condition de continuation
  {
    elementCurrent = displayArray[i];
    i = i + 1
    if (elementCurrent[0].toUpperCase() == 'A' || elementCurrent[0].toUpperCase() == 'E' || elementCurrent[0].toUpperCase() == 'I' || elementCurrent[0].toUpperCase() == 'O' ||
      elementCurrent[0].toUpperCase() == 'U' || elementCurrent[0].toUpperCase() == 'Y') {
      newArray.push(elementCurrent);
    }//test conditionnel
  }

  return newArray;
}

console.log(vowel(stringArray));

console.log("Exercice 14.5");
//Créez une fonction qui prend en paramètre une chaîne de caractères, qui renvoie vrai si la chaîne est
//un palindrome, ou qui renvoie faux si ce n’est pas le cas.

function palindrome(string) {
  var elementCurrent;// variable intermédiaire de l'énumération
  var reversedString = '';
  var i = string.length - 1;// variable intermédiaire de l'indice à sa valeur maximale
  while (i >= 0) // condition de continuation
  {
    elementCurrent = string[i];
    i = -1;
    reversedString += elementCurrent;
  }

  if (string == reversedString) //test conditionnel
  {
    return true;
  } else {
    return false;
  }
}
console.log('radar');
console.log(palindrome('radar'));
console.log('test');
console.log(palindrome('test'));

console.log("Exercice 15");
//Créez une fonction qui prend en paramètre deux chaînes de caractères, qui renvoie vrai si la 1ère
//chaîne est un anagramme de la 2ème chaîne, ou qui renvoie faux si ce n’est pas le cas.

function anagram(string1, string2) {
  var elementCurrent1;// variable intermédiaire de l'énumération
  var elementCurrent2;// seconde variable intermédiaire de l'énumération
  var resultArray1 = string1.split('');
  var resultArray2 = string2.split('');
  var i = 0;
  var j = 0;

  while (i < resultArray1.length) // condition de continuation
  {
    elementCurrent1 = resultArray1[i];
    i += 1;

    while (j < resultArray2.length) // seconde condition de continuation
    {
      elementCurrent2 = resultArray2[j];
      j += 1;


      if (elementCurrent1 == elementCurrent2) //test conditionnel
      {
        resultArray1.splice(i - 1, 1);
        resultArray2.splice(j - 1, 1);
        i = 0;
        j = 0;
        break;
      }
    }
  }

  if (resultArray1.length == 0 && resultArray2.length == 0) //second test conditionnel
  {
    return true;
  } else {
    return false;
  }
}

console.log('crane', 'ecran');
console.log(anagram('crane', 'ecran'));
console.log('test', 'erreur');
console.log(anagram('test', 'erreur'));

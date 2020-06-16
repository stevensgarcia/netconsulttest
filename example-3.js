import {cleanConsole, createAll} from './data';
import {solution1} from './example-1.js';

const companies = createAll();

cleanConsole(3, companies);
console.log('---- EXAMPLE 3 --- ', 'Put here your function');

function solution3(companies) {
  try {
    const result = [
      checkCompanyNames(companies),
      checkUserName(filterUsersWithNames(companies)),
      checkUserLastName(filterUsersWithLastNames(companies)),
    ];
    console.log(result.every((isCapitalized) => isCapitalized));
    return result.every((isCapitalized) => isCapitalized);
  } catch (e) {
    console.log(e.name, e.message);
  }
};

function checkCompanyNames(comps) {
  const result = [];
  companies.forEach((company) => {
    result.push(startWithCapital(company.name));
  });
  return result;
};

function checkUserName(comps) {
  const result = [];
  comps.forEach((company) => {
    company.users.forEach((user) => {
      result.push(startWithCapital(user.firstName));
    });
  });
  return result;
};

function checkUserLastName(comps) {
  const result = [];
  comps.forEach((company) => {
    company.users.forEach((user) => {
      result.push(startWithCapital(user.lastName));
    });
  });
  return result;
};

function startWithCapital(value) {
  if (value.length > 0 && value !== '') {
    const isCapitalized = /^[A-Z]/.test(value);
    return isCapitalized;
  }
};

function filterUsersWithNames(comps) {
  comps.forEach((company) => {
    company.users = company.users.filter((user) => {
      return user.firstName !== '';
    });
  });
  return [...comps];
};

function filterUsersWithLastNames(comps) {
  comps.forEach((company) => {
    company.users = company.users.filter((user) => {
      return user.lastName !== '';
    });
  });
  return [...comps];
};

const comps = solution1(companies);
solution3(comps);

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et renvoyant
// un booléen validant que tous les noms des "company" et les attributs "firstName"
// et "lastName" des "users" sont en majuscules. Vous devez tester le fonctionnement
// de cette fonction en important la fonction créée pour "example-1.js".

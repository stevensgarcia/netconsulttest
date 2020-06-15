import {createAll, cleanConsole} from './data';
const companies = createAll();

cleanConsole(1, companies);
console.log('---- EXAMPLE 1 --- ', 'Put here your function');

function solution1(companies) {
  replaceUndefinedValues(companies);
  capitalizeStrings(companies);
  companies.sort(compareUsers);
  sortUsers(companies);
};

function replaceUndefinedValues(companies) {
  companies.forEach((company) => {
    company.users.forEach((user) => {
      for (const key of Object.keys(user)) {
        if (user[key] === undefined) {
          user[key] = '';
        }
      }
    });
  });
};

function capitalizeStrings(companies) {
  companies.forEach((company) => {
    company.name = capitalize(company.name);
    company.users.forEach((user) => {
      user.firstName = capitalize(user.firstName);
      user.lastName = capitalize(user.lastName);
    });
  });
};

function capitalize(value) {
  return (value !== '') ? value[0].toUpperCase() + value.slice(1) : value;
};

function compareUsers(a, b) {
  let comparison = 0;
  if (a.usersLength > b.usersLength) {
    comparison = 1;
  } else if (a.usersLength < b.usersLength) {
    comparison = -1;
  }
  return comparison * -1;
};

function sortUsers(companies) {
  companies.forEach((company) => {
    company.users.sort(compareUsersNames);
  });
};

function compareUsersNames(a, b) {
  let comparison = 0;
  if (a.firstName > b.firstNameb) {
    comparison = 1;
  } else if (a.firstName < b.firstName) {
    comparison = -1;
  }
  return comparison;
};

solution1(companies);

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "company" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque "user".
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque "company" doivent être classés par ordre alphabétique.

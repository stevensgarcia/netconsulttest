import {cleanConsole, createAll} from './data';
const companies = createAll();

cleanConsole(4, companies);
console.log('---- EXAMPLE 4 --- ', 'Put here your function');

export function solution4(companies) {
  try {
    const comps = [...companies];
    assingCompanyNames(comps);
    sortUsersByAge(comps);
    return [...comps];
  } catch (e) {
    console.log(e.name, e.message);
  }
};

function assingCompanyNames(comps) {
  comps.forEach((company) => {
    company.users.forEach((user) => {
      user['company'] = company.name;
    });
  });
};

function sortUsersByAge(comps) {
  comps.forEach((company) => {
    company.users.sort(compareUserAge);
  });
};

function compareUserAge(a, b) {
  let comparison = 0;
  if (a.age > b.age) {
    comparison = 1;
  } else if (a.age < b.age) {
    comparison = -1;
  }
  return comparison * -1;
};

solution4(companies);

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y agrupando
// todos los "users" de todas las "companies" en una sola tabla. Cada "user"
// debe tener un nuevo atributo "company" que tenga como valor el nombre de la
// dicha "company". Los "users" deben ordenarse de acuerdo con sus edad
// (de mayor a menor).

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the "companies" variable and grouping
// all "users" of all "companies" in a single table. Each "user"
// must have a new attribute "company" having for value the name of the "company"
// to which it belongs. The "users" must be sorted according to their
// age (from oldest to youngest).

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et regroupant
// tous les "users" de toutes les "companies" dans un seul tableau. Chaque "user"
// doit avoir un nouvel attribut "company" ayant pour valeur le nom de la "company"
// à laquelle il appartient. Les "users" doivent être triés en fonction de leur
// âge (du plus vieux au plus jeune).

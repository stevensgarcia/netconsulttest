import {cleanConsole, createAll} from './data';
import {solution4} from './example-4.js';
const companies = createAll();

cleanConsole(5, companies);
console.log('---- EXAMPLE 5 --- ', 'Put here your function');

function solution5(comps) {
  try {
    const size = totalUsers();
    const average = averageAge().reduce((a, b) => a + b) / averageAge().length;
    const hasCar = totalHasCar()[0];
    const averageWithCar = totalHasCar()[1].reduce((a, b) => a + b) / hasCar;
    return {
      size,
      average,
      hasCar,
      averageWithCar,
    };
  } catch (e) {
    console.log(e.name, e.message);
  }
};

function totalUsers() {
  let size = 0;
  comps.forEach((company) => {
    size += company.usersLength;
  });
  return size;
};

function averageAge() {
  const ages = [];
  comps.forEach((company) => {
    company.users.forEach((user) => {
      ages.push(user.age);
    });
  });
  return ages;
};

function totalHasCar() {
  let hasCar = 0;
  const ageUsersWithCar = [];
  comps.forEach((company) => {
    company.users.forEach((user) => {
      if (user.car) {
        hasCar++;
        ageUsersWithCar.push(user.age);
      }
    });
  });
  return [hasCar, ageUsersWithCar];
};

const comps = solution4(companies);
solution5(comps);

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Use la función creada en el ejemplo 4 para crear una nueva función tomando
// como parámetro la variable "companies" y devuelve un nuevo objeto con los
// siguientes atributos:
//     'size' => total de "users"
//     'average' => edad promedio de "users"
//     'hasCar' => total de "users" propietarios de un carro
//     'averageWithCar' => edad promedio de los "users" con un carro

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Use the function created in example 4 to create a
// new function taking as parameter the "companies" variable and returning
// a new object with the following attributes:
//     'size' => number of "users"
//     'average' => average age of "users"
//     'hasCar' => number of "users" owning a car
//     'averageWithCar' => average age of users with a car

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Utiliser la fonction créée dans l'exemple 4 pour créer une
// nouvelle fonction prenant en paramètre la variable "companies" et renvoyant
// un nouvel objet avec les attributs suivants :
//     'size' => nombre de "users"
//     'average' => moyenne d'âge des "users"
//     'hasCar' => nombre de "users" possédant une voiture
//     'averageWithCar' => moyenne d'âge des "users" possédant une voiture

import {cleanConsole, createAll} from './data';

const companies = createAll();

cleanConsole(7, companies);
console.log('---- EXAMPLE 7 part 1 --- ', 'Put here your function');
function getCompany(companyId) {
  try {
    return companies.find((company) => company.id).name;
  } catch (e) {
    console.log(e.name, e.message);
  }
};
getCompany(1);
console.log('---- EXAMPLE 7 part 2 --- ', 'Put here your function');
function removeCompany(companyId) {
  try {
    const company = companies.findIndex((c) => c.id === companyId);
    companies.splice(company, 1);
    return company;
  } catch (e) {
    console.log(e.name, e.message);
  }
};
removeCompany(4);
console.log('---- EXAMPLE 7 part 3 --- ', 'Put here your function');
function patchCompany(companyId, patchObject) {
  try {
    const company = companies.find((c) => c.id === companyId);
    (patchObject.users) ? delete patchObject.users : null;
    return Object.assign(company, patchObject);
  } catch (e) {
    console.log(e.name, e.message);
  }
};
const patchCompanyOb = {
  name: 'NetConsult',
  users: [],
  isOpen: false,
};
patchCompany(5, patchCompanyOb);
console.log('---- EXAMPLE 7 part 4 --- ', 'Put here your function');
function addUser(companyId, newUser) {
  try {
    const company = companies.find((c) => c.id === companyId);
    newUser.id = ++company.users.length;
    company.users.push(newUser);
    company.usersLength = company.users.length;
    return company;
  } catch (e) {
    console.log(e.name, e.message);
  }
};
const newUser = {
  firstName: 'Juan',
  lastName: 'Delgado',
  age: 35,
  car: true,
};
addUser(6, newUser);
console.log('---- EXAMPLE 7 part 5 --- ', 'Put here your function');
function putCompany(companyId, updateObject) {
  try {
    let company = companies.find((c) => c.id === companyId);
    (updateObject.users) ? delete updateObject.users : null;
    updateObject.users = company.users;
    company = updateObject;
    return company;
  } catch (e) {
    console.log(e.name, e.message);
  }
};
const updateCompanyOb = {
  name: 'SomeCompany',
  users: [{}, {}],
  isOpen: true,
};
putCompany(5, updateCompanyOb);
console.log('---- EXAMPLE 7 part 6 --- ', 'Put here your function');
function removeUser(companyId, userId) {
  try {
    const company = companies.find((c) => c.id === companyId);
    const user = company.users.findIndex((u) => u.id === userId);
    if (user > 0) {
      company.users.splice(user, 1);
      company.usersLength = company.users.length;
      return user;
    } else {
      throw new Error(`User ${userid} does not exists!`);
    }
  } catch (e) {
    console.log(e.name, e.message);
  }
}
removeUser(7, 5);
console.log('---- EXAMPLE 7 part 7 --- ', 'Put here your function');
function patchUser(companyId, userId, patchUserObj) {
  try {
    const company = companies.find((c) => c.id === companyId);
    const user = company.users.find((u) => u.id === userId);
    if (user) {
      Object.assign(user, patchUserObj);
    } else {
      throw new Error(`User ${userid} does not exists!`);
    }
  } catch (e) {
    console.log(e.name, e.message);
  }
};
const patchUserObj = {
  firstName: 'Stevens',
};
patchUser(0, 0, patchUserObj);
console.log('---- EXAMPLE 7 part 8 --- ', 'Put here your function');
// Parte 8: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PUT (como con una llamada HTTP) en este
// "user".
function putUser(companyId, userId, putUserObj) {
  try {
    const company = companies.find((c) => c.id === companyId);
    const user = company.users.findIndex((u) => u.id === userId);
    if (user > 0) {
      putUserObj.id = company.users[user].id;
      company.users[user] = putUserObj;
    } else {
      throw new Error(`User ${userid} does not exists!`);
    }
  } catch (e) {
    console.log(e.name, e.message);
  }
};
const putUserObj = {
  firstName: 'Stevens',
  lastName: 'Garcia',
  car: true,
  age: 31,
};
putUser(1, 1, putUserObj);
console.log('---- EXAMPLE 7 part 9 --- ', 'Put here your function');
function transferUser(companyIdFrom, companyIdTo, userId) {
  try {
    const company1 = companies.find((c) => c.id === companyIdFrom);
    const company2 = companies.find((c) => c.id === companyIdTo);
    const user = company1.users.findIndex((u) => u.id === userId);
    if (user > 0) {
      console.log(company1.users[user]);
      // Delete the user
      company1.users.splice(user, 1);
      company1.usersLength = company1.users.length;
      // Insert the user (transfer)
      company2.users.push(company1.users[user]);
      company2.usersLength = company2.users.length;
    } else {
      throw new Error(`User ${userid} does not exists!`);
    }
  } catch (e) {
    console.log(e.name, e.message);
  }
};
transferUser(0, 1, 7);
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Parte 1: Crear una función tomando como parámetro un "id" de "company" y
// devolviendo el nombre de esta "company".

// Parte 2: Crear una función tomando como parámetro un "id" de "company" y
// quitando la "company" de la lista.

// Parte 3: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PATCH (como con una llamada HTTP) en todos los
// atributos de esta "company" excepto en el atributo "users".

// Parte 4: Crear una función tomando como parámetro un "id" de "company" y un
// nuevo "user" cuyo el apelido es "Delgado", el nombre "Juan", de 35 años y
// dueño de un carro. El nuevo "user" debe agregarse a la lista de "users" de este
// "company" y tener un "id" generado automáticamente. La función también debe modificar
// el atributo "usersLength" de "company".

// Parte 5: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PUT (como con una llamada HTTP) en esta "company" excepto
// en el atributo "users".

// Parte 6: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user". La función debe quitar este "user" de la lista de "users"
// de "company" y cambiar el atributo "usersLength" de "company".

// Parte 7: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PATCH (como con una llamada HTTP) en este
// "user".

// Parte 8: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PUT (como con una llamada HTTP) en este
// "user".

// Parte 9: Crear una función tomando como parámetro dos "id" de "company" y
// un "id" de "user". La función debe permitir que el user sea transferido de la
// primera "company" a la segunda "company". El atributo "usersLength" de cada
// "company" debe actualizarse.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Part 1: Create a function taking as parameter an "id" of "company" and
// returning the name of this "company".

// Part 2: Create a function taking as parameter an "id" of "company" and
// removing the "company" from the list.

// Part 3: Create a function taking as a parameter an "id" of "company" and
// allowing to make a PATCH (as with an HTTP call) on all
// attributes of this "company" except on the "users" attribute.

// Part 4: Create a function taking as parameter an "id" of "company" and a
// new "user" whose name is "Delgado", the first name "Juan", aged 35 and
// a car. The new "user" must be added to the "users" list of this
// "company" and have an automatically generated "id". The function must also modify
// the "usersLength" attribute of "company".

// Part 5: Create a function taking as parameter an "id" of "company" and
// allowing to make a PUT (as with an HTTP call) on this "company" except
// on the "users" attribute.

// Part 6: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user". The function must remove this "user" from the list of "users"
// from "company" and change the attribute "usersLength" from "company".

// Part 7: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PATCH (as with an HTTP call) on this
// "user".

// Part 8: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PUT (as with an HTTP call) on this
// "user".

// Part 9: Create a function taking as parameter two "id" of "company" and
// an "id" of "user". The function must allow the user to be transferred as a parameter
// from the 1st "company" to the 2nd "company". The "usersLength" attribute of each
// "company" must be updated.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Partie 1 : Créer une fonction prenant en paramètre un "id" de "company" et
// retournant le nom de cette "company".

// Partie 2 : Créer une fonction prenant en paramètre un "id" de "company" et
// supprimant la "company" de la liste.

// Partie 3 : Créer une fonction prenant en paramètre un "id" de "company" et
// permettant de faire un PATCH (comme avec un appel HTTP) sur tous les
// attributs de cette "company" sauf sur l'attribut "users".

// Partie 4 : Créer une fonction prenant en paramètre un "id" de "company" et un
// nouvel "user" dont le nom est "Delgado", le prénom "Juan", ayant 35 ans et
// une voiture. Le nouvel "user" doit être ajouté à la liste des "users" de cette
// "company" et avoir un "id" généré automatiquement. La fonction doit aussi modifier
// l'attribut "usersLength" de "company".

// Partie 5 : Créer une fonction prenant en paramètre un "id" de "company" et
// permettant de faire un PUT (comme avec un appel HTTP) sur cette "company" sauf
// sur l'attribut "users".

// Partie 6 : Créer une fonction prenant en paramètre un "id" de "company" et un
// "id" de "user". La fonction doit supprimer cet "user" de la liste des "users"
// de la "company" et modifier l'attribut "usersLength" de "company".

// Partie 7 : Créer une fonction prenant en paramètre un "id" de "company" et un
// "id" de "user" permettant de faire un PATCH (comme avec un appel HTTP) sur cet
// "user".

// Partie 8 : Créer une fonction prenant en paramètre un "id" de "company" et un
// "id" de "user" permettant de faire un PUT (comme avec un appel HTTP) sur cet
// "user".

// Partie 9 : Créer une fonction prenant en paramètre deux "id" de "company" et
// un "id" de "user". La fonction doit permettre de transférer l'user en paramètre
// de la 1re "company" à la 2e "company". L'attribut "usersLength" de chaque
// "company" doit être mis à jour.

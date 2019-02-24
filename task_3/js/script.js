const transportBlock = document.querySelector("#transport");
const industrialBlock = document.querySelector("#industrial");
const formData = document.querySelector('#form');
const company = document.querySelector('#company'); 
if (company) {
  company.addEventListener('change', (e) => {
    if(e.target.value === 'transport') {
      transportBlock.style.display = 'block';
      industrialBlock.style.display = 'none';
    } else {
      transportBlock.style.display = 'none';
      industrialBlock.style.display = 'block';
    }
  })
}

const onSave = () => {
  const name = document.forms["form"].elements["name"].value;
  const surname = document.forms["form"].elements["surname"].value;
  const age = document.forms["form"].elements["age"].value;
  const child = document.forms["form"].elements["child"].value;
  const sex = document.forms["form"].elements["sex"].value;
  const stage = document.forms["form"].elements["stage"].value;
  const company = document.forms["form"].elements["company"].value;
  let factory, position, speciality, transportSelect;
  if (company === 'industrial') {
    factory = document.forms["form"].elements["factory"].value;
    position = document.forms["form"].elements["position"].value;
  } else {
    speciality = document.forms["form"].elements["speciality"].value;
    transportSelect = document.forms["form"].elements["transportSelect"].value;
  }
  let workers = localStorage.getItem('workers');
  const object = JSON.stringify({
    name,
    surname,
    age,
    child,
    sex,
    stage,
    factory,
    company,
    speciality,
    position,
    transportSelect
  });
  if (!workers) {
    workers = [];
  }

  // workers.push(object)
  console.log(workers)

  localStorage.setItem('workers', workers);
};

function Worker(name, surname, age, child, sex, company) {
  var name = name;
  var surname = surname;
  var age = age;
  var child = child;
  var sex = sex;
  var company = company;
  
  this.setName = function(value) {
    name = value;
  }
  this.setSurname = function(value) {
    surname = value;
  }
  this.setAge = function(value) {
    age = value;
  }
  this.setChild = function(value) {
    child = value;
  }
  this.setSex = function(value) {
    sex = value;
  }
  this.setCompany = function(value) {
    company = value;
  }
  this.getName = function() {return name}
  this.getSurname = function() {return surname}
  this.getAge = function() {return age}
  this.getChild = function() {return child}
  this.getSex = function() {return sex}
  this.getCompany = function() {return company}

}

function Transport(speciality, service, ...args) {
  Worker.apply(this, args)
  var speciality = speciality;
  var service = service;
  this.setSpeciality = function(value) {
    speciality = value;
  }
  this.getSpeciality = function() {return speciality}
  this.setService = function(value) {
    service = value;
  }
  this.getService = function() {return service}
}

function Industrial(factory, position, ...args) {
  Worker.apply(this, args);
  var factory = factory;
  var position = position;
  this.setFactory = function(value) {
    factory = value;
  }
  this.getFactory = function() {return factory}
  this.setPosition = function(value) {
    position = value;
  }
  this.getPosition = function() {return position}
  return this;
}

Transport.prototype = Object.create(Worker.prototype);
Transport.prototype.constructor = Industrial;
Industrial.prototype = Object.create(Worker.prototype);
Industrial.prototype.constructor = Industrial;
var trans = new Industrial('spec', 'service', 'name');
console.log(trans)
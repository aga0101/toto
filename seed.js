const {db} = require('./server/db')
const {green, red} = require('chalk')
const Shelter = require('./server/db/models/campuses');
const Pet = require('./server/db/models/students');
// const seed = async () => {
//   await db.sync({force: true})


db.sync({ force: true })
  .then(() => {
    return Promise.all([
      Shelter.create({
        name: 'Animal Care Centers of NYC - Manhattan',
        address: '326 E 110th St, New York, NY 10029',
        phone: '212-788-4000',
        email: ''
      }),
      Shelter.create({
        name: 'ASPCA Adoption Center',
        address: '424 E 92nd St, New York, NY 10128',
        phone: '212-876-7700',
        email: ''
      }),
      Shelter.create({
       name: 'Animal Haven',
       address: '200 Centre St, New York, NY 10013',
       phone: '212-274-8511',
       email: ''
      }),
      Shelter.create({
       name: 'Best Friends Lifesaving Center',
       address: '307 W Broadway, New York, NY 10013',
       phone: '347-762-3678',
       email: ''
      }),
    ]);
  })
  .then(() => {
    return Promise.all([
      Pet.create({
        imageUrl: "https://s3.amazonaws.com/assets.totoinitiative.com/bunny.jpeg",
        species: "Bunny",
        name: "Bani",
        age: "2-4 months",
        sex: "He",
        description: "Bani is a shy little bunny turned in by a family that could not keep him after easter after all"       
      }),
      Pet.create({
       imageUrl: 
       species: 
       name: 
       age: 
       description:        
      }),
      Pet.create({
       imageUrl: 
       species: 
       name: 
       age: 
       description:
      }),
      Pet.create({
       imageUrl: 
       species: 
       name: 
       age: 
       description:
      }),
      Pet.create({
       imageUrl: 
       species: 
       name: 
       age: 
       description:
      }),
    ]);
  })      
  .then(() => {
    console.log(green('Seeding success!'))
    db.close();
  })
  
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.log(err);
    db.close();
  });
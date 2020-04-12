const {db} = require('./server/db')
const {green, red} = require('chalk')
const Shelter = require('./server/db/models/shelters');
const Pet = require('./server/db/models/pets');
// const seed = async () => {
//  await db.sync({force: true})
 
db.sync({ force: true })
  .then(() => {
    return Promise.all([
      Shelter.create({
        id: 1,
        name: 'Animal Care Centers of NYC - Manhattan',
        address: '326 E 110th St, New York, NY 10029',
        phone: '212-788-4000',
        email: ''
      }),
      Shelter.create({
        id: 2,
        name: 'ASPCA Adoption Center',
        address: '424 E 92nd St, New York, NY 10128',
        phone: '212-876-7700',
        email: ''
      }),
      Shelter.create({
       id: 3,
       name: 'Animal Haven',
       address: '200 Centre St, New York, NY 10013',
       phone: '212-274-8511',
       email: ''
      }),
      Shelter.create({
       id: 4,
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
        species: "bunny",
        name: "Bani",
        age: "2-4 months",
        sex: "He/Him",
        description: "Bani is a shy little bunny turned in by a family that could not keep him post-Easter after all.",
        shelterId: 1       
      }),
      Pet.create({
       imageUrl: "https://s3.amazonaws.com/assets.totoinitiative.com/chihuaha.jpeg",
       species: "dog",
       name: "Jorge",
       age: "2-3 years",
       sex: "He/Him",
       description: "Little boy in search of a loving, forever home. The shelter believes he might've been abused. Ideally, they are looking for experienced dog owners who can help him conquer his fear of people, and ones that will never let him get hurt again.",  
       shelterId: 1   
      }),
      Pet.create({
       imageUrl: "https://s3.amazonaws.com/assets.totoinitiative.com/kitty.jpeg",
       species: "cat",
       name: "Kittie",
       age: "1 year",
       sex: "She/Her",
       description: "",
       shelterId: 3
      }),
      Pet.create({
       imageUrl: "https://s3.amazonaws.com/assets.totoinitiative.com/pairofpups.jpeg",
       species: "dog",
       name: "Humpty and Dumpty",
       age: "4 months",
       sex: "boy and girl",
       description: "Brother and sister looking for a forever home. We would love to keep them together or at least place them in households of two friends/family members, so that they can stay in each other's life forever.",
       shelterId: 4
      }),
      Pet.create({
       imageUrl: "https://s3.amazonaws.com/assets.totoinitiative.com/pitbull.jpeg",
       species: "dog",
       name: "Hector",
       age: "4-5 years",
       sex: "boy",
       description: "Sweetest boy looking for a forever home. He has been observed to love children. Very playful and kind.",
       shelterId: 3
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
  })
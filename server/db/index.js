'use strict'

const db = require('./database');
const Pet = require('./models/pets.js');
const Shelter = require('./models/shelters.js');

Pet.belongsTo(Shelter);
Shelter.hasMany(Pet);

module.exports = {
 Pet,
 Shelter,
 db
};
'use strict'

const Sequelize = require('sequelize');
const db = require('../database');

const Pet = db.define('pet', {
 imageUrl: {
  type: Sequelize.STRING,
  defaultValue: "https://dummyimage.com/300",
  validate: {
   isUrl: true
  }
 },
 species: {
  type: Sequelize.STRING,
  allowNull: false,
  validate: {
   notEmpty: true
  }
 },
 name: {
  type: Sequelize.STRING,
  allowNull: true,
 },
 age: {
  type: Sequelize.STRING,
  allowNull: false,
  validate: {
   notEmpty: true
  }
 },
 sex: {
  type: Sequelize.STRING,
  allowNull: true,
 },
 description: {
  type: Sequelize.TEXT,
  allowNull: true
 }
}
);

module.exports = Pet;
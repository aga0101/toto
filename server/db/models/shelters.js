'use strict'

const Sequelize = require('sequelize');
const db = require('../database');

const Shelter = db.define('shelter', {
 name: {
  type: Sequelize.STRING,
  allowNull: false,
  validate: {
   notEmpty: true
  }
 },
 address: {
  type: Sequelize.STRING,
  allowNull: false,
  validate: {
   notEmpty: true
  }
 },
 phone: {
  type: Sequelize.STRING,
  allowNull: false,
  validate: {
   notEmpty: true
  }
 },
 email: {
  type: Sequelize.STRING,
  allowNull: false,
  validate: {
   isEmail: true,
   notEmpty: true
  }
 }
}
);

module.exports = Shelter;
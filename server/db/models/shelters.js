'use strict'

const Sequelize = require('sequelize');
const db = require('../database');

const Shelter = db.define('shelter', {
 id: {
  type: Sequelize.INTEGER,
  primaryKey: true,
  allowNull: false,
  validate: {
   notEmpty: true
  }
 },
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
  allowNull: true,
  // validate: {
  //  isEmail: true
  // }
 }
}
);

module.exports = Shelter;
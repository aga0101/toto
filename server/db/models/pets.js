'use strict'

const Sequellize = require('sequelize');
const db = require('../database');

const Pet = db.define('pet', {
 imageUrl: {
  type: Sequellize.STRING,
  defaultValue: "https://dummyimage.com/300",
  validate: {
   isUrl: true
  }
 },
 species: {
  type: Sequellize.STRING,
  allowNull: false,
  validate: {
   notEmpty: true
  }
 },
 name: {
  type: Sequellize.STRING,
  allowNull: true,
 },


})
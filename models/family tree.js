const mongoose = require('mongoose');

const sideEnum = {
  values: ['maternal', 'paternal'],
  message: 'Side must be either maternal or paternal'
}

const personSchema = new mongoose.Schema({
  name: String,
  gender: String,
  birthDate: Date,
  birthPlace: String,
  deathDate: Date, 
  deathPlace: String,
  spouse: {type: mongoose.Schema.Types.ObjectId, ref: 'Person'},
  parents: [{type: mongoose.Schema.Types.ObjectId, ref: 'Person'}],
  grandparents: [{
    grandparent: {type: mongoose.Schema.Types.ObjectId, ref: 'Person'},
    side: {type: String, enum: sideEnum}
  }],
  greatGrandparents: [{
    greatGrandparent: {type: mongoose.Schema.Types.ObjectId, ref: 'Person'},
    side: {type: String, enum: sideEnum}
  }],
  cousins: [{
    greatGreatGrandparent: {type: mongoose.Schema.Types.ObjectId, ref: 'Person'},
    side: {type: String, enum: sideEnum}
  }],
  siblings: [{type: mongoose.Schema.Types.ObjectId, ref: 'Person'}],
  aunts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Person'}],
  uncles: [{type: mongoose.Schema.Types.ObjectId, ref: 'Person'}],
  cousins: [{type: mongoose.Schema.Types.ObjectId, ref: 'Person'}]
});
spouse
siblings
aunts
uncles
cousins
grandparents
greatGrandparents

const familyTreeSchema = new mongoose.Schema({
  people: [personSchema] 
});

const FamilyTree = mongoose.model('FamilyTree', familyTreeSchema);
const Person = mongoose.model('Person', personSchema);

module.exports = {
  FamilyTree,
  Person,
};
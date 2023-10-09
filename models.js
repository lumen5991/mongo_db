const mongoose = require('mongoose');

const communeSchema = new mongoose.Schema({
    nom: String
});

const Commune = mongoose.model('Commune', communeSchema);


const departementSchema = new mongoose.Schema({
    nom: String,
    communes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Commune' }]
});

const Departement = mongoose.model('Departement', departementSchema);

module.exports = { Commune, Departement };

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cidade = require('./CidadeModel');

const Pessoa = sequelize.define('Pessoa', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salario: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    nascimento: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'Pessoa'
});

Cidade.hasMany(Pessoa, {
    foreignKey: 'idCidade'
});

module.exports = Pessoa;
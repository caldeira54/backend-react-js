const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cidade = sequelize.define('Cidade', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    uf: {
       type: DataTypes.STRING,
       allowNull: false 
    }
}, {
   tableName: 'Cidade' 
});

module.exports = Cidade;
module.exports = (sequelize, dataTypes) => {
    let alias = 'Formato';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
    };
    let config = {
        tableName:'formatos',
        timestamps: false,
    }
    const Formato = sequelize.define(alias, cols, config); 

    Formato.associate = function (models) {
        Formato.hasMany(models.Formato, { 
            as: 'libros',
            foreignKey:'formatos_id',
        });
    }

    return Formato
}
module.exports = (sequelize, dataTypes) => {
    let alias = 'Genero';
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
        tableName: 'generos',
        timestamps: false,
    }
    const Genero = sequelize.define(alias, cols, config); 

    Genero.associate = function (models) {
        Genero.hasMany(models.Libro, { 
            as: 'libros',
            foreignKey:'generos_id',
        });
    }

    return Genero
}
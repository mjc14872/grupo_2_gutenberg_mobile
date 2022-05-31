module.exports = (sequelize, dataTypes) => {
    let alias = 'Idioma';
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
        tableName:'idiomas',
        timestamps: false,
    }
    const Idioma = sequelize.define(alias, cols, config); 

    Idioma.associate = function (models) {
        Idioma.hasMany(models.Libro, { 
            as: 'libros',
            foreignKey:'idiomas_id',
        });
    }

    return Idioma
}
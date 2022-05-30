module.exports = (sequelize, dataTypes) => {
    let alias = 'Autor';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nombres: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        apellidos: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
    };
    let config = {
        tableName:'autores',
        timestamps: false,
        
    }
    const Autor = sequelize.define(alias, cols, config); 

    Autor.associate = function (models) {
        Autor.hasMany(models.Libro, { 
            as: 'libros',
            foreignKey:'autores_id',
        });
    }

    return Autor
}
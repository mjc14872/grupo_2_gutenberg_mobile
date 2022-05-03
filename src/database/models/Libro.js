module.exports = (sequelize, dataTypes) => {
    let alias = 'Libro';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        editorial: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        precio_unitario: {
            type: dataTypes.DECIMAL(3, 2).UNSIGNED,
            allowNull: false
        },
        descuento: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        bestSeller: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        resenia: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        paginas: {
            type: dataTypes.MEDIUMINT,
            allowNull: false
        },
        peso: {
            type: dataTypes.MEDIUMINT,
            allowNull: false
        },
        edicion: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        isbn: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        editorial: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        cantidad: {
            type: dataTypes.MEDIUMINT,
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
    };
    let config = {
        tableName:'libros',
        timestamps: false,
       
    }
    const Libro = sequelize.define(alias, cols, config); 

    Libro.associate = function (models) {
        Libro.belongsTo(models.Genero, { 
            as: 'generos',
            foreignKey:'generos_id',
        });
        Libro.belongsTo(models.Idioma, { 
            as: 'idiomas',
            foreignKey:'idiomas_id',
        });
        Libro.belongsTo(models.Formato, { 
            as: 'formatos',
            foreignKey:'formatos_id',
        });
        Libro.belongsTo(models.Autor, { 
            as: 'autores',
            foreignKey:'autores_id',
        })
        Libro.belongsTo(models.Medio, { 
            as: 'medios',
            foreignKey:'medios_id',
        })
    }

    return Libro
}
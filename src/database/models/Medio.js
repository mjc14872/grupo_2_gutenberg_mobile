module.exports = (sequelize, dataTypes) => {
    let alias = 'Medio';
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
        tableName: 'medios',
        timestamps: false,
    
    }
    const Medio = sequelize.define(alias, cols, config); 

    Medio.associate = function (models) {
        Medio.hasMany(models.Medio, { 
            as: 'libros',
            foreignKey:'medios_id',
        });
    }

    return Medio
}
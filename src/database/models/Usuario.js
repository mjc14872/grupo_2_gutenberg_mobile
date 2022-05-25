module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nombres: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        apellidos: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        categoria: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        novedades: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        administrador: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
    };
    let config = {
        tableName: 'usuarios',
        timestamps: false,

    }
    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Carrito, {
            as: 'carritos',
            foreignKey: 'usuarios_id',
        });
    }
    return Usuario
}
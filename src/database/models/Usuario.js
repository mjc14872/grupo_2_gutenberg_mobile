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
<<<<<<< HEAD
            type: dataTypes.STRING(45),
=======
            type: dataTypes.STRING(100),
>>>>>>> f6a01e511e55da17f944636a4c159a48e11e2584
            allowNull: false
        },
        categoria: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
<<<<<<< HEAD
        imagen: {
=======
        image: {
>>>>>>> f6a01e511e55da17f944636a4c159a48e11e2584
            type: dataTypes.STRING(100),
            allowNull: false
        },
        novedades: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
<<<<<<< HEAD
        fechaCreacion: {
            type: dataTypes.DATE,
            allowNull: false
        },

=======
>>>>>>> f6a01e511e55da17f944636a4c159a48e11e2584
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

<<<<<<< HEAD
=======
    Usuario.associate = function (models) {
        Usuario.hasMany(models.Carrito, {
            as: 'carritos',
            foreignKey: 'usuarios_id',
        });
    }
>>>>>>> f6a01e511e55da17f944636a4c159a48e11e2584
    return Usuario
}
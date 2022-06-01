module.exports = (sequelize, dataTypes) => {
    let alias = 'Carrito';
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
        cantidad: {
            type: dataTypes.MEDIUMINT,
            allowNull: false
        },
        descuento: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        precio: {
            type: dataTypes.DECIMAL(3, 2).UNSIGNED,
            allowNull: false
        },
        total: {
            type: dataTypes.DECIMAL(3, 2).UNSIGNED,
            allowNull: false
        },
        estado: {
            type: dataTypes.STRING(1),
            allowNull: false
        },
    };
    let config = {
        tableName: 'carritos',
        timestamps: false,
    }
    const Carrito = sequelize.define(alias, cols, config);

    Carrito.associate = function (models) {
        Carrito.belongsTo(models.Usuario, {
            as: 'usuarios',
            foreignKey: 'usuarios_id',
        })
        Carrito.belongsTo(models.Medio, {
            as: 'medios',
            foreignKey: 'medios_id',
        })
    }
    return Carrito
}
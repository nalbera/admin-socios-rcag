import { DataTypes, Model } from "sequelize";
import connection from "../config/configDb.js";

class Socios extends Model {};

Socios.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    nro_socio: {
        type: DataTypes.INTEGER.UNSIGNED,
        unique: true,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        defaultValue: 'Sin apellido'
    },
    nombres: {
        type: DataTypes.STRING,
        defaultValue: 'Sin nombre'
    },
    dni: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    licencia: {
        type: DataTypes.STRING,
        defaultValue: 'Sin licencia'
    },
    telefono: {
        type: DataTypes.STRING,
        defaultValue: 'Sin telefono'
    },
    calle_y_nro: {
        type: DataTypes.STRING,
        defaultValue: 'Sin Direccion'
    },
    ciudad: {
        type: DataTypes.STRING,
        defaultValue: 'Sin datos'
    },
    categoria: {
        type: DataTypes.STRING
    },
    habilitado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},
{
    tableName: 'socios',
    timestamps: true,
    sequelize: connection
}
);

export default Socios;
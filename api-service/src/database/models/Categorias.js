import { DataTypes, Model } from "sequelize";
import connection from "../config/configDb.js";

class Categorias extends Model {}

Categorias.init({
    id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    descipcion: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    }
},
{
    tableName: 'categorias',
    timestamps: true,
    sequelize: connection
}
);

export default Categorias;
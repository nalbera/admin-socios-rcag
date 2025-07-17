import { DataTypes, Model } from "sequelize";
import connection from '../config/configDb.js'

class AuthUsers extends Model {};

AuthUsers.init({
    id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'authusers',
    timestamps: true,
    sequelize: connection
}
);

export default AuthUsers;
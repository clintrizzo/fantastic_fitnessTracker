const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const { condition } = require('sequelize');
const orm = require('../config/orm');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
} 

//for user name login
User.init({
    
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8],
        },
    },
}, {
    hooks: {
        beforeCreate: async(newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        beforeUpdate: async(updatedUserData) => {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
});

const condition_fitness = {
	selectAll: function () {
		return orm.selectAll('condition_fitness');
	},
	// The variables cols and vals are arrays.
	insertOne: function (cols, vals) {
		return orm.insertOne('condition_fitness', cols, vals);
	},
	updateOne: function (objColVals, condition) {
		return orm.updateOne('condition_fitness', objColVals, condition);
	},
	deleteOne: function (condition) {
		return orm.deleteOne('condition_fitness', condition);
	}
};


module.exports = User;
module.exports = condition_fitness;
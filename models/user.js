var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');
	
// create a sequelize instance with our local postgres database information.
const sequelize = new Sequelize('ourDatabase', 'root', 'password', {
	host:'localhost',
	port: 3306,
	dialect:'mysql',
	pool:{
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}, 
	operatorsAliases: false
});

//setup user table
var user = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        unique: true, 
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    username: {
        type: sequelize.STRING,
        allowNull: false
    }

});


user.beforeCreate((user, options) => {
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(user.password, salt);
});

user.prototype.validPassword = function(password){
        return bcrypt.compareSync(password, this.password);
};

//create all defined tables in the specified database
sequelize.sync()
    .then(() => console.log('user tables has been created successfully if one does not exist'))
    .catch(error => console.log('This error occurred', error));

//export user module for other files
module.exports = User;

var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN
        }
    }
    // ,{
    //     classMethods: {
    //         associate: function(models) {
    //             User.hasMany(models.Car, {foreignKey:"buyer_id", sourceKey:"id"});
    //         }
    //     }
    // }
);
    // adds a custom method on the User model to validate password by comparing the hashes
    User.prototype.validPassword = function(password){
        return bcrypt.compareSync(password, this.password);
    };

    // hashes password before the user is created
    User.beforeCreate(function(user){
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(12), null);
    });

    // User.associate = function(models){
        // User.hasMany(models.Car);
    // };
    return User;
};
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
    });
    return User;

};
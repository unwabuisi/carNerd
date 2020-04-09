module.exports = function(sequelize, DataTypes) {
	var Car = sequelize.define("Cars", {
		make: {
            type:DataTypes.STRING
        },
        fuel_type: {
            type:DataTypes.STRING
        },
        num_of_doors: {
            type:DataTypes.STRING
        },
        body_style: {
            type:DataTypes.STRING
        },
        drive_wheels: {
            type:DataTypes.STRING
        },
        engine_location: {
            type:DataTypes.STRING
        },
        curb_weight: {
            type:DataTypes.INTEGER
        },
        num_of_cylinders: {
            type:DataTypes.STRING
        },
        horsepower: {
            type:DataTypes.INTEGER
        },
        peak_rpm: {
            type:DataTypes.INTEGER
        },
        city_mpg: {
            type:DataTypes.INTEGER
        },
        highway_mpg: {
            type:DataTypes.INTEGER
        },
        price: {
            type:DataTypes.INTEGER
        },
        date_purchased: {
            type:DataTypes.DATE
        },
		buyer_id :{
			type:DataTypes.INTEGER
		}
	},{
		classMethods: {
			associate: function(models){
				Car.belongsTo(models.User, {foreignKey: "buyer_id", targeyKey:"id"});
			}
		}
	});



	return Car;
};
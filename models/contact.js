// Creation and availability of contacts table

module.exports = function(sequelize, DataTypes) {
    let Contact = sequelize.define("Contact", {
        name: { 
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isName: {
                    msg: "Please, include your name. Thanks!"
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: {
                    msg: "Please, include your email. Thanks!"
                }
            }
        },
        comment: { 
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return Contact;
};
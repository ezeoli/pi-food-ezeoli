const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {


    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    resume:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
   
   healthScore:{
    type: DataTypes.FLOAT,
      defaultValue: 0,
      validate:{
        min:0,
        max:100,
        isNumber(value){
          if(isNaN(value)) throw new Error('healthScore must be a number')
        }
      }    
        },

    image: {
      type: DataTypes.STRING,
      defaultValue:"https://www.trecebits.com/wp-content/uploads/2020/05/Cocina-800x445.jpg",
    },
    
    howToMake:{
      type: DataTypes.TEXT,
      allowNull: true,
    },

    createdInDb:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  
   
    
  });
};

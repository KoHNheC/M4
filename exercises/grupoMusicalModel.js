// grupoMusicalModel.js
// En este ejercicio deberás definir un modelo para la instancia de Sequelize que recibe la función, siguien las
// siguientes indicaciones:

// Nombre del modelo: "GrupoMusical"

// Atributos del modelo:
// √ id: Un identificador único de tipo entero, con incremento automático y clave primaria.
// √ nombre: El nombre del grupo musical, de tipo cadena de texto y no puede ser nulo.
// √ genero: El género musical del grupo, de tipo cadena de texto y puede ser nulo.
// √ numeroIntegrantes: El número de integrantes del grupo, de tipo entero y puede ser nulo. Debe tener un valor mínimo de 1.
// √ fechaFormacion: La fecha de formación del grupo, de tipo fecha sin hora y puede ser nulo.
// √ discografia: La discografía del grupo, de tipo cadena de texto y puede ser nulo.
// √ activo: Un indicador booleano que indica si el grupo está activo, con valor predeterminado en true y no puede ser nulo.

// Otros: no debe generar automáticamente los campos createdAt y updatedAt

// Recuerda realizar la importación correspondiente para poder establercer los tipos de datos.
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const GrupoMusical = sequelize.define('GrupoMusical', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nombre: {
          type: DataTypes.STRING,
          allowNull: false
        },
        genero: {
          type: DataTypes.STRING,
          allowNull: true
        },
        numeroIntegrantes: {
          type: DataTypes.INTEGER,
          allowNull: true,
          validate: {
            min: 1
          }
        },
        fechaFormacion: {
          type: DataTypes.DATEONLY,
          allowNull: true
        },
        discografia: {
          type: DataTypes.STRING,
          allowNull: true
        },
        activo: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true
        }
      }, {
        timestamps: false
      });
    
      return GrupoMusical;
};

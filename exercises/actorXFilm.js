// actorXFilm
// En este ejercicio deberás establecer una relación entre dos modelos.
// La instancia de sequelize que recibe la función tiene definidos dos modelos: Actor y Film
// Debes establecer entre ellos una relación de varios a varios a través de la tabla intermedia ActorxFilm

// ⚠️ Los modelos YA ESTÁN DEFINIDOS en la instancia de Sequelize que recibe la función. No debes definirlos
// ⚠️ No es necesario que tu función retorne ningún output

// Documentación con la que puedes guiarte: https://sequelize.org/docs/v6/core-concepts/assocs/

module.exports = (sequelize) => {
  const Actor = sequelize.models.Actor;
  const Film = sequelize.models.Film;

  Actor.belongsToMany(Film, {
    through: 'ActorxFilm',
    foreignKey: 'actorId',
    otherKey: 'filmId',
    as: 'Films' // Aseguramos que el alias coincida con el usado en el test
  });

  Film.belongsToMany(Actor, {
    through: 'ActorxFilm',
    foreignKey: 'filmId',
    otherKey: 'actorId',
    as: 'Actors' // Aseguramos que el alias coincida con el usado en el test
  });
};
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.bulkInsert('Posts', [
        {
        picture: 'https://images.unsplash.com/photo-1612367197112-b10b7cae092d?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        caption: 'a fav',
        userId: '1',
      },
        
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

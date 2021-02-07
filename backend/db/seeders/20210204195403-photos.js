"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Photos", [
      {
      url: 
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      userId: "1",
    },
      {
      url: 
'https://images.unsplash.com/photo-1612517907461-246e6b416c39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      userId: "1",
    },
    {
      url:       
      "https://images.unsplash.com/photo-1611615748294-9d8a9e330909?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",

      userId: "1",
    },
    {
      url:       
      "https://images.unsplash.com/photo-1611833306589-b0d616d56c01?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",

      userId: "1",
    },
    {
      url:       
      "https://images.unsplash.com/photo-1611845499083-ecb741b592cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",

      userId: "1",
    },
    {
      url:       
      "https://images.unsplash.com/photo-1612036167567-f94312b5230d?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",

      userId: "1",
    },
    {
      url:       
      "https://images.unsplash.com/photo-1612039282280-9c29cf18722b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",

      userId: "1",
    },
    ], 
    
    );
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Photos', null, {});
   
  },
};

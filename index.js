/**
 * Default WE theme
 */

module.exports = {
  // theme config
  configs: {
    views: {
      path: 'views',
      layout: 'views/layouts/default.ejs'
    },

    // add the client side part as bower component name
    // to install with bower install [client_side_bower_component]
    client_side_bower_component: ''
  }
};
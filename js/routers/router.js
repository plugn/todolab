define(['underscore', 'backbone', 'views/app'], function(_, Backbone) {
  var Workspace = Backbone.Router.extend({
    
    routes:{
      'page/:num': 'openPage',
      '*filter'  : 'setFilter'
    },
    
    initialize: function(AppView) {
      console.log(' * router.initialize(); AppView:', AppView.instNum);
      this.app = AppView;
    },

    openPage: function( num ) {
      console.log(' * openPage('+num+'); \n this.app.instNum', this.app.instNum);
    },
    setFilter: function( param ) {
      // Set the current filter to be used
      // app.TodoFilter = param.trim() || '';

      // Trigger a collection filter event, causing hiding/unhiding
      // of Todo view items
      // app.Todos.trigger('filter');
    }
  });

  return Workspace;
  
});

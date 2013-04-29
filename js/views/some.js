define([
  'jquery', 
  'underscore', 
  'backbone',
  'text!templates/some.html'
  ], function($, _, Backbone, aTemplate){
  var aView = Backbone.View.extend({

    //... is a list tag.
    tagName:  "div",
    
    // Cache the template function for a single item.
    template: _.template(aTemplate),
    
    // Re-render the contents of the todo item.
    // To avoid XSS (not that it would be harmful in this particular app),
    // we use underscore's "<%-" syntax in template to set the contents of the todo item.
    render: function() {
console.log(' * some this.model: ', this.model);
      // this.$el.html(this.template({}));
      // return this;
      return this.template({});
    }
  });
  return aView;
});    
    
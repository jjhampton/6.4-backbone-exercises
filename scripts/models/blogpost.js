var Blogpost = Backbone.Model.extend({
  defaults: function() {
    return {
      name: '',
      content: '',
      created_at: new Date(),
      urlRoot: 'http://tiny-lasagna-server.herokuapp.com/collections/posts'
    };
  }
});

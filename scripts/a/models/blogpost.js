export default Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: 'http://tiny-lasagna-server.herokuapp.com/collections/posts',
  defaults: {
    created_at: new Date()
  }
});

export default Backbone.Model.extend({
  idAttribute: '_id',
  created_at: new Date(),
  urlRoot: 'http://tiny-lasagna-server.herokuapp.com/collections/posts'
});

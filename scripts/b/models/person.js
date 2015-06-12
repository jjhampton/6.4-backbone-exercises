export default Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: 'http://tiny-lasagna-server.herokuapp.com/collections/people',
  defaults: {
    created_at: new Date()
  }
});

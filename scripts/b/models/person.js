var PersonModel = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    created_at: new Date()
  }
});

var PeopleCollection = Backbone.Collection.extend({
  model: PersonModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/people'
});

export default {PersonModel, PeopleCollection};

var PostModel = Backbone.Model.extend({
  idAttribute: '_id',  //MAY NEED DEFAULTS, ADD IF NECESSARY
});

var PostsCollection = Backbone.Collection.extend({
  model: PostModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/posts',
});

export default {PostModel, PostsCollection};

var PostModel = Backbone.Model.extend({
  defaults: function() {
    return {
      created_at: new Date()
    };
  },

  idAttribute: '_id'
});

var PostsCollection = Backbone.Collection.extend({
  model: PostModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/posts'
});

export default {PostModel, PostsCollection};

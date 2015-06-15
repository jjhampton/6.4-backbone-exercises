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
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/posts',

  //comparator credit: Jacob Smith: https://github.com/TIY-GVL-FEE-2015-May/6.4-image-board/blob/master/scripts/models/image.js
  //Needs refactoring or change to other parts of program, possibly collection.create {wait:true} option?... only bumping newest post to the second on the list, not the top
  comparator: function(a,b) {
    return (new Date(b.get('created_at'))) - (new Date(a.get('created-at')));
  }
});

export default {PostModel, PostsCollection};

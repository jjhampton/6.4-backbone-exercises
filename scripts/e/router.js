//NEED IMPORTS

import {PostModel} from './models/postModel';
import {PostsCollection} from './models/postModel';

import CreatePostView from './views/createPostView';
import PostTitlesListView from './views/postTitlesListView';
import PostView from './views/postView';


import CreatePostVM from './view-models/createPostVM';



var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'showPost',
    'update': 'update',
    'delete': 'delete'
  },

  initialize: function() {
    this.createPostVM = new CreatePostVM();

    this.postsCollection = new PostsCollection();
    this.postsCollection.fetch();

    this.createPostView = new CreatePostView({
      model: this.createPostVM,
      collection: this.postsCollection
    });

    this.postTitlesListView = new PostTitlesListView({
      collection: this.postsCollection
    });
  },

  /*
  * ROUTE HANDLERS
  */

  index: function() {
    console.log("index callback routed");
    $('.outer-container').prepend(this.createPostView.el);
    $('.outer-container').append(this.postTitlesListView.el);
    $('.outer-container').append(JST.e.postPrompt());

  },

  showPost: function(id) {
    var clickedPost = _.findWhere(this.postsCollection.toJSON(), {_id: id.toString()});
    this.postView = new PostView({
      model: clickedPost
    });
    this.showView(this.postView);
  },

  update: function() {
    console.log("edit clicked");
    $('.post').replaceWith(JST.e.postUpdate());
  },

  delete: function() {
    console.log("delete clicked");
  },

  showView: function(view) {
    $('.post').replaceWith(view.el);
  }
});

var router = new Router();

export default router;

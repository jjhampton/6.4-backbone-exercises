//NEED IMPORTS

import {PostModel} from './models/postModel';
import {PostsCollection} from './models/postModel';

import CreatePostView from './views/createPostView';

import CreatePostVM from './view-models/createPostVM';




var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'show'
  },

  initialize: function() {
    this.createPostVM = new CreatePostVM();

    this.postsCollection = new PostsCollection();
    this.postsCollection.fetch();

    this.createPostView = new CreatePostView({
      model: this.createPostVM,
      collection: this.postsCollection
    });
  },

  /*
  * ROUTE HANDLERS
  */

  index: function() {
    console.log("index callback routed");
    $('.outer-container').prepend(this.createPostView.el);

  },

  show: function() {

  },

  showView: function(view) {

  }
});

var router = new Router();

export default router;

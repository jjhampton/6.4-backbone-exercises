import PostTitleListView from './views/postTitleListView';
import PostContentView from './views/postContentView';

import {PostModel} from './models/postModel';
import {PostsCollection} from './models/postModel';


var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'show' // not sure if this is right URL, is 'posts' needed?
  },

  initialize: function() {
    this.posts = new PostsCollection();
    this.posts.fetch();
  },

  /*
   * Route handlers
   */

  index: function() {
    this.postModel = new PostModel({
      collection: this.posts
    });

    this.postTitleListView = new PostTitleListView({
      model: this.postModel,
      collection: this.posts
    });

    $('.outer-container').prepend(this.postTitleListView.el);
    $('.outer-container').append(JST.c.sectionPrompt);
    // var view = new PostTitleListView({
    //   collection: this.posts
    // });
    // $('.outer-container').prepend(view.el);
  },

  show: function(id) {
    console.log(id);

    this.postContentView = new PostContentView({
      model: this.postModel,
      collection: this.posts
    });
  }
});

var router = new Router();

export default router;

//Can export constructor if necessary

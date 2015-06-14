import PostTitleListView from './views/postTitleListView';
import PostContentView from './views/postContentView';

import PostContentVM from './view-models/postContentViewModel';

import {PostModel} from './models/postModel';
import {PostsCollection} from './models/postModel';


var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'show'
  },

  initialize: function() {
    this.postContentVM = new PostContentVM();

    this.posts = new PostsCollection();
    this.posts.fetch();

    this.postTitleListView = new PostTitleListView({
      model: this.postContentVM,
      collection: this.posts
    });

    this.postContentView = new PostContentView({
      model: this.postContentVM
    });

    $('.outer-container').prepend(this.postTitleListView.el);
    $('.outer-container').append(this.postContentView.el);
  },

  /*
   * Route handlers
   */

  index: function() {
    // var view = new PostTitleListView({
    //   collection: this.posts
    // });
    // $('.outer-container').prepend(view.el);
  },

  show: function(id) {
    console.log(id);
  }
});

var router = new Router();

export default router;

//Can export constructor if necessary

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
  },

  show: function(id) {
    var clickedPost = _.findWhere(this.posts.toJSON(), {_id: id.toString()});
    this.postContentView = new PostContentView({
      model: clickedPost
      // collection: this.posts
    });
    //invoke showView to display postContentView, bind to outer this since showView will use this syntax within
    this.showView(this.postContentView).bind(this);
  },

  showView: function(view) {
    this.currentView = view;
    $('.post').replaceWith(view.el);
    return view;
  }
});

var router = new Router();

export default router;

//Can export constructor if necessary

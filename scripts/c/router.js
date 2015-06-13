import PostTitleListView from './views/postTitleListView';
import PostContentView from './views/postContentView';




import {PostModel} from './models/postModel';
import {PostsCollection} from './models/postModel';



var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'show'
  },

  initialize: function() {
    this.posts = new PostsCollection();
    this.posts.fetch();



    var postTitleListView = new PostTitleListView({
      collection: this.posts
    });

    var postContentView = new PostContentView(); //what options needed



    $('.outer-container').prepend(postTitleListView.el);
    $('.outer-container').append(postContentView.el);
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

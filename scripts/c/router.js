import PostTitleListView from './views/postTitleListView';

import {PostModel} from './models/postModel';
import {PostsCollection} from './models/postModel';



var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    // 'postDisplay':
  },

  initialize: function() {
    this.posts = new PostsCollection();
    this.posts.fetch();
    console.log(this.posts);
  },

  index: function() {

  },

  // postDisplay: function() {
  //
  // }
});

var router = new Router();

export default router;

//Can export constructor if necessary

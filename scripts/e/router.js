//NEED IMPORTS

import {PostModel} from './models/postModel';
import {PostsCollection} from './models/postModel';

import CreatePostView from './views/createPostView';
import PostTitlesListView from './views/postTitlesListView';
import PostView from './views/postView';
import PostUpdateView from './views/postUpdateView';



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
    this.fetchPostsCollectionPromise = this.postsCollection.fetch();

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
    $('body').prepend(this.createPostView.el);
    $('.post-titles-container').html(this.postTitlesListView.el);
    $('.post-container').html(JST.e.postPrompt());

  },

  showPost: function(id) {

    // METHOD FROM CLASS DEMO

    this.fetchPostsCollectionPromise.then(function(){
      var clickedPost = this.postsCollection.get(id);
      this.postView = new PostView({
        model: clickedPost
      });
      this.postUpdateView = new PostUpdateView({
        model: clickedPost
      });
      // this.postDeleteView = new PostDeleteView({
      //   model: clickedPost
      // });  NEED TO IMPORT VIEW CONSTRUCTOR
      this.showView(this.postView);
    }.bind(this));


    // ALTERNATE METHOD THAT WORKS INITIALLY BUT CREATES PROBLEMS LATER

    // var clickedPost = _.findWhere(this.postsCollection.toJSON(), {_id: id.toString()});
    // this.postView = new PostView({
    //   model: clickedPost
    // });

    // front-load postUpdateView with the clickedPost model so it can generate placeholder text if the edit button is clicked **WON'T WORK**
    // this.postUpdateView = new PostUpdateView({
    //   model: clickedPost
    // });
    // this.postDeleteView = new PostDeleteView({
    //   model: clickedPost
    // });
  },

  update: function() {
    console.log("edit clicked");
    this.showView(this.postUpdateView);
  },

  delete: function() {
    console.log("delete clicked");
  },

  showView: function(view) {
    if (this.currentView) this.currentView.remove(); // removes previously existing view from DOM and stops any event listeners it has
    this.currentView = view;
    $('.post-container').html(view.el);
    return view;
  }
});

var router = new Router();

export default router;

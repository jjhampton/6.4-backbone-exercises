import CreateBookmarkVM from './view-models/createBookmarkVM';

import CreateBookmarkView from './views/createBookmarkView';

import {BookmarkModel} from './models/bookmarkModel';
import {BookmarksCollection} from './models/bookmarkModel';

var Router = Backbone.Router.extend({
  routes: {
    '': 'index'

  },

  initialize: function() {
    this.createBookmarkVM = new CreateBookmarkVM();

    this.bookmarksCollection = new BookmarksCollection();
    this.bookmarksCollection.fetch(); // Where is the right place for this???

    this.createBookmarkView = new CreateBookmarkView({
      model: this.createBookmarkVM,
      collection: this.bookmarksCollection
    });

    this.bookmarkModel = new BookmarkModel({
      collection: this.bookmarksCollection
    }); // where is the right place for this?? is it needed in router?

  },

  /*
  * ROUTE HANDLERS
  */

  index: function() {
    console.log("index callback routed");
    $('.outer-container').prepend(this.createBookmarkView.el);
    // $('.outer-container').append(this.indexView.el);  REFINE


  }


});

var router = new Router();

export default router;

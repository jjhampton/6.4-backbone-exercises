import CreateBookmarkVM from './view-models/createBookmarkVM';

import {BookmarkModel} from './models/bookmarkModel';
import {BookmarksCollection} from './models/bookmarkModel';

var Router = Backbone.Router.extend({
  routes:{
    '': 'index'

  },

  initialize: function() {
    this.createBookmarkVM = new CreateBookmarkVM();

    this.bookmarksCollection = new BookmarksCollection();
    this.bookmarksCollection.fetch();


    this.bookmarkModel = new BookmarkModel({
      collection: this.bookmarksCollection
    });
  }


});

var router = new Router();

export default router;

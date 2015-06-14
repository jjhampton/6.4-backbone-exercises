var BookmarkModel = Backbone.Model.extend({
  defaults: function() {
    return {
      title: '',
      url: '',
      tag: '',
      created_at: new Date()
    };
  },

  idAttribute: '_id'
});

var BookmarksCollection = ({
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/hamptonbookmarks',
  model: BookmarkModel
});

export default {BookmarkModel, BookmarksCollection};

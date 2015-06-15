export default Backbone.View.extend({
  tagName: 'section',
  className: 'bookmarks-section',

  templateBookmarksCollection: JST.d.bookmarksCollection,
  templateBookmarksFilter: JST.d.bookmarksFilter,

  initialize: function() {
    this.listenTo(this.collection, 'update', this.render);
    this.listenTo(this.model, 'change:tag', this.filterBookmarks);
    // this.listenTo(this.model, 'update', this.render);
  },

  render: function() {
    this.$el.html(this.templateBookmarksCollection(this.collection.toJSON()));
  },

  filterBookmarks: function() {
    var bookmarkToDisplay;
    var clickedTag = this.model.toJSON().tag;
    var bookmarksCollection = this.collection.toJSON();

    //look through bookmarksCollection and return the first (and only) value that has clickedTag as its tag value; this is the correct bookmark to display and pass into the view element

    bookmarkToDisplay = _.findWhere(bookmarksCollection, {tag: clickedTag});

    this.$el.html(this.templateBookmarksFilter(bookmarkToDisplay));
  }
});

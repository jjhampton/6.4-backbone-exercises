export default Backbone.View.extend({
  tagName: 'section',
  className: 'post',
  templatePrompt: JST.c.sectionPrompt,
  templatePost: JST.c.sectionPost,

  initialize: function() {
    this.$el.html(this.templatePrompt());
    this.listenTo(this.model, 'change:postID', this.render);
  },

  render: function() {
    var postToDisplay;
    var clickedPostID = this.model.toJSON().postID;
    var postsCollection = this.collection.toJSON();

    //look through postsCollection list and return the first (and only) value that has clickedPostID as its _id; this is the correct post
    postToDisplay = _.findWhere(postsCollection, {_id: clickedPostID});

    this.$el.html(this.templatePost(postToDisplay));
  }
});

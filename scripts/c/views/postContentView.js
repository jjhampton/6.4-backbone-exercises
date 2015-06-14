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
    console.log (clickedPostID);
    console.log(postsCollection);

    postToDisplay = _.findWhere(postsCollection, {_id: clickedPostID});
    console.log(postToDisplay);

    this.$el.html(this.templatePost(postToDisplay)); 
  }
});

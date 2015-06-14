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
    console.log(this.model.toJSON());
    this.$el.html(this.templatePost(this.model.toJSON())); // what is the model
  }
});

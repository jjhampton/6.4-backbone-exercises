export default Backbone.View.extend({
  tagName: 'div',
  className: 'post',
  templatePrompt: JST.c.sectionPrompt,
  templatePost: JST.c.sectionPost,

  initialize: function() {
    this.$el.html(this.templatePrompt());
    // this.listenTo(this.model, 'change:isHidden', this.render); WHAT IS MODEL
  },

  render: function() {
    this.$el.html(this.templatePost(this.model.toJSON()));
  }
});

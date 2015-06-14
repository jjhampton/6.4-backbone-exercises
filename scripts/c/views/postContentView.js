export default Backbone.View.extend({
  tagName: 'section',
  className: 'post',
  templatePost: JST.c.sectionPost,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.templatePost(this.model));
  }
});

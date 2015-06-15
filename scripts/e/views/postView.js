export default Backbone.View.extend({
  tagName: 'section',
  className: 'post',
  template: JST.e.post,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }
});

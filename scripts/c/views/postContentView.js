export default Backbone.View.extend({
  tagName: 'ul',
  className: 'post',
  template: JST.c.sectionPost,

  // events: {
  //   // 'click .post-title-list-item': SOMETHING
  // },

  initialize: function() {
    this.render();
  },

  render: function() {
    // this.$el.html(this.template(this.model.toJSON()));
  }
});

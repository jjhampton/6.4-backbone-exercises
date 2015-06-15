export default Backbone.View.extend({
  tagName: 'div',
  className: 'post',
  template: JST.e.post,

  events: {
    'click .post-button-update': 'updatePostRoute',
    'click .post-button-delete': 'deletePostRoute'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  updatePostRoute: function() {
    Backbone.history.navigate('update', {trigger: true});
  },

  deletePostRoute: function() {
    Backbone.history.navigate('delete', {trigger: true});
  }
});

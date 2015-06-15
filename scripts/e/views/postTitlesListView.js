export default Backbone.View.extend({
  tagName: 'ul',
  className: 'post-titles-list',
  template: JST.e.postTitlesList,


  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
  }
});

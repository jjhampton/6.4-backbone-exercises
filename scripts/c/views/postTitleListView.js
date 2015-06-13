export default Backbone.View.extend({
  tagName: 'ul',
  className: 'post-list',
  template: JST.c.sidebarPostTitleList,

  events: {
    'click .post-title-list-item': function() {
      console.log("post title clicked");
    }
  },

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
  }
});

export default Backbone.View.extend({
  tagName: 'ul',
  className: 'post-list',
  template: JST.c.sidebarPostTitleList,

  events: {
    // 'click .post-title-list-item': function() {
      // console.log("post title clicked");

      'click .post-title-list-item': 'getPostData'

  },

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function() {
    console.log(this.collection.toJSON());
    console.log(this.template(this.collection.toJSON()));
    this.$el.html(this.template(this.collection.toJSON()));
  },

  getPostData: function(e) {
    var target = e.currentTarget;
    console.log("list item clicked, it was " + target.dataset.index);
    // this.model.set('isHidden', !this.model.get('isHidden'));
  }
});

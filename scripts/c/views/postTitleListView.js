export default Backbone.View.extend({
  tagName: 'ul',
  className: 'post-list',
  template: JST.c.sidebarPostTitleList,

  // events: {
  //   // 'click .post-title-list-item': SOMETHING
  // },

  initialize: function() {
    this.render();
  },

  render: function() {
    var self = this;
    this.collection.fetch().then(function(data) {
      console.log(data);
      self.$el.html(self.template(data));
    });
  }
});

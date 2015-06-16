export default Backbone.View.extend({
  tagName: 'ul',
  className: 'post-list',
  template: JST.c.sidebarPostTitleList,

  events: {
    'click .post-title-list-item': 'dispatcher'
  },

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
  },

  dispatcher: function(event) {
    //gets post ID data by passing in click event parameter,
    //then passes that value to setViewModelID to set postID value on model
    this.setViewModelID(this.getPostData(event));
  },

  getPostData: function(event) {
    var target = event.currentTarget;
    var postID = target.dataset.index;
    return postID;
  },

  setViewModelID: function(option) {
    this.model.set({postID: option});
  }
});

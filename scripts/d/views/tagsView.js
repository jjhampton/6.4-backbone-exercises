export default Backbone.View.extend({
  tagName: 'sidebar',
  className: 'tags-sidebar',
  template: JST.d.tagsList,

  events: {
    'click .tag-list-item': 'dispatcher'
  },

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
  },

  dispatcher: function(event) {
    //gets tag data by passing in click event parameter,
    //then passes that value to setVMTag to set tag value on view-model
    this.setVMTag(this.getPostData(event));
  },

  getPostData: function(event) {
    var target = event.currentTarget;
    var tag = target.dataset.tag;
    return tag;
  },

  setVMTag: function(option) {
    this.model.set({tag: option});
  }
});

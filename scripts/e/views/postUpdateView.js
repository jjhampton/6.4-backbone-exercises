export default Backbone.View.extend({
  tagName: 'div',
  className: 'post',
  template: JST.e.postUpdate,

  events: {
    'submit .form-create-post': 'updatePost'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  updatePost: function(event) {
    event.preventDefault(); // need to route to original post afterwards
    var id = this.model.toJSON().id;
    console.log(id);
    var title = $('.form-create-post-title').val();
    var body = $('.form-create-post-body').val();
    this.model.save({
      title: title,
      body: body,
      edited_at: new Date()
    });
    Backbone.history.navigate('posts/' + id, {trigger: true});
  }
});

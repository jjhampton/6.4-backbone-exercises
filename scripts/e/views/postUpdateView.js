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
    event.preventDefault();
    var id = this.model.toJSON().id;
    console.log(id);
    var title = $('.form-create-post-title').val();
    var body = $('.form-create-post-body').val();
    this.model.save({
      title: title,
      body: body,
      edited_at: new Date()
    });
    //route to original post afterwards
    Backbone.history.navigate('posts/' + id, {trigger: true});
  }
});

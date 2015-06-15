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
    console.log("edit form submitted");
    event.preventDefault(); // need to route to original post afterwards
    var title = $('.form-create-post-title').val();
    var body = $('.form-create-post-body').val();
    console.log(this.model);
    this.model.save({
      title: title,
      body: body,
      edited_at: new Date()
    });
  }
});

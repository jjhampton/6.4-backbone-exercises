export default Backbone.View.extend({
  tagName: 'div',
  className: 'post',
  template: JST.e.postDelete,

  events: {
    'click .post-button-delete': 'deletePost'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  deletePost: function(event) {
    event.preventDefault();
    var id = this.model.toJSON().id;
    console.log(id);
    this.model.destroy({
      success: function(){
        console.log("destroy successful");
      },
      error: function() {
        console.log("destroy NOT successful");
      }
    });
    //route to index afterwards
    Backbone.history.navigate('index', {trigger: true});
  }
});

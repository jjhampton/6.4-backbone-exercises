// credit: Jacob Smith's example 6.4-image-board demo at https://github.com/TIY-GVL-FEE-2015-May/6.4-image-board/blob/master/scripts/view-models/create-form.js

export default Backbone.View.extend({
  template: JST.e.createPost,

  events: {
    'click .header-button-add-post': 'toggleForm',
    'submit .form-create-post': 'createPost',
    'click .header-button-navigate-home': 'routeHome'
  },

  initialize: function(){
    this.render();
    this.listenTo(this.model, 'change:isHidden', this.render);
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },


  toggleForm: function(){
    this.model.set('isHidden', !this.model.get('isHidden'));
  },

  createPost: function(event){
    console.log("form submitted");
    event.preventDefault();
    this.collection.create({
      title: this.$('.form-create-post-title').val(),
      body: this.$('.form-create-post-body').val()
    }, {wait: true});
    this.toggleForm();
  },

  routeHome: function() {
    Backbone.history.navigate('', {trigger: true});
  }
});

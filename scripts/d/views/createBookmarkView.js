// credit: Jacob Smith's example 6.4-image-board demo at https://github.com/TIY-GVL-FEE-2015-May/6.4-image-board/blob/master/scripts/view-models/create-form.js

export default Backbone.view.extend({
  template: JST.d.createBookmark.hbs,

  events: {
    'click .header-button-addbookmark': 'toggleForm',
    'submit form-create-bookmark': 'createBoomkark'
  },

  initialize: function(){
    this.render();
    this.listenTo(this.model, 'change:isHidden', this.render)
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },


  toggleForm: function(){
    this.model.set('isHidden', !this.model.get('isHidden'));
  },

  createBookmark: function(event){
    event.preventDefault();
    this.collection.create({
      title: this.$('.form-create-bookmark-title').val(),
      url: this.$('.form-create-bookmark-url').val(),
      tag: this.$('.form-create-bookmark-tag').val()
    });
  }



});

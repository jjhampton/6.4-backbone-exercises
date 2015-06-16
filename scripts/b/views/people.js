import router from '.././router';

export default Backbone.View.extend({
  tagName: 'ul',
  className: 'people-list',
  template: JST.b.person,

  events: {
    'click .button-navigate-home': 'navigateHome'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
  },

  navigateHome: function(event) {
    event.preventDefault();
    Backbone.history.navigate('', {trigger: true});

    // try router.navigate() ^
    // import Router constructor
  }

});

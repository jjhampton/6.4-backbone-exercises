import router from '.././router';

export default Backbone.View.extend({
  tagName: 'form',
  className: 'form-post',
  template: JST.b.form,

  events: {
    'submit': 'addPerson'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  addPerson: function(event) {
    event.preventDefault();

    var firstName;
    var lastName;
    var address;
    var phoneNumber;

    firstName = $('.form-input-firstname').val();
    lastName = this.$('.form-input-lastname').val();
    address = this.$('.form-input-address').val();
    phoneNumber = this.$('.form-input-phonenumber').val();
    this.collection.create({
      firstName: firstName,
      lastName: lastName,
      addres: address,
      phoneNumber: phoneNumber
    });
    Backbone.history.navigate('people', {trigger: true});
  }
});

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

    console.log('submit clicked');
    firstName = $('.form-input-firstname').val();
    console.log(firstName);
    lastName = this.$('.form-input-lastname').val();
    console.log(lastName);
    address = this.$('.form-input-address').val();
    phoneNumber = this.$('.form-input-phonenumber').val();
    this.model.save({
      firstName: firstName,
      lastName: lastName,
      addres: address,
      phoneNumber: phoneNumber
    });
    Backbone.history.navigate('people', {trigger: true});
  }
});

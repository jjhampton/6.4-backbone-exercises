import router from '.././router';

export default Backbone.View.extend({
  tagname: 'form',
  className: 'form-post',
  template: JST.b.form,

  events: {
    'click .form-input-submit': 'addPerson'
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
    firstName = this.$('form-input-firstname').val();
    console.log(firstName);
    lastName = this.$('form-input-lastname').val();
    address = this.$('form-input-address').val();
    phoneNumber = this.$('form-input-phonenumber').val();
    this.model.save({
      firstName: firstName,
      lastName: lastName,
      addres: address,
      phoneNumber: phoneNumber
    });
    router.history.navigate('people', {trigger: true});
  }
});

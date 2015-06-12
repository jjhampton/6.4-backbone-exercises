import IndexView from './views/index';
import PeopleView from'./views/people';

import PersonModel from './models/person';

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'people': 'people'
  },
  initialize: function() {
    this.person = new PersonModel();
  },
  index: function() {
    var view = new IndexView({model: this.person});
    console.log("index view created");
    $('.outer-container').html(view.el);
  },
  people: function() {
    // var view = new PeopleView();
    console.log("people view created");
  }
});

var router = new Router();

export default router;

import IndexView from './views/index';
import PeopleView from'./views/people';

import {PersonModel} from './models/person';
import {PeopleCollection} from './models/person';


var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'people': 'people'
  },
  initialize: function() {
    this.people = new PeopleCollection();
  },
  index: function() {
    var view = new IndexView({collection: this.people});
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

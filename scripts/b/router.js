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
    console.log("index view created");
    var view = new IndexView({collection: this.people});
    $('.outer-container').html(view.el);
  },
  people: function() {
    console.log("people view created");
    var view = new PeopleView({collection: this.people});
    $('.outer-container').html(view.el);



  }
});

var router = new Router();

export default router;

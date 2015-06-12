import router from './router';

(function() {
  'use strict';
  alert("working");

  $(document).ready(function() {
    Backbone.history.start();
    $('.outer-container').html(JST.c.sectionPost());
    $('.outer-container').prepend(JST.c.sidebarPostList());

  });

})();

// import router from './router';

(function() {
  'use strict';
  alert("E");
  $(document).ready(function() {
    $('.outer-container').prepend(JST.e.createPost());
    // Backbone.history.start();
  });

})();

// window.appRouter = new Router {}; - discussion idea from Jess

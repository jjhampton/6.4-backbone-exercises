// import router from './router';

(function() {
  'use strict';
  alert("YO");
  $(document).ready(function() {
    // Backbone.history.start()
    $('.outer-container').prepend(JST.d.createBookmark());
    $('.outer-container').append(JST.d.index());



  });

})();

// window.appRouter = new Router {}; - discussion idea from Jess

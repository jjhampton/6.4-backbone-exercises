import Blogpost from './models/blogpost';

(function(){
  'use strict';

  var addPost = function() {
    var blogpost = new Blogpost();
    var title = $(".form-input-title").val();
    var body = $(".form-input-body").val();
    blogpost.save({
      title: title,
      body: body
    }, {dataType: 'text', success: function(){console.log("success");}, error: function(){console.log("errror");}});
  };

  $(".outer-container").html(JST.formblogpost());
  $(".form-post").on("submit", function() {
    event.preventDefault();
    console.log('clicked');
    addPost();
    });

})();

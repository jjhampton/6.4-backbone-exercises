import Blogpost from './models/blogpost';

(function(){
  'use strict';

  var blogpost = new Blogpost();
  alert(blogpost.urlRoot);

  var addPost = function() {
    var title = $(".form-input-title").val();
    var body = $(".form-input-body").val();
    blogpost.save({
      title: title,
      body: body
    });
  };



  $(".outer-container").html(JST.formblogpost());
  $(".form-post").on("submit", addPost);

})();

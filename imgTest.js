

function readURL(input) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    $('.img-list').append("<div class='img-item'><img src='' class=''><button type='' class=''></button></div>");

    reader.onload = function(e) {
      // $('#blah').attr('src', e.target.result);
      $('.img-item').find('img').attr('src', e.target.result)
    }

    reader.readAsDataURL(input.files[0]);
  }
}

$("#imgInp").change(function() {
  readURL(this);
});
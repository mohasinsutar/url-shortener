$('.btn-shorten').on('click', function(){
  // AJAX call to /shorten with the URL that the user entered in the input box
  $.ajax({
    url: '/shorten',
    type: 'POST',
    dataType: 'JSON',
    data: {url: $('#url-field').val()},
    success: function(data){
        // display the shortened URL to the user that is returned by the server
        var resultHTML = '<a class="result" href="' + data.shortUrl + '">'
            + data.shortUrl + '</a>';
        $('#link').html(resultHTML);
        $('#resultBox').addClass("alert alert-success");
        $('#resultBox').hide().fadeIn('slow');
    }
  });
});
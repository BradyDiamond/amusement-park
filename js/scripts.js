$(document).ready(function() {
  const height = parseInt(prompt("in feet,how tall are you?."));

    if (height > 4 && height <= 6) {
      $('#overHeight').show();
    } else if (height > 6){
      $("#tooTall").show();
    }
      else {
        $('#underHeight').show();
    }
});
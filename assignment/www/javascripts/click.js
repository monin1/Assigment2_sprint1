
$(document).ready(function() {
  $(".toggle").click(function() {
    var elem = $(".toggle").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $(".toggle").text("Read Less");
      $(".text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $(".toggle").text("Read More");
      $(".text").slideUp();
    }
  });
});

$(document).ready(function() {
  $(".toggle1").click(function() {
    var elem = $(".toggle1").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $(".toggle1").text("Read Less");
      $(".text1").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $(".toggle1").text("Read More");
      $(".text1").slideUp();
    }
  });
});

$(document).ready(function() {
  $(".toggle2").click(function() {
    var elem = $(".toggle2").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $(".toggle2").text("Read Less");
      $(".text2").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $(".toggle2").text("Read More");
      $(".text2").slideUp();
    }
  });
});

$(document).ready(function() {
  $(".toggle3").click(function() {
    var elem = $(".toggle3").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $(".toggle3").text("Read Less");
      $(".text3").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $(".toggle3").text("Read More");
      $(".text3").slideUp();
    }
  });
});


  //New Folder


    // Get the modal
    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

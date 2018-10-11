//--------------------
// GET USER MEDIA CODE
//--------------------
    navigator.getUserMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);

var video;
var webcamStream;

function startWebcam() {
  if (navigator.getUserMedia) {
     navigator.getUserMedia (

        // constraints
        {
           video: true,
           audio: false
        },

        // successCallback
        function(localMediaStream) {
            video = document.querySelector('video');
           video.src = window.URL.createObjectURL(localMediaStream);
           webcamStream = localMediaStream;
        },

        // errorCallback
        function(err) {
           console.log("The following error occured: " + err);
        }
     );
  } else {
     console.log("getUserMedia not supported");
  }
}

function stopWebcam() {
    webcamStream.stop();
}
//---------------------
// TAKE A SNAPSHOT CODE
//---------------------
var canvas, ctx;

function init() {
  // Get the canvas and obtain a context for
  // drawing in it
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext('2d');
}

function snapshot() {
   // Draws current image from the video element into the canvas
  ctx.drawImage(video, 0,0, canvas.width, canvas.height);
}



/*new*/
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


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

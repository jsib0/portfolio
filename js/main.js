$(document).ready(function() {


$(function(){
    // Cache the window object
    var $window = $(window);
    
    // Parallax background effect
    $('section[data-type="background"]').each(function() {
        var $bgobj = $(this);
        $(window).scroll(function(){
            // scroll the background at var speed
            // the yPos is a negative value because we're scrolling it up!
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            // Put together our final background position
            var coords = '50% '+ yPos +'px';
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); // end window scroll
    });
});

$(document).scroll(function() {
  var y = $(this).scrollTop()
    if (y > 250) {
        $('header').fadeIn()
    } else {
        $('header').fadeOut()
    }
});

$(function () {
    $("#aboutme-section").hide();
    $("#contact-me-section").hide();
    
    $(".link1, .link2, .link3").bind("click", function () {
      $("#portfolio-section, #aboutme-section, #contact-me-section").hide();        
      if ($(this).attr("class") == "link1")
      {
        $("#portfolio-section").fadeIn("slow");
      } else if ($(this).attr("class") == "link3")
        {
          $("#contact-me-section").show("slow");
        } else { 
        $("#aboutme-section").show("slow");
      } 
    })
})
 

document.getElementById("submit").disabled = true;

function enableBtn() {
    document.getElementById("submit").disabled = false;
}


//  ==== MAIN LOGO ANIMATION ON CLICK ====
$(".box-container").click(function(){
    $(".top-left-corner").animate({borderLeftWidth: "10px", borderTopWidth: "10px", top: "70px"});
    $(".top-left-corner").animate({borderLeftWidth: "6px", borderTopWidth: "6px", top: "0px"});
    $(".top-right-corner").animate({borderRightWidth: "10px", borderTopWidth: "10px", top: "70px"});
    $(".top-right-corner").animate({borderRightWidth: "6px", borderTopWidth: "6px", top: "0px"});
    $(".bottom-left-corner").animate({borderLeftWidth: "10px", borderBottomWidth: "10px", bottom: "60px"});
    $(".bottom-left-corner").animate({borderLeftWidth: "6px", borderBottomWidth: "6px", bottom: "0px"});
    $(".bottom-right-corner").animate({borderRightWidth: "10px", borderBottomWidth: "10px", bottom: "60px"});
    $(".bottom-right-corner").animate({borderRightWidth: "6px", borderBottomWidth: "6px", bottom: "0px"});
})



$('#message_form').submit(function() {

    let recaptcha = $("#g-recaptcha-response").val();

    if(recaptcha == undefined || recaptcha == null || recaptcha == ''){
        event.preventDefault()
        $("#myModal").modal('show')
        return false
    }

    $(this).ajaxSubmit({
          error: function(xhr) {
            status('Error: ' + xhr.status)
          },
           success: function(response) {   
              console.log("success")     
              // $(function() {
              //   $("submit").removeClass("btn submit-contact")
              //   $( "#submit" ).click(function() {
              //   $( "#submit" ).addClass( "onclic", 250, validate);
              // });

              // function validate() {
              //   setTimeout(function() {
              //     $( "#submit" ).removeClass( "onclic" );
              //     $( "#submit" ).addClass( "validate", 450, callback );
              //   }, 2250 );
              // }
              //   function callback() {
              //     setTimeout(function() {
              //       $( "#submit" ).removeClass( "validate" );
              //     }, 1250 );
              //   }
              // });

         }
    });
    return false

})

}) 






// $('[data-toggle="tooltip"]').tooltip(); 
//$('#svgfile').load('img/logo-moe.svg');
//$('#svgfile-loader').load('img/logo-moe-loader.svg');
$(document).ready(function(){
    
    if (Modernizr.backgroundcliptext) {
    } 
    else {
        $(".portfolio, .languages-text, .software-text, .education-highlight, .education-bold, .portfolio-highlight, .highlighted-blue-text, highlighted-blue").removeClass("yellow-gradient-text");
        $(".skills-text, .portfolio-text").removeClass("red-gradient-text");
        $(".portfolio, .skills-text, .portfolio-text, .languages-text, .software-text, .portfolio-highlight").addClass("red-text");

        $(".about, .education-text, .contact-text, highlighted-blue-text").removeClass("blue-gradient-text");
        $(".about, .education-text, .contact-text, .highlighted-blue-text, .education-highlight, .education-bold").addClass("blue-text");
    }
    
    SetImageText();    
        // Get the modal
    var modal = $("#overlay");

    // Get the button that opens the modal
    var btn = $("#menu");

    // Get the span element that closes the modal
    var span = $("#close");

    // When the user clicks on the button, open the modal 
    btn.click(function(){
        modal.css( "display", "block" );
        btn.css( "display", "none" );
    });

    // When the user clicks on x, close the modal
    span.click(function(){
        modal.css( "display", "none" );
        btn.css( "display", "inline" );
    });
    
    // When the user clicks on an anchor in the menu, close the modal 
    $("ul#menu-items a").click(function(){
        modal.css( "display", "none" );
        btn.css( "display", "inline" );
      });
    
    
    // When the user clicks on the next navigation icon in the image gallery
    $(".iis-next-nav").click(function(){
        SetImageText();
    });
    
    // When the user clicks on the previous navigation icon in the image gallery
    $(".iis-previous-nav").click(function(){
        SetImageText();
    });
    
    // Observe each of the slides to check if a class has been added
    $(".iis-slide").each(function(){
        var $div = $(this);
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === "class") {
                    SetImageText();
                }
            });
        });    
        observer.observe($div[0],  {
            attributes: true
        });
    });
    
    // Animate the skillbar percentage shown
    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
    


// Document.Ready closing tags    
});


function SetImageText()
{
    var slide = $(".iis-current-slide").attr("id")
    var num = slide.split("_").pop();
    var obj = JSON.parse(text);    
    
    $("#image-title").html(obj.images[num].ImageTitle);
    $("#image-text").html(obj.images[num].Description);
}
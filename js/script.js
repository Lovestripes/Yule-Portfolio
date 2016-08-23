$(document).ready(function(){
    
    if (Modernizr.backgroundcliptext) {
        window.alert("Supported");
    } 
    else {
        $(".portfolio, .languages-text, .software-text, .education-highlight, .education-bold, .portfolio-highlight, .highlighted-blue-text, highlighted-blue").removeClass("yellow-gradient-text");
        $(".skills-text, .portfolio-text").removeClass("red-gradient-text");
        $(".portfolio, .skills-text, .portfolio-text, .languages-text, .software-text, .portfolio-highlight").addClass("red-text");

        $(".about, .education-text, .contact-text, highlighted-blue-text").removeClass("blue-gradient-text");
        $(".about, .education-text, .contact-text, .highlighted-blue-text, .education-highlight, .education-bold").addClass("blue-text");
        
      window.alert("Not Supported");
    }
    
    
    SetImageText();
    
    //modal
        $("#menu").click(function(){
        $('#modal-container').removeAttr('class').addClass("active");
        $('body').addClass('modal-active');
    })

    $('#modal-container').click(function(){
        $(this).addClass('out');
        $('body').removeClass('modal-active');
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
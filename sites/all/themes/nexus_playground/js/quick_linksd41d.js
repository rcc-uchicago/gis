

(function($){
	$(document).ready(function(){

	var currentlyOpening = "currentlyOpening";
	var currentlyClosing = "currentlyClosing";

        $("ul#quickLinks li").mouseenter(function(){
		var actUpon = $(this).find('div.hasText');
		if(actUpon.hasClass(currentlyOpening) || actUpon.hasClass(currentlyClosing))
			return;//To stop animations from queueing
		actUpon.addClass(currentlyOpening);
                actUpon.animate({"width": "50%"},100,'swing',function(){
				$(this).removeClass(currentlyOpening);//Now that we are done with the animation.
			}
		);
        });
        $("ul#quickLinks li").mouseleave(function(){
		var actUpon = $(this).find('div.hasText');
		actUpon.addClass(currentlyClosing);
                actUpon.animate({"width": "20%"}, 100, 'swing',function(){
			$(this).removeClass(currentlyClosing);
			}
		);
        });
})})(jQuery);

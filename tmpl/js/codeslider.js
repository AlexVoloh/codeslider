/* Copyright http://codematrix.ru/ Alex Voloh*/
/* License: GNU/GPL v.2 or later */
/* Non-commercial */
jQuery(document).ready(function(){
	// Parameters for each copy of the module
	function codeModuleInit(obj){
	// Create object of gallery
	obj.data({
		// Number of pictures in the module
		"imageLength" : obj.children(".codecarousel").children(".codeimage").length,
		// Step width, depending on module width
		"scrollStep" : obj.width(),
		// The flag indicating, whether is carried out animation at present
		"onmove" : "",
		// We establish an interval for autoscrolling and its ID is got
		"interval" : function(){obj.data("intervalID", setInterval(function(){cdmxForward(obj)}, this.scrollspeed))},
		// Animation duration
		"animtime" : parseInt(obj.attr("data-animtime")),
		// Whether to show descriptions
		"imgtool" : parseInt(obj.attr("data-imgtool")),
		// Whether to hide descriptions
		"tooltipAllways" : parseInt(obj.attr("data-tooltipallways")),
		// Autoscroll on/off
		"autoscroll" : parseInt(obj.attr("data-autoscroll")),
		// Interval between scrollings
		"scrollspeed" : parseInt(obj.attr("data-scrollspeed")),
		// link target
		"linktarget" : parseInt(obj.attr("data-linktarget")),
		// Cycling around
		"cycle" : parseInt(obj.attr("data-cycle")),
		// Module offset from the left
		"offsetLeft" : obj.offset().left
		});
		// backtracking point by the beginning
		obj.data().sliderBack = obj.data().scrollStep * (obj.data().imageLength - 1) * -1;
		// kill intervals if are disable
		if(obj.data().autoscroll == 0){
				obj.data().interval = function(){return false;};
				}
		//Set of width of the unit with pictures
		obj.children(".codecarousel").css("width", obj.data("scrollStep") * obj.data("imageLength"));
		// Each of pictures and cursor type depending on link existence (and width set too here)
		obj.children(".codecarousel").children(".codeimage").each(function(){
		if(jQuery(this).children("img").attr("data-href")){
			jQuery(this).css("cursor", "pointer");
			}
		jQuery(this).css("width", obj.data("scrollStep"));
		});
	};
	// Each of all modules and saving parameters
	jQuery(".codegallery").each(function(){
		jQuery(this).show().css("maxWidth", jQuery(this).parent().width());
		codeModuleInit(jQuery(this));
		jQuery(this).data().interval();
		jQuery(this).data().onmove = 0;
		if(jQuery(this).data().tooltipAllways == 1){
			jQuery(this).find(".imgtooltip").show();
			}
		});
	
	// Move left
	function cdmxForward(obj){
		// check a flag
		if(obj.data().onmove == 0){
			// lock actions while animation is executed
				obj.data().onmove = 1;
				// select the container with pictures
				var codecarousel = obj.children(".codecarousel");
				// update value of a position
				this.carouselPosition = parseInt(codecarousel.css("marginLeft"));
			// If a slideshow in backtracking point
			if(this.carouselPosition == obj.data("sliderBack")){
				// If cycling is set
				if(obj.data().cycle == 1){
					// clone the first picture in the gallery end
					codecarousel.children(".codeimage:first").clone().appendTo(codecarousel);
					// stop autoscroll
					clearInterval(obj.data("intervalID"));
					// calculate the unit size because of increase in number of pictures
					obj.children(".codecarousel").css("width", obj.data("scrollStep") * obj.children(".codecarousel").children(".codeimage").length);
					// execute animation
					codecarousel.animate({
							"marginLeft" : "-=" + obj.data("scrollStep") + "px"
								}, obj.data().animtime, function(){
								jQuery(this).css("marginLeft", "0px");
								// delete the last picture in the module
								codecarousel.children(".codeimage:last").remove();
								// kill one more interval
								clearInterval(obj.data("intervalID"));
								// calculate width
								codecarousel.css("width", obj.data("scrollStep") * obj.children(".codecarousel").children(".codeimage").length);
								// launch autoscroll
								obj.data().interval();
								// update position
								this.carouselPosition = parseInt(codecarousel.css("marginLeft"));
								// unlock further actions of the user
								obj.data().onmove = 0; 
								});
					// return false :)
					return false;
					}
			// rollback
			codecarousel.animate({
				"marginLeft" : "0px"
				}, obj.data().animtime * 2, function(){
					this.carouselPosition = parseInt(codecarousel.css("marginLeft"));
					obj.data().onmove = 0; 
					})				
				} else {
			// next image
			codecarousel.animate({
				"marginLeft" : "-=" + obj.data("scrollStep") + "px"
				}, obj.data().animtime, function(){
					this.carouselPosition = parseInt(codecarousel.css("marginLeft"));
					obj.data().onmove = 0; 	
						});
				// cancel everything if the lock flag is set
				}} else {return false}}
						
	// Scrolling to the right (Generally the same, only in the opposite direction)
	function cdmxBackward(obj){
		if(obj.data("onmove") == false){
				obj.data("onmove", true);
				var codecarousel = obj.children(".codecarousel");
				this.carouselPosition = parseInt(codecarousel.css("marginLeft")); 
			if(this.carouselPosition == 0){
				if(obj.data().cycle == 1){
					codecarousel.children(".codeimage:last").clone().prependTo(codecarousel);
					codecarousel.css("marginLeft", "-" + obj.data("scrollStep") + "px");
					clearInterval(obj.data("intervalID"));
					obj.children(".codecarousel").css("width", obj.data("scrollStep") * obj.children(".codecarousel").children(".codeimage").length);
					obj.data().imageLength = obj.children(".codecarousel").children(".codeimage").length;
					obj.data().sliderBack = obj.data().scrollStep * (obj.data().imageLength - 1) * -1;
					obj.data().interval();
					codecarousel.animate({
							"marginLeft" : "+=" + obj.data("scrollStep") + "px"
								}, obj.data().animtime, function(){
								jQuery(this).css("marginLeft", obj.data("sliderBack") + obj.data("scrollStep") + "px");
								codecarousel.children(".codeimage:first").remove();
								clearInterval(obj.data("intervalID"));
								codeModuleInit(obj);
								obj.data().interval();
								this.carouselPosition = parseInt(codecarousel.css("marginLeft"));
								obj.data("onmove", false); 
								});
					return false;
					}
			codecarousel.animate({
				"marginLeft" : obj.data("sliderBack") + "px"
				}, obj.data().animtime * 2, function(){
					this.carouselPosition = parseInt(codecarousel.css("marginLeft"));
					obj.data("onmove", false); 
					})				
				} else {
			codecarousel.animate({
				"marginLeft" : "+=" + obj.data("scrollStep") + "px"
				}, obj.data().animtime, function(){
					this.carouselPosition = parseInt(codecarousel.css("marginLeft"));
					obj.data("onmove", false);  
					});
				}}}				
			
		// Click to navigation line
		jQuery(".nextimage").click(function(){
			if(jQuery(this).parent(".codegallery").data().onmove == 0){
			cdmxForward(jQuery(this).parent(".codegallery"));
				}
			clearInterval(jQuery(this).parent(".codegallery").data("intervalID"));
			jQuery(this).parent(".codegallery").data().interval();
			});
		jQuery(".previmage").click(function(){
			cdmxBackward(jQuery(this).parent(".codegallery"));
			clearInterval(jQuery(this).parent(".codegallery").data("intervalID"));
			jQuery(this).parent(".codegallery").data().interval();
			});
		
		
		// Descriptions change
		function imgPositionMonitor(){
			jQuery(".codegallery").each(function(){
					var thisGallery = jQuery(this);
					jQuery(this).children(".codecarousel").children(".codeimage").each(function(){
							if(jQuery(this).offset().left == thisGallery.data().offsetLeft){
								if(jQuery(this).hasClass("codeactive")){
									return false
									} else {
								jQuery(this).siblings(".codeactive").removeClass("codeactive");
								jQuery(this).addClass("codeactive");
								this.tooltip = thisGallery.find(".codeimage.codeactive img").attr("alt");
								thisGallery.find(".imgtooltip div").text(this.tooltip);
								}}
							});
					});
			};
			setInterval(imgPositionMonitor, 50);
			
			// Image descriptions
			jQuery(".codegallery, .codeprev, .codenext").on("mouseover", function(){
				if(jQuery(this).data().imgtool == 1 && jQuery(this).data().tooltipAllways == 0){
				jQuery(this).find(".imgtooltip").stop(true).fadeIn();
					jQuery(".codegallery").on("mouseout", function(){
						jQuery(this).find(".imgtooltip").stop(true).fadeOut();
					});
				}});
			
			// Links
			jQuery(".codegallery img").on("click", function(){
				if(jQuery(this).attr("data-href")){
					if(jQuery(this).parents(".codegallery").data().linktarget == 1){
					window.open(jQuery(this).attr("data-href"));
						} else {
							window.location = jQuery(this).attr("data-href");
							}
					};
				}); 
});

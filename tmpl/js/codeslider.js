/* Copyright http://codematrix.ru/ Alex Voloh*/
/* License: GNU/GPL v.2 or later */
/* Non-commercial */
jQuery(document).ready(function(){
	// Параметры для каждого экземпляра модуля
	// Parameters for each copy of the module
	function codeModuleInit(obj){
	// Создаем объект галереи
	// Create object of gallery
	obj.data({
		// Количество картинок в модуле
		// Number of pictures in the module
		"imageLength" : obj.children(".codecarousel").children(".codeimage").length,
		// Ширина шага, в зависимости от ширины модуля
		// Step width, depending on module width
		"scrollStep" : obj.width(),
		// Флаг, указывающий на то, выполняется ли анимация в данный момент
		// The flag indicating, whether is carried out animation at present
		"onmove" : "",
		// Устанавливаем интервал для автопрокрутки и получаем его идентификатор
		// We establish an interval for autoscrolling and its ID is got
		"interval" : function(){obj.data("intervalID", setInterval(function(){cdmxForward(obj)}, this.scrollspeed))},
		// Время анимации
		// Animation duration
		"animtime" : parseInt(obj.attr("data-animtime")),
		// Показывать ли подписи
		// Whether to show descriptions
		"imgtool" : parseInt(obj.attr("data-imgtool")),
		//Скрывать ли подписи
		// Whether to hide descriptions
		"tooltipAllways" : parseInt(obj.attr("data-tooltipallways")),
		// Автопрокрутка вкл/выкл
		// Autoscroll on/off
		"autoscroll" : parseInt(obj.attr("data-autoscroll")),
		// Интервал между прокрутками
		// Interval between scrollings
		"scrollspeed" : parseInt(obj.attr("data-scrollspeed")),
		// Настройки открывания ссылок
		// link target
		"linktarget" : parseInt(obj.attr("data-linktarget")),
		// Зацикливание по кругу
		// Cycling around
		"cycle" : parseInt(obj.attr("data-cycle")),
		// Отступ модуля от левого края
		// Module offset from the left
		"offsetLeft" : obj.offset().left
		});
		// Добавляем к объекту значение точки возврата к началу
		// backtracking point by the beginning
		obj.data().sliderBack = obj.data().scrollStep * (obj.data().imageLength - 1) * -1;
		// kill intervals if are disable
		if(obj.data().autoscroll == 0){
				obj.data().interval = function(){return false;};
				}
		//Установка ширины блока с картинками
		//Set of width of the unit with pictures
		obj.children(".codecarousel").css("width", obj.data("scrollStep") * obj.data("imageLength"));
		// Перебор картинок и установка курсора в зависимости от наличия ссылки (и установка ширины тоже тут)
		// Each of pictures and cursor type depending on link existence (and width set too here)
		obj.children(".codecarousel").children(".codeimage").each(function(){
		if(jQuery(this).children("img").attr("data-href")){
			jQuery(this).css("cursor", "pointer");
			}
		jQuery(this).css("width", obj.data("scrollStep"));
		});
	};
	
	// Перебор всех модулей и сохранение параметров
	// Each of all modules and saving parameters
	jQuery(".codegallery").each(function(){
		jQuery(this).show().css("maxWidth", jQuery(this).parent().width());
		codeModuleInit(jQuery(this));
		// Включаем автопрокрутку
		jQuery(this).data().interval();
		jQuery(this).data().onmove = 0;
		if(jQuery(this).data().tooltipAllways == 1){
			jQuery(this).find(".imgtooltip").show();
			}
		});
	
	// Прокрутка вперед
	// Move left
	function cdmxForward(obj){
		// Проверяем флаг 
		// check a flag
		if(obj.data().onmove == 0){
			// Блокируем действия пока выполняется анимация
			// lock actions while animation is executed
				obj.data().onmove = 1;
				// Выбираем контейнер с картинками
				// select the container with pictures
				var codecarousel = obj.children(".codecarousel");
				// Обновляем значение позиции
				// update value of a position
				this.carouselPosition = parseInt(codecarousel.css("marginLeft"));
			// Если карусель в точке возврата 
			// If a slideshow in backtracking point
			if(this.carouselPosition == obj.data("sliderBack")){
				// Если установлено зацикливание
				// If cycling is set
				if(obj.data().cycle == 1){
					// Клонируем первую картинку в конец галереи
					// clone the first picture in the gallery end
					codecarousel.children(".codeimage:first").clone().appendTo(codecarousel);
					// Останавливаем автопрокрутку
					// stop autoscroll
					clearInterval(obj.data("intervalID"));
					// Перевычисляем размер карусели в связи с увеличением количества картинок (за счет склонированной)
					// calculate the unit size because of increase in number of pictures
					obj.children(".codecarousel").css("width", obj.data("scrollStep") * obj.children(".codecarousel").children(".codeimage").length);
					// Выполняем анимацию
					// execute animation
					codecarousel.animate({
							"marginLeft" : "-=" + obj.data("scrollStep") + "px"
								}, obj.data().animtime, function(){
								jQuery(this).css("marginLeft", "0px");
								// Удаляем последнюю картинку в слайдере
								// delete the last picture in the module
								codecarousel.children(".codeimage:last").remove();
								// Убиваем еще один народившийся откуда-то интервал (сам не понял откуда он берется. Магия)
								// kill one more interval
								clearInterval(obj.data("intervalID"));
								// Перевычисляем ширину
								// calculate width
								codecarousel.css("width", obj.data("scrollStep") * obj.children(".codecarousel").children(".codeimage").length);
								// Запускаем автопрокрутку
								// launch autoscroll
								obj.data().interval();
								// Перезаписываем позицию карусели
								// update position
								this.carouselPosition = parseInt(codecarousel.css("marginLeft"));
								// Разблокируем дальнейшие действия пользователя
								// unlock further actions of the user
								obj.data().onmove = 0; 
								});
					// Отменяем все дальнейшие действия
					// return false :)
					return false;
					}
			// Выполняем анимацию возврата к началу
			// rollback
			codecarousel.animate({
				"marginLeft" : "0px"
				}, obj.data().animtime * 2, function(){
					this.carouselPosition = parseInt(codecarousel.css("marginLeft"));
					obj.data().onmove = 0; 
					})				
				} else {
			// Выполняем анимацию перехода к следующей картинке
			// next image
			codecarousel.animate({
				"marginLeft" : "-=" + obj.data("scrollStep") + "px"
				}, obj.data().animtime, function(){
					this.carouselPosition = parseInt(codecarousel.css("marginLeft"));
					obj.data().onmove = 0; 	
						});
				// Отменяем все, если установлен флаг блокировки
				// cancel everything if the lock flag is set
				}} else {return false}}
				
	// Прокрутка назад	(В общем то же самое, только в обратную сторону)		
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
			
		// Обработка кликов по навигации	
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
		
		
		// Процесс отслеживание картинок и смена подписей. 
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
								// Подписи
								this.tooltip = thisGallery.find(".codeimage.codeactive img").attr("alt");
								thisGallery.find(".imgtooltip div").text(this.tooltip);
								}}
							});
					});
			};
			setInterval(imgPositionMonitor, 50);
			
			// Подписи к картинкам
			// Image descriptions
			jQuery(".codegallery, .codeprev, .codenext").on("mouseover", function(){
				if(jQuery(this).data().imgtool == 1 && jQuery(this).data().tooltipAllways == 0){
				jQuery(this).find(".imgtooltip").stop(true).fadeIn();
					jQuery(".codegallery").on("mouseout", function(){
						jQuery(this).find(".imgtooltip").stop(true).fadeOut();
					});
				}});
			
			// Ссылки 
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

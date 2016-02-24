//tabs
var mydivs=new Array('#description','#indication','#composition','#properties','#delivery','#additionally');

function opcl(arr, e){
  if ($(e).css('display') == 'none'){
      for(var i in arr){   
         $(arr[i]).hide();     
      }
      $(e).show();       
  }
}
$(document).ready(function(){
  $('.modal__tel').inputmask("+7 (999) 999 - 99 - 99");
});

$(document).ready(function() {
	$('.view').click(function(e) {
		$('.view').removeClass('active');
		$(this).addClass('active');
	});
});

$('.toggle-drop').click(function(e) {
	e.preventDefault();
	var dropMenu = $(this).parent().find('ul');
	if (dropMenu.is(':hidden')) {
		dropMenu.slideDown(300);
		$(this).addClass('active');
	}
	else{
		dropMenu.slideUp(300);
		$(this).removeClass('active');
	}
});


$('.menu-btn').click(function(e) {
	var menu = $('.mobile-menu-list');
	if (menu.is(':hidden')){
		menu.slideDown(300);
		$(this).addClass('active');
	}
	else{
		menu.slideUp(300);
		$(this).removeClass('active');
	}
});

$('.search-btn').click(function(e) {
	var search = $('.mobile-search-container');
	if (search.is(':hidden')){
		search.slideDown(300);
		$(this).addClass('active');
	}
	else{
		search.slideUp(300);
		$(this).removeClass('active');
	}
});

$('.filter-btn').click(function(e) {
	var filter = $(this).next();
	if (filter.is(':hidden')){
		filter.slideDown(300);
		$(this).addClass('active');
	}
	else{
		filter.slideUp(300);
		$(this).removeClass('active');
	}
});

$('.mobile-filter-btn').click(function(e) {
	$('#container').toggleClass('open-filter');
});

//select
$('.slct').click(function(){
	var dropBlock = $(this).parent().find('.drop');

	if( dropBlock.is(':hidden') ) {
		dropBlock.slideDown(150);

		$(this).addClass('active');
		$('.drop').find('li').click(function(){
			var selectResult = $(this).html();
			$(this).parent().parent().find('input').val(selectResult);
			$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

			dropBlock.slideUp(150);
		});
	
	} else {
		$(this).removeClass('active');
		dropBlock.slideUp(150);
	}

	return false;
});

$(document).mouseup(function (e) {
  var container = $(".drop");
  if (container.has(e.target).length === 0){
      container.slideUp(150);
      $('.slct').removeClass('active');
  }
});

$(function() {
	$('.enter__link').click(function(e) {
		var profile = $('.profile__form_enter'),
				mainForm = $('.profile__form');
		e.preventDefault();
		if(mainForm.is(':visible')){
			mainForm.fadeOut(300);
			mainForm.removeClass('active');	
		}
		profile.fadeIn(300);
		profile.addClass('active');
	});
	$('.registration__link').click(function(e) {
		var profile = $('.profile__form_register'),
				mainForm = $('.profile__form');
		e.preventDefault();
		if(mainForm.is(':visible')){
			mainForm.fadeOut(300);
			mainForm.removeClass('active');	
		}
		profile.fadeIn(300);
		profile.addClass('active');
	});

	$('.close__profile').click(function(e) {
		var profile = $('.profile__form');
		e.preventDefault();
		if(profile.is(':visible')){
			profile.fadeOut(300);
			profile.removeClass('active');
		}
	});
});

$(function() {
	$('.in-basket').click(function(e) {
		e.preventDefault();
		$('.basket__modal').show();
	});
	$('.close__modal').click(function(e) {
		e.preventDefault();
		if($('.basket__modal').is(':visible'))
		$('.basket__modal').hide();
	});

	$(document).mouseup(function (e) {
	  var modal = $(".basket__modal");
	  if (modal.has(e.target).length === 0){
	    modal.hide()
	  }
	});
});
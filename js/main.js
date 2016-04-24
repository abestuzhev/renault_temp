/* by Duzz */
$(function(){
	if($('#car_main_filter .l_side_filter_outer').length > 0)
	{
		$("aside.aside").empty().append($('#car_main_filter .l_side_filter_outer'));
	}
	
    var clonedTable = $(".tbl-width").clone();
    $(".b-fl").append(clonedTable);
    var container = $(".b-fl-scroll");
    var topscroll = $(".topscroll");
    $(".scroll-fake").width($(".tbl-width").width() - $(".tbl-width th").width());
    topscroll.scroll(function(e){
        container.scrollLeft($(this).scrollLeft());
    });
    container.scroll(function(e){
        topscroll.scrollLeft($(this).scrollLeft());
    });

    $("input, textarea").placeholder();
    
    $(".hide-tr").hide();
    $(".oper-tbl .hide-link a").on("click", function() {
        $(this).parents(".oper-tbl tr").toggleClass("show-link");
        if($(this).parents(".oper-tbl tr").hasClass("show-link")) {
            $(this).not(".oper-tbl-compare .oper-tbl .hide-link a").text("Свернуть");
        }
        else {
            $(this).not(".oper-tbl-compare .oper-tbl .hide-link a").text("Развернуть");
        }
        $(".tr-" + $(this).attr("class")).toggle();
        setEqualHeight($(".b-fl tr"), $('.b-fl-scroll tr'));
        return false;
    });
    
    setEqualHeight($(".b-fl tr"), $('.b-fl-scroll tr'));
    
    $('.aside li').mouseover(function(e){
    	$(this).addClass('hover');
    	e.stopPropagation();
    });
    $('.aside li').mouseout(function(e){
    	$(this).removeClass('hover');
    	e.stopPropagation();
    });
    $('.blockToggle .head a').click(function (e) {
        e.preventDefault();
        var $this = $(this),
            block = $this.closest('.blockToggle'),
            toggleClass = 'toggleClosed';

        if (block.hasClass(toggleClass)) {
            block.removeClass(toggleClass);
        } else {
            block.addClass(toggleClass);
        }
    });
})
function setEqualHeight(sourceLines, aimLines){
	var lineHeight = new Array();
	sourceLines.each(function(i, e){
		lineHeight[i] = $(e).height();
	});
	aimLines.each(function(i, e){
		$(e).height(lineHeight[i]);
	});
}


      


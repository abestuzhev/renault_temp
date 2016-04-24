$(document).ready(function() {
    /* form service */
    $(".form_1 .SIMPLE_QUESTION_622 input").width("126px");
    $(".form_1 .SIMPLE_QUESTION_322 input").width("126px");
    //$(".form_1 .SIMPLE_QUESTION_322 .calendar-icon").next().remove();
    $(".form_1 .SIMPLE_QUESTION_744 input").css({ marginLeft : "10px", width : "206px" });
    $(".form_1 .SIMPLE_QUESTION_744 input").before('<input style="width: 46px;" placeholder="+7" size="2" maxlength="2" class="phone-prefix" value="+7" type="text">');
    $(".form_1 .phone-prefix").focus(function(){
        $(this).next().focus();
    });

    if (typeof($.mask) != 'undefined') {
        delete $.mask.definitions['9'];
        delete $.mask.definitions['*'];
        delete $.mask.definitions['a'];
        $.mask.definitions['9']='[0-9]';
        $(".form_1 .SIMPLE_QUESTION_744 .inputtext").mask("9999999999",{placeholder:"_"});
    };

    $.mask.definitions['1']='[0-2]';
    $.mask.definitions['2']='[0-5]';
    $.mask.definitions['9']='[0-9]';
    $(".form_1 .SIMPLE_QUESTION_622 input").mask("99:99",{placeholder:"_"});
    $(".form_1 .SIMPLE_QUESTION_322 input").mask("99.99.9999",{placeholder:"_"});

    /* form test-drive */

    $(".form_2 .SIMPLE_QUESTION_765 input").width("126px");
    $(".form_2 .SIMPLE_QUESTION_307 input").width("126px");

    $(".form_2 .SIMPLE_QUESTION_443 input").css({ marginLeft : "10px", width : "206px" });
    $(".form_2 .SIMPLE_QUESTION_443 input").before('<input style="width: 46px;" placeholder="+7" size="2" maxlength="2" class="phone-prefix" value="+7" type="text">');
    $(".form_2 .phone-prefix").focus(function(){
        $(this).next().focus();
    });

    if (typeof($.mask) != 'undefined') {
        delete $.mask.definitions['9'];
        delete $.mask.definitions['*'];
        delete $.mask.definitions['a'];
        $.mask.definitions['9']='[0-9]';
        $(".form_2 .SIMPLE_QUESTION_443 .inputtext").mask("9999999999",{placeholder:"_"});
    };

    $.mask.definitions['1']='[0-2]';
    $.mask.definitions['2']='[0-5]';
    $.mask.definitions['9']='[0-9]';
    $(".form_2 .SIMPLE_QUESTION_307 input").mask("99:99",{placeholder:"_"});
    $(".form_2 .SIMPLE_QUESTION_765 input").mask("99.99.9999",{placeholder:"_"});

    /* form order */

    $(".form_3 .SIMPLE_QUESTION_282 input").css({ marginLeft : "10px", width : "206px" });
    $(".form_3 .SIMPLE_QUESTION_282 input").before('<input style="width: 46px;" placeholder="+7" size="2" maxlength="2" class="phone-prefix" value="+7" type="text">');
    $(".form_3 .phone-prefix").focus(function(){
        $(this).next().focus();
    });

    if (typeof($.mask) != 'undefined') {
        delete $.mask.definitions['9'];
        delete $.mask.definitions['*'];
        delete $.mask.definitions['a'];
        $.mask.definitions['9']='[0-9]';
        $(".form_3 .SIMPLE_QUESTION_282 .inputtext").mask("9999999999",{placeholder:"_"});
    };

     /* form credit */

    $(".form_4 .SIMPLE_QUESTION_818 input").css({ marginLeft : "10px", width : "206px" });
    $(".form_4 .SIMPLE_QUESTION_818 input").before('<input style="width: 46px;" placeholder="+7" size="2" maxlength="2" class="phone-prefix" value="+7" type="text">');
    $(".form_4 .phone-prefix").focus(function(){
        $(this).next().focus();
    });

    if (typeof($.mask) != 'undefined') {
        delete $.mask.definitions['9'];
        delete $.mask.definitions['*'];
        delete $.mask.definitions['a'];
        $.mask.definitions['9']='[0-9]';
        $(".form_4 .SIMPLE_QUESTION_818 .inputtext").mask("9999999999",{placeholder:"_"});
    };

	/* form card */
	$(".form_5 .SIMPLE_QUESTION_634 input").css({ marginLeft : "10px", width : "206px" });
    $(".form_5 .SIMPLE_QUESTION_634 input").before('<input style="width: 46px;" placeholder="+7" size="2" maxlength="2" class="phone-prefix" value="+7" type="text">');
    $(".form_5 .phone-prefix").focus(function(){
        $(this).next().focus();
    });

    if (typeof($.mask) != 'undefined') {
        delete $.mask.definitions['9'];
        delete $.mask.definitions['*'];
        delete $.mask.definitions['a'];
        $.mask.definitions['9']='[0-9]';
        $(".form_5 .SIMPLE_QUESTION_634 .inputtext").mask("9999999999",{placeholder:"_"});
    };
	
	
    /* all form */
    $("input[type=submit]").addClass("btn-primary");
    $("input[type=submit]").addClass("btn");
    $(".form-horizontal input").click(function(){
        $(this).parent().parent().removeClass("error");
    });
});
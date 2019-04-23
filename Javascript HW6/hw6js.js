$(document).ready(function(){

$("#vegetarianMenu").click(function () {
        $(".vegt").fadeIn(1000);
        $(".vegn").fadeIn(1000);
        $(".meat").fadeOut(1000);
        $("html, body").animate({ scrollTop: $(".smBTN").offset().top
    }, 1000);
    });

$("#veganMenu").click(function () {
        $(".vegt").fadeOut(1000);
        $(".vegn").fadeIn(1000);
        $(".meat").fadeOut(1000);
        $("html, body").animate({ scrollTop: $(".smBTN").offset().top
    }, 1000);
    });

$("#regularMenu").click(function () {
        $(".vegt").fadeIn(1000);
        $(".vegn").fadeIn(1000);
        $(".meat").fadeIn(1000);
        $("html, body").animate({ scrollTop: $(".smBTN").offset().top
    }, 1000);
    });
    
    $("#defaultCheck1").click(function () {
        $("html, body").animate({ scrollTop: $("#menuForm").offset().top
    }, 1000);
    });
    
$("#btnApp").click(function () {
    $("html, body").animate({ scrollTop: $("#appStart").offset().top
    }, 1000);
});
    
$("#btnSal").click(function () {
    $("html, body").animate({ scrollTop: $("#salStart").offset().top
    }, 1000);
});
    
$("#btnSan").click(function () {
    $("html, body").animate({ scrollTop: $("#sanStart").offset().top
    }, 1000);
});
    
$("#btnEnt").click(function () {
    $("html, body").animate({ scrollTop: $("#entStart").offset().top
    }, 1000);
});
    
$("#btnDes").click(function () {
    $("html, body").animate({ scrollTop: $("#desStart").offset().top
    }, 1000);
});
    $("#btnReset").click(function () {
        $(".vegt").fadeIn(100);
        $(".vegn").fadeIn(100);
        $(".meat").fadeIn(100);
        $("#userName").val('');
        $("#userAddress").val('');
        $("html, body").animate({ scrollTop: $("#jumbo").offset().top
    }, 1000);
        $("#defaultCheck1").prop("checked", false);
    });
    
});
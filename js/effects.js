// TODO: 
// Refactor
// Add animations

$("#left-pane").click(function(){
    $("#left-pane").css({
        "display": "none"
    });
    $("#collapsed-pane").css({
        "display": "block"
    });
    $("#main-content").removeClass("pure-u-md-20-24");
    $("#main-content").addClass("pure-u-sm-23-24");
});

$("#collapsed-pane").click(function(){
    $("#collapsed-pane").css({
        "display": "none"
    });
    $("#left-pane").css({
        "display": "block"
    });
    $("#main-content").removeClass("pure-u-sm-23-24");
    $("#main-content").addClass("pure-u-md-20-24");
});
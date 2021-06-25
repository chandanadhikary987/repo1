$(document).ready(function() {
    var e = $(".subTotal"),
        r = e.text(),
        s = $(".addonPart"),
        t = $(".prd_detls").find("h4:contains('Subscription')").length;
    if (r <= 0) $(".progress-bar-section").hide();
    else if (r < 59 && !t) {
        var o = Math.round(r / 59 * 100);
        $("#price-away-from").text(59 - r), $("#progress-bar-incomplete").show().find(".progress-bar").css("width", o + "%").text(o + "%"), $("#progress-bar-complete").hide()
    } else $("#progress-bar-incomplete").hide(), $("#progress-bar-complete").show().find(".progress-bar").css("width", "100%").text("100%");
    e.bind("DOMSubtreeModified", function() {
        setTimeout(function() {
            var r = e.text(),
                t = $(".prd_detls").find("h4:contains('Subscription')").length;
            if (r <= 0) $(".progress-bar-section").hide();
            else if (r < 59 && !t) {
                var o = Math.round(r / 59 * 100);
                $("#price-away-from").text(59 - r), $("#progress-bar-incomplete").show().find(".progress-bar").css("width", o + "%").text(o + "%"), $("#progress-bar-complete").hide()
            } else $("#progress-bar-incomplete").hide(), $("#progress-bar-complete").show().find(".progress-bar").css("width", "100%").text("100%");
            r < 9 ? s.hide() : s.show()
        }, 1e3)
    })
});  
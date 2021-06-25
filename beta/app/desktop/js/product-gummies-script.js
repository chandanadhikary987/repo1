function hideProductOnchange(e) {
    jQuery.each(e, function(e, t) {
        $(".checkCol-" + t).hide()
    })
}

function displayProductOnchange(e, t) {
    jQuery.each(e, function(d, a) {
        if ($(".checkCol-" + a).show(), 27 == t) $(".addAttr-" + e[0]).attr("checked") && $(".addAttr-" + e[0]).prop("checked", !1), $(".addAttr-" + e[1]).prop("checked", !0);
        else if (29 == t) {
            $(".addAttr-" + e[0]).attr("checked") && $(".addAttr-" + e[0]).prop("checked", !1), $(".addAttr-" + e[1]).prop("checked", !0)
        } else if (31 == t) {
            $(".addAttr-" + e[0]).attr("checked") && $(".addAttr-" + e[0]).prop("checked", !1), $(".addAttr-" + e[1]).prop("checked", !0)
        } else if (26 == t) {
            $(".addAttr-" + e[1]).attr("checked") && $(".addAttr-" + e[1]).prop("checked", !1), $(".addAttr-" + e[0]).prop("checked", !0)
        } else if (28 == t) {
            $(".addAttr-" + e[1]).prop("checked") && $(".addAttr-" + e[1]).prop("checked", !1), $(".addAttr-" + e[0]).prop("checked", !0)
        } else if (30 == t) {
            $(".addAttr-" + e[1]).attr("checked") && $(".addAttr-" + e[1]).prop("checked", !1), $(".addAttr-" + e[0]).prop("checked", !0)
        }
        displayPriceTryOntime(e[0], t, e[1])
    })
}

function hidesmallCartProductOnchange(e) {
    jQuery.each(e, function(e, t) {
        $(".smallcartLabel-" + t).hide()
    })
}

function displaysmallCartProductOnchange(e, t) {
    jQuery.each(e, function(d, a) {
        if ($(".smallcartLabel-" + a).show(), 27 == t) {
            $(".smalladdAttr-" + e[0]).attr("checked") && $(".smalladdAttr-" + e[0]).prop("checked", !1);
            var c = $(".smalladdAttr-" + e[1]).attr("pro-display-price"),
                r = $(".smalladdAttr-" + e[1]).attr("pro-dis-price"),
                l = $(".smalladdAttr-" + e[1]).attr("pro-dis-percent");
            $(".smalladdAttr-" + e[0]).hasClass("selected") ? $(".smalladdAttr-" + e[0]).removeClass("selected") : $(".smalladdAttr-" + e[1]).addClass("selected"), $(".smalladdAttr-" + e[1]).attr("checked", "checked"), $("#clickedProId").val(e[1]), $(".proPriceChange").html("$" + c + "<span>Save: $" + r + " (" + l + "%)</span>")
        } else if (29 == t) {
            $(".smalladdAttr-" + e[0]).attr("checked") && $(".smalladdAttr-" + e[0]).prop("checked", !1);
            c = $(".smalladdAttr-" + e[1]).attr("pro-display-price"), r = $(".smalladdAttr-" + e[1]).attr("pro-dis-price"), l = $(".smalladdAttr-" + e[1]).attr("pro-dis-percent");
            $(".smalladdAttr-" + e[0]).hasClass("selected") ? $(".smalladdAttr-" + e[0]).removeClass("selected") : $(".smalladdAttr-" + e[1]).addClass("selected"), $(".smalladdAttr-" + e[1]).attr("checked", "checked"), $("#clickedProId").val(e[1]), $(".proPriceChange").html("$" + c + "<span>Save: $" + r + " (" + l + "%)</span>")
        } else if (31 == t) {
            $(".smalladdAttr-" + e[0]).attr("checked") && $(".smalladdAttr-" + e[0]).prop("checked", !1);
            c = $(".smalladdAttr-" + e[1]).attr("pro-display-price"), r = $(".smalladdAttr-" + e[1]).attr("pro-dis-price"), l = $(".smalladdAttr-" + e[1]).attr("pro-dis-percent");
            $(".smalladdAttr-" + e[0]).hasClass("selected") ? $(".smalladdAttr-" + e[0]).removeClass("selected") : $(".smalladdAttr-" + e[1]).addClass("selected"), $(".smalladdAttr-" + e[1]).attr("checked", "checked"), $("#clickedProId").val(e[1]), $(".proPriceChange").html("$" + c + "<span>Save: $" + r + " (" + l + "%)</span>")
        } else if (26 == t) {
            $(".smalladdAttr-" + e[1]).attr("checked") && $(".smalladdAttr-" + e[1]).prop("checked", !1);
            c = $(".smalladdAttr-" + e[0]).attr("pro-display-price"), r = $(".smalladdAttr-" + e[0]).attr("pro-dis-price"), l = $(".smalladdAttr-" + e[0]).attr("pro-dis-percent");
            $(".smalladdAttr-" + e[1]).hasClass("selected") ? $(".smalladdAttr-" + e[1]).removeClass("selected") : $(".smalladdAttr-" + e[0]).addClass("selected"), $(".proPriceChange").html("$" + c + "<span>Save: $" + r + " (" + l + "%)</span>"), $(".smalladdAttr-" + e[0]).attr("checked", "checked"), $("#clickedProId").val(e[0])
        } else if (28 == t) {
            $(".smalladdAttr-" + e[1]).prop("checked") && $(".smalladdAttr-" + e[1]).prop("checked", !1);
            c = $(".smalladdAttr-" + e[0]).attr("pro-display-price"), r = $(".smalladdAttr-" + e[0]).attr("pro-dis-price"), l = $(".smalladdAttr-" + e[0]).attr("pro-dis-percent");
            $(".smalladdAttr-" + e[1]).hasClass("selected") ? $(".smalladdAttr-" + e[1]).removeClass("selected") : $(".smalladdAttr-" + e[0]).addClass("selected"), $(".proPriceChange").html("$" + c + "<span>Save: $" + r + " (" + l + "%)</span>"), $(".smalladdAttr-" + e[0]).attr("checked", "checked"), $("#clickedProId").val(e[0])
        } else if (30 == t) {
            $(".smalladdAttr-" + e[1]).attr("checked") && $(".smalladdAttr-" + e[1]).prop("checked", !1);
            c = $(".smalladdAttr-" + e[0]).attr("pro-display-price"), r = $(".smalladdAttr-" + e[0]).attr("pro-dis-price"), l = $(".smalladdAttr-" + e[0]).attr("pro-dis-percent");
            $(".smalladdAttr-" + e[1]).hasClass("selected") ? $(".smalladdAttr-" + e[1]).removeClass("selected") : $(".smalladdAttr-" + e[0]).addClass("selected"), $(".proPriceChange").html("$" + c + "<span>Save: $" + r + " (" + l + "%)</span>"), $(".smalladdAttr-" + e[0]).attr("checked", "checked"), $("#clickedProId").val(e[0])
        }
    })
}

function hideMobileProductOnchange(e) {
    jQuery.each(e, function(e, t) {
        $(".checkMobileCol-" + t).hide()
    })
}

function displayMobileProductOnchange(e, t) {
    jQuery.each(e, function(d, a) {
        if ($(".checkMobileCol-" + a).show(), 27 == t) $(".addMobileAttr-" + e[0]).attr("checked") && $(".addMobileAttr-" + e[0]).prop("checked", !1), $(".addMobileAttr-" + e[1]).prop("checked", !0);
        else if (29 == t) {
            $(".addMobileAttr-" + e[0]).attr("checked") && $(".addMobileAttr-" + e[0]).prop("checked", !1), $(".addMobileAttr-" + e[1]).prop("checked", !0)
        } else if (31 == t) {
            $(".addMobileAttr-" + e[0]).attr("checked") && $(".addMobileAttr-" + e[0]).prop("checked", !1), $(".addMobileAttr-" + e[1]).prop("checked", !0)
        } else if (26 == t) {
            $(".addMobileAttr-" + e[1]).attr("checked") && $(".addMobileAttr-" + e[1]).prop("checked", !1), $(".addMobileAttr-" + e[0]).prop("checked", !0)
        } else if (28 == t) {
            $(".addMobileAttr-" + e[1]).prop("checked") && $(".addMobileAttr-" + e[1]).prop("checked", !1), $(".addMobileAttr-" + e[0]).prop("checked", !0)
        } else if (30 == t) {
            $(".addMobileAttr-" + e[1]).attr("checked") && $(".addMobileAttr-" + e[1]).prop("checked", !1), $(".addMobileAttr-" + e[0]).prop("checked", !0)
        }
    }), displayPriceTryOntimeMobile(e[0], t, e[1])
}

function smallCartoption() {
    var e = $("#smallCartoption").val(),
        t = $("#clickedProId").val();
    if (t) var d = t;
    else d = $('[name="smallCartProductid"]:checked').val();
    if ("26" == e) {
        var a = [26, 27];
        hidesmallCartProductOnchange([28, 29, 30, 31]), displaysmallCartProductOnchange(a, d)
    }
    if ("28" == e) {
        a = [28, 29];
        hidesmallCartProductOnchange([26, 27, 30, 31]), displaysmallCartProductOnchange(a, d)
    }
    if ("30" == e) {
        a = [30, 31];
        hidesmallCartProductOnchange([26, 27, 28, 29]), displaysmallCartProductOnchange(a, d)
    }
}

function mobileFomoProduct(e) {
    var t = $("#mobileProductId").val(),
        d = $('[name="mobileProductid"]:checked').attr("product-id");
    if ($(".addMobileAttr-" + t).prop("checked", !0), "26" == t) {
        var a = [26, 27];
        hideMobileProductOnchange([28, 29, 30, 31]), displayMobileProductOnchange(a, d)
    }
    if ("28" == t) {
        a = [28, 29];
        hideMobileProductOnchange([31, 30, 26, 27]), displayMobileProductOnchange(a, d)
    }
    if ("30" == t) {
        a = [30, 31];
        hideMobileProductOnchange([26, 27, 28, 29]), displayMobileProductOnchange(a, d)
    }
}

function onloadProductSelected() {
    var e = $("#getProductIDForSelectBox").val();
    $("#ProductSelection option[value=" + e + "]").prop("selected", !0);
    var t = $("#getProductID").val();
    preSelectProduct(e, t), $("#smallCartoption").val(e), $("#clickedProId").val(t), smallCartoption(), $("#mobileProductId").val(e), $('[name="mobileProductid"]:checked').attr("product-id", t), mobileFomoProduct(t)
}

function preSelectProduct(e, t) {
    if ($(".addAttr-" + e).prop("checked", !0), "26" == e) {
        var d = [26, 27];
        hideProductOnchange([28, 29, 30, 31]), displayProductOnchange(d, t)
    } else if ("28" == e) {
        d = [28, 29];
        hideProductOnchange([26, 27, 30, 31]), displayProductOnchange(d, t)
    } else if ("30" == e) {
        d = [30, 31];
        hideProductOnchange([26, 27, 28, 29]), displayProductOnchange(d, t)
    }
}

function displayPriceTryOntime(e, t, d) {
    var a = $(".addAttr-" + e).attr("display-price-ne");
    $(".try_One_time").html("(TRY ONE-TIME INSTEAD FOR $" + a + ")"), $(".try_One_time").attr("productid", e)
}

function displayPriceTryOntimeMobile(e, t, d) {
    var a = $(".addAttr-" + e).attr("display-price-ne");
    $(".try_One_timeMobile").html("(TRY ONE-TIME INSTEAD FOR $" + a + ")"), $(".try_One_timeMobile").attr("productid", e)
}

function changeSelectedProductNew() {
    var e = $("#prodGummyQty").val(),
        t = $("input[name=second-switch]:checked").val(),
        d = window.offerProducts[e][t];
    console.log(d), "subscription" == t ? $("p.save20Text").show() : $("p.save20Text").hide(), $(".process_checkout_btn span.price").text("$" + parseInt(d.displayPrice)), $('input[name="productid"]').prop("checked", !1), $(".addAttr-" + d.product_id).prop("checked", !0).trigger("change")
}
$(document).ready(function() {
    $(".productIdValue").on("click", function(e) {
        e.preventDefault();
        var t = $('[name="smallCartProductid"]:checked').attr("product-id"),
            d = $(".smalladdAttr-" + t).attr("pro-display-price"),
            a = $(".smalladdAttr-" + t).attr("pro-dis-price"),
            c = $(".smalladdAttr-" + t).attr("pro-dis-percent");
        $("#clickedProId").val(t), 27 == t ? ("checked" == $(".smalladdAttr-26").attr("checked") && ($(".smalladdAttr-26").removeAttr("checked"), $(".smalladdAttr-27").prop("checked", !1)), $(".smalladdAttr-27").attr("checked", "checked"), $(".smalladdAttr-27").addClass("selected"), $(".smalladdAttr-26").hasClass("selected") && $(".smalladdAttr-26").removeClass("selected")) : 26 == t ? ("checked" == $(".smalladdAttr-27").attr("checked") && $(".smalladdAttr-27").removeAttr("checked"), $(".smalladdAttr-26").attr("checked", "checked"), $(".smalladdAttr-26").addClass("selected"), $(".smalladdAttr-27").hasClass("selected") && $(".smalladdAttr-27").removeClass("selected")) : 28 == t ? ("checked" == $(".smalladdAttr-29").attr("checked") && $(".smalladdAttr-29").removeAttr("checked"), $(".smalladdAttr-29").hasClass("selected") && $(".smalladdAttr-29").removeClass("selected"), $(".smalladdAttr-28").attr("checked", "checked"), $(".smalladdAttr-28").addClass("selected")) : 29 == t ? ("checked" == $(".smalladdAttr-28").attr("checked") && $(".smalladdAttr-28").removeAttr("checked"), $(".smalladdAttr-28").hasClass("selected") && $(".smalladdAttr-28").removeClass("selected"), $(".smalladdAttr-29").attr("checked", "checked"), $(".smalladdAttr-29").addClass("selected")) : 30 == t ? ("checked" == $(".smalladdAttr-31").attr("checked") && $(".smalladdAttr-31").removeAttr("checked"), $(".smalladdAttr-30").attr("checked", "checked"), $(".smalladdAttr-30").addClass("selected"), $(".smalladdAttr-31").hasClass("selected") && $(".smalladdAttr-31").removeClass("selected")) : 31 == t && ("checked" == $(".smalladdAttr-30").attr("checked") && $(".smalladdAttr-30").removeAttr("checked"), $(".smalladdAttr-31").attr("checked", "checked"), $(".smalladdAttr-31").addClass("selected"), $(".smalladdAttr-30").hasClass("selected") && $(".smalladdAttr-30").removeClass("selected")), $(".proPriceChange").html("$" + d + "<span>Save: $" + a + " (" + c + "%)</span>")
    })
}), $("select").on("change", function() {
    var e = $("#ProductSelection").val(),
        t = $('[name="productid"]:checked').attr("product-id");
    if ($(".addAttr-" + e).prop("checked", !0), "26" == e) {
        var d = [26, 27];
        hideProductOnchange([28, 29, 30, 31]), displayProductOnchange(d, t)
    } else if ("28" == e) {
        d = [28, 29];
        hideProductOnchange([26, 27, 30, 31]), displayProductOnchange(d, t)
    } else if ("30" == e) {
        d = [30, 31];
        hideProductOnchange([26, 27, 28, 29]), displayProductOnchange(d, t)
    }
}), $(".try_One_time").click(function() {
    var e = $(this).attr("productid");
    $(".addAttr-" + e).prop("checked", !0), $(".cd-add-to-cart").trigger("click")
}), $(".try_One_timeMobile").click(function() {
    var e = $(this).attr("productid");
    $(".addAttr-" + e).prop("checked", !0), $(".cd-add-to-cart").trigger("click")
}), $("#prodGummyQty").on("change", changeSelectedProductNew), $("input[name=second-switch]").on("change", changeSelectedProductNew), $(".newCdtCart").click(function() {
    $('[name="productid"]:checked').attr("product-id");
    $(".cd-add-to-cart").trigger("click")
}), $(".newaddToCart").click(function() {
    var e = $('[name="productid"]:checked').attr("product-id");
    console.log(e), $(".cd-add-to-cart").trigger("click")
}); 
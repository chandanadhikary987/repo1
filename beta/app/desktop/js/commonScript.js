/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);

/*
*
*Cart.js
*/
  jQuery(document).ready(function($) {

    var cartWrapper = $('.cd-cart-container');

    var productId = $('[name="productid"]:checked').attr('productId');

    if (cartWrapper.length > 0) {

        //store jQuery objects
        var cartBody = cartWrapper.find('.body')
        var cartList = cartWrapper.find('ul').eq(0);
        var cartTotal = cartWrapper.find('.savingsCell').find('span');
        var cartMaxTotal = cartWrapper.find('.savingsCell').find('label');
        var cartSaveTotal = cartWrapper.find('.savingsCell').find('div');

        var cartTrigger = cartWrapper.children('.cd-cart-trigger');
        var cartCount = $('.count');
        var addToCartBtn = $('.cd-add-to-cart');
        var addToCartAddonBtn = $('.cd-addon-to-cart');
        var addToCartMobileBtn=$('.mobileCartNew');
        var undo = cartWrapper.find('.undo');
        var undoTimeoutId;
        var productPageName=$("#productPageName").val();
        //start cart functionality

        addToCartBtn.on('click', function(event) {
          $('body').addClass('openCart');
      

            event.preventDefault();
            

            $(".multi-product-quantity").val('');
            var productId = $('[name="productid"]:checked').attr('productId');
            var displayPrice = $('[name="productid"]:checked').attr('display-price');
            var productPageName=$("#productPageName").val();
        

               // Partypack Energy shot
            if(productId=='88' || productId=='89' ){
            	var productPageName='partypack-trop.php';
            }
            if(productId=='90' || productId=='91' ){
            	var productPageName='partypack-coco.php';
            }
           if(productId=='92' || productId=='93' ){
            	var productPageName='partypack-pine.php';
            }

            

          

            // create Session through ajax
            if ($("#target_cart").hasClass("added")) {} else {
                $.ajax({
                    url: '/ajax-cart.php',
                    data: {
                        "productId": productId,"productPageName":productPageName
                    },
                    type: 'post',
                    dataType: "json",
                    beforeSend:function(x){
                   $("#loading-indicator").show();
                     },
                    success: function(result) {
                       $("#loading-indicator").hide();
                        $(".count").html('0');
                        var displayPrice = $('[name="productid"]:checked').attr('display-price');
                        var actualPrice = $('[name="productid"]:checked').attr('actual-price');
                        var ProductName = $('[name="productid"]:checked').attr('product-name');
                        var product_id = $('[name="productid"]:checked').attr('product-id');
                        var campaignId = $('[name="productid"]:checked').attr('campaign-Id');
                        var disPercent = $('[name="productid"]:checked').attr('discount-percentage-price');
                        var discountPercentage = $('[name="productid"]:checked').attr('discount-percentage-price');
                        var imagePath = $("#imagePath").val();

                        $(".upgradedisplay").show();
                        console.log(productPageName,"productPageName");

                         // Remove all main prouct Dom if any
                         //Gummies
                             if(productPageName=='product-gummies.php'){
                             	$(".buyrow_44").hide();
                               var proAddClass="gummies";
                              
                           }
                         //vegan
                            if(productPageName=='product-vegan-cbd.php'){
                            	$(".buyrow_46").hide();
                               var proAddClass="vegan"; 
                               
                           }
                           //Tincture
                            if(productPageName=='product-tincture.php'){
                            	$(".buyrow_45").hide();
                            var proAddClass="tincture";
                          
                           }

                           // For CBD Candy
                            if(productPageName=='cbd-candy.php'){
                            var proAddClass="candy";
                          
                           }
                           // For cbd-cbn-oil-for-sleep
                            if(productPageName=='cbd-cbn-oil-for-sleep.php'){
                            var proAddClass="bigspoon";
                          
                           }


                            if(productPageName=='national-coming-out-day.php'){
                            var proAddClass="candy";
                           
                           }
                           
                           //Rando
                           if(productPageName=='rando-bundle.php'){
                            var proAddClass="rando-bundle";
                           }
                           //EveryDay Scaries
                           if(productPageName=='everyday-scaries.php'){
                            var proAddClass="everyday-scaries";
                           }
                             // Side piece

                           if(productPageName=='product-bundle-sidePiece.php'){
                            var proAddClass="bundle-sidePiece";
                           }
                           if(productPageName=='cuddle-bundle.php'){
                            var proAddClass="cuddle-bundle";
                           }
                           if(productPageName=='holiday-scaries.php'){
                            var proAddClass="holiday-scaries";
                           }

                           if(productPageName=='super-mom-bundle.php'){
                            var proAddClass="super-mom-bundle";
                           }



                           // Prtypack Bundle
                            if(productPageName=='partypack-trop.php'){
                            var proAddClass="partypack-trop";
                           }
                            if(productPageName=='partypack-coco.php'){
                            var proAddClass="partypack-coco";
                           }
                            if(productPageName=='partypack-pine.php'){
                            var proAddClass="partypack-pine";
                           }

                           //Bra bra-bearies
                           if(productPageName=='bra-bearies.php'){
                           	var proAddClass="bra-bearies";
                           }

                           //Tub Cubs
                           if(productPageName=='tub-cubs.php'){
                           	var proAddClass="tub-cubs";
                           }

                         

                          // alert(proAddClass);
                            if ($(".delete-item").hasClass("mainProd-"+proAddClass)) {
                               
                               if(proAddClass=='gummies'){
                                var classNamePro="mainProd-gummies";
                               }
                               if(proAddClass=='vegan'){
                                var classNamePro="mainProd-vegan";
                               }
                               if(proAddClass=='tincture'){
                                var classNamePro="mainProd-tincture";
                               }
                               // CBD Candy
                               if(proAddClass=='candy'){
                                var classNamePro="mainProd-candy";
                               }

                               // bigspoon
                               if(proAddClass=='bigspoon'){
                                var classNamePro="mainProd-bigspoon";
                               }

                               //bra-bearies
                                if(proAddClass=='bra-bearies'){
                                var classNamePro="mainProd-bra-bearies";
                               }

                               //tub-cubs
                                if(proAddClass=='tub-cubs'){
                                var classNamePro="mainProd-tub-cubs";
                               }
                               
                               // Bundles

                                if(proAddClass=='bundle-sidePiece'){
                                var classNamePro="mainProd-bundle-sidePiece";
                               }
                               if(proAddClass=='cuddle-bundle'){
                                var classNamePro="mainProd-cuddle-bundle";
                               }
                                //super-mom-bundle
                                if(proAddClass=='super-mom-bundle'){
                                var classNamePro="mainProd-super-mom-bundle";
                               }

                                
                              
                               //rando Bundle
                                if(proAddClass=='rando-bundle'){
                                var classNamePro="mainProd-rando-bundle";
                               }
                                //holiday-scaries
                                if(proAddClass=='holiday-scaries'){
                                var classNamePro="mainProd-holiday-scaries";
                               }

                               //Everyday scaries
                                if(proAddClass=='everyday-scaries'){
                                var classNamePro="mainProd-everyday-scaries";
                               }
                               
                               //partypack

                                 if(proAddClass=='partypack-trop'){
                                var classNamePro="mainProd-partypack-trop";
                               }
                               if(proAddClass=='partypack-coco'){
                                var classNamePro="mainProd-partypack-coco";
                               }
                               if(proAddClass=='partypack-pine'){
                                var classNamePro="mainProd-partypack-pine";
                               }

                                var deductPrice = $("."+classNamePro).attr('deduction-price');
                                var deleteProductId = $("."+classNamePro).attr('delete-product-id');
                                var deductMaxPrice = $("."+classNamePro).attr('max-price');

                                var deductDisPercent = $("."+classNamePro).attr('dis-percentage');
                               
                               var deductionFromSave=Number(deductMaxPrice - deductPrice).toFixed(2);
                              var cartTotalSaveAfterDed= Number(cartMaxTotal.html()) - deductionFromSave;
                              cartMaxTotal.html(cartTotalSaveAfterDed);
                              var deductCartPrice=deductPrice;
                            var cartTotalAfterDed= (Number(cartTotal.html()) - deductCartPrice).toFixed(2);
                              
                              cartTotal.html(cartTotalAfterDed);
                             //alert(cartTotal.html());
                           
                                  // if tincture addon added
                               if ($(".delete-item").hasClass("mainProd-gummies") || $(".delete-item").hasClass("addon-prod-addon-Gummies") || productPageName=='product-gummies.php'){
                                $(".buyrow_44").hide();
                                                                
                               }else{
                                 
                                $(".buyrow_44").show();
                                var savePr44="31.95";
                                var img44="/app/desktop/images/gummies-cart.png";
                                var eachVal44="$ 18.00 / each";
                                var proName44="1 bottle CBD Gummies (Stress Relief) - $18";
                                $(".buyrow_44").find('img').prop('src',img44);
                                var savePriceAddon=Number($(".addon-prod-addon-Gummies").attr('dis-percentage'));
                                                       

                               }

                                // if tincture addon added
                               if ($(".delete-item").hasClass("mainProd-tincture") || $(".delete-item").hasClass("addon-prod-addon-Tincture") || productPageName=='product-tincture.php'){
                                $(".buyrow_45").hide();
                               
                                                    
                               } else{
                               // addon Section display
                                   
                                $(".buyrow_45").show();
                                var savePr45="28.27";
                                var img45="/app/desktop/images/tincture-cart.png";
                                var eachVal45="$ 29.00 / each";
                                var proName45="1 bottle CBD Oil (Sleep) - $29";
                                 $(".buyrow_45").find('img').prop('src',img45);
                               }
                                    // if tincture addon added
                               if ($(".delete-item").hasClass("mainProd-vegan") || $(".delete-item").hasClass("addon-prod-addon-Vegan") || productPageName=='product-vegan-cbd.php'){
                                $(".buyrow_46").hide();
                                      
                                                    
                               }else{
                               
                                // addon Section display
                                $(".buyrow_46").show();
                                var savePr46="23.99";
                                var img46="/app/desktop/images/vegan-cart.png";
                                var eachVal46="$ 19.00 / each";
                                var proName46="1 bottle Vegan CBD gummies (Stress Relief) - $19";
                                
                                $(".buyrow_46").find('img').prop('src',img46);
                               }

                       
                            
                                                         
                          removeProduct($('.product-'+proAddClass), 0, 0, deleteProductId, 0);
                           
                            }
                        
                        

                        if (result.msg=='success') {

                           
                            addToCart(displayPrice,actualPrice,discountPercentage,ProductName,product_id,campaignId,disPercent,productPageName);
                            $(".emptycart").hide();
                            $('body').addClass('openCart');
                            display50Off();

                        } else {
                            $(".emptycart").show();
                        }


                    }

                    
                });
            }


        });
        // @end adtocart
        //addon add to cart start
        addToCartAddonBtn.on('click', function(event) {

            var productAddonId = $(this).attr('product-addon-id');
            var addonProductActualPrice = $("#addonProductActualPrice_" + productAddonId).val();
            var addonProductPrice = $("#addonProductPrice_" + productAddonId).val();
            var addonID = $("#addonID_" + productAddonId).val();
            var campaignId = $("#addonID_" + productAddonId).val();
            var discountPercentage = $("#discountPercentage_" + productAddonId).val();
            if ($("#target_" + productAddonId).hasClass("added")) {
                //
            } else {

                $.ajax({
                    url: '/ajax-cart.php',
                    data: {
                        "productId": addonID
                    },
                    type: 'post',
                    dataType: "json",
                     beforeSend:function(x){
                   $("#loading-indicator").show();
                     },

                    success: function(result) {
                      $("#loading-indicator").hide();

                        if (productAddonId) {
                            addToCartAddon(addonProductPrice, addonProductActualPrice, productAddonId, campaignId, discountPercentage);
                            $(".emptycart").hide();
                            //$('body').addClass('openCart');
                            $(".buyrow_" + productAddonId).hide();
                            $(".buyrow_" + productAddonId).addClass('addedToCart');
                            var totalNotaddonadded = $('.buyRow:not(.addedToCart)').length;
                             display50Off();
                            

                        } else {
                            $(".emptycart").show();
                        }

                    }
                });
            }


        });



        // Proced checkout
        $(".ProceedToCheck").on('click', function(event) {

            var Quantity = $("input[name='quantity[]']")
                .map(function() {

                    return $(this).val();

                }).get();
            var product_ids = $("input[name='product_id[]']")
                .map(function() {

                    return $(this).val();

                }).get();
            $.ajax({
                url: '/ajax-cart-save-quantity.php',
                data: {
                    "quantity": Quantity,
                    "product_ids": product_ids
                },
                type: 'post',
                dataType: "json",
                beforeSend:function(x){
                   $("#loading-indicator").show();
                     },
                success: function(result) {
                  $("#loading-indicator").hide();
                      var mailExitQueryString=$(".ProceedToCheck").attr('data-query-email');
                     // alert(mailExitQueryString);
                     sessionStorage.setItem('backToCartUrl', window.location.href);
                  if(mailExitQueryString){
                   
                    window.location.href = "/checkout?email="+mailExitQueryString;
                  }else{
                    window.location.href = "/checkout";
                  }

                }

            });


        });

        //open/close cart
        cartTrigger.on('click', function(event) {
            event.preventDefault();
            toggleCart();
        });

        //close cart when clicking on the .cd-cart-container::before (bg layer)
        cartWrapper.on('click', function(event) {
            if ($(event.target).is($(this))) toggleCart(true);
        });

        //delete an item from the cart
        cartList.on('click', '.delete-item', function(event) {
            event.preventDefault();
            var QuantiDel=1;
             var proIdentity=$(this).attr('pro-identity');
            //alert(proIdentity);
        
             if(proIdentity=='gummies'){
             	   $(".buyrow_44").show();
                var proClassIdentitiy="gummies";
                if ($(".delete-item").hasClass("mainProd-vegan") 
                	 || $(".delete-item").hasClass("mainProd-tincture") 
                	 || $(".delete-item").hasClass("mainProd-bra-bearies")  
                	 || $(".delete-item").hasClass("mainProd-tub-cubs")
                	 || $(".delete-item").hasClass("mainProd-candy")
                	 || $(".delete-item").hasClass("mainProd-bigspoon")              	
                	 || $(".delete-item").hasClass("mainProd-rando-bundle")  
                	 || $(".delete-item").hasClass("mainProd-holiday-scaries")        	
                	 || $(".delete-item").hasClass("mainProd-partypack-trop")
                	 || $(".delete-item").hasClass("mainProd-partypack-coco")
                	 || $(".delete-item").hasClass("mainProd-partypack-pine")  
                	 || $(".delete-item").hasClass("mainProd-everyday-scaries")                 	            	
                	 || $(".delete-item").hasClass("mainProd-bundle-sidePiece")                	
                	 || $(".delete-item").hasClass("mainProd-cuddle-bundle")
                	 || $(".delete-item").hasClass("mainProd-everyday-scaries") 
                	 || $(".delete-item").hasClass("mainProd-super-mom-bundle")                
                	  ){
                   
                }
                else{
                  removeAllAddon();
                }
                   QuantiDel=1;
            // Delete session Dta
        
                     
            var deductPrice = $(this).attr('deduction-price')*QuantiDel;
            var deductMaxPrice = $(this).attr('max-price')*QuantiDel;
            var deductDisPercent = $(this).attr('dis-percentage')*QuantiDel;
        
          
         delte_cart($(this).attr('campaign-id'),proIdentity);
         removeProduct($(event.target).parents('.product-'+proClassIdentitiy), deductPrice, deductMaxPrice, $(this).attr('delete-product-id'), deductDisPercent);
             }
             if(proIdentity=='vegan'){
             	 $(".buyrow_46").show();
                var proClassIdentitiy="vegan";
                 if ($(".delete-item").hasClass("mainProd-gummies") 
                	 || $(".delete-item").hasClass("mainProd-tincture") 
                	 || $(".delete-item").hasClass("mainProd-bra-bearies")
                	 || $(".delete-item").hasClass("mainProd-tub-cubs")
                	 || $(".delete-item").hasClass("mainProd-candy")
                	 || $(".delete-item").hasClass("mainProd-bigspoon")                	
                	 || $(".delete-item").hasClass("mainProd-rando-bundle")
                	 || $(".delete-item").hasClass("mainProd-holiday-scaries")  
                	 || $(".delete-item").hasClass("mainProd-partypack-trop")
                	 || $(".delete-item").hasClass("mainProd-partypack-coco")
                	 || $(".delete-item").hasClass("mainProd-partypack-pine")             
                	 || $(".delete-item").hasClass("mainProd-bundle-sidePiece")
                	 || $(".delete-item").hasClass("mainProd-cuddle-bundle")
                	 || $(".delete-item").hasClass("mainProd-everyday-scaries")
                	 || $(".delete-item").hasClass("mainProd-super-mom-bundle")                
                	 ){

                }
                else{
                  removeAllAddon();
                }
                   QuantiDel=1;
            // Delete session Dta
        
                     
            var deductPrice = $(this).attr('deduction-price')*QuantiDel;
            var deductMaxPrice = $(this).attr('max-price')*QuantiDel;
            var deductDisPercent = $(this).attr('dis-percentage')*QuantiDel;

          
         delte_cart($(this).attr('campaign-id'),proIdentity);
         removeProduct($(event.target).parents('.product-'+proClassIdentitiy), deductPrice, deductMaxPrice, $(this).attr('delete-product-id'), deductDisPercent);
             }
              if(proIdentity=='tincture'){
              	 $(".buyrow_45").show();
                var proClassIdentitiy="tincture";
                 if ($(".delete-item").hasClass("mainProd-vegan")
                     || $(".delete-item").hasClass("mainProd-gummies")
                     || $(".delete-item").hasClass("mainProd-bra-bearies")
                     || $(".delete-item").hasClass("mainProd-tub-cubs")
                     || $(".delete-item").hasClass("mainProd-candy")
                     || $(".delete-item").hasClass("mainProd-bigspoon")                    
                	 || $(".delete-item").hasClass("mainProd-rando-bundle")
                	 || $(".delete-item").hasClass("mainProd-holiday-scaries") 
                	 || $(".delete-item").hasClass("mainProd-partypack-trop")
                	 || $(".delete-item").hasClass("mainProd-partypack-coco")
                	 || $(".delete-item").hasClass("mainProd-partypack-pine")
                	 || $(".delete-item").hasClass("mainProd-everyday-scaries")                	 
                	 || $(".delete-item").hasClass("mainProd-bundle-sidePiece")                	
                	 || $(".delete-item").hasClass("mainProd-cuddle-bundle")
                	 || $(".delete-item").hasClass("mainProd-super-mom-bundle")
                	 ){

                }
                else{
                  removeAllAddon();
                }
                  QuantiDel=1;
            // Delete session Dta
        
                     
            var deductPrice = $(this).attr('deduction-price')*QuantiDel;
            var deductMaxPrice = $(this).attr('max-price')*QuantiDel;
            var deductDisPercent = $(this).attr('dis-percentage')*QuantiDel;

          
         delte_cart($(this).attr('campaign-id'),proIdentity);
         removeProduct($(event.target).parents('.product-'+proClassIdentitiy), deductPrice, deductMaxPrice, $(this).attr('delete-product-id'), deductDisPercent);
             }
             // CBD Candy
              if(proIdentity=='candy'){
                var proClassIdentitiy="candy";
                 if ($(".delete-item").hasClass("mainProd-gummies") 
                	 || $(".delete-item").hasClass("mainProd-tincture") 
                	 || $(".delete-item").hasClass("mainProd-vegan")
                	 || $(".delete-item").hasClass("mainProd-bra-bearies")         
                	 || $(".delete-item").hasClass("mainProd-tub-cubs")
                	 || $(".delete-item").hasClass("mainProd-bigspoon")
                	 || $(".delete-item").hasClass("mainProd-rando-bundle")
                	 || $(".delete-item").hasClass("mainProd-holiday-scaries") 
                	 || $(".delete-item").hasClass("mainProd-partypack-trop")
                	 || $(".delete-item").hasClass("mainProd-partypack-coco")
                	 || $(".delete-item").hasClass("mainProd-partypack-pine")
                	 || $(".delete-item").hasClass("mainProd-everyday-scaries")        
                     || $(".delete-item").hasClass("mainProd-bundle-sidePiece")                	
                     || $(".delete-item").hasClass("mainProd-cuddle-bundle")
                     || $(".delete-item").hasClass("mainProd-super-mom-bundle")
                	 ){

                }
                else{
                  removeAllAddon();
                }
                   QuantiDel=1;
            // Delete session Dta
        
                     
            var deductPrice = $(this).attr('deduction-price')*QuantiDel;
            var deductMaxPrice = $(this).attr('max-price')*QuantiDel;
            var deductDisPercent = $(this).attr('dis-percentage')*QuantiDel;

          
         delte_cart($(this).attr('campaign-id'),proIdentity);
         removeProduct($(event.target).parents('.product-'+proClassIdentitiy), deductPrice, deductMaxPrice, $(this).attr('delete-product-id'), deductDisPercent);
             }


       


                //Bundle of Product Delete
        
    
             if(proIdentity=='bundle-sidePiece'){
                var proClassIdentitiy="bundle-sidePiece";
                 if ($(".delete-item").hasClass("mainProd-vegan") 
	                	|| $(".delete-item").hasClass("mainProd-tincture")
	                	|| $(".delete-item").hasClass("mainProd-bra-bearies")
	                	|| $(".delete-item").hasClass("mainProd-tub-cubs")
	                	|| $(".delete-item").hasClass("mainProd-candy")
	                	|| $(".delete-item").hasClass("mainProd-bigspoon")	                	
                	    || $(".delete-item").hasClass("mainProd-rando-bundle")
                	    || $(".delete-item").hasClass("mainProd-holiday-scaries") 
                	    || $(".delete-item").hasClass("mainProd-partypack-trop")
                	    || $(".delete-item").hasClass("mainProd-partypack-coco")
                	    || $(".delete-item").hasClass("mainProd-partypack-pine")
                	    || $(".delete-item").hasClass("mainProd-everyday-scaries")  
	                	|| $(".delete-item").hasClass("mainProd-gummies")
	          			|| $(".delete-item").hasClass("mainProd-cuddle-bundle")
	          			|| $(".delete-item").hasClass("mainProd-super-mom-bundle")      	
                	    ){

                }
                else{
                  removeAllAddon();
                }
                  QuantiDel=1;
            // Delete session Dta
        
                     
            var deductPrice = $(this).attr('deduction-price')*QuantiDel;
            var deductMaxPrice = $(this).attr('max-price')*QuantiDel;
            var deductDisPercent = $(this).attr('dis-percentage')*QuantiDel;

          
         delte_cart($(this).attr('campaign-id'),proIdentity);
         removeProduct($(event.target).parents('.product-'+proClassIdentitiy), deductPrice, deductMaxPrice, $(this).attr('delete-product-id'), deductDisPercent);
             }

              if(proIdentity=='cuddle-bundle'){
                var proClassIdentitiy="cuddle-bundle";
                 if ($(".delete-item").hasClass("mainProd-vegan") 
	                	|| $(".delete-item").hasClass("mainProd-tincture")
	                	|| $(".delete-item").hasClass("mainProd-bra-bearies")
	                	|| $(".delete-item").hasClass("mainProd-tub-cubs")
	                	|| $(".delete-item").hasClass("mainProd-candy")
	                	|| $(".delete-item").hasClass("mainProd-bigspoon") 	                	
                	    || $(".delete-item").hasClass("mainProd-rando-bundle")
                	    || $(".delete-item").hasClass("mainProd-holiday-scaries") 
                	    || $(".delete-item").hasClass("mainProd-partypack-trop")
                	    || $(".delete-item").hasClass("mainProd-partypack-coco")
                	    || $(".delete-item").hasClass("mainProd-partypack-pine")
                	    || $(".delete-item").hasClass("mainProd-everyday-scaries")  
	                	|| $(".delete-item").hasClass("mainProd-gummies")
	         			|| $(".delete-item").hasClass("mainProd-cuddle-bundle")   
	         			|| $(".delete-item").hasClass("mainProd-bundle-sidePiece")
	         			|| $(".delete-item").hasClass("mainProd-super-mom-bundle")    	
                	    ){

                }
                else{
                  removeAllAddon();
                }
                  QuantiDel=1;
            // Delete session Dta
        
                     
            var deductPrice = $(this).attr('deduction-price')*QuantiDel;
            var deductMaxPrice = $(this).attr('max-price')*QuantiDel;
            var deductDisPercent = $(this).attr('dis-percentage')*QuantiDel;

          
         delte_cart($(this).attr('campaign-id'),proIdentity);
         removeProduct($(event.target).parents('.product-'+proClassIdentitiy), deductPrice, deductMaxPrice, $(this).attr('delete-product-id'), deductDisPercent);
             }
        


                       // Rando Bundle

            if(proIdentity=='rando-bundle'){
                var proClassIdentitiy="rando-bundle";
                 if ($(".delete-item").hasClass("mainProd-vegan") 
	                 	|| $(".delete-item").hasClass("mainProd-candy")	                            	 
	                 	|| $(".delete-item").hasClass("mainProd-gummies")
	                	|| $(".delete-item").hasClass("mainProd-tincture")
	                	|| $(".delete-item").hasClass("mainProd-bra-bearies")
	                	|| $(".delete-item").hasClass("mainProd-tub-cubs")
	                	|| $(".delete-item").hasClass("mainProd-bigspoon")
	                	|| $(".delete-item").hasClass("mainProd-holiday-scaries") 
                	    || $(".delete-item").hasClass("mainProd-partypack-trop")
                	    || $(".delete-item").hasClass("mainProd-partypack-coco")
                	    || $(".delete-item").hasClass("mainProd-partypack-pine")
                	    || $(".delete-item").hasClass("mainProd-everyday-scaries")  	                	
                	    || $(".delete-item").hasClass("mainProd-bundle-sidePiece")                	   
                	    || $(".delete-item").hasClass("mainProd-cuddle-bundle")
                	    || $(".delete-item").hasClass("mainProd-super-mom-bundle")
                	   ){

                }
                else{
                  removeAllAddon();
                }
                  QuantiDel=1;
            // Delete session Dta
        
                     
            var deductPrice = $(this).attr('deduction-price')*QuantiDel;
            var deductMaxPrice = $(this).attr('max-price')*QuantiDel;
            var deductDisPercent = $(this).attr('dis-percentage')*QuantiDel;

          
         delte_cart($(this).attr('campaign-id'),proIdentity);
         removeProduct($(event.target).parents('.product-'+proClassIdentitiy), deductPrice, deductMaxPrice, $(this).attr('delete-product-id'), deductDisPercent);
             }


              // party
          
              if(proIdentity=='partypack-coco'){
                var proClassIdentitiy="partypack-coco";
                 if ($(".delete-item").hasClass("mainProd-vegan") 
	                 	|| $(".delete-item").hasClass("mainProd-candy")
	                 	|| $(".delete-item").hasClass("mainProd-bigspoon")	                              
	                 	|| $(".delete-item").hasClass("mainProd-gummies")
	                	|| $(".delete-item").hasClass("mainProd-tincture")
	                	|| $(".delete-item").hasClass("mainProd-bra-bearies")
	                	|| $(".delete-item").hasClass("mainProd-tub-cubs")
	                	|| $(".delete-item").hasClass("mainProd-rando-bundle")
	                	|| $(".delete-item").hasClass("mainProd-holiday-scaries") 
                	    || $(".delete-item").hasClass("mainProd-partypack-trop")                	
                	    || $(".delete-item").hasClass("mainProd-partypack-pine")
                	    || $(".delete-item").hasClass("mainProd-everyday-scaries")  	                
                	    || $(".delete-item").hasClass("mainProd-bundle-sidePiece")                
                	    || $(".delete-item").hasClass("mainProd-cuddle-bundle")
                	    || $(".delete-item").hasClass("mainProd-super-mom-bundle")
                	   ){

                }
                else{
                  removeAllAddon();
                }
                  QuantiDel=1;
            // Delete session Dta
        
                     
            var deductPrice = $(this).attr('deduction-price')*QuantiDel;
            var deductMaxPrice = $(this).attr('max-price')*QuantiDel;
            var deductDisPercent = $(this).attr('dis-percentage')*QuantiDel;

          
         delte_cart($(this).attr('campaign-id'),proIdentity);
         removeProduct($(event.target).parents('.product-'+proClassIdentitiy), deductPrice, deductMaxPrice, $(this).attr('delete-product-id'), deductDisPercent);
             }
              // Dawn Yawn Bundles dawn-yawn-pine
              if(proIdentity=='partypack-pine'){
                var proClassIdentitiy="partypack-pine";
                 if ($(".delete-item").hasClass("mainProd-vegan") 
	                 	|| $(".delete-item").hasClass("mainProd-candy")
	                 	|| $(".delete-item").hasClass("mainProd-bigspoon")             
	                 	|| $(".delete-item").hasClass("mainProd-gummies")
	                	|| $(".delete-item").hasClass("mainProd-tincture")
	                	|| $(".delete-item").hasClass("mainProd-bra-bearies")
	                	|| $(".delete-item").hasClass("mainProd-tub-cubs")
	                	|| $(".delete-item").hasClass("mainProd-rando-bundle")
	                	|| $(".delete-item").hasClass("mainProd-holiday-scaries") 
                	    || $(".delete-item").hasClass("mainProd-partypack-trop")
                	    || $(".delete-item").hasClass("mainProd-partypack-coco")
                	    || $(".delete-item").hasClass("mainProd-everyday-scaries")                  	                
                	    || $(".delete-item").hasClass("mainProd-bundle-sidePiece")                
                	    || $(".delete-item").hasClass("mainProd-cuddle-bundle")
                	    || $(".delete-item").hasClass("mainProd-super-mom-bundle")
                	   ){

                }
                else{
                  removeAllAddon();
                }
                  QuantiDel=1;
            // Delete session Dta
        
                     
            var deductPrice = $(this).attr('deduction-price')*QuantiDel;
            var deductMaxPrice = $(this).attr('max-price')*QuantiDel;
            var deductDisPercent = $(this).attr('dis-percentage')*QuantiDel;

          
         delte_cart($(this).attr('campaign-id'),proIdentity);
         removeProduct($(event.target).parents('.product-'+proClassIdentitiy), deductPrice, deductMaxPrice, $(this).attr('delete-product-id'), deductDisPercent);
             }

              // Dawn Yawn Bundles dawn-yawn-pine
              if(proIdentity=='everyday-scaries'){
                var proClassIdentitiy="everyday-scaries";
                 if ($(".delete-item").hasClass("mainProd-vegan") 
	                 	|| $(".delete-item").hasClass("mainProd-candy")
	                 	|| $(".delete-item").hasClass("mainProd-bigspoon")              
	                 	|| $(".delete-item").hasClass("mainProd-gummies")
	                	|| $(".delete-item").hasClass("mainProd-tincture")
	                	|| $(".delete-item").hasClass("mainProd-bra-bearies")
	                	|| $(".delete-item").hasClass("mainProd-tub-cubs")
	                	|| $(".delete-item").hasClass("mainProd-rando-bundle")
	                	|| $(".delete-item").hasClass("mainProd-holiday-scaries") 
                	    || $(".delete-item").hasClass("mainProd-partypack-trop")
                	    || $(".delete-item").hasClass("mainProd-partypack-coco")
                	    || $(".delete-item").hasClass("mainProd-partypack-pine")                  	                
                	    || $(".delete-item").hasClass("mainProd-bundle-sidePiece")                
                	    || $(".delete-item").hasClass("mainProd-cuddle-bundle")
                	    || $(".delete-item").hasClass("mainProd-super-mom-bundle")
                	   ){

                }
                else{
                  removeAllAddon();
                }
                  QuantiDel=1;
            // Delete session Dta
        
                     
            var deductPrice = $(this).attr('deduction-price')*QuantiDel;
            var deductMaxPrice = $(this).attr('max-price')*QuantiDel;
            var deductDisPercent = $(this).attr('dis-percentage')*QuantiDel;

          
         delte_cart($(this).attr('campaign-id'),proIdentity);
         removeProduct($(event.target).parents('.product-'+proClassIdentitiy), deductPrice, deductMaxPrice, $(this).attr('delete-product-id'), deductDisPercent);
             }

                // Dawn Yawn Bundles dawn-yawn-pine
              if(proIdentity=='bra-bearies'){
                var proClassIdentitiy="bra-bearies";
                 if ($(".delete-item").hasClass("mainProd-vegan") 
	                 	|| $(".delete-item").hasClass("mainProd-candy")               
	                 	|| $(".delete-item").hasClass("mainProd-gummies")
	                	|| $(".delete-item").hasClass("mainProd-tincture")
	                	|| $(".delete-item").hasClass("mainProd-tub-cubs")
	                	|| $(".delete-item").hasClass("mainProd-bigspoon")
	                	|| $(".delete-item").hasClass("mainProd-everyday-scaries")
	                	|| $(".delete-item").hasClass("mainProd-rando-bundle")
	                	|| $(".delete-item").hasClass("mainProd-holiday-scaries") 
                	    || $(".delete-item").hasClass("mainProd-partypack-trop")
                	    || $(".delete-item").hasClass("mainProd-partypack-coco")
                	    || $(".delete-item").hasClass("mainProd-partypack-pine")                  	                
                	    || $(".delete-item").hasClass("mainProd-bundle-sidePiece")                
                	    || $(".delete-item").hasClass("mainProd-cuddle-bundle")
                	    || $(".delete-item").hasClass("mainProd-super-mom-bundle")
                	   ){

                }
                else{
                  removeAllAddon();
                }
                  QuantiDel=1;
            // Delete session Dta
        
                     
            var deductPrice = $(this).attr('deduction-price')*QuantiDel;
            var deductMaxPrice = $(this).attr('max-price')*QuantiDel;
            var deductDisPercent = $(this).attr('dis-percentage')*QuantiDel;

          
         delte_cart($(this).attr('campaign-id'),proIdentity);
         removeProduct($(event.target).parents('.product-'+proClassIdentitiy), deductPrice, deductMaxPrice, $(this).attr('delete-product-id'), deductDisPercent);
             }

          // 'holiday-scaries
              if(proIdentity=='holiday-scaries'){
                var proClassIdentitiy="holiday-scaries";
                 if ($(".delete-item").hasClass("mainProd-vegan") 
	                 	|| $(".delete-item").hasClass("mainProd-candy")               
	                 	|| $(".delete-item").hasClass("mainProd-gummies")
	                	|| $(".delete-item").hasClass("mainProd-tincture")
	                	|| $(".delete-item").hasClass("mainProd-bigspoon")
	                	|| $(".delete-item").hasClass("mainProd-everyday-scaries")
	                	|| $(".delete-item").hasClass("mainProd-rando-bundle")
	                	|| $(".delete-item").hasClass("mainProd-bra-bearies")
	                	|| $(".delete-item").hasClass("mainProd-tub-cubs")
                	    || $(".delete-item").hasClass("mainProd-partypack-trop")
                	    || $(".delete-item").hasClass("mainProd-partypack-coco")
                	    || $(".delete-item").hasClass("mainProd-partypack-pine")                  	                
                	    || $(".delete-item").hasClass("mainProd-bundle-sidePiece")                
                	    || $(".delete-item").hasClass("mainProd-cuddle-bundle")
                	    || $(".delete-item").hasClass("mainProd-super-mom-bundle")
                	   ){

                }
                else{
                  removeAllAddon();
                }
                  QuantiDel=1;
            // Delete session Dta
        
                     
            var deductPrice = $(this).attr('deduction-price')*QuantiDel;
            var deductMaxPrice = $(this).attr('max-price')*QuantiDel;
            var deductDisPercent = $(this).attr('dis-percentage')*QuantiDel;

          
         delte_cart($(this).attr('campaign-id'),proIdentity);
         removeProduct($(event.target).parents('.product-'+proClassIdentitiy), deductPrice, deductMaxPrice, $(this).attr('delete-product-id'), deductDisPercent);
             }

             // Tub Cubs tub-cubs
              if(proIdentity=='tub-cubs'){
                var proClassIdentitiy="tub-cubs";
                 if ($(".delete-item").hasClass("mainProd-vegan") 
	                 	|| $(".delete-item").hasClass("mainProd-candy")
	                 	|| $(".delete-item").hasClass("mainProd-bigspoon")              
	                 	|| $(".delete-item").hasClass("mainProd-gummies")
	                	|| $(".delete-item").hasClass("mainProd-tincture")
	                	|| $(".delete-item").hasClass("mainProd-bra-bearies")
	                	|| $(".delete-item").hasClass("mainProd-everyday-scaries")
	                	|| $(".delete-item").hasClass("mainProd-rando-bundle")
	                	|| $(".delete-item").hasClass("mainProd-holiday-scaries")
                	    || $(".delete-item").hasClass("mainProd-partypack-trop")
                	    || $(".delete-item").hasClass("mainProd-partypack-coco")
                	    || $(".delete-item").hasClass("mainProd-partypack-pine")                  	                
                	    || $(".delete-item").hasClass("mainProd-bundle-sidePiece")                
                	    || $(".delete-item").hasClass("mainProd-cuddle-bundle")
                	    || $(".delete-item").hasClass("mainProd-super-mom-bundle")
                	   ){

                }
                else{
                  removeAllAddon();
                }
                  QuantiDel=1;
            // Delete session Dta
        
                     
            var deductPrice = $(this).attr('deduction-price')*QuantiDel;
            var deductMaxPrice = $(this).attr('max-price')*QuantiDel;
            var deductDisPercent = $(this).attr('dis-percentage')*QuantiDel;

          
         delte_cart($(this).attr('campaign-id'),proIdentity);
         removeProduct($(event.target).parents('.product-'+proClassIdentitiy), deductPrice, deductMaxPrice, $(this).attr('delete-product-id'), deductDisPercent);
             }

             if(proIdentity=='super-mom-bundle'){
                var proClassIdentitiy="super-mom-bundle";
                 if ($(".delete-item").hasClass("mainProd-vegan") 
	                 	|| $(".delete-item").hasClass("mainProd-candy")
	                 	|| $(".delete-item").hasClass("mainProd-bigspoon")              
	                 	|| $(".delete-item").hasClass("mainProd-gummies")
	                	|| $(".delete-item").hasClass("mainProd-tincture")
	                	|| $(".delete-item").hasClass("mainProd-bra-bearies")
	                	|| $(".delete-item").hasClass("mainProd-everyday-scaries")
	                	|| $(".delete-item").hasClass("mainProd-rando-bundle")
	                	|| $(".delete-item").hasClass("mainProd-holiday-scaries")
                	    || $(".delete-item").hasClass("mainProd-partypack-trop")
                	    || $(".delete-item").hasClass("mainProd-partypack-coco")
                	    || $(".delete-item").hasClass("mainProd-partypack-pine")                  	                
                	    || $(".delete-item").hasClass("mainProd-bundle-sidePiece")                
                	    || $(".delete-item").hasClass("mainProd-cuddle-bundle")
                	    || $(".delete-item").hasClass("mainProd-tub-cubs") 
                	   ){

                }
                else{
                  removeAllAddon();
                }
                  QuantiDel=1;
            // Delete session Dta
        
                     
            var deductPrice = $(this).attr('deduction-price')*QuantiDel;
            var deductMaxPrice = $(this).attr('max-price')*QuantiDel;
            var deductDisPercent = $(this).attr('dis-percentage')*QuantiDel;

          
         delte_cart($(this).attr('campaign-id'),proIdentity);
         removeProduct($(event.target).parents('.product-'+proClassIdentitiy), deductPrice, deductMaxPrice, $(this).attr('delete-product-id'), deductDisPercent);
             }


if(proIdentity=='bigspoon'){
                var proClassIdentitiy="bigspoon";
                 if ($(".delete-item").hasClass("mainProd-vegan") 
	                 	|| $(".delete-item").hasClass("mainProd-candy")
	                 	|| $(".delete-item").hasClass("mainProd-super-mom-bundle")              
	                 	|| $(".delete-item").hasClass("mainProd-gummies")
	                	|| $(".delete-item").hasClass("mainProd-tincture")
	                	|| $(".delete-item").hasClass("mainProd-bra-bearies")
	                	|| $(".delete-item").hasClass("mainProd-everyday-scaries")
	                	|| $(".delete-item").hasClass("mainProd-rando-bundle")
	                	|| $(".delete-item").hasClass("mainProd-holiday-scaries")
                	    || $(".delete-item").hasClass("mainProd-partypack-trop")
                	    || $(".delete-item").hasClass("mainProd-partypack-coco")
                	    || $(".delete-item").hasClass("mainProd-partypack-pine")                  	                
                	    || $(".delete-item").hasClass("mainProd-bundle-sidePiece")                
                	    || $(".delete-item").hasClass("mainProd-cuddle-bundle")
                	    || $(".delete-item").hasClass("mainProd-tub-cubs") 
                	   ){

                }
                else{
                  removeAllAddon();
                }
                  QuantiDel=1;
            // Delete session Dta
        
                     
            var deductPrice = $(this).attr('deduction-price')*QuantiDel;
            var deductMaxPrice = $(this).attr('max-price')*QuantiDel;
            var deductDisPercent = $(this).attr('dis-percentage')*QuantiDel;

          
         delte_cart($(this).attr('campaign-id'),proIdentity);
         removeProduct($(event.target).parents('.product-'+proClassIdentitiy), deductPrice, deductMaxPrice, $(this).attr('delete-product-id'), deductDisPercent);
             }




             
            // addon Product delete
            if(proIdentity=='addon-Gummies'){
                var proClassIdentitiy="addon-Gummies";
             }
             if(proIdentity=='addon-Vegan'){
                var proClassIdentitiy="addon-Vegan";
             }
              if(proIdentity=='addon-Tincture'){
                var proClassIdentitiy="addon-Tincture";
             }
             if(proIdentity=='addon-Yoloshot'){
                var proClassIdentitiy="addon-Yoloshot";
             }
             if(proIdentity=='addon-Candy'){
                var proClassIdentitiy="addon-Candy";
             }
             if(proIdentity=='addon-Hat'){
                var proClassIdentitiy="addon-Hat";
             }
            
                              
                              // iff addon Product Delete
                              if(proClassIdentitiy=='addon-Gummies'){
                                $(".buyrow_44").show();
                                $(".buyrow_44").removeClass('addedToCart');
                                
                                var savePr44="31.95";
                                var img44="/app/desktop/images/gummies-cart.png";
                                //var eachVal44="$ 23.00 / each";
                                var proName44="1 bottle CBD Gummies (Stress Relief) - $18";
                                 //$(".buyrow_44").find('h2').html(''+proName44+'<span class="savePrice"> + Save $'+savePr44+'</span>');
                                 //$(".buyrow_44").find('strong').html(eachVal44);
                                $(".buyrow_44").find('img').prop('src',img44);
                                delte_cart($(this).attr('campaign-id'),proIdentity);
                                removeProduct($('.product-addon-Gummies'), 18, 49.99, 44, 0); 
                            var totalNotaddonadded = $('.buyRow:not(.addedToCart)').length;
                               display50Off();
                              }
                                  if(proClassIdentitiy=='addon-Tincture'){
                                $(".buyrow_45").show();
                                $(".buyrow_45").removeClass('addedToCart');
                                var savePr45="28.27";
                                var img45="/app/desktop/images/tincture-cart.png";
                                var eachVal45="$ 29.00 / each";
                                var proName45="1 bottle CBD Oil (Sleep) - $29";
                                /// $(".buyrow_45").find('h2').html(''+proName45+'<span class="savePrice"> + Save $'+savePr45+'</span>');
                                // $(".buyrow_45").find('strong').html(eachVal45);
                                $(".buyrow_45").find('img').prop('src',img45);
                                delte_cart($(this).attr('campaign-id'),proIdentity);
                                removeProduct($('.product-addon-Tincture'), 29, 79.99, 45, 0);
                                  var totalNotaddonadded = $('.buyRow:not(.addedToCart)').length;
                                  display50Off(); 
                                      }
                               if(proClassIdentitiy=='addon-Vegan'){
                                $(".buyrow_46").show();
                                $(".buyrow_46").removeClass('addedToCart');
                                var savePr46="23.99";
                                var img46="/app/desktop/images/vegan-cart.png";
                                var eachVal46="$ 19.00 / each";
                                var proName46="1 bottle Vegan CBD gummies (Stress Relief) - $19";
                                // $(".buyrow_46").find('h2').html(''+proName46+'<span class="savePrice"> + Save $'+savePr46+'</span>');
                                 //$(".buyrow_46").find('strong').html(eachVal46);
                                $(".buyrow_46").find('img').prop('src',img46);
                                delte_cart($(this).attr('campaign-id'),proIdentity);
                                removeProduct($('.product-addon-Vegan'), 19, 44.95, 46, 0); 
                                  var totalNotaddonadded = $('.buyRow:not(.addedToCart)').length;
                           		 display50Off();
                              }
                                 if(proClassIdentitiy=='addon-Candy'){
                                   delte_cart($(this).attr('campaign-id'),proIdentity);
                                   removeProduct($('.product-addon-Candy'), 12, 24, 165, 0); 
                                     var totalNotaddonadded = $('.buyRow:not(.addedToCart)').length;
                              		 display50Off();
                                 }
                                 if(proClassIdentitiy=='addon-Hat'){
                                   delte_cart($(this).attr('campaign-id'),proIdentity);
                                   removeProduct($('.product-addon-Hat'), 18, 29, 906, 0); 
                                     var totalNotaddonadded = $('.buyRow:not(.addedToCart)').length;
                              		 display50Off();
                                 }

                         
                           
              
         
        });



        cartList.on('click keypress keyup change', '.quantity-button', function(event) {
            event.preventDefault();
            var dataProName=$(this).attr('data-page-name');
         
           var curentId=$(this).attr('campaign-id');
           var totalQuant=$(".changed-product-quant-val-"+curentId).val();
           // Update Quantinty session
            $.ajax({
                url: '/ajax-cart-save-quantity-each.php',
                data: {
                    "quantity": totalQuant,
                    "product_ids": curentId
                },
                type: 'post',
                dataType: "json",
                // beforeSend:function(x){
                //    $("#loading-indicator").show();
                //      },
                success: function(result) {
                //  $("#loading-indicator").hide();
                //  $(".changed-product-quant-val-"+curentId).val(totalQuant);

                }

            });

            quickUpdateCart(dataProName,curentId);

        });


    }



 $(document).on('change','.buyMoreSaveCartWidget',function(){
  
        var ProductIdentity='';
        var dataBuymorProdutpage=$(this).attr('data-buymor-pageName');
        productIdentity=createProductIdentity($(this).attr('data-buymor-pageName'));
       
        //Old Value
        var productSelectedId=$(this).attr('data-product-id');
        var productPrice=$(this).attr('data-product-price');
        var campaignBymoresaveid=this.value;
     // New Value
       var data_new_product_id=$('option:selected',this).attr("data-new-product-id");
        var data_new_price=$('option:selected',this).attr("data-new-price");
         var data_new_product_Name=$('option:selected',this).attr("data-new-product-Name");
         $.ajax({
                    url: '/ajax-cart.php',
                    data: {
                        "productId": this.value,"productPageName":$(this).attr('data-buymor-pageName')
                    },
                       type: 'post',
                       dataType: "json",
                        beforeSend: function() {
              
         
                        },
         
         
                       success: function(data) {
                       	if(data.msg=='success'){

removeProduct($('.product-'+productIdentity), productPrice, '', productSelectedId, '');	
addMoreBottle(data_new_price,'','',data_new_product_Name,data_new_product_id,campaignBymoresaveid,'',dataBuymorProdutpage);
                       		
                       	
                       	}
         
                       }
         
                   });
 
});












    function removeAllAddon(){

       if($(".delete-item").hasClass("addon-prod-addon-Gummies")){
       
        delte_cart(19,'addon-Gummies');
        removeProduct($('.product-addon-Gummies'), 28, 49.99, 44, 0); 
       }
        if($(".delete-item").hasClass("addon-prod-addon-Tincture")){
          
          delte_cart(20,'addon-Tincture');
        removeProduct($('.product-addon-Tincture'), 29, 79.99, 45, 0);
       }
        if($(".delete-item").hasClass("addon-prod-addon-Vegan")){
          
          delte_cart(21,'addon-Vegan');
          removeProduct($('.product-addon-Vegan'), 20, 44.95, 46, 0);  
       }
       if($(".delete-item").hasClass("addon-prod-addon-Candy")){
           
           delte_cart(53,'addon-Candy');
           removeProduct($('.product-addon-Candy'), 12, 24, 165, 0);
       }
       if($(".delete-item").hasClass("addon-prod-addon-Hat")){
           
           delte_cart(106,'addon-Hat');
           removeProduct($('.product-addon-Hat'), 18, 29, 906, 0);
       }
    }

     if(sessionStorage.getItem('returnToCart')) {
    	sessionStorage.removeItem('returnToCart');
    	$('body').addClass('product stickHeader noticed openCart');
    	setTimeout(function(){
    		toggleCart();
    		console.log('toggleCart');
    	}, 1000);
    }

    function toggleCart(bool) {
        var cartIsOpen = (typeof bool === 'undefined') ? cartWrapper.hasClass('cart-open') : bool;

        if (cartIsOpen) {
            cartWrapper.removeClass('cart-open');
            //reset undo
            clearInterval(undoTimeoutId);
            undo.removeClass('visible');
            cartList.find('.deleted').remove();

            setTimeout(function() {
                cartBody.scrollTop(0);
                //check if cart empty to hide it
                if (Number(cartCount.find('li').eq(0).text()) == 0) cartWrapper.addClass('empty');
            }, 500);
        } else {
            cartWrapper.addClass('cart-open');
        }
    }

    function addToCart(displayPrice,actualPrice,discountPercentage,ProductName,product_id,campaignId,disPercent,productPageName) {

       
        var cartIsEmpty = cartWrapper.hasClass('empty');
        //update cart product list
        addProduct(displayPrice,actualPrice,discountPercentage,ProductName,product_id,campaignId,disPercent,productPageName);
       addQuantityDiv(productPageName);
        //update number of items
        updateCartCount(true);
        //update total price
        updateCartTotal(displayPrice, true);
        // updateCartMaxTotal(actualPrice, true);
        updateCartMaxTotal(actualPrice, displayPrice, true);
        updateCartSaveTotal(discountPercentage, true);

        //show cart
        cartWrapper.removeClass('empty');
    }

    function addToCartAddon(displayPrice, actualPrice, productAddonId, campaignId, discountPercentage) {
        var cartIsEmpty = cartWrapper.hasClass('empty');
        //update cart product list
        addAddonProduct(displayPrice, actualPrice, productAddonId, campaignId, discountPercentage);
        //update number of items
        updateCartCount(true);
        //update total price
        updateCartTotal(displayPrice, true);

        updateCartMaxTotal(actualPrice,displayPrice, true);
        updateCartSaveTotal(discountPercentage, true);

        //show cart
        cartWrapper.removeClass('empty');
    }

    function addMoreBottle(displayPrice,actualPrice,discountPercentage,ProductName,product_id,campaignId,disPercent,productPageName){
    	addProduct(displayPrice,actualPrice,discountPercentage,ProductName,product_id,campaignId,disPercent,productPageName);
    	updateCartCount(true);
        //update total price
        updateCartTotal(displayPrice, true);

        updateCartMaxTotal(actualPrice,displayPrice, true);
        updateCartSaveTotal(discountPercentage, true);

        //show cart
        cartWrapper.removeClass('empty');
      
       

    }

    function changesSelectedOption(product_id,campaignId){
            console.log(product_id,'changesSelectedOptionProid');
            console.log(campaignId,'changesSelectedOptioCampaignId');
    	  $(".buyMoreSaveCartWidget-"+product_id).find('option').removeAttr('selected');
          $(".buyMoreSaveCartWidget-"+product_id+" option[value="+campaignId+"]").attr('selected', 'selected');
    }


    function addProduct(displayPrice,actualPrice,discountPercentage,ProductName,product_id,campaignId,disPercent,productPageName) {
      
        $("#addonLi").remove();
        //alert(productPageName);
         if(productPageName=='product-gummies.php'){
       	var product_id=product_id;
           var proClass="gummies";
           var proIdentity='gummies';
           var proImage="gummies-cart.png";
           var saveMoreOption=1;
       }
      
      if(productPageName=='product-vegan-cbd.php'){
         	var product_id=product_id;
           var proClass="vegan";
           var proIdentity='vegan'; 
           var proImage="vegan-cart.png";
           var saveMoreOption=1;
       } 
       if(productPageName=='product-tincture.php'){
       	var product_id=product_id;
        var proClass="tincture";
        var proIdentity='tincture';
        var proImage="tincture-cart.png";
        var saveMoreOption=1;
       }
       // CBD candy
       if(productPageName=='cbd-candy.php'){
       	var product_id=product_id;
        var proClass="candy";
        var proIdentity='candy';
        var proImage="unicon-candy-cart.png";
        var saveMoreOption=1;
       }
       if(productPageName=='national-coming-out-day.php'){
       	var product_id=product_id;
        var proClass="candy";
        var proIdentity='candy';
        var proImage="unicon-candy-cart.png";
        var saveMoreOption=1;
       } 
      
       //rando-bundle
        if(productPageName=='rando-bundle.php'){
       	var product_id=product_id;
        var proClass="rando-bundle";
        var proIdentity='rando-bundle';
        var proImage="rando-bundle-cart.png";
        var saveMoreOption=0;
        
       }
       //rando-bundle
        if(productPageName=='everyday-scaries.php'){
       	var product_id=product_id;
        var proClass="everyday-scaries";
        var proIdentity='everyday-scaries';
        var proImage="everyday-scaries-cart.png";
        var saveMoreOption=0;
        
       }
          //holiday-scaries
       if(productPageName=='holiday-scaries.php'){
       	var product_id=product_id;
        var proClass="holiday-scaries";
        var proIdentity='holiday-scaries';
        var proImage="holiday-scaries-cart.png";
        var saveMoreOption=1;
        
       }
         if(productPageName=='super-mom-bundle.php'){
       	var product_id=product_id;
        var proClass="super-mom-bundle";
        var proIdentity='super-mom-bundle';
        var proImage="super-mom-cart.png";
        var saveMoreOption=0;
        
       }

       


   //partypack-trop.php
       if(productPageName=='partypack-trop.php'){
       	var product_id=product_id;
        var proClass="partypack-trop";
        var proIdentity='partypack-trop';
        var proImage="partypack-trop-cart.png";
        var saveMoreOption=0;
        
       }
          //dawn-to-yawn-bundle-coco.php
       if(productPageName=='partypack-coco.php'){
       	var product_id=product_id;
        var proClass="partypack-coco";
        var proIdentity='partypack-coco';
        var proImage="partypack-coco-cart.png";
        var saveMoreOption=0;
        
       }
          //dawn-to-yawn-bundle-pine.php
       if(productPageName=='partypack-pine.php'){
       	var product_id=product_id;
        var proClass="partypack-pine";
        var proIdentity='partypack-pine';
        var proImage="partypack-pine-cart.png";
        var saveMoreOption=0;
        
       }
     
        //Product Bundle

                        
  if(productPageName=='product-bundle-sidePiece.php'){
        var product_id=$('[name="Side-Piece-productid"]:checked').attr('product-id');
        var proClass="bundle-sidePiece";
        var proIdentity='bundle-sidePiece';
        var proImage="SidePiecebndl4.png";
        var saveMoreOption=0;
        }

  if(productPageName=='cuddle-bundle.php'){
        var product_id=product_id;
        var proClass="cuddle-bundle";
        var proIdentity='cuddle-bundle';
        var proImage="cuddle-bundle-cart.png";
        var saveMoreOption=0;
        }

  if(productPageName=='bra-bearies.php'){
           var product_id=product_id;
           var proClass="bra-bearies";
           var proIdentity='bra-bearies';
           var proImage="bra-bearies-cart.png";
           var saveMoreOption=1;
        }

   if(productPageName=='tub-cubs.php'){
           var product_id=product_id;
           var proClass="tub-cubs";
           var proIdentity='tub-cubs';
           var proImage="tub-cubs-cart.png";
           var saveMoreOption=1;
        }

        if(productPageName=='cbd-cbn-oil-for-sleep.php'){
           var product_id=product_id;
           var proClass="bigspoon";
           var proIdentity='bigspoon';
           var proImage="cbn-cart.png";
           var saveMoreOption=1;
        }

        var str=ProductName;
    
 if(saveMoreOption && productPageName=='product-gummies.php'){
        	
        	
              if(str.match(/Subscription/g)){
var option1='<option value="'+$(".gummiesSubOption-1").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".gummiesSubOption-1").attr('data-new-product-id')+'" data-new-price="'+$(".gummiesSubOption-1").attr('data-new-price')+'" data-new-product-name="'+$(".gummiesSubOption-1").attr('data-new-product-name')+'">1 Bottle</option>';
var option2='<option value="'+$(".gummiesSubOption-2").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".gummiesSubOption-2").attr('data-new-product-id')+'" data-new-price="'+$(".gummiesSubOption-2").attr('data-new-price')+'" data-new-product-name="'+$(".gummiesSubOption-2").attr('data-new-product-name')+'">2 Bottles</option>';
var option3='<option value="'+$(".gummiesSubOption-3").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".gummiesSubOption-3").attr('data-new-product-id')+'" data-new-price="'+$(".gummiesSubOption-3").attr('data-new-price')+'" data-new-product-name="'+$(".gummiesSubOption-3").attr('data-new-product-name')+'">3 Bottles</option>';
              }else{
var option1='<option value="'+$(".gummiesOntimeOption-1").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".gummiesOntimeOption-1").attr('data-new-product-id')+'" data-new-price="'+$(".gummiesOntimeOption-1").attr('data-new-price')+'" data-new-product-name="'+$(".gummiesOntimeOption-1").attr('data-new-product-name')+'">1 Bottle</option>';
var option2='<option value="'+$(".gummiesOntimeOption-2").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".gummiesOntimeOption-2").attr('data-new-product-id')+'" data-new-price="'+$(".gummiesOntimeOption-2").attr('data-new-price')+'" data-new-product-name="'+$(".gummiesOntimeOption-2").attr('data-new-product-name')+'">2 Bottles</option>';
var option3='<option value="'+$(".gummiesOntimeOption-3").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".gummiesOntimeOption-3").attr('data-new-product-id')+'" data-new-price="'+$(".gummiesOntimeOption-3").attr('data-new-price')+'" data-new-product-name="'+$(".gummiesOntimeOption-3").attr('data-new-product-name')+'">3 Bottles</option>';
              }
        	

        }
         if(saveMoreOption && productPageName=='bra-bearies.php'){
         
        	
        	
              if(str.match(/Subscription/g)){
var option1='<option value="'+$(".BraBeariesSubOption-1").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".BraBeariesSubOption-1").attr('data-new-product-id')+'" data-new-price="'+$(".BraBeariesSubOption-1").attr('data-new-price')+'" data-new-product-name="'+$(".BraBeariesSubOption-1").attr('data-new-product-name')+'">1 Bottle</option>';
var option2='<option value="'+$(".BraBeariesSubOption-2").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".BraBeariesSubOption-2").attr('data-new-product-id')+'" data-new-price="'+$(".BraBeariesSubOption-2").attr('data-new-price')+'" data-new-product-name="'+$(".BraBeariesSubOption-2").attr('data-new-product-name')+'">2 Bottles</option>';
var option3='<option value="'+$(".BraBeariesSubOption-3").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".BraBeariesSubOption-3").attr('data-new-product-id')+'" data-new-price="'+$(".BraBeariesSubOption-3").attr('data-new-price')+'" data-new-product-name="'+$(".BraBeariesSubOption-3").attr('data-new-product-name')+'">3 Bottles</option>';
              }else{
var option1='<option value="'+$(".braBeariesOntimeOption-1").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".braBeariesOntimeOption-1").attr('data-new-product-id')+'" data-new-price="'+$(".braBeariesOntimeOption-1").attr('data-new-price')+'" data-new-product-name="'+$(".braBeariesOntimeOption-1").attr('data-new-product-name')+'">1 Bottle</option>';
var option2='<option value="'+$(".braBeariesOntimeOption-2").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".braBeariesOntimeOption-2").attr('data-new-product-id')+'" data-new-price="'+$(".braBeariesOntimeOption-2").attr('data-new-price')+'" data-new-product-name="'+$(".braBeariesOntimeOption-2").attr('data-new-product-name')+'">2 Bottles</option>';
var option3='<option value="'+$(".braBeariesOntimeOption-3").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".braBeariesOntimeOption-3").attr('data-new-product-id')+'" data-new-price="'+$(".braBeariesOntimeOption-3").attr('data-new-price')+'" data-new-product-name="'+$(".braBeariesOntimeOption-3").attr('data-new-product-name')+'">3 Bottles</option>';
              }
        	

        }

         if(saveMoreOption && productPageName=='tub-cubs.php'){
         
        	
        	
              if(str.match(/Subscription/g)){
var option1='<option value="'+$(".tubCubsSubOption-3").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".tubCubsSubOption-3").attr('data-new-product-id')+'" data-new-price="'+$(".tubCubsSubOption-3").attr('data-new-price')+'" data-new-product-name="'+$(".tubCubsSubOption-3").attr('data-new-product-name')+'">1 Pack</option>';
var option2='<option value="'+$(".tubCubsSubOption-1").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".tubCubsSubOption-1").attr('data-new-product-id')+'" data-new-price="'+$(".tubCubsSubOption-1").attr('data-new-price')+'" data-new-product-name="'+$(".tubCubsSubOption-1").attr('data-new-product-name')+'">3 Packs</option>';
var option3='<option value="'+$(".tubCubsSubOption-2").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".tubCubsSubOption-2").attr('data-new-product-id')+'" data-new-price="'+$(".tubCubsSubOption-2").attr('data-new-price')+'" data-new-product-name="'+$(".tubCubsSubOption-2").attr('data-new-product-name')+'">6 Packs</option>';
              }else{
var option1='<option value="'+$(".tubCubsOntimeOption-3").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".tubCubsOntimeOption-3").attr('data-new-product-id')+'" data-new-price="'+$(".tubCubsOntimeOption-3").attr('data-new-price')+'" data-new-product-name="'+$(".tubCubsOntimeOption-3").attr('data-new-product-name')+'">1 Pack</option>';
var option2='<option value="'+$(".tubCubsOntimeOption-1").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".tubCubsOntimeOption-1").attr('data-new-product-id')+'" data-new-price="'+$(".tubCubsOntimeOption-1").attr('data-new-price')+'" data-new-product-name="'+$(".tubCubsOntimeOption-1").attr('data-new-product-name')+'">3 Packs</option>';
var option3='<option value="'+$(".tubCubsOntimeOption-2").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".tubCubsOntimeOption-2").attr('data-new-product-id')+'" data-new-price="'+$(".tubCubsOntimeOption-2").attr('data-new-price')+'" data-new-product-name="'+$(".tubCubsOntimeOption-2").attr('data-new-product-name')+'">6 Packs</option>';
              }
        	

        }
                    if(saveMoreOption && productPageName=='holiday-scaries.php'){
         
var option1='<option value="'+$(".holidayScariesOntimeOption-1").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".holidayScariesOntimeOption-1").attr('data-new-product-id')+'" data-new-price="'+$(".holidayScariesOntimeOption-1").attr('data-new-price')+'" data-new-product-name="'+$(".holidayScariesOntimeOption-1").attr('data-new-product-name')+'">1 Bottle</option>';
var option2='<option value="'+$(".holidayScariesOntimeOption-2").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".holidayScariesOntimeOption-2").attr('data-new-product-id')+'" data-new-price="'+$(".holidayScariesOntimeOption-2").attr('data-new-price')+'" data-new-product-name="'+$(".holidayScariesOntimeOption-2").attr('data-new-product-name')+'">2 Bottles</option>';
var option3='<option value="'+$(".holidayScariesOntimeOption-3").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".holidayScariesOntimeOption-3").attr('data-new-product-id')+'" data-new-price="'+$(".holidayScariesOntimeOption-3").attr('data-new-price')+'" data-new-product-name="'+$(".holidayScariesOntimeOption-3").attr('data-new-product-name')+'">3 Bottles</option>';
              
        	

        }
 if(saveMoreOption && productPageName=='product-vegan-cbd.php'){   
        	
              if(str.match(/Subscription/g)){
var option1='<option value="'+$(".veganSubOption-1").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".veganSubOption-1").attr('data-new-product-id')+'" data-new-price="'+$(".veganSubOption-1").attr('data-new-price')+'" data-new-product-name="'+$(".veganSubOption-1").attr('data-new-product-name')+'">1 Bottle</option>';
var option2='<option value="'+$(".veganSubOption-2").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".veganSubOption-2").attr('data-new-product-id')+'" data-new-price="'+$(".veganSubOption-2").attr('data-new-price')+'" data-new-product-name="'+$(".veganSubOption-2").attr('data-new-product-name')+'">2 Bottles</option>';
var option3='<option value="'+$(".veganSubOption-3").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".veganSubOption-3").attr('data-new-product-id')+'" data-new-price="'+$(".veganSubOption-3").attr('data-new-price')+'" data-new-product-name="'+$(".veganSubOption-3").attr('data-new-product-name')+'">3 Bottles</option>';
              }else{
var option1='<option value="'+$(".veganOntimeOption-1").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".veganOntimeOption-1").attr('data-new-product-id')+'" data-new-price="'+$(".veganOntimeOption-1").attr('data-new-price')+'" data-new-product-name="'+$(".veganOntimeOption-1").attr('data-new-product-name')+'">1 Bottle</option>';
var option2='<option value="'+$(".veganOntimeOption-2").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".veganOntimeOption-2").attr('data-new-product-id')+'" data-new-price="'+$(".veganOntimeOption-2").attr('data-new-price')+'" data-new-product-name="'+$(".veganOntimeOption-2").attr('data-new-product-name')+'">2 Bottles</option>';
var option3='<option value="'+$(".veganOntimeOption-3").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".veganOntimeOption-3").attr('data-new-product-id')+'" data-new-price="'+$(".veganOntimeOption-3").attr('data-new-price')+'" data-new-product-name="'+$(".veganOntimeOption-3").attr('data-new-product-name')+'">3 Bottles</option>';
              }
        	
        	
        }

if(saveMoreOption && productPageName=='product-tincture.php'){   
        	
              if(str.match(/Subscription/g)){
var option1='<option value="'+$(".tinctureSubOption-1").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".tinctureSubOption-1").attr('data-new-product-id')+'" data-new-price="'+$(".tinctureSubOption-1").attr('data-new-price')+'" data-new-product-name="'+$(".tinctureSubOption-1").attr('data-new-product-name')+'">1 Bottle</option>';
var option2='<option value="'+$(".tinctureSubOption-2").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".tinctureSubOption-2").attr('data-new-product-id')+'" data-new-price="'+$(".tinctureSubOption-2").attr('data-new-price')+'" data-new-product-name="'+$(".tinctureSubOption-2").attr('data-new-product-name')+'">2 Bottles</option>';
var option3='<option value="'+$(".tinctureSubOption-3").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".tinctureSubOption-3").attr('data-new-product-id')+'" data-new-price="'+$(".tinctureSubOption-3").attr('data-new-price')+'" data-new-product-name="'+$(".tinctureSubOption-3").attr('data-new-product-name')+'">3 Bottles</option>';
              }else{
var option1='<option value="'+$(".tinctureOntimeOption-1").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".tinctureOntimeOption-1").attr('data-new-product-id')+'" data-new-price="'+$(".tinctureOntimeOption-1").attr('data-new-price')+'" data-new-product-name="'+$(".tinctureOntimeOption-1").attr('data-new-product-name')+'">1 Bottle</option>';
var option2='<option value="'+$(".tinctureOntimeOption-2").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".tinctureOntimeOption-2").attr('data-new-product-id')+'" data-new-price="'+$(".tinctureOntimeOption-2").attr('data-new-price')+'" data-new-product-name="'+$(".tinctureOntimeOption-2").attr('data-new-product-name')+'">2 Bottles</option>';
var option3='<option value="'+$(".tinctureOntimeOption-3").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".tinctureOntimeOption-3").attr('data-new-product-id')+'" data-new-price="'+$(".tinctureOntimeOption-3").attr('data-new-price')+'" data-new-product-name="'+$(".tinctureOntimeOption-3").attr('data-new-product-name')+'">3 Bottles</option>';
              }
        	
        	
        }
        if(saveMoreOption && productPageName=='cbd-cbn-oil-for-sleep.php'){   
        	
              if(str.match(/Subscription/g)){
var option1='<option value="'+$(".bigspoonSubOption-1").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".bigspoonSubOption-1").attr('data-new-product-id')+'" data-new-price="'+$(".bigspoonSubOption-1").attr('data-new-price')+'" data-new-product-name="'+$(".bigspoonSubOption-1").attr('data-new-product-name')+'">1 Bottle</option>';
var option2='<option value="'+$(".bigspoonSubOption-2").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".bigspoonSubOption-2").attr('data-new-product-id')+'" data-new-price="'+$(".bigspoonSubOption-2").attr('data-new-price')+'" data-new-product-name="'+$(".bigspoonSubOption-2").attr('data-new-product-name')+'">2 Bottles</option>';
var option3='<option value="'+$(".bigspoonSubOption-3").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".bigspoonSubOption-3").attr('data-new-product-id')+'" data-new-price="'+$(".bigspoonSubOption-3").attr('data-new-price')+'" data-new-product-name="'+$(".bigspoonSubOption-3").attr('data-new-product-name')+'">3 Bottles</option>';
              }else{
var option1='<option value="'+$(".bigspoonOntimeOption-1").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".bigspoonOntimeOption-1").attr('data-new-product-id')+'" data-new-price="'+$(".bigspoonOntimeOption-1").attr('data-new-price')+'" data-new-product-name="'+$(".bigspoonOntimeOption-1").attr('data-new-product-name')+'">1 Bottle</option>';
var option2='<option value="'+$(".bigspoonOntimeOption-2").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".bigspoonOntimeOption-2").attr('data-new-product-id')+'" data-new-price="'+$(".bigspoonOntimeOption-2").attr('data-new-price')+'" data-new-product-name="'+$(".bigspoonOntimeOption-2").attr('data-new-product-name')+'">2 Bottles</option>';
var option3='<option value="'+$(".bigspoonOntimeOption-3").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".bigspoonOntimeOption-3").attr('data-new-product-id')+'" data-new-price="'+$(".bigspoonOntimeOption-3").attr('data-new-price')+'" data-new-product-name="'+$(".bigspoonOntimeOption-3").attr('data-new-product-name')+'">3 Bottles</option>';
              }
        	
        	
        }

if(saveMoreOption && productPageName=='cbd-candy.php'){   
        	
              if(str.match(/Subscription/g)){
var option1='<option value="'+$(".candySubOption-1").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".candySubOption-1").attr('data-new-product-id')+'" data-new-price="'+$(".candySubOption-1").attr('data-new-price')+'" data-new-product-name="'+$(".candySubOption-1").attr('data-new-product-name')+'">1 Bag</option>';
var option2='<option value="'+$(".candySubOption-2").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".candySubOption-2").attr('data-new-product-id')+'" data-new-price="'+$(".candySubOption-2").attr('data-new-price')+'" data-new-product-name="'+$(".candySubOption-2").attr('data-new-product-name')+'">2 Bags</option>';
var option3='<option value="'+$(".candySubOption-3").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".candySubOption-3").attr('data-new-product-id')+'" data-new-price="'+$(".candySubOption-3").attr('data-new-price')+'" data-new-product-name="'+$(".candySubOption-3").attr('data-new-product-name')+'">3 Bags</option>';
              }else{
var option1='<option value="'+$(".candyOntimeOption-1").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".candyOntimeOption-1").attr('data-new-product-id')+'" data-new-price="'+$(".candyOntimeOption-1").attr('data-new-price')+'" data-new-product-name="'+$(".candyOntimeOption-1").attr('data-new-product-name')+'">1 Bag</option>';
var option2='<option value="'+$(".candyOntimeOption-2").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".candyOntimeOption-2").attr('data-new-product-id')+'" data-new-price="'+$(".candyOntimeOption-2").attr('data-new-price')+'" data-new-product-name="'+$(".candyOntimeOption-2").attr('data-new-product-name')+'">2 Bags</option>';
var option3='<option value="'+$(".candyOntimeOption-3").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".candyOntimeOption-3").attr('data-new-product-id')+'" data-new-price="'+$(".candyOntimeOption-3").attr('data-new-price')+'" data-new-product-name="'+$(".candyOntimeOption-3").attr('data-new-product-name')+'">3 Bags</option>';
              }
        	
        	
        }


if(saveMoreOption && productPageName=='national-coming-out-day.php'){   
        	
              if(str.match(/Subscription/g)){
var option1='<option value="'+$(".candySubOption-3").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".candySubOption-3").attr('data-new-product-id')+'" data-new-price="'+$(".candySubOption-3").attr('data-new-price')+'" data-new-product-name="'+$(".candySubOption-3").attr('data-new-product-name')+'">3 Bag</option>';
var option2='<option value="'+$(".candySubOption-4").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".candySubOption-4").attr('data-new-product-id')+'" data-new-price="'+$(".candySubOption-4").attr('data-new-price')+'" data-new-product-name="'+$(".candySubOption-4").attr('data-new-product-name')+'">6 Bags</option>';
var option3='<option value="'+$(".candySubOption-5").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".candySubOption-5").attr('data-new-product-id')+'" data-new-price="'+$(".candySubOption-5").attr('data-new-price')+'" data-new-product-name="'+$(".candySubOption-5").attr('data-new-product-name')+'">9 Bags</option>';
              }else{
var option1='<option value="'+$(".candyOntimeOption-3").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".candyOntimeOption-3").attr('data-new-product-id')+'" data-new-price="'+$(".candyOntimeOption-3").attr('data-new-price')+'" data-new-product-name="'+$(".candyOntimeOption-3").attr('data-new-product-name')+'">3 Bag</option>';
var option2='<option value="'+$(".candyOntimeOption-4").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".candyOntimeOption-4").attr('data-new-product-id')+'" data-new-price="'+$(".candyOntimeOption-4").attr('data-new-price')+'" data-new-product-name="'+$(".candyOntimeOption-4").attr('data-new-product-name')+'">6 Bags</option>';
var option3='<option value="'+$(".candyOntimeOption-5").attr('data-new-cmapign-id')+'" data-new-product-id="'+$(".candyOntimeOption-5").attr('data-new-product-id')+'" data-new-price="'+$(".candyOntimeOption-5").attr('data-new-price')+'" data-new-product-name="'+$(".candyOntimeOption-5").attr('data-new-product-name')+'">9 Bags</option>';
              }
        	
        	
        }       

  if(saveMoreOption){

 var createSelectStart='<div class="cart-opt clearfix 1"><span>BUY MORE &amp; SAVE</span>';
var selectTagStart='<select class="buyMoreSaveCartWidget buyMoreSaveCartWidget-'+product_id+'" data-product-id="'+product_id+'" data-product-price="'+displayPrice+'" data-buymor-pagename="'+productPageName+'">';
var createSelectEnd='</select></div>';
var SaveAndByMoreOption=createSelectStart+selectTagStart+option1+option2+option3+createSelectEnd;    

  }else{
  	SaveAndByMoreOption='';
  }
// create Select option 


                      
        console.log(product_id,"product_id");
        var productAdded = $('<li class="clearfix main-sec proSum product-'+proClass+'" data-quantity=""><div class="packImg"><img src="/app/desktop/images/'+proImage+'" alt="Sunday Scaries broad spectrum CBD products" /></div><div class="packRight clearfix"><div class="prd_detls"><h4>' + ProductName + '</h4><p><strong class="price">$' + displayPrice + '</strong><span class="cartSaveCal" style="display:none">$' + disPercent + '</span></p></div><input type="hidden" name="product_id[]" value="' + campaignId + '"><a href="#"  delete-product-id="' + product_id + '" campaign-id="' + campaignId + '" deduction-price="' + displayPrice + '" max-price="' + actualPrice + '" dis-percentage="' + disPercent + '" pro-identity="'+proIdentity+'" class="closeSelection delete-item main-prod mainProd-'+proClass+'"><img src="/app/desktop/images/close-2.png" alt="Sunday Scaries broad spectrum CBD products" /></a></div>'+SaveAndByMoreOption+'</li>');
 
          if (cartList.find("li").hasClass("main-sec")){
             if(cartList.find("li").hasClass("product-gummies")){
              $('.product-gummies').after(productAdded);
            }
                    
          else if(cartList.find("li").hasClass("product-vegan")){
            $('.product-vegan').after(productAdded);
           
          }
          
          else if(cartList.find("li").hasClass("product-tincture")){
             $('.product-tincture').after(productAdded);
          }
          	//CBD Candy
          	else if(cartList.find("li").hasClass("product-candy")){
             $('.product-candy').after(productAdded);
          }  
          	else if(cartList.find("li").hasClass("product-bigspoon")){
             $('.product-bigspoon').after(productAdded);
          }       
     



          //Bundle Product
          //Rando
          else if(cartList.find("li").hasClass("product-rando-bundle")){
            $('.product-rando-bundle').after(productAdded);
          }
          else if(cartList.find("li").hasClass("product-holiday-scaries")){
            $('.product-holiday-scaries').after(productAdded);
          }
          else if(cartList.find("li").hasClass("product-everyday-scaries")){
            $('.product-everyday-scaries').after(productAdded);
          }
          
           else if(cartList.find("li").hasClass("product-bundle-sidePiece")){
             $('.product-bundle-sidePiece').after(productAdded);
          }

           else if(cartList.find("li").hasClass("product-cuddle-bundle")){
             $('.product-cuddle-bundle').after(productAdded);
          }
        
          else if(cartList.find("li").hasClass("product-partypack-trop")){
             $('.product-partypack-trop').after(productAdded);
          }
          else if(cartList.find("li").hasClass("product-partypack-coco")){
             $('.product-partypack-coco').after(productAdded);
          }
          else if(cartList.find("li").hasClass("product-partypack-pine")){
             $('.product-partypack-pine').after(productAdded);
          }
          else if(cartList.find("li").hasClass("product-bra-bearies")){
             $('.product-bra-bearies').after(productAdded);
          }
          else if(cartList.find("li").hasClass("product-tub-cubs")){
             $('.product-tub-cubs').after(productAdded);
          }
          else if(cartList.find("li").hasClass("product-super-mom-bundle")){
            $('.product-super-mom-bundle').after(productAdded);
          }



          }
          else{
           
            cartList.prepend(productAdded);
          }
        
        $(".displayProceedOption").show();
        $(".emptyOptionDesign").hide();
        $(".selecrPackList").show();
        $(".emptyMsg").hide();
        $(".emptyMsgAfterRemove").hide();
        $(".buy-fomo-bones").hide();
        if(saveMoreOption){
        	 $(".product-"+proClass).addClass('addMore-product-'+proClass);
        	changesSelectedOption(product_id,campaignId);
        }
        
    }

    function addAddonProduct(displayPrice, actualPrice, productAddonId, campaignId, disPercent) {

        if (productAddonId == 44) {
            var addonName = "1 Bottle CBD Gummies (Add On)";
            var save="31.95";
            var listPriAddon="49.99";
            var addClassName="addon-Gummies";
        }
        else if(productAddonId == 45) {
            var addonName = "1 Bottle CBD Tincture (Add On)";
            var save="34.99";
            var listPriAddon="79.99";
            var addClassName="addon-Tincture";
        }
        else if (productAddonId == 46) {
            var addonName = "1 Bottle Vegan AF (Add On)";
            var save="23.99";
            var listPriAddon="44.95";
            var addClassName="addon-Vegan";
        }
      
        var campaignId = campaignId;
        if (campaignId == 19) {
            var imagePathaddon = "gummies-cart.png";
        }
        else if(campaignId == 20){
            var imagePathaddon = "tincture-cart.png";
        }
         else if(campaignId == 21){
            var imagePathaddon = "vegan-cart.png";
        }
      
        
        var productAdded = $('<li id="addonli" class="clearfix addon-sec proSum product-'+addClassName+'" ><div class="packImg"><img src="/app/desktop/images/' + imagePathaddon + '" alt="" /></div><div class="packRight clearfix"><div class="prd_detls"><h4>' + addonName + '</h4><p><strong class="price">$' + displayPrice + '</strong><span class="cartSaveCal" style="display:none">$' + listPriAddon + '</span></p></div><input type="hidden" name="product_id[]" value="' + campaignId + '"><a href="#" delete-product-id="' + productAddonId + '" campaign-id="' + campaignId + '" deduction-price="' + displayPrice + '" max-price="' + actualPrice + '" dis-percentage="' + disPercent + '" pro-identity="'+addClassName+'" class="closeSelection delete-item addon-prod-'+addClassName+'"><img src="/app/desktop/images/close-2.png" alt="" /></a></div></li>');
        if (cartList.find("li").hasClass("addon-sec")){
            if(cartList.find("li").hasClass("product-addon-Vegan")){
              $('.product-addon-Vegan').after(productAdded);
            }
                    
          else if(cartList.find("li").hasClass("product-addon-Gummies")){
            $('.product-addon-Gummies').after(productAdded);
          }
           else if(cartList.find("li").hasClass("product-addon-Tincture")){
            $('.product-addon-Tincture').after(productAdded);
          }
          else if(cartList.find("li").hasClass("product-addon-Yoloshot")){
            $('.product-addon-Yoloshot').after(productAdded);
          }
          //CBD candy
          else if(cartList.find("li").hasClass("product-addon-candy")){
            $('.product-addon-candy').after(productAdded);
          }
         
          else if(cartList.find("li").hasClass("product-rando-bundle")){
            $('.product-rando-bundle').after(productAdded);
          }
          else if(cartList.find("li").hasClass("product-holiday-scaries")){
            $('.product-holiday-scaries').after(productAdded);
          }
           else if(cartList.find("li").hasClass("product-bigspoon")){
            $('.product-bigspoon').after(productAdded);
          }



           else if(cartList.find("li").hasClass("product-bundle-sidePiece")){
            $('.product-bundle-sidePiece').after(productAdded);
          }
          else if(cartList.find("li").hasClass("product-cuddle-bundle")){
            $('.product-cuddle-bundle').after(productAdded);
          }
          else if(cartList.find("li").hasClass("product-everyday-scaries")){
            $('.product-everyday-scaries').after(productAdded);
          }
          else if(cartList.find("li").hasClass("product-super-mom-bundle")){
            $('.product-super-mom-bundle').after(productAdded);
          }
        

           else if(cartList.find("li").hasClass("product-partypack-trop")){
            $('.product-partypack-trop').after(productAdded);
          }
           else if(cartList.find("li").hasClass("product-partypack-coco")){
            $('.product-partypack-coco').after(productAdded);
          }
           else if(cartList.find("li").hasClass("product-partypack-pine")){
            $('.product-partypack-pine').after(productAdded);
          }
           else if(cartList.find("li").hasClass("product-bra-bearies")){
            $('.product-bra-bearies').after(productAdded);
          }
           else if(cartList.find("li").hasClass("product-tub-cubs")){
             $('.product-tub-cubs').after(productAdded);
           }
          
        }

          else{
           
            cartList.append(productAdded);
          }
    }

    function removeProduct(product, productTotPrice, deductMaxPrice, removeProductId, disPercent) {

   
        if (removeProductId == 19 || removeProductId == 20 || removeProductId == 21 || removeProductId == 68) {
              
        } else {         

            var qtym = 0;
            var collection = $("li.product");
            collection.each(function() {

                var qtym = collection.length;
               

            })
            $("#addonLi").addClass('deleted');
            cartList.find('.deleted').remove();
           
              var numItems = $('.proSum').length;
        cartCount.html(numItems);

        }

     
        cartList.find('.deleted').remove();

        var topPosition = product.offset().top - cartWrapper.children('ul').offset().top,
            productQuantity = Number($(".my-product-quantity").val()),
            productTotPrice = productTotPrice
          
        product.addClass('deleted');
        
        if ($(".multi-product-quantity").val()) {
            productQuantity = $(".multi-product-quantity").val();

        }
       
        //update items count + total price
        updateCartTotal(productTotPrice, false);
        updateCartMaxTotal(deductMaxPrice,productTotPrice, false);
        updateCartSaveTotal(disPercent, false);
        var numItems = $('.proSum').length;
        var rsetitm=numItems-1;
        $(".count").html(rsetitm);
      
        undo.addClass('visible');

        //wait 8sec before completely remove the item
        undoTimeoutId = setTimeout(function() {


            undo.removeClass('visible');
            cartList.find('.deleted').remove();
             if ($('.selecrPackList li').length==0){
             	// if all main Product delete all  addon delete
            
          	 $(".addon-sec").remove();
            $(".displayProceedOption").hide();
            $(".emptyMsgAfterRemove").show();
            $(".emptyOptionDesign").show();
            $(".buy-sundayscaries_emty").show();
            $(".buy-fomo-bones").show();

             }
             else{
              // $(".displayProceedOption").show();
             }
        }, 500);
    }

    //
    function quickUpdateCart(dataProName,curentId) {
    	console.log(dataProName,"dataProNameBymore");
    	console.log(curentId,"dcurentIdmeBymore");
        var quantity = 0;
        var price = 0;
        var maxCalPrice = 0;
        var initalCartVal=Number(cartMaxTotal.html());
        //var cartSaveCal=0;
         if(dataProName=='product-tincture.php'){
            var notdelClass="tincture";
         }
         if(dataProName=='product-vegan-cbd.php'){
            var notdelClass="vegan";
         }
         if(dataProName=='product-gummies.php'){
            var notdelClass="gummies";
         }
           // alert(maxCalPrice);

           var finalcartTotal=0;
           cartTotal.html('0');
           cartMaxTotal.html('0');
           var cartTotalFromhtml=0;
           var cartSaveTotalFromhtml=0;
          // var finalcartTotal = 0;
        cartList.children('.proSum:not(.deleted)').each(function() {
            var priceRow=parseFloat($(this).find('.price').text().replace('$', ''));
            var maxPriceRow=parseFloat($(this).find('.maxPrice').text().replace('$', ''));
            var saveRowTotal=(maxPriceRow-priceRow).toFixed(2);
            var quantityRow=parseFloat($(this).find('.my-product-quantity').val()) || 0;
            var quantitysingleRow=parseFloat($(this).find('.changed-product-quant-val-'+curentId).val()) || 0;
          console.log(curentId,'curentId');
           
            $(this).attr('data-quantity',quantityRow);
            console.log(quantitysingleRow,"quantitysingleRow");
            console.log(quantityRow,"quantityRow");
            var cartTotalRow=priceRow*quantityRow;
            var cartSaveTotalRow=saveRowTotal*quantityRow;
            cartTotal.html(cartTotalRow + Number(cartTotal.html()));
            cartMaxTotal.html(cartSaveTotalRow + Number(cartMaxTotal.html()));
            
            cartTotalFromhtml=Number(cartTotal.html()).toFixed(2);
            cartSaveTotalFromhtml=Number(cartMaxTotal.html()).toFixed(2);

        });
      
        cartTotal.html(cartTotalFromhtml);
        cartMaxTotal.html(cartSaveTotalFromhtml);
      
    }

    function updateCartCount(emptyCart, quantity) {
   
      
       var numItems = $('.proSum:not(.deleted)').length;
//alert(numItems);
        if(numItems>0){
                cartCount.html(numItems);

        }else{

            if (typeof quantity === 'undefined') {
            //alert(Number(cartCount.eq(0).text()));
            var actual = Number(cartCount.html()) + 1;
            var next = actual + 1;

            if (emptyCart) {
                cartCount.html(actual);
                //cartCount.eq(1).text(next);
            } else {
                cartCount.addClass('update-count');

                setTimeout(function() {
                    cartCount.html(actual);
                }, 150);

                setTimeout(function() {
                    cartCount.removeClass('update-count');
                }, 200);

                setTimeout(function() {
                    //cartCount.eq(1).text(next);
                }, 230);
            }
        } else {
            var actual = Number(cartCount.html()) + quantity;
            //var next = actual + 1;
            //console.log(actual,"cartval");
            if (actual < 1) {
                actual = 0;
            }
          //  alert(actual);

            cartCount.html(actual);
            //cartCount.eq(1).text(next);
        }

        }

        
    }

    function updateCartTotal(price, bool) {
        //alert(price);
        bool ? cartTotal.html((Number(cartTotal.text()) + Number(price)).toFixed(2)) : cartTotal.html((Number(cartTotal.text()) - Number(price)).toFixed(2));
    }

    function updateCartMaxTotal(maxprice, displayPrice, bool) {
        //alert(maxprice);
        //alert(displayPrice);
        bool ? cartMaxTotal.html((Number(cartMaxTotal.html()) + Number(maxprice - displayPrice)).toFixed(2)) : cartMaxTotal.text((Number(cartMaxTotal.html()) - Number(maxprice - displayPrice)).toFixed(2));


    }

    function updateCartSaveTotal(saveprice, bool) {
        bool ? cartSaveTotal.html((Number(cartSaveTotal.html()) + Number(saveprice)).toFixed(2)) : cartSaveTotal.html((Number(cartSaveTotal.html()) - Number(saveprice)).toFixed(2));


    }



    function delte_cart(pid,proIdentity) {
       
        $.ajax({
            url: '/ajax-cart-delete.php',
            data: {
                "productId": pid,"proIdentity":proIdentity
            },
            type: 'post',
            dataType: "json",
            beforeSend:function(x){
                   $("#loading-indicator").show();
                     },
            success: function(result) {
              $("#loading-indicator").hide();

                if (result.msg == 'sucesss') {
                    

                } else {

                }
             

            }
        });

    }

    function  addQuantityDiv(productPageName){
    	

    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        productid = btnUp.attr("campaign-id"),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
          saveQuantity(productid, newVal);
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
          saveQuantity(productid, newVal);
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
    }

});
  
function saveQuantity(productid, quantity){
  $.ajax({
        url: '/ajax-cart-save-quantity.php',
        data: {
            "product_ids": [productid],
            "quantity": [quantity]
        },
        type: 'post',
        dataType: "json",
        beforeSend:function(x){
       		$("#loading-indicator").show();
        },
        success: function(result) {
        	$("#loading-indicator").hide();
      	}
    });
}  

function checkYoloshotaded(className){

	$(".buyrow_545").show();



} 

function display50Off(){
	var noOfVissibleAddon=$(".buyRow").is(':visible');
                         
    if(noOfVissibleAddon){
     $(".upgradedisplay").show();
    }else{
    $(".upgradedisplay").hide();
   }
}



function createProductIdentity(dataBuymorProdutpage){
	 if(dataBuymorProdutpage=='product-gummies.php'){
        		return productIdentity='gummies';
        }
         if(dataBuymorProdutpage=='bra-bearies.php'){
        		return productIdentity='bra-bearies';
        }
         if(dataBuymorProdutpage=='tub-cubs.php'){
        		return productIdentity='tub-cubs';
        }
        if(dataBuymorProdutpage=='product-vegan-cbd.php'){
        		return productIdentity='vegan';
        }
        if(dataBuymorProdutpage=='product-tincture.php'){
        		return productIdentity='tincture';
        }
        if(dataBuymorProdutpage=='cbd-candy.php'){
        		return productIdentity='candy';
        }
         if(dataBuymorProdutpage=='holiday-scaries.php'){
        		return productIdentity='holiday-scaries';
        }
        if(dataBuymorProdutpage=='national-coming-out-day.php'){
        		return productIdentity='candy';
        }
        if(dataBuymorProdutpage=='cbd-cbn-oil-for-sleep.php'){
        		return productIdentity='bigspoon';
        }

}
  
   


/*
*
*silck.min.js
*/
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/*
*
*sticky Sidebar
*/

!function(t,o){t.extend({stickysidebarscroll:function(o,e){if(e&&e.offset?(e.offset.bottom=parseInt(e.offset.bottom,10),e.offset.top=parseInt(e.offset.top,10)):e.offset={bottom:100,top:0},(o=t(o))&&o.offset()){var s=o.offset().top,f=o.offset().left,n=(o.outerHeight(!0),o.outerWidth()),i=o.css("position"),p=o.css("top"),r=parseInt(o.css("marginTop"),10),c=t(document).height(),a=t(document).height()-e.offset.bottom,m=0,d=!1,h=!1;(!0===e.forcemargin||navigator.userAgent.match(/\bMSIE (4|5|6)\./)||navigator.userAgent.match(/\bOS (3|4|5|6)_/)||navigator.userAgent.match(/\bAndroid (1|2|3|4)\./i))&&(h=!0),t(window).bind("scroll resize orientationchange load",o,function(g){c!==t(document).height()&&(a=t(document).height()-e.offset.bottom,c=t(document).height()),0==d&&(s=o.offset().top);var u=o.outerHeight(),l=t(window).scrollTop();h&&document.activeElement&&"INPUT"===document.activeElement.nodeName||(d=!0,l>=s-(r||0)-e.offset.top?(m=a<l+u+r+e.offset.top?l+u+r+e.offset.top-a:0,h?o.css({marginTop:parseInt((r||0)+(l-s-m)+2*e.offset.top,10)+"px"}):o.css({position:"fixed",top:e.offset.top-m+"px",width:n+"px"})):(d=!1,f=o.offset().left,o.css({position:i,top:p,left:f,width:n+"px",marginTop:(r||10)+"px"})))})}}})}(jQuery);

/*
*
*Jquery Collapsible Sidebar
*/
!function(e,s){e.fn.collapsible=function(s){var n=e.extend({accordion:!1,accordionUpSpeed:400,accordionDownSpeed:400,collapseSpeed:400,contentOpen:null,arrowRclass:"arrow-r",arrowDclass:"arrow-d",animate:!0},s);return this.each(function(){!1===n.animate&&(n.accordionUpSpeed=0,n.accordionDownSpeed=0,n.collapseSpeed=0);var s=e(this).children(":even"),c=e(this).children(":odd"),r="accordion-active";if(e(this).children(":nth-child(even)").css("display","none"),!0===n.accordion)null!==n.contentOpen&&(e(s[n.contentOpen]).children(":first-child").toggleClass(n.arrowRclass+" "+n.arrowDclass),e(c[n.contentOpen]).show().addClass(r)),e(s).click(function(){e(this).next().attr("class")===r?(e(this).next().slideUp(n.accordionUpSpeed).removeClass(r),e(this).children(":first-child").toggleClass(n.arrowRclass+" "+n.arrowDclass)):(e(s).children().removeClass(n.arrowDclass).addClass(n.arrowRclass),e(c).slideUp(n.accordionUpSpeed).removeClass(r),e(this).next().slideDown(n.accordionDownSpeed).addClass(r),e(this).children(":first-child").toggleClass(n.arrowRclass+" "+n.arrowDclass))});else{if(null!==n.contentOpen)if(Array.isArray(n.contentOpen))for(var a=0;a<n.contentOpen.length;a++){var l=n.contentOpen[a];e(s[l]).children(":first-child").toggleClass(n.arrowRclass+" "+n.arrowDclass),e(c[l]).show()}else e(s[n.contentOpen]).children(":first-child").toggleClass(n.arrowRclass+" "+n.arrowDclass),e(c[n.contentOpen]).show();e(s).click(function(){e(this).children(":first-child").toggleClass(n.arrowRclass+" "+n.arrowDclass),e(this).next().slideToggle(n.collapseSpeed)})}})}}(jQuery);




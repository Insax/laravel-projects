(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

/*! Magnific Popup - v0.9.9 - 2013-12-27
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
(function (e) {
  var t,
      n,
      i,
      o,
      r,
      a,
      s,
      l = "Close",
      c = "BeforeClose",
      d = "AfterClose",
      u = "BeforeAppend",
      p = "MarkupParse",
      f = "Open",
      m = "Change",
      g = "mfp",
      h = "." + g,
      v = "mfp-ready",
      C = "mfp-removing",
      y = "mfp-prevent-close",
      w = function w() {},
      b = !!window.jQuery,
      I = e(window),
      x = function x(e, n) {
    t.ev.on(g + e + h, n);
  },
      k = function k(t, n, i, o) {
    var r = document.createElement("div");return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r;
  },
      T = function T(n, i) {
    t.ev.triggerHandler(g + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
  },
      E = function E(n) {
    return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn;
  },
      _ = function _() {
    e.magnificPopup.instance || (t = new w(), t.init(), e.magnificPopup.instance = t);
  },
      S = function S() {
    var e = document.createElement("p").style,
        t = ["ms", "O", "Moz", "Webkit"];if (void 0 !== e.transition) return !0;for (; t.length;) {
      if (t.pop() + "Transition" in e) return !0;
    }return !1;
  };w.prototype = { constructor: w, init: function init() {
      var n = navigator.appVersion;t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = S(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = e(document), t.popupsCache = {};
    }, open: function open(n) {
      i || (i = e(document.body));var r;if (n.isObj === !1) {
        t.items = n.items.toArray(), t.index = 0;var s,
            l = n.items;for (r = 0; l.length > r; r++) {
          if (s = l[r], s.parsed && (s = s.el[0]), s === n.el[0]) {
            t.index = r;break;
          }
        }
      } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;if (t.isOpen) return t.updateItemHTML(), void 0;t.types = [], a = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + h, function () {
        t.close();
      }), t.wrap = k("wrap").attr("tabindex", -1).on("click" + h, function (e) {
        t._checkIfClose(e.target) && t.close();
      }), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));var c = e.magnificPopup.modules;for (r = 0; c.length > r; r++) {
        var d = c[r];d = d.charAt(0).toUpperCase() + d.slice(1), t["init" + d].call(t);
      }T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (x(p, function (e, t, n, i) {
        n.close_replaceWith = E(i.type);
      }), a += " mfp-close-btn-in") : t.wrap.append(E())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({ overflow: t.st.overflowY, overflowX: "hidden", overflowY: t.st.overflowY }) : t.wrap.css({ top: I.scrollTop(), position: "absolute" }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({ height: o.height(), position: "absolute" }), t.st.enableEscapeKey && o.on("keyup" + h, function (e) {
        27 === e.keyCode && t.close();
      }), I.on("resize" + h, function () {
        t.updateSize();
      }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);var u = t.wH = I.height(),
          m = {};if (t.fixedContentPos && t._hasScrollBar(u)) {
        var g = t._getScrollbarSize();g && (m.marginRight = g);
      }t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");var C = t.st.mainClass;return t.isIE7 && (C += " mfp-ie7"), C && t._addClassToMFP(C), t.updateItemHTML(), T("BuildControls"), e("html").css(m), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i), t._lastFocusedEl = document.activeElement, setTimeout(function () {
        t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), o.on("focusin" + h, t._onFocusIn);
      }, 16), t.isOpen = !0, t.updateSize(u), T(f), n;
    }, close: function close() {
      t.isOpen && (T(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(C), setTimeout(function () {
        t._close();
      }, t.st.removalDelay)) : t._close());
    }, _close: function _close() {
      T(l);var n = C + " " + v + " ";if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
        var i = { marginRight: "" };t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i);
      }o.off("keyup" + h + " focusin" + h), t.ev.off(h), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(d);
    }, updateSize: function updateSize(e) {
      if (t.isIOS) {
        var n = document.documentElement.clientWidth / window.innerWidth,
            i = window.innerHeight * n;t.wrap.css("height", i), t.wH = i;
      } else t.wH = e || I.height();t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize");
    }, updateItemHTML: function updateItemHTML() {
      var n = t.items[t.index];t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));var i = n.type;if (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
        var o = t.st[i] ? t.st[i].markup : !1;T("FirstMarkupParse", o), t.currTemplate[i] = o ? e(o) : !0;
      }r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);t.appendContent(a, i), n.preloaded = !0, T(m, n), r = n.type, t.container.prepend(t.contentContainer), T("AfterChange");
    }, appendContent: function appendContent(e, n) {
      t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "", T(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content);
    }, parseEl: function parseEl(n) {
      var i,
          o = t.items[n];if (o.tagName ? o = { el: e(o) } : (i = o.type, o = { data: o, src: o.src }), o.el) {
        for (var r = t.types, a = 0; r.length > a; a++) {
          if (o.el.hasClass("mfp-" + r[a])) {
            i = r[a];break;
          }
        }o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"));
      }return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, T("ElementParse", o), t.items[n];
    }, addGroup: function addGroup(e, n) {
      var i = function i(_i) {
        _i.mfpEl = this, t._openClick(_i, e, n);
      };n || (n = {});var o = "click.magnificPopup";n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)));
    }, _openClick: function _openClick(n, i, o) {
      var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
        var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;if (a) if (e.isFunction(a)) {
          if (!a.call(t)) return !0;
        } else if (a > I.width()) return !0;n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o);
      }
    }, updateStatus: function updateStatus(e, i) {
      if (t.preloader) {
        n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);var o = { status: e, text: i };T("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function (e) {
          e.stopImmediatePropagation();
        }), t.container.addClass("mfp-s-" + e), n = e;
      }
    }, _checkIfClose: function _checkIfClose(n) {
      if (!e(n).hasClass(y)) {
        var i = t.st.closeOnContentClick,
            o = t.st.closeOnBgClick;if (i && o) return !0;if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;if (n === t.content[0] || e.contains(t.content[0], n)) {
          if (i) return !0;
        } else if (o && e.contains(document, n)) return !0;return !1;
      }
    }, _addClassToMFP: function _addClassToMFP(e) {
      t.bgOverlay.addClass(e), t.wrap.addClass(e);
    }, _removeClassFromMFP: function _removeClassFromMFP(e) {
      this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
    }, _hasScrollBar: function _hasScrollBar(e) {
      return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height());
    }, _setFocus: function _setFocus() {
      (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
    }, _onFocusIn: function _onFocusIn(n) {
      return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1);
    }, _parseMarkup: function _parseMarkup(t, n, i) {
      var o;i.data && (n = e.extend(i.data, n)), T(p, [t, n, i]), e.each(n, function (e, n) {
        if (void 0 === n || n === !1) return !0;if (o = e.split("_"), o.length > 1) {
          var i = t.find(h + "-" + o[0]);if (i.length > 0) {
            var r = o[1];"replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n);
          }
        } else t.find(h + "-" + e).html(n);
      });
    }, _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === t.scrollbarSize) {
        var e = document.createElement("div");e.id = "mfp-sbm", e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e);
      }return t.scrollbarSize;
    } }, e.magnificPopup = { instance: null, proto: w.prototype, modules: [], open: function open(t, n) {
      return _(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t);
    }, close: function close() {
      return e.magnificPopup.instance && e.magnificPopup.instance.close();
    }, registerModule: function registerModule(t, n) {
      n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t);
    }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: "Close (Esc)", tLoading: "Loading..." } }, e.fn.magnificPopup = function (n) {
    _();var i = e(this);if ("string" == typeof n) {
      if ("open" === n) {
        var o,
            r = b ? i.data("magnificPopup") : i[0].magnificPopup,
            a = parseInt(arguments[1], 10) || 0;r.items ? o = r.items[a] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), t._openClick({ mfpEl: o }, i, r);
      } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
    } else n = e.extend(!0, {}, n), b ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);return i;
  };var P,
      O,
      z,
      M = "inline",
      B = function B() {
    z && (O.after(z.addClass(P)).detach(), z = null);
  };e.magnificPopup.registerModule(M, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function initInline() {
        t.types.push(M), x(l + "." + M, function () {
          B();
        });
      }, getInline: function getInline(n, i) {
        if (B(), n.src) {
          var o = t.st.inline,
              r = e(n.src);if (r.length) {
            var a = r[0].parentNode;a && a.tagName && (O || (P = o.hiddenClass, O = k(P), P = "mfp-" + P), z = r.after(O).detach().removeClass(P)), t.updateStatus("ready");
          } else t.updateStatus("error", o.tNotFound), r = e("<div>");return n.inlineElement = r, r;
        }return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
      } } });var F,
      H = "ajax",
      L = function L() {
    F && i.removeClass(F);
  },
      A = function A() {
    L(), t.req && t.req.abort();
  };e.magnificPopup.registerModule(H, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function initAjax() {
        t.types.push(H), F = t.st.ajax.cursor, x(l + "." + H, A), x("BeforeChange." + H, A);
      }, getAjax: function getAjax(n) {
        F && i.addClass(F), t.updateStatus("loading");var o = e.extend({ url: n.src, success: function success(i, o, r) {
            var a = { data: i, xhr: r };T("ParseAjax", a), t.appendContent(e(a.data), H), n.finished = !0, L(), t._setFocus(), setTimeout(function () {
              t.wrap.addClass(v);
            }, 16), t.updateStatus("ready"), T("AjaxContentAdded");
          }, error: function error() {
            L(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src));
          } }, t.st.ajax.settings);return t.req = e.ajax(o), "";
      } } });var j,
      N = function N(n) {
    if (n.data && void 0 !== n.data.title) return n.data.title;var i = t.st.image.titleSrc;if (i) {
      if (e.isFunction(i)) return i.call(t, n);if (n.el) return n.el.attr(i) || "";
    }return "";
  };e.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function initImage() {
        var e = t.st.image,
            n = ".image";t.types.push("image"), x(f + n, function () {
          "image" === t.currItem.type && e.cursor && i.addClass(e.cursor);
        }), x(l + n, function () {
          e.cursor && i.removeClass(e.cursor), I.off("resize" + h);
        }), x("Resize" + n, t.resizeImage), t.isLowIE && x("AfterChange", t.resizeImage);
      }, resizeImage: function resizeImage() {
        var e = t.currItem;if (e && e.img && t.st.image.verticalFit) {
          var n = 0;t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n);
        }
      }, _onImageHasSize: function _onImageHasSize(e) {
        e.img && (e.hasSize = !0, j && clearInterval(j), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1));
      }, findImageSize: function findImageSize(e) {
        var n = 0,
            i = e.img[0],
            o = function o(r) {
          j && clearInterval(j), j = setInterval(function () {
            return i.naturalWidth > 0 ? (t._onImageHasSize(e), void 0) : (n > 200 && clearInterval(j), n++, 3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500), void 0);
          }, r);
        };o(1);
      }, getImage: function getImage(n, i) {
        var o = 0,
            r = function r() {
          n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, T("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : a()));
        },
            a = function a() {
          n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0);
        },
            s = t.st.image,
            l = i.find(".mfp-img");if (l.length) {
          var c = document.createElement("img");c.className = "mfp-img", n.img = e(c).on("load.mfploader", r).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1);
        }return t._parseMarkup(i, { title: N(n), img_replaceWith: n.img }, n), t.resizeImage(), n.hasSize ? (j && clearInterval(j), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i);
      } } });var W,
      R = function R() {
    return void 0 === W && (W = void 0 !== document.createElement("p").style.MozTransform), W;
  };e.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function opener(e) {
        return e.is("img") ? e : e.find("img");
      } }, proto: { initZoom: function initZoom() {
        var e,
            n = t.st.zoom,
            i = ".zoom";if (n.enabled && t.supportsTransition) {
          var o,
              r,
              a = n.duration,
              s = function s(e) {
            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                i = "all " + n.duration / 1e3 + "s " + n.easing,
                o = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                r = "transition";return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t;
          },
              d = function d() {
            t.content.css("visibility", "visible");
          };x("BuildControls" + i, function () {
            if (t._allowZoom()) {
              if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return d(), void 0;r = s(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function () {
                r.css(t._getOffset(!0)), o = setTimeout(function () {
                  d(), setTimeout(function () {
                    r.remove(), e = r = null, T("ZoomAnimationEnded");
                  }, 16);
                }, a);
              }, 16);
            }
          }), x(c + i, function () {
            if (t._allowZoom()) {
              if (clearTimeout(o), t.st.removalDelay = a, !e) {
                if (e = t._getItemToZoom(), !e) return;r = s(e);
              }r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function () {
                r.css(t._getOffset());
              }, 16);
            }
          }), x(l + i, function () {
            t._allowZoom() && (d(), r && r.remove(), e = null);
          });
        }
      }, _allowZoom: function _allowZoom() {
        return "image" === t.currItem.type;
      }, _getItemToZoom: function _getItemToZoom() {
        return t.currItem.hasSize ? t.currItem.img : !1;
      }, _getOffset: function _getOffset(n) {
        var i;i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);var o = i.offset(),
            r = parseInt(i.css("padding-top"), 10),
            a = parseInt(i.css("padding-bottom"), 10);o.top -= e(window).scrollTop() - r;var s = { width: i.width(), height: (b ? i.innerHeight() : i[0].offsetHeight) - a - r };return R() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s;
      } } });var Z = "iframe",
      q = "//about:blank",
      D = function D(e) {
    if (t.currTemplate[Z]) {
      var n = t.currTemplate[Z].find("iframe");n.length && (e || (n[0].src = q), t.isIE8 && n.css("display", e ? "block" : "none"));
    }
  };e.magnificPopup.registerModule(Z, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function initIframe() {
        t.types.push(Z), x("BeforeChange", function (e, t, n) {
          t !== n && (t === Z ? D() : n === Z && D(!0));
        }), x(l + "." + Z, function () {
          D();
        });
      }, getIframe: function getIframe(n, i) {
        var o = n.src,
            r = t.st.iframe;e.each(r.patterns, function () {
          return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0;
        });var a = {};return r.srcAction && (a[r.srcAction] = o), t._parseMarkup(i, a, n), t.updateStatus("ready"), i;
      } } });var K = function K(e) {
    var n = t.items.length;return e > n - 1 ? e - n : 0 > e ? n + e : e;
  },
      Y = function Y(e, t, n) {
    return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
  };e.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function initGallery() {
        var n = t.st.gallery,
            i = ".mfp-gallery",
            r = Boolean(e.fn.mfpFastClick);return t.direction = !0, n && n.enabled ? (a += " mfp-gallery", x(f + i, function () {
          n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function () {
            return t.items.length > 1 ? (t.next(), !1) : void 0;
          }), o.on("keydown" + i, function (e) {
            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
          });
        }), x("UpdateStatus" + i, function (e, n) {
          n.text && (n.text = Y(n.text, t.currItem.index, t.items.length));
        }), x(p + i, function (e, i, o, r) {
          var a = t.items.length;o.counter = a > 1 ? Y(n.tCounter, r.index, a) : "";
        }), x("BuildControls" + i, function () {
          if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
            var i = n.arrowMarkup,
                o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                a = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
                s = r ? "mfpFastClick" : "click";o[s](function () {
              t.prev();
            }), a[s](function () {
              t.next();
            }), t.isIE7 && (k("b", o[0], !1, !0), k("a", o[0], !1, !0), k("b", a[0], !1, !0), k("a", a[0], !1, !0)), t.container.append(o.add(a));
          }
        }), x(m + i, function () {
          t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
            t.preloadNearbyImages(), t._preloadTimeout = null;
          }, 16);
        }), x(l + i, function () {
          o.off(i), t.wrap.off("click" + i), t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null;
        }), void 0) : !1;
      }, next: function next() {
        t.direction = !0, t.index = K(t.index + 1), t.updateItemHTML();
      }, prev: function prev() {
        t.direction = !1, t.index = K(t.index - 1), t.updateItemHTML();
      }, goTo: function goTo(e) {
        t.direction = e >= t.index, t.index = e, t.updateItemHTML();
      }, preloadNearbyImages: function preloadNearbyImages() {
        var e,
            n = t.st.gallery.preload,
            i = Math.min(n[0], t.items.length),
            o = Math.min(n[1], t.items.length);for (e = 1; (t.direction ? o : i) >= e; e++) {
          t._preloadItem(t.index + e);
        }for (e = 1; (t.direction ? i : o) >= e; e++) {
          t._preloadItem(t.index - e);
        }
      }, _preloadItem: function _preloadItem(n) {
        if (n = K(n), !t.items[n].preloaded) {
          var i = t.items[n];i.parsed || (i = t.parseEl(n)), T("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
            i.hasSize = !0;
          }).on("error.mfploader", function () {
            i.hasSize = !0, i.loadError = !0, T("LazyLoadError", i);
          }).attr("src", i.src)), i.preloaded = !0;
        }
      } } });var U = "retina";e.magnificPopup.registerModule(U, { options: { replaceSrc: function replaceSrc(e) {
        return e.src.replace(/\.\w+$/, function (e) {
          return "@2x" + e;
        });
      }, ratio: 1 }, proto: { initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var e = t.st.retina,
              n = e.ratio;n = isNaN(n) ? n() : n, n > 1 && (x("ImageHasSize." + U, function (e, t) {
            t.img.css({ "max-width": t.img[0].naturalWidth / n, width: "100%" });
          }), x("ElementParse." + U, function (t, i) {
            i.src = e.replaceSrc(i, n);
          }));
        }
      } } }), function () {
    var t = 1e3,
        n = "ontouchstart" in window,
        i = function i() {
      I.off("touchmove" + r + " touchend" + r);
    },
        o = "mfpFastClick",
        r = "." + o;e.fn.mfpFastClick = function (o) {
      return e(this).each(function () {
        var a,
            s = e(this);if (n) {
          var l, c, d, u, p, f;s.on("touchstart" + r, function (e) {
            u = !1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, d = p.clientY, I.on("touchmove" + r, function (e) {
              p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - d) > 10) && (u = !0, i());
            }).on("touchend" + r, function (e) {
              i(), u || f > 1 || (a = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function () {
                a = !1;
              }, t), o());
            });
          });
        }s.on("click" + r, function () {
          a || o();
        });
      });
    }, e.fn.destroyMfpFastClick = function () {
      e(this).off("touchstart" + r + " click" + r), n && I.off("touchmove" + r + " touchend" + r);
    };
  }(), _();
})(window.jQuery || window.Zepto);

},{}]},{},[1]);

//# sourceMappingURL=popup.js.map

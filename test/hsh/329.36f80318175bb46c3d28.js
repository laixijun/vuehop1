(window.webpackJsonp = window.webpackJsonp || []).push([[329], {
  H7qB: function(t, i, e) {
    "use strict";
    /*!
* better-normal-scroll v1.15.2
* (c) 2016-2019 ustbhuangyi
* Released under the MIT License.
*/
    function s(t, i) {
      for (; i + 1 < t.length; i++)
        t[i] = t[i + 1];
      t.pop()
    }
    e.r(i);
    var o = function() {
      return function(t, i) {
        if (Array.isArray(t))
          return t;
        if (Symbol.iterator in Object(t))
          return function(t, i) {
            var e = []
              , s = !0
              , o = !1
              , n = void 0;
            try {
              for (var r, h = t[Symbol.iterator](); !(s = (r = h.next()).done) && (e.push(r.value),
              !i || e.length !== i); s = !0)
                ;
            } catch (t) {
              o = !0,
                n = t
            } finally {
              try {
                !s && h.return && h.return()
              } finally {
                if (o)
                  throw n
              }
            }
            return e
          }(t, i);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
    }()
      , n = function(t) {
      if (Array.isArray(t)) {
        for (var i = 0, e = Array(t.length); i < t.length; i++)
          e[i] = t[i];
        return e
      }
      return Array.from(t)
    };
    var r = "undefined" != typeof window
      , h = r && navigator.userAgent.toLowerCase()
      , a = h && /wechatdevtools/.test(h)
      , l = h && h.indexOf("android") > 0;
    function c() {
      return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +new Date
    }
    function p(t) {
      for (var i = arguments.length, e = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++)
        e[s - 1] = arguments[s];
      for (var o = 0; o < e.length; o++) {
        var n = e[o];
        for (var r in n)
          t[r] = n[r]
      }
      return t
    }
    function d(t) {
      return void 0 === t || null === t
    }
    function u(t, i) {
      return Math.sqrt(t * t + i * i)
    }
    var m = r && document.createElement("div").style
      , f = function() {
      if (!r)
        return !1;
      var t = {
        standard: "transform",
        webkit: "webkitTransform",
        Moz: "MozTransform",
        O: "OTransform",
        ms: "msTransform"
      };
      for (var i in t)
        if (void 0 !== m[t[i]])
          return i;
      return !1
    }();
    function g(t) {
      return !1 !== f && ("standard" === f ? "transitionEnd" === t ? "transitionend" : t : f + t.charAt(0).toUpperCase() + t.substr(1))
    }
    function v(t, i, e, s) {
      t.addEventListener(i, e, {
        passive: !1,
        capture: !!s
      })
    }
    function y(t, i, e, s) {
      t.removeEventListener(i, e, {
        passive: !1,
        capture: !!s
      })
    }
    function w(t) {
      for (var i = 0, e = 0; t; )
        i -= t.offsetLeft,
          e -= t.offsetTop,
          t = t.offsetParent;
      return {
        left: i,
        top: e
      }
    }
    function x(t) {
      var i = t.getBoundingClientRect();
      return {
        left: -(i.left + window.pageXOffset),
        top: -(i.top + window.pageYOffset)
      }
    }
    var T = f && "standard" !== f ? "-" + f.toLowerCase() + "-" : ""
      , S = g("transform")
      , b = g("transition")
      , _ = r && g("perspective")in m
      , Y = r && ("ontouchstart"in window || a)
      , X = !1 !== S
      , M = r && b in m
      , P = {
      transform: S,
      transition: b,
      transitionTimingFunction: g("transitionTimingFunction"),
      transitionDuration: g("transitionDuration"),
      transitionDelay: g("transitionDelay"),
      transformOrigin: g("transformOrigin"),
      transitionEnd: g("transitionEnd")
    }
      , D = 1
      , E = {
      touchstart: D,
      touchmove: D,
      touchend: D,
      mousedown: 2,
      mousemove: 2,
      mouseup: 2
    };
    function I(t) {
      if (t instanceof window.SVGElement) {
        var i = t.getBoundingClientRect();
        return {
          top: i.top,
          left: i.left,
          width: i.width,
          height: i.height
        }
      }
      return {
        top: t.offsetTop,
        left: t.offsetLeft,
        width: t.offsetWidth,
        height: t.offsetHeight
      }
    }
    function W(t, i) {
      for (var e in i)
        if (i[e].test(t[e]))
          return !0;
      return !1
    }
    function k(t) {
      var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click"
        , e = void 0;
      "mouseup" === t.type || "mousecancel" === t.type ? e = t : "touchend" !== t.type && "touchcancel" !== t.type || (e = t.changedTouches[0]);
      var s = {};
      e && (s.screenX = e.screenX || 0,
        s.screenY = e.screenY || 0,
        s.clientX = e.clientX || 0,
        s.clientY = e.clientY || 0);
      var o = void 0
        , n = !0
        , r = !0;
      if ("undefined" != typeof MouseEvent)
        try {
          o = new MouseEvent(i,p({
            bubbles: n,
            cancelable: r
          }, s))
        } catch (t) {
          h()
        }
      else
        h();
      function h() {
        (o = document.createEvent("Event")).initEvent(i, n, r),
          p(o, s)
      }
      o.forwardedTouchEvent = !0,
        o._constructed = !0,
        t.target.dispatchEvent(o)
    }
    function H(t, i) {
      t.removeChild(i)
    }
    var z = {
      startX: 0,
      startY: 0,
      scrollX: !1,
      scrollY: !0,
      freeScroll: !1,
      directionLockThreshold: 5,
      eventPassthrough: "",
      click: !1,
      tap: !1,
      bounce: !0,
      bounceTime: 800,
      momentum: !0,
      momentumLimitTime: 300,
      momentumLimitDistance: 15,
      swipeTime: 2500,
      swipeBounceTime: 500,
      deceleration: .0015,
      flickLimitTime: 200,
      flickLimitDistance: 100,
      resizePolling: 60,
      probeType: 0,
      preventDefault: !0,
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/
      },
      HWCompositing: !0,
      useTransition: !0,
      useTransform: !0,
      bindToWrapper: !1,
      disableMouse: Y,
      disableTouch: !Y,
      observeDOM: !0,
      autoBlur: !0,
      wheel: !1,
      snap: !1,
      scrollbar: !1,
      pullDownRefresh: !1,
      pullUpLoad: !1,
      mouseWheel: !1,
      stopPropagation: !1,
      zoom: !1,
      infinity: !1,
      dblclick: !1
    };
    var A = {
      swipe: {
        style: "cubic-bezier(0.23, 1, 0.32, 1)",
        fn: function(t) {
          return 1 + --t * t * t * t * t
        }
      },
      swipeBounce: {
        style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        fn: function(t) {
          return t * (2 - t)
        }
      },
      bounce: {
        style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
        fn: function(t) {
          return 1 - --t * t * t * t
        }
      }
    };
    function C(t, i, e, s, o, n, r, h) {
      var a = t - i
        , l = Math.abs(a) / e
        , c = r.deceleration
        , p = r.itemHeight
        , d = r.swipeBounceTime
        , u = r.wheel
        , m = r.swipeTime
        , f = u ? 4 : 15
        , g = t + l / c * (a < 0 ? -1 : 1);
      return u && p && (g = h._findNearestValidWheel(g).y),
        g < s ? (g = n ? Math.max(s - n / 4, s - n / f * l) : s,
          m = d) : g > o && (g = n ? Math.min(o + n / 4, o + n / f * l) : o,
          m = d),
        {
          destination: Math.round(g),
          duration: m
        }
    }
    function O() {}
    var L = r ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function(t) {
      return window.setTimeout(t, (t.interval || 100 / 60) / 2)
    }
      : O
      , N = r ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function(t) {
      window.clearTimeout(t)
    }
      : O
      , R = 1
      , F = -1
      , U = 1
      , V = -1
      , B = 1
      , q = 3;
    function Z(t) {
      console.error("[BScroll warn]: " + t)
    }
    function j(t, i) {
      if (!t)
        throw new Error("[BScroll] " + i)
    }
    function J(t) {
      var i = document.createElement("div")
        , e = document.createElement("div");
      return i.style.cssText = "position:absolute;z-index:9999;pointerEvents:none",
        e.style.cssText = "box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;",
        e.className = "bscroll-indicator",
        "horizontal" === t ? (i.style.cssText += ";height:7px;left:2px;right:2px;bottom:0",
          e.style.height = "100%",
          i.className = "bscroll-horizontal-scrollbar") : (i.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px",
          e.style.width = "100%",
          i.className = "bscroll-vertical-scrollbar"),
        i.style.cssText += ";overflow:hidden",
        i.appendChild(e),
        i
    }
    function G(t, i) {
      this.wrapper = i.el,
        this.wrapperStyle = this.wrapper.style,
        this.indicator = this.wrapper.children[0],
        this.indicatorStyle = this.indicator.style,
        this.scroller = t,
        this.direction = i.direction,
        i.fade ? (this.visible = 0,
          this.wrapperStyle.opacity = "0") : this.visible = 1,
        this.sizeRatioX = 1,
        this.sizeRatioY = 1,
        this.maxPosX = 0,
        this.maxPosY = 0,
        this.x = 0,
        this.y = 0,
      i.interactive && this._addDOMEvents()
    }
    G.prototype.handleEvent = function(t) {
      switch (t.type) {
        case "touchstart":
        case "mousedown":
          this._start(t);
          break;
        case "touchmove":
        case "mousemove":
          this._move(t);
          break;
        case "touchend":
        case "mouseup":
        case "touchcancel":
        case "mousecancel":
          this._end(t)
      }
    }
      ,
      G.prototype.refresh = function() {
        this._shouldShow() && (this.transitionTime(),
          this._calculate(),
          this.updatePosition())
      }
      ,
      G.prototype.fade = function(t, i) {
        var e = this;
        if (!i || this.visible) {
          var s = t ? 250 : 500;
          t = t ? "1" : "0",
            this.wrapperStyle[P.transitionDuration] = s + "ms",
            clearTimeout(this.fadeTimeout),
            this.fadeTimeout = setTimeout(function() {
              e.wrapperStyle.opacity = t,
                e.visible = +t
            }, 0)
        }
      }
      ,
      G.prototype.updatePosition = function() {
        if ("vertical" === this.direction) {
          var t = Math.round(this.sizeRatioY * this.scroller.y);
          if (t < 0) {
            this.transitionTime(500);
            var i = Math.max(this.indicatorHeight + 3 * t, 8);
            this.indicatorStyle.height = i + "px",
              t = 0
          } else if (t > this.maxPosY) {
            this.transitionTime(500);
            var e = Math.max(this.indicatorHeight - 3 * (t - this.maxPosY), 8);
            this.indicatorStyle.height = e + "px",
              t = this.maxPosY + this.indicatorHeight - e
          } else
            this.indicatorStyle.height = this.indicatorHeight + "px";
          this.y = t,
            this.scroller.options.useTransform ? this.indicatorStyle[P.transform] = "translateY(" + t + "px)" + this.scroller.translateZ : this.indicatorStyle.top = t + "px"
        } else {
          var s = Math.round(this.sizeRatioX * this.scroller.x);
          if (s < 0) {
            this.transitionTime(500);
            var o = Math.max(this.indicatorWidth + 3 * s, 8);
            this.indicatorStyle.width = o + "px",
              s = 0
          } else if (s > this.maxPosX) {
            this.transitionTime(500);
            var n = Math.max(this.indicatorWidth - 3 * (s - this.maxPosX), 8);
            this.indicatorStyle.width = n + "px",
              s = this.maxPosX + this.indicatorWidth - n
          } else
            this.indicatorStyle.width = this.indicatorWidth + "px";
          this.x = s,
            this.scroller.options.useTransform ? this.indicatorStyle[P.transform] = "translateX(" + s + "px)" + this.scroller.translateZ : this.indicatorStyle.left = s + "px"
        }
      }
      ,
      G.prototype.transitionTime = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        this.indicatorStyle[P.transitionDuration] = t + "ms"
      }
      ,
      G.prototype.transitionTimingFunction = function(t) {
        this.indicatorStyle[P.transitionTimingFunction] = t
      }
      ,
      G.prototype.destroy = function() {
        this._removeDOMEvents(),
          this.wrapper.parentNode.removeChild(this.wrapper)
      }
      ,
      G.prototype._start = function(t) {
        var i = t.touches ? t.touches[0] : t;
        t.preventDefault(),
          t.stopPropagation(),
          this.transitionTime(),
          this.initiated = !0,
          this.moved = !1,
          this.lastPointX = i.pageX,
          this.lastPointY = i.pageY,
          this.startTime = c(),
          this._handleMoveEvents(v),
          this.scroller.trigger("beforeScrollStart")
      }
      ,
      G.prototype._move = function(t) {
        var i = t.touches ? t.touches[0] : t;
        t.preventDefault(),
          t.stopPropagation(),
        this.moved || this.scroller.trigger("scrollStart"),
          this.moved = !0;
        var e = i.pageX - this.lastPointX;
        this.lastPointX = i.pageX;
        var s = i.pageY - this.lastPointY;
        this.lastPointY = i.pageY;
        var o = this.x + e
          , n = this.y + s;
        this._pos(o, n)
      }
      ,
      G.prototype._end = function(t) {
        if (this.initiated) {
          this.initiated = !1,
            t.preventDefault(),
            t.stopPropagation(),
            this._handleMoveEvents(y);
          var i = this.scroller.options.snap;
          if (i) {
            var e = i.speed
              , s = i.easing
              , o = void 0 === s ? A.bounce : s
              , n = this.scroller._nearestSnap(this.scroller.x, this.scroller.y)
              , r = e || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - n.x), 1e3), Math.min(Math.abs(this.scroller.y - n.y), 1e3)), 300);
            this.scroller.x === n.x && this.scroller.y === n.y || (this.scroller.directionX = 0,
              this.scroller.directionY = 0,
              this.scroller.currentPage = n,
              this.scroller.scrollTo(n.x, n.y, r, o))
          }
          this.moved && this.scroller.trigger("scrollEnd", {
            x: this.scroller.x,
            y: this.scroller.y
          })
        }
      }
      ,
      G.prototype._pos = function(t, i) {
        t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX),
          i < 0 ? i = 0 : i > this.maxPosY && (i = this.maxPosY),
          t = Math.round(t / this.sizeRatioX),
          i = Math.round(i / this.sizeRatioY),
          this.scroller.scrollTo(t, i),
          this.scroller.trigger("scroll", {
            x: this.scroller.x,
            y: this.scroller.y
          })
      }
      ,
      G.prototype._shouldShow = function() {
        return "vertical" === this.direction && this.scroller.hasVerticalScroll || "horizontal" === this.direction && this.scroller.hasHorizontalScroll ? (this.wrapper.style.display = "",
          !0) : (this.wrapper.style.display = "none",
          !1)
      }
      ,
      G.prototype._calculate = function() {
        if ("vertical" === this.direction) {
          var t = this.wrapper.clientHeight;
          this.indicatorHeight = Math.max(Math.round(t * t / (this.scroller.scrollerHeight || t || 1)), 8),
            this.indicatorStyle.height = this.indicatorHeight + "px",
            this.maxPosY = t - this.indicatorHeight,
            this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY
        } else {
          var i = this.wrapper.clientWidth;
          this.indicatorWidth = Math.max(Math.round(i * i / (this.scroller.scrollerWidth || i || 1)), 8),
            this.indicatorStyle.width = this.indicatorWidth + "px",
            this.maxPosX = i - this.indicatorWidth,
            this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX
        }
      }
      ,
      G.prototype._addDOMEvents = function() {
        var t = v;
        this._handleDOMEvents(t)
      }
      ,
      G.prototype._removeDOMEvents = function() {
        var t = y;
        this._handleDOMEvents(t),
          this._handleMoveEvents(t)
      }
      ,
      G.prototype._handleMoveEvents = function(t) {
        this.scroller.options.disableTouch || t(window, "touchmove", this),
        this.scroller.options.disableMouse || t(window, "mousemove", this)
      }
      ,
      G.prototype._handleDOMEvents = function(t) {
        this.scroller.options.disableTouch || (t(this.indicator, "touchstart", this),
          t(window, "touchend", this)),
        this.scroller.options.disableMouse || (t(this.indicator, "mousedown", this),
          t(window, "mouseup", this))
      }
    ;
    var $ = 2e3;
    function K(t) {
      if (t && t.classList)
        return t.classList.contains("tombstone")
    }
    function Q(t, i) {
      var e = this;
      this.options = i,
        j("function" == typeof this.options.createTombstone, "Infinite scroll need createTombstone Function to create tombstone"),
        j("function" == typeof this.options.fetch, "Infinite scroll need fetch Function to fetch new data."),
        j("function" == typeof this.options.render, "Infinite scroll need render Function to render each item."),
        this.firstAttachedItem = 0,
        this.lastAttachedItem = 0,
        this.anchorScrollTop = 0,
        this.anchorItem = {
          index: 0,
          offset: 0
        },
        this.tombstoneHeight = 0,
        this.tombstoneWidth = 0,
        this.tombstones = [],
        this.tombstonesAnimationHandlers = [],
        this.items = [],
        this.loadedItems = 0,
        this.requestInProgress = !1,
        this.hasMore = !0,
        this.scroller = t,
        this.wrapperEl = this.scroller.wrapper,
        this.scrollerEl = this.scroller.scroller,
        this.scroller.on("resize", function() {
          e.onResize()
        }),
        this.scroller.on("destroy", function() {
          e.destroy()
        }),
        this._onResizeHandler = setTimeout(function() {
          e.onResize(),
            e.scroller.on("scroll", function() {
              e.onScroll()
            })
        })
    }
    function tt(t, i) {
      this.wrapper = "string" == typeof t ? document.querySelector(t) : t,
      this.wrapper || Z("Can not resolve the wrapper DOM."),
        this.scroller = this.wrapper.children[0],
      this.scroller || Z("The wrapper need at least one child element to be scroller."),
        this.scrollerStyle = this.scroller.style,
        this._init(i)
    }
    Q.prototype.destroy = function() {
      var t = this;
      clearTimeout(this._onResizeHandler),
        this.tombstonesAnimationHandlers.forEach(function(t) {
          clearTimeout(t)
        }),
        this.tombstonesAnimationHandlers = null,
        this.items.forEach(function(i) {
          i.node && (t.scrollerEl.removeChild(i.node),
            i.node = null)
        }),
        this.scroller.infiniteScroller = null,
        this.scroller = null,
        this.wrapperEl = null,
        this.scrollerEl = null,
        this.items = null,
        this.tombstones = null
    }
      ,
      Q.prototype.onScroll = function() {
        var t = -this.scroller.y
          , i = t - this.anchorScrollTop;
        this.anchorItem = 0 === t ? {
          index: 0,
          offset: 0
        } : this._calculateAnchoredItem(this.anchorItem, i),
          this.anchorScrollTop = t;
        var e = this._calculateAnchoredItem(this.anchorItem, this.scroller.wrapperHeight)
          , s = this.anchorItem.index
          , o = e.index;
        i < 0 ? (s -= 30,
          o += 10) : (s -= 10,
          o += 30),
          this.fill(s, o),
          this.maybeRequestContent()
      }
      ,
      Q.prototype.onResize = function() {
        var t = this.options.createTombstone();
        t.style.position = "absolute",
          this.scrollerEl.appendChild(t),
          t.style.display = "",
          this.tombstoneHeight = t.offsetHeight,
          this.tombstoneWidth = t.offsetWidth,
          this.scrollerEl.removeChild(t);
        for (var i = 0; i < this.items.length; i++)
          this.items[i].height = this.items[i].width = 0;
        this.onScroll()
      }
      ,
      Q.prototype.fill = function(t, i) {
        this.firstAttachedItem = Math.max(0, t),
        this.hasMore || (i = Math.min(i, this.items.length)),
          this.lastAttachedItem = i,
          this.attachContent()
      }
      ,
      Q.prototype.maybeRequestContent = function() {
        var t = this;
        if (!this.requestInProgress && this.hasMore) {
          var i = this.lastAttachedItem - this.loadedItems;
          i <= 0 || (this.requestInProgress = !0,
            this.options.fetch(i).then(function(i) {
              if (t.requestInProgress = !1,
                i)
                t.addContent(i);
              else {
                t.hasMore = !1;
                var e = t._removeTombstones()
                  , s = 0;
                t.anchorItem.index <= t.items.length ? (s = t._fixScrollPosition(),
                  t._setupAnimations({}, s),
                  t.scroller.resetPosition(t.scroller.options.bounceTime)) : (t.anchorItem.index -= e,
                  s = t._fixScrollPosition(),
                  t._setupAnimations({}, s),
                  t.scroller.stop(),
                  t.scroller.resetPosition(),
                  t.onScroll())
              }
            }))
        }
      }
      ,
      Q.prototype.addContent = function(t) {
        for (var i = 0; i < t.length; i++)
          this.items.length <= this.loadedItems && this._addItem(),
            this.items[this.loadedItems++].data = t[i];
        this.attachContent(),
          this.maybeRequestContent()
      }
      ,
      Q.prototype.attachContent = function() {
        var t = this._collectUnusedNodes()
          , i = this._createDOMNodes(t);
        this._cleanupUnusedNodes(t),
          this._cacheNodeSize();
        var e = this._fixScrollPosition();
        this._setupAnimations(i, e)
      }
      ,
      Q.prototype.resetMore = function() {
        this.hasMore = !0
      }
      ,
      Q.prototype._removeTombstones = function() {
        for (var t, i = void 0, e = this.items.length, s = 0; s < e; s++) {
          var o = this.items[s].node
            , n = this.items[s].data;
          o && !K(o) || n || (void 0 === i && (i = s),
          o && this.scrollerEl.removeChild(o))
        }
        return t = e - i,
          this.items.splice(i),
          this.lastAttachedItem = Math.min(this.lastAttachedItem, this.items.length),
          t
      }
      ,
      Q.prototype._collectUnusedNodes = function() {
        for (var t = [], i = 0; i < this.items.length; i++)
          if (i !== this.firstAttachedItem) {
            var e = this.items[i].node;
            e && (K(e) ? (this.tombstones.push(e),
              this.tombstones[this.tombstones.length - 1].style.display = "none") : t.push(e)),
              this.items[i].node = null
          } else
            i = this.lastAttachedItem - 1;
        return t
      }
      ,
      Q.prototype._createDOMNodes = function(t) {
        for (var i = {}, e = this.firstAttachedItem; e < this.lastAttachedItem; e++) {
          for (; this.items.length <= e; )
            this._addItem();
          var s = this.items[e].node
            , o = this.items[e].data;
          if (s) {
            if (!K(s) || !o)
              continue;
            s.style.zIndex = 1,
              i[e] = [s, this.items[e].top - this.anchorScrollTop],
              this.items[e].node = null
          }
          var n = o ? this.options.render(o, t.pop()) : this._getTombStone();
          n.style.position = "absolute",
            this.items[e].top = -1,
            this.scrollerEl.appendChild(n),
            this.items[e].node = n
        }
        return i
      }
      ,
      Q.prototype._cleanupUnusedNodes = function(t) {
        for (; t.length; )
          this.scrollerEl.removeChild(t.pop())
      }
      ,
      Q.prototype._cacheNodeSize = function() {
        for (var t = this.firstAttachedItem; t < this.lastAttachedItem; t++) {
          var i = this.items[t];
          if (i.data && !i.height) {
            var e = K(i.node);
            i.height = e ? this.tombstoneHeight : i.node.offsetHeight,
              i.width = e ? this.tombstoneWidth : i.node.offsetWidth
          }
        }
      }
      ,
      Q.prototype._fixScrollPosition = function() {
        this.anchorScrollTop = 0;
        for (var t = 0; t < this.anchorItem.index; t++)
          this.anchorScrollTop += this.items[t].height || this.tombstoneHeight;
        this.anchorScrollTop += this.anchorItem.offset;
        for (var i = this.anchorScrollTop - this.anchorItem.offset, e = this.anchorItem.index; e > this.firstAttachedItem; )
          i -= this.items[e - 1].height || this.tombstoneHeight,
            e--;
        return i
      }
      ,
      Q.prototype._setupAnimations = function(t, i) {
        var e = this;
        for (var s in t) {
          var o = t[s];
          this.items[s].node.style[P.transform] = "translateY(" + (this.anchorScrollTop + o[1]) + "px) scale(" + this.tombstoneWidth / this.items[s].width + ", " + this.tombstoneHeight / this.items[s].height + ")",
            this.items[s].node.offsetTop,
            o[0].offsetTop,
            this.items[s].node.style[P.transition] = T + "transform 200ms"
        }
        for (var n = this.firstAttachedItem; n < this.lastAttachedItem; n++) {
          var r = t[n];
          if (r) {
            var h = r[0];
            h.style[P.transition] = T + "transform 200ms, opacity 200ms",
              h.style[P.transform] = "translateY(" + i + "px) scale(" + this.items[n].width / this.tombstoneWidth + ", " + this.items[n].height / this.tombstoneHeight + ")",
              h.style.opacity = 0
          }
          i !== this.items[n].top && (r || (this.items[n].node.style[P.transition] = ""),
            this.items[n].node.style[P.transform] = "translateY(" + i + "px)"),
            this.items[n].top = i,
            i += this.items[n].height || this.tombstoneHeight
        }
        this.scroller.maxScrollY = -(i - this.scroller.wrapperHeight + (this.hasMore ? $ : 0));
        var a = setTimeout(function() {
          for (var i in t) {
            var s = t[i];
            s[0].style.display = "none",
              e.tombstones.push(s[0])
          }
        }, 200);
        this.tombstonesAnimationHandlers.push(a)
      }
      ,
      Q.prototype._getTombStone = function() {
        var t = this.tombstones.pop();
        return t ? (t.style.display = "",
          t.style.opacity = 1,
          t.style[P.transform] = "",
          t.style[P.transition] = "",
          t) : this.options.createTombstone()
      }
      ,
      Q.prototype._addItem = function() {
        this.items.push({
          data: null,
          node: null,
          height: 0,
          width: 0,
          top: 0
        })
      }
      ,
      Q.prototype._calculateAnchoredItem = function(t, i) {
        if (0 === i)
          return t;
        var e = t.index
          , s = 0;
        if ((i += t.offset) < 0) {
          for (; i < 0 && e > 0 && this.items[e - 1].height; )
            i += this.items[e - 1].height,
              e--;
          s = Math.max(-e, Math.ceil(Math.min(i, 0) / this.tombstoneHeight))
        } else {
          for (; i > 0 && e < this.items.length && this.items[e].height && this.items[e].height < i; )
            i -= this.items[e].height,
              e++;
          (e >= this.items.length || !this.items[e].height) && (s = Math.floor(Math.max(i, 0) / this.tombstoneHeight))
        }
        return {
          index: e += s,
          offset: i -= s * this.tombstoneHeight
        }
      }
      ,
      function(t) {
        t.prototype._init = function(t) {
          this._handleOptions(t),
            this._events = {},
            this.x = 0,
            this.y = 0,
            this.directionX = 0,
            this.directionY = 0,
            this.setScale(1),
            this._addDOMEvents(),
            this._initExtFeatures(),
            this._watchTransition(),
          this.options.observeDOM && this._initDOMObserver(),
          this.options.autoBlur && this._handleAutoBlur(),
            this.refresh(),
          this.options.snap || this.scrollTo(this.options.startX, this.options.startY),
            this.enable()
        }
          ,
          t.prototype.setScale = function(t) {
            this.lastScale = d(this.scale) ? t : this.scale,
              this.scale = t
          }
          ,
          t.prototype._handleOptions = function(t) {
            this.options = p({}, z, t),
              this.translateZ = this.options.HWCompositing && _ ? " translateZ(0)" : "",
              this.options.useTransition = this.options.useTransition && M,
              this.options.useTransform = this.options.useTransform && X,
              this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
              this.options.scrollX = "horizontal" !== this.options.eventPassthrough && this.options.scrollX,
              this.options.scrollY = "vertical" !== this.options.eventPassthrough && this.options.scrollY,
              this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
              this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
            !0 === this.options.tap && (this.options.tap = "tap")
          }
          ,
          t.prototype._addDOMEvents = function() {
            var t = v;
            this._handleDOMEvents(t)
          }
          ,
          t.prototype._removeDOMEvents = function() {
            var t = y;
            this._handleDOMEvents(t)
          }
          ,
          t.prototype._handleDOMEvents = function(t) {
            var i = this.options.bindToWrapper ? this.wrapper : window;
            t(window, "orientationchange", this),
              t(window, "resize", this),
            this.options.click && t(this.wrapper, "click", this, !0),
            this.options.disableMouse || (t(this.wrapper, "mousedown", this),
              t(i, "mousemove", this),
              t(i, "mousecancel", this),
              t(i, "mouseup", this)),
            Y && !this.options.disableTouch && (t(this.wrapper, "touchstart", this),
              t(i, "touchmove", this),
              t(i, "touchcancel", this),
              t(i, "touchend", this)),
              t(this.scroller, P.transitionEnd, this)
          }
          ,
          t.prototype._initExtFeatures = function() {
            this.options.snap && this._initSnap(),
            this.options.scrollbar && this._initScrollbar(),
            this.options.pullUpLoad && this._initPullUp(),
            this.options.pullDownRefresh && this._initPullDown(),
            this.options.wheel && this._initWheel(),
            this.options.mouseWheel && this._initMouseWheel(),
            this.options.zoom && this._initZoom(),
            this.options.infinity && this._initInfinite()
          }
          ,
          t.prototype._watchTransition = function() {
            if ("function" == typeof Object.defineProperty) {
              var t = this
                , i = !1
                , e = this.options.useTransition ? "isInTransition" : "isAnimating";
              Object.defineProperty(this, e, {
                get: function() {
                  return i
                },
                set: function(e) {
                  i = e;
                  for (var s = t.scroller.children.length ? t.scroller.children : [t.scroller], o = i && !t.pulling ? "none" : "auto", n = 0; n < s.length; n++)
                    s[n].style.pointerEvents = o
                }
              })
            }
          }
          ,
          t.prototype._handleAutoBlur = function() {
            this.on("scrollStart", function() {
              var t = document.activeElement;
              !t || "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName || t.blur()
            })
          }
          ,
          t.prototype._initDOMObserver = function() {
            var t = this;
            if ("undefined" != typeof MutationObserver) {
              var i = void 0
                , e = new MutationObserver(function(e) {
                  if (!t._shouldNotRefresh()) {
                    for (var s = !1, o = !1, n = 0; n < e.length; n++) {
                      var r = e[n];
                      if ("attributes" !== r.type) {
                        s = !0;
                        break
                      }
                      if (r.target !== t.scroller) {
                        o = !0;
                        break
                      }
                    }
                    s ? t.refresh() : o && (clearTimeout(i),
                      i = setTimeout(function() {
                        t._shouldNotRefresh() || t.refresh()
                      }, 60))
                  }
                }
              );
              e.observe(this.scroller, {
                attributes: !0,
                childList: !0,
                subtree: !0
              }),
                this.on("destroy", function() {
                  e.disconnect()
                })
            } else
              this._checkDOMUpdate()
          }
          ,
          t.prototype._shouldNotRefresh = function() {
            var t = this.x > this.minScrollX || this.x < this.maxScrollX || this.y > this.minScrollY || this.y < this.maxScrollY;
            return this.isInTransition || this.stopFromTransition || t
          }
          ,
          t.prototype._checkDOMUpdate = function() {
            var t = I(this.scroller)
              , i = t.width
              , e = t.height;
            function s() {
              var o = this;
              setTimeout(function() {
                (function() {
                    if (!this.destroyed) {
                      var o = (t = I(this.scroller)).width
                        , n = t.height;
                      i === o && e === n || this.refresh(),
                        i = o,
                        e = n,
                        s.call(this)
                    }
                  }
                ).call(o)
              }, 1e3)
            }
            s.call(this)
          }
          ,
          t.prototype.handleEvent = function(t) {
            switch (t.type) {
              case "touchstart":
              case "mousedown":
                this._start(t),
                this.options.zoom && t.touches && t.touches.length > 1 && this._zoomStart(t);
                break;
              case "touchmove":
              case "mousemove":
                this.options.zoom && t.touches && t.touches.length > 1 ? this._zoom(t) : this._move(t);
                break;
              case "touchend":
              case "mouseup":
              case "touchcancel":
              case "mousecancel":
                this.scaled ? this._zoomEnd(t) : this._end(t);
                break;
              case "orientationchange":
              case "resize":
                this._resize();
                break;
              case "transitionend":
              case "webkitTransitionEnd":
              case "oTransitionEnd":
              case "MSTransitionEnd":
                this._transitionEnd(t);
                break;
              case "click":
                this.enabled && !t._constructed && (W(t.target, this.options.preventDefaultException) || (t.preventDefault(),
                  t.stopPropagation()));
                break;
              case "wheel":
              case "DOMMouseScroll":
              case "mousewheel":
                this._onMouseWheel(t)
            }
          }
          ,
          t.prototype.refresh = function() {
            var t = "static" === window.getComputedStyle(this.wrapper, null).position
              , i = I(this.wrapper);
            this.wrapperWidth = i.width,
              this.wrapperHeight = i.height;
            var e = I(this.scroller);
            this.scrollerWidth = Math.round(e.width * this.scale),
              this.scrollerHeight = Math.round(e.height * this.scale),
              this.relativeX = e.left,
              this.relativeY = e.top,
            t && (this.relativeX -= i.left,
              this.relativeY -= i.top),
              this.minScrollX = 0,
              this.minScrollY = 0;
            var s = this.options.wheel;
            s ? (this.items = this.scroller.children,
              this._checkWheelAllDisabled(),
              this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length : 0,
            void 0 === this.selectedIndex && (this.selectedIndex = s.selectedIndex || 0),
              this.options.startY = -this.selectedIndex * this.itemHeight,
              this.maxScrollX = 0,
              this.maxScrollY = -this.itemHeight * (this.items.length - 1)) : (this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
            this.options.infinity || (this.maxScrollY = this.wrapperHeight - this.scrollerHeight),
              this.maxScrollX < 0 ? (this.maxScrollX -= this.relativeX,
                this.minScrollX = -this.relativeX) : this.scale > 1 && (this.maxScrollX = this.maxScrollX / 2 - this.relativeX,
                this.minScrollX = this.maxScrollX),
              this.maxScrollY < 0 ? (this.maxScrollY -= this.relativeY,
                this.minScrollY = -this.relativeY) : this.scale > 1 && (this.maxScrollY = this.maxScrollY / 2 - this.relativeY,
                this.minScrollY = this.maxScrollY)),
              this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < this.minScrollX,
              this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < this.minScrollY,
            this.hasHorizontalScroll || (this.maxScrollX = this.minScrollX,
              this.scrollerWidth = this.wrapperWidth),
            this.hasVerticalScroll || (this.maxScrollY = this.minScrollY,
              this.scrollerHeight = this.wrapperHeight),
              this.endTime = 0,
              this.directionX = 0,
              this.directionY = 0,
              this.wrapperOffset = w(this.wrapper),
              this.trigger("refresh"),
            !this.scaled && this.resetPosition()
          }
          ,
          t.prototype.enable = function() {
            this.enabled = !0
          }
          ,
          t.prototype.disable = function() {
            this.enabled = !1
          }
      }(tt),
      function(t) {
        t.prototype._start = function(t) {
          var i = E[t.type];
          if ((i === D || 0 === t.button) && !(!this.enabled || this.destroyed || this.initiated && this.initiated !== i)) {
            this.initiated = i,
            this.options.preventDefault && !W(t.target, this.options.preventDefaultException) && t.preventDefault(),
            this.options.stopPropagation && t.stopPropagation(),
              this.moved = !1,
              this.distX = 0,
              this.distY = 0,
              this.directionX = 0,
              this.directionY = 0,
              this.movingDirectionX = 0,
              this.movingDirectionY = 0,
              this.directionLocked = 0,
              this._transitionTime(),
              this.startTime = c(),
            this.options.wheel && (this.target = t.target),
              this.stop();
            var e = t.touches ? t.touches[0] : t;
            this.startX = this.x,
              this.startY = this.y,
              this.absStartX = this.x,
              this.absStartY = this.y,
              this.pointX = e.pageX,
              this.pointY = e.pageY,
              this.trigger("beforeScrollStart")
          }
        }
          ,
          t.prototype._move = function(t) {
            if (this.enabled && !this.destroyed && E[t.type] === this.initiated) {
              this.options.preventDefault && t.preventDefault(),
              this.options.stopPropagation && t.stopPropagation();
              var i = t.touches ? t.touches[0] : t
                , e = i.pageX - this.pointX
                , s = i.pageY - this.pointY;
              this.pointX = i.pageX,
                this.pointY = i.pageY,
                this.distX += e,
                this.distY += s;
              var o = Math.abs(this.distX)
                , n = Math.abs(this.distY)
                , r = c();
              if (!(r - this.endTime > this.options.momentumLimitTime && !this.moved && n < this.options.momentumLimitDistance && o < this.options.momentumLimitDistance)) {
                if (this.directionLocked || this.options.freeScroll || (o > n + this.options.directionLockThreshold ? this.directionLocked = "h" : n >= o + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"),
                "h" === this.directionLocked) {
                  if ("vertical" === this.options.eventPassthrough)
                    t.preventDefault();
                  else if ("horizontal" === this.options.eventPassthrough)
                    return void (this.initiated = !1);
                  s = 0
                } else if ("v" === this.directionLocked) {
                  if ("horizontal" === this.options.eventPassthrough)
                    t.preventDefault();
                  else if ("vertical" === this.options.eventPassthrough)
                    return void (this.initiated = !1);
                  e = 0
                }
                e = this.hasHorizontalScroll ? e : 0,
                  s = this.hasVerticalScroll ? s : 0,
                  this.movingDirectionX = e > 0 ? V : e < 0 ? U : 0,
                  this.movingDirectionY = s > 0 ? F : s < 0 ? R : 0;
                var h = this.x + e
                  , a = this.y + s
                  , l = !1
                  , p = !1
                  , d = !1
                  , u = !1
                  , m = this.options.bounce;
                !1 !== m && (l = void 0 === m.top || m.top,
                  p = void 0 === m.bottom || m.bottom,
                  d = void 0 === m.left || m.left,
                  u = void 0 === m.right || m.right),
                (h > this.minScrollX || h < this.maxScrollX) && (h = h > this.minScrollX && d || h < this.maxScrollX && u ? this.x + e / 3 : h > this.minScrollX ? this.minScrollX : this.maxScrollX),
                (a > this.minScrollY || a < this.maxScrollY) && (a = a > this.minScrollY && l || a < this.maxScrollY && p ? this.y + s / 3 : a > this.minScrollY ? this.minScrollY : this.maxScrollY),
                this.moved || (this.moved = !0,
                  this.trigger("scrollStart")),
                  this._translate(h, a),
                r - this.startTime > this.options.momentumLimitTime && (this.startTime = r,
                  this.startX = this.x,
                  this.startY = this.y,
                this.options.probeType === B && this.trigger("scroll", {
                  x: this.x,
                  y: this.y
                })),
                this.options.probeType > B && this.trigger("scroll", {
                  x: this.x,
                  y: this.y
                });
                var f = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft
                  , g = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
                  , v = this.pointX - f
                  , y = this.pointY - g;
                (v > document.documentElement.clientWidth - this.options.momentumLimitDistance || v < this.options.momentumLimitDistance || y < this.options.momentumLimitDistance || y > document.documentElement.clientHeight - this.options.momentumLimitDistance) && this._end(t)
              }
            }
          }
          ,
          t.prototype._end = function(t) {
            if (this.enabled && !this.destroyed && E[t.type] === this.initiated) {
              this.initiated = !1,
              this.options.preventDefault && !W(t.target, this.options.preventDefaultException) && t.preventDefault(),
              this.options.stopPropagation && t.stopPropagation(),
                this.trigger("touchEnd", {
                  x: this.x,
                  y: this.y
                }),
                this.isInTransition = !1;
              var i = Math.round(this.x)
                , e = Math.round(this.y)
                , s = i - this.absStartX
                , o = e - this.absStartY;
              if (this.directionX = s > 0 ? V : s < 0 ? U : 0,
                this.directionY = o > 0 ? F : o < 0 ? R : 0,
              !this.options.pullDownRefresh || !this._checkPullDown())
                if (this._checkClick(t))
                  this.trigger("scrollCancel");
                else if (!this.resetPosition(this.options.bounceTime, A.bounce)) {
                  this._translate(i, e),
                    this.endTime = c();
                  var n = this.endTime - this.startTime
                    , r = Math.abs(i - this.startX)
                    , h = Math.abs(e - this.startY);
                  if (this._events.flick && n < this.options.flickLimitTime && r < this.options.flickLimitDistance && h < this.options.flickLimitDistance)
                    this.trigger("flick");
                  else {
                    var a = 0;
                    if (this.options.momentum && n < this.options.momentumLimitTime && (h > this.options.momentumLimitDistance || r > this.options.momentumLimitDistance)) {
                      var l = !1
                        , p = !1
                        , d = !1
                        , u = !1
                        , m = this.options.bounce;
                      !1 !== m && (l = void 0 === m.top || m.top,
                        p = void 0 === m.bottom || m.bottom,
                        d = void 0 === m.left || m.left,
                        u = void 0 === m.right || m.right);
                      var f = this.directionX === V && d || this.directionX === U && u ? this.wrapperWidth : 0
                        , g = this.directionY === F && l || this.directionY === R && p ? this.wrapperHeight : 0
                        , v = this.hasHorizontalScroll ? C(this.x, this.startX, n, this.maxScrollX, this.minScrollX, f, this.options, this) : {
                        destination: i,
                        duration: 0
                      }
                        , y = this.hasVerticalScroll ? C(this.y, this.startY, n, this.maxScrollY, this.minScrollY, g, this.options, this) : {
                        destination: e,
                        duration: 0
                      };
                      i = v.destination,
                        e = y.destination,
                        a = Math.max(v.duration, y.duration),
                        this.isInTransition = !0
                    } else
                      this.options.wheel && (e = this._findNearestValidWheel(e).y,
                        a = this.options.wheel.adjustTime || 400);
                    var w = A.swipe;
                    if (this.options.snap) {
                      var x = this._nearestSnap(i, e);
                      this.currentPage = x,
                        a = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(i - x.x), 1e3), Math.min(Math.abs(e - x.y), 1e3)), 300),
                        i = x.x,
                        e = x.y,
                        this.directionX = 0,
                        this.directionY = 0,
                        w = this.options.snap.easing || A.bounce
                    }
                    if (i !== this.x || e !== this.y)
                      return (i > this.minScrollX || i < this.maxScrollX || e > this.minScrollY || e < this.maxScrollY) && (w = A.swipeBounce),
                        void this.scrollTo(i, e, a, w);
                    this.options.wheel && (this.selectedIndex = this._findNearestValidWheel(this.y).index),
                      this.trigger("scrollEnd", {
                        x: this.x,
                        y: this.y
                      })
                  }
                }
            }
          }
          ,
          t.prototype._checkClick = function(t) {
            var i = this.stopFromTransition && !this.pulling;
            if (this.stopFromTransition = !1,
              !this.moved) {
              if (this.options.wheel) {
                if (this.target && this.target.className === this.options.wheel.wheelWrapperClass) {
                  var e = this._findNearestValidWheel(this.y).index
                    , s = Math.round((this.pointY + x(this.wrapper).top - this.wrapperHeight / 2) / this.itemHeight);
                  this.target = this.items[e + s]
                }
                var o = w(this.target).top
                  , n = w(this.target).left;
                return o -= this.wrapperOffset.top,
                  o -= Math.round(this.target.offsetHeight / 2 - this.wrapper.offsetHeight / 2) || 0,
                  n -= this.wrapperOffset.left,
                  n -= Math.round(this.target.offsetWidth / 2 - this.wrapper.offsetWidth / 2) || 0,
                  o = this._findNearestValidWheel(o).y,
                  this.scrollTo(n, o, this.options.wheel.adjustTime || 400, A.swipe),
                  !0
              }
              if (!i) {
                var r = this.options.dblclick
                  , h = !1;
                if (r && this.lastClickTime) {
                  var a = r.delay
                    , l = void 0 === a ? 300 : a;
                  c() - this.lastClickTime < l && (h = !0,
                    function(t) {
                      k(t, "dblclick")
                    }(t))
                }
                return this.options.tap && function(t, i) {
                  var e = document.createEvent("Event");
                  e.initEvent(i, !0, !0),
                    e.pageX = t.pageX,
                    e.pageY = t.pageY,
                    t.target.dispatchEvent(e)
                }(t, this.options.tap),
                this.options.click && !W(t.target, this.options.preventDefaultException) && k(t),
                  this.lastClickTime = h ? null : c(),
                  !0
              }
              return !1
            }
            return !1
          }
          ,
          t.prototype._resize = function() {
            var t = this;
            this.enabled && (l && (this.wrapper.scrollTop = 0),
              clearTimeout(this.resizeTimeout),
              this.resizeTimeout = setTimeout(function() {
                t.refresh()
              }, this.options.resizePolling))
          }
          ,
          t.prototype._startProbe = function() {
            N(this.probeTimer),
              this.probeTimer = L(function i() {
                var e = t.getComputedPosition();
                t.trigger("scroll", e),
                  t.isInTransition ? t.probeTimer = L(i) : t.trigger("scrollEnd", e)
              });
            var t = this
          }
          ,
          t.prototype._transitionTime = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            if (this.scrollerStyle[P.transitionDuration] = t + "ms",
              this.options.wheel)
              for (var i = 0; i < this.items.length; i++)
                this.items[i].style[P.transitionDuration] = t + "ms";
            if (this.indicators)
              for (var e = 0; e < this.indicators.length; e++)
                this.indicators[e].transitionTime(t)
          }
          ,
          t.prototype._transitionTimingFunction = function(t) {
            if (this.scrollerStyle[P.transitionTimingFunction] = t,
              this.options.wheel)
              for (var i = 0; i < this.items.length; i++)
                this.items[i].style[P.transitionTimingFunction] = t;
            if (this.indicators)
              for (var e = 0; e < this.indicators.length; e++)
                this.indicators[e].transitionTimingFunction(t)
          }
          ,
          t.prototype._transitionEnd = function(t) {
            t.target === this.scroller && this.isInTransition && (this._transitionTime(),
            (!this.pulling || this.movingDirectionY === R) && !this.resetPosition(this.options.bounceTime, A.bounce) && (this.isInTransition = !1,
            this.options.probeType !== q && this.trigger("scrollEnd", {
              x: this.x,
              y: this.y
            })))
          }
          ,
          t.prototype._translate = function(t, i, e) {
            if (j(!d(t) && !d(i), "Translate x or y is null or undefined."),
            d(e) && (e = this.scale),
              this.options.useTransform ? this.scrollerStyle[P.transform] = "translate(" + t + "px," + i + "px) scale(" + e + ")" + this.translateZ : (t = Math.round(t),
                i = Math.round(i),
                this.scrollerStyle.left = t + "px",
                this.scrollerStyle.top = i + "px"),
              this.options.wheel)
              for (var s = this.options.wheel.rotate, o = void 0 === s ? 25 : s, n = 0; n < this.items.length; n++) {
                var r = o * (i / this.itemHeight + n);
                this.items[n].style[P.transform] = "rotateX(" + r + "deg)"
              }
            if (this.x = t,
              this.y = i,
              this.setScale(e),
              this.indicators)
              for (var h = 0; h < this.indicators.length; h++)
                this.indicators[h].updatePosition()
          }
          ,
          t.prototype._animate = function(t, i, e, s) {
            var o = this
              , n = this.x
              , r = this.y
              , h = this.lastScale
              , a = this.scale
              , l = c()
              , p = l + e;
            this.isAnimating = !0,
              N(this.animateTimer),
              function d() {
                var u = c();
                if (u >= p)
                  return o.isAnimating = !1,
                    o._translate(t, i, a),
                    o.trigger("scroll", {
                      x: o.x,
                      y: o.y
                    }),
                    void (o.pulling || o.resetPosition(o.options.bounceTime) || o.trigger("scrollEnd", {
                      x: o.x,
                      y: o.y
                    }));
                var m = s(u = (u - l) / e)
                  , f = (t - n) * m + n
                  , g = (i - r) * m + r
                  , v = (a - h) * m + h;
                o._translate(f, g, v),
                o.isAnimating && (o.animateTimer = L(d)),
                o.options.probeType === q && o.trigger("scroll", {
                  x: o.x,
                  y: o.y
                })
              }()
          }
          ,
          t.prototype.scrollBy = function(t, i) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
              , s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : A.bounce;
            t = this.x + t,
              i = this.y + i,
              this.scrollTo(t, i, e, s)
          }
          ,
          t.prototype.scrollTo = function(t, i) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
              , s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : A.bounce
              , o = arguments[4];
            if (this.options.wheel && (i = this._findNearestValidWheel(i).y),
            t !== this.x || i !== this.y)
              if (this.isInTransition = this.options.useTransition && e > 0 && (this.x !== t || this.y !== i),
              !e || this.options.useTransition) {
                if (this._transitionTimingFunction(s.style),
                  this._transitionTime(e),
                  this._translate(t, i),
                e && this.options.probeType === q && this._startProbe(),
                !e && !o) {
                  if (this.options.zoom)
                    return;
                  this.trigger("scroll", {
                    x: t,
                    y: i
                  }),
                    this._reflow = document.body.offsetHeight,
                  this.resetPosition(this.options.bounceTime, A.bounce) || this.trigger("scrollEnd", {
                    x: t,
                    y: i
                  })
                }
                this.options.wheel && (this.selectedIndex = this._findNearestValidWheel(i).index)
              } else
                this._animate(t, i, e, s.fn)
          }
          ,
          t.prototype.scrollToElement = function(t, i, e, s, o) {
            if (t && (t = t.nodeType ? t : this.scroller.querySelector(t),
            !this.options.wheel || t.classList.contains(this.options.wheel.wheelItemClass))) {
              var n = w(t);
              n.left -= this.wrapperOffset.left,
                n.top -= this.wrapperOffset.top,
              !0 === e && (e = Math.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
              !0 === s && (s = Math.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
                n.left -= e || 0,
                n.top -= s || 0,
                n.left = n.left > this.minScrollX ? this.minScrollX : n.left < this.maxScrollX ? this.maxScrollX : n.left,
                n.top = n.top > this.minScrollY ? this.minScrollY : n.top < this.maxScrollY ? this.maxScrollY : n.top,
              this.options.wheel && (n.top = this._findNearestValidWheel(n.top).y),
                this.scrollTo(n.left, n.top, i, o)
            }
          }
          ,
          t.prototype.resetPosition = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.bounce
              , e = this.x
              , s = Math.round(e);
            !this.hasHorizontalScroll || s > this.minScrollX ? e = this.minScrollX : s < this.maxScrollX && (e = this.maxScrollX);
            var o = this.y
              , n = Math.round(o);
            return !this.hasVerticalScroll || n > this.minScrollY ? o = this.minScrollY : n < this.maxScrollY && (o = this.maxScrollY),
            (e !== this.x || o !== this.y) && (this.scrollTo(e, o, t, i),
              !0)
          }
          ,
          t.prototype.getComputedPosition = function() {
            var t = window.getComputedStyle(this.scroller, null)
              , i = void 0
              , e = void 0;
            return this.options.useTransform ? (i = +((t = t[P.transform].split(")")[0].split(", "))[12] || t[4]),
              e = +(t[13] || t[5])) : (i = +t.left.replace(/[^-\d.]/g, ""),
              e = +t.top.replace(/[^-\d.]/g, "")),
              {
                x: i,
                y: e
              }
          }
          ,
          t.prototype.stop = function() {
            if (this.options.useTransition && this.isInTransition) {
              this.isInTransition = !1,
                N(this.probeTimer);
              var t = this.getComputedPosition();
              this._translate(t.x, t.y),
                this.options.wheel ? this.target = this.items[this._findNearestValidWheel(t.y).index] : this.trigger("scrollEnd", {
                  x: this.x,
                  y: this.y
                }),
                this.stopFromTransition = !0
            } else
              !this.options.useTransition && this.isAnimating && (this.isAnimating = !1,
                N(this.animateTimer),
                this.trigger("scrollEnd", {
                  x: this.x,
                  y: this.y
                }),
                this.stopFromTransition = !0)
          }
          ,
          t.prototype.destroy = function() {
            this.destroyed = !0,
              this.trigger("destroy"),
              this.options.useTransition ? N(this.probeTimer) : N(this.animateTimer),
              this._removeDOMEvents(),
              this._events = {}
          }
      }(tt),
      function(t) {
        t.prototype.on = function(t, i) {
          var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this;
          this._events[t] || (this._events[t] = []),
            this._events[t].push([i, e])
        }
          ,
          t.prototype.once = function(t, i) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this;
            function s() {
              this.off(t, s),
                i.apply(e, arguments)
            }
            s.fn = i,
              this.on(t, s)
          }
          ,
          t.prototype.off = function(t, i) {
            var e = this._events[t];
            if (e)
              for (var o = e.length; o--; )
                (e[o][0] === i || e[o][0] && e[o][0].fn === i) && s(e, o)
          }
          ,
          t.prototype.trigger = function(t) {
            var i = this._events[t];
            if (i)
              for (var e = i.length, s = [].concat(n(i)), r = 0; r < e; r++) {
                var h = s[r]
                  , a = o(h, 2)
                  , l = a[0]
                  , c = a[1];
                l && l.apply(c, [].slice.call(arguments, 1))
              }
          }
      }(tt),
      function(t) {
        t.prototype._initSnap = function() {
          var t = this;
          this.currentPage = {};
          var i = this.options.snap;
          if (i.loop) {
            var e = this.scroller.children;
            e.length > 1 ? (function(t, i) {
              i.firstChild ? function(t, i) {
                i.parentNode.insertBefore(t, i)
              }(t, i.firstChild) : i.appendChild(t)
            }(e[e.length - 1].cloneNode(!0), this.scroller),
              this.scroller.appendChild(e[1].cloneNode(!0))) : i.loop = !1
          }
          var s = i.el;
          "string" == typeof s && (s = this.scroller.querySelectorAll(s)),
            this.on("refresh", function() {
              if (t.pages = [],
              t.wrapperWidth && t.wrapperHeight && t.scrollerWidth && t.scrollerHeight) {
                var e = i.stepX || t.wrapperWidth
                  , o = i.stepY || t.wrapperHeight
                  , n = 0
                  , r = void 0
                  , h = void 0
                  , a = void 0
                  , l = 0
                  , c = void 0
                  , p = 0
                  , d = void 0
                  , u = void 0;
                if (s)
                  for (c = s.length,
                         d = -1; l < c; l++)
                    u = I(s[l]),
                    (0 === l || u.left <= I(s[l - 1]).left) && (p = 0,
                      d++),
                    t.pages[p] || (t.pages[p] = []),
                      n = Math.max(-u.left, t.maxScrollX),
                      r = Math.max(-u.top, t.maxScrollY),
                      h = n - Math.round(u.width / 2),
                      a = r - Math.round(u.height / 2),
                      t.pages[p][d] = {
                        x: n,
                        y: r,
                        width: u.width,
                        height: u.height,
                        cx: h,
                        cy: a
                      },
                    n > t.maxScrollX && p++;
                else
                  for (h = Math.round(e / 2),
                         a = Math.round(o / 2); n > -t.scrollerWidth; ) {
                    for (t.pages[l] = [],
                           c = 0,
                           r = 0; r > -t.scrollerHeight; )
                      t.pages[l][c] = {
                        x: Math.max(n, t.maxScrollX),
                        y: Math.max(r, t.maxScrollY),
                        width: e,
                        height: o,
                        cx: n - h,
                        cy: r - a
                      },
                        r -= o,
                        c++;
                    n -= e,
                      l++
                  }
                t._checkSnapLoop();
                var m = i._loopX ? 1 : 0
                  , f = i._loopY ? 1 : 0;
                t._goToPage(t.currentPage.pageX || m, t.currentPage.pageY || f, 0, void 0, !0);
                var g = i.threshold;
                g % 1 == 0 ? (t.snapThresholdX = g,
                  t.snapThresholdY = g) : (t.snapThresholdX = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].width * g),
                  t.snapThresholdY = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].height * g))
              }
            }),
            this.on("scrollEnd", function() {
              i.loop && (i._loopX ? (0 === t.currentPage.pageX && t._goToPage(t.pages.length - 2, t.currentPage.pageY, 0, void 0, !0),
              t.currentPage.pageX === t.pages.length - 1 && t._goToPage(1, t.currentPage.pageY, 0, void 0, !0)) : (0 === t.currentPage.pageY && t._goToPage(t.currentPage.pageX, t.pages[0].length - 2, 0, void 0, !0),
              t.currentPage.pageY === t.pages[0].length - 1 && t._goToPage(t.currentPage.pageX, 1, 0, void 0, !0)))
            }),
          !1 !== i.listenFlick && this.on("flick", function() {
            var e = i.speed || Math.max(Math.max(Math.min(Math.abs(t.x - t.startX), 1e3), Math.min(Math.abs(t.y - t.startY), 1e3)), 300);
            t._goToPage(t.currentPage.pageX + t.directionX, t.currentPage.pageY + t.directionY, e)
          }),
            this.on("destroy", function() {
              if (i.loop) {
                var e = t.scroller.children;
                e.length > 2 && (H(t.scroller, e[e.length - 1]),
                  H(t.scroller, e[0]))
              }
            })
        }
          ,
          t.prototype._checkSnapLoop = function() {
            var t = this.options.snap;
            t.loop && this.pages && this.pages.length && (this.pages.length > 1 && (t._loopX = !0),
            this.pages[0] && this.pages[0].length > 1 && (t._loopY = !0),
            t._loopX && t._loopY && Z("Loop does not support two direction at the same time."))
          }
          ,
          t.prototype._nearestSnap = function(t, i) {
            if (!this.pages.length)
              return {
                x: 0,
                y: 0,
                pageX: 0,
                pageY: 0
              };
            var e = 0;
            if (Math.abs(t - this.absStartX) <= this.snapThresholdX && Math.abs(i - this.absStartY) <= this.snapThresholdY)
              return this.currentPage;
            t > this.minScrollX ? t = this.minScrollX : t < this.maxScrollX && (t = this.maxScrollX),
              i > this.minScrollY ? i = this.minScrollY : i < this.maxScrollY && (i = this.maxScrollY);
            for (var s = this.pages.length; e < s; e++)
              if (t >= this.pages[e][0].cx) {
                t = this.pages[e][0].x;
                break
              }
            s = this.pages[e].length;
            for (var o = 0; o < s; o++)
              if (i >= this.pages[0][o].cy) {
                i = this.pages[0][o].y;
                break
              }
            return e === this.currentPage.pageX && ((e += this.directionX) < 0 ? e = 0 : e >= this.pages.length && (e = this.pages.length - 1),
              t = this.pages[e][0].x),
            o === this.currentPage.pageY && ((o += this.directionY) < 0 ? o = 0 : o >= this.pages[0].length && (o = this.pages[0].length - 1),
              i = this.pages[0][o].y),
              {
                x: t,
                y: i,
                pageX: e,
                pageY: o
              }
          }
          ,
          t.prototype._goToPage = function(t) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , e = arguments[2]
              , s = arguments[3]
              , o = arguments[4]
              , n = this.options.snap;
            if (n && this.pages && this.pages.length && (s = s || n.easing || A.bounce,
              t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0),
              this.pages[t])) {
              i >= this.pages[t].length ? i = this.pages[t].length - 1 : i < 0 && (i = 0);
              var r = this.pages[t][i].x
                , h = this.pages[t][i].y;
              e = void 0 === e ? n.speed || Math.max(Math.max(Math.min(Math.abs(r - this.x), 1e3), Math.min(Math.abs(h - this.y), 1e3)), 300) : e,
                this.currentPage = {
                  x: r,
                  y: h,
                  pageX: t,
                  pageY: i
                },
                this.scrollTo(r, h, e, s, o)
            }
          }
          ,
          t.prototype.goToPage = function(t, i, e, s) {
            var o = this.options.snap;
            if (o && this.pages && this.pages.length) {
              if (o.loop) {
                var n = void 0;
                o._loopX ? (t >= (n = this.pages.length - 2) ? t = n - 1 : t < 0 && (t = 0),
                  t += 1) : (i >= (n = this.pages[0].length - 2) ? i = n - 1 : i < 0 && (i = 0),
                  i += 1)
              }
              this._goToPage(t, i, e, s)
            }
          }
          ,
          t.prototype.next = function(t, i) {
            if (this.options.snap) {
              var e = this.currentPage.pageX
                , s = this.currentPage.pageY;
              ++e >= this.pages.length && this.hasVerticalScroll && (e = 0,
                s++),
                this._goToPage(e, s, t, i)
            }
          }
          ,
          t.prototype.prev = function(t, i) {
            if (this.options.snap) {
              var e = this.currentPage.pageX
                , s = this.currentPage.pageY;
              --e < 0 && this.hasVerticalScroll && (e = 0,
                s--),
                this._goToPage(e, s, t, i)
            }
          }
          ,
          t.prototype.getCurrentPage = function() {
            var t = this.options.snap;
            return t ? t.loop ? t._loopX ? p({}, this.currentPage, {
              pageX: this.currentPage.pageX - 1
            }) : p({}, this.currentPage, {
              pageY: this.currentPage.pageY - 1
            }) : this.currentPage : null
          }
      }(tt),
      function(t) {
        t.prototype.wheelTo = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          if (this.options.wheel) {
            var i = -t * this.itemHeight;
            this.scrollTo(0, i)
          }
        }
          ,
          t.prototype.getSelectedIndex = function() {
            return this.options.wheel && this.selectedIndex
          }
          ,
          t.prototype._initWheel = function() {
            var t = this.options.wheel;
            t.wheelWrapperClass || (t.wheelWrapperClass = "wheel-scroll"),
            t.wheelItemClass || (t.wheelItemClass = "wheel-item"),
            t.wheelDisabledItemClass || (t.wheelDisabledItemClass = "wheel-disabled-item"),
            void 0 === t.selectedIndex && (t.selectedIndex = 0)
          }
          ,
          t.prototype._findNearestValidWheel = function(t) {
            t = t > 0 ? 0 : t < this.maxScrollY ? this.maxScrollY : t;
            for (var i = this.options.wheel, e = Math.abs(Math.round(-t / this.itemHeight)), s = e, o = this.items; e >= 0 && -1 !== o[e].className.indexOf(i.wheelDisabledItemClass); )
              e--;
            if (e < 0)
              for (e = s; e <= o.length - 1 && -1 !== o[e].className.indexOf(i.wheelDisabledItemClass); )
                e++;
            return e === o.length && (e = s),
              {
                index: this.wheelItemsAllDisabled ? -1 : e,
                y: -e * this.itemHeight
              }
          }
          ,
          t.prototype._checkWheelAllDisabled = function() {
            var t = this.options.wheel
              , i = this.items;
            this.wheelItemsAllDisabled = !0;
            for (var e = 0; e < i.length; e++)
              if (-1 === i[e].className.indexOf(t.wheelDisabledItemClass)) {
                this.wheelItemsAllDisabled = !1;
                break
              }
          }
      }(tt),
      function(t) {
        t.prototype._initScrollbar = function() {
          var t = this
            , i = this.options.scrollbar
            , e = i.fade
            , s = void 0 === e || e
            , o = i.interactive
            , n = void 0 !== o && o;
          this.indicators = [];
          var r = void 0;
          this.options.scrollX && (r = {
            el: J("horizontal"),
            direction: "horizontal",
            fade: s,
            interactive: n
          },
            this._insertScrollBar(r.el),
            this.indicators.push(new G(this,r))),
          this.options.scrollY && (r = {
            el: J("vertical"),
            direction: "vertical",
            fade: s,
            interactive: n
          },
            this._insertScrollBar(r.el),
            this.indicators.push(new G(this,r))),
            this.on("refresh", function() {
              for (var i = 0; i < t.indicators.length; i++)
                t.indicators[i].refresh()
            }),
          s && (this.on("scrollEnd", function() {
            for (var i = 0; i < t.indicators.length; i++)
              t.indicators[i].fade()
          }),
            this.on("scrollCancel", function() {
              for (var i = 0; i < t.indicators.length; i++)
                t.indicators[i].fade()
            }),
            this.on("scrollStart", function() {
              for (var i = 0; i < t.indicators.length; i++)
                t.indicators[i].fade(!0)
            }),
            this.on("beforeScrollStart", function() {
              for (var i = 0; i < t.indicators.length; i++)
                t.indicators[i].fade(!0, !0)
            })),
            this.on("destroy", function() {
              t._removeScrollBars()
            })
        }
          ,
          t.prototype._insertScrollBar = function(t) {
            this.wrapper.appendChild(t)
          }
          ,
          t.prototype._removeScrollBars = function() {
            for (var t = 0; t < this.indicators.length; t++)
              this.indicators[t].destroy()
          }
      }(tt),
      function(t) {
        t.prototype._initPullDown = function() {
          this.options.probeType = q
        }
          ,
          t.prototype._checkPullDown = function() {
            var t = this.options.pullDownRefresh
              , i = t.threshold
              , e = void 0 === i ? 90 : i
              , s = t.stop
              , o = void 0 === s ? 40 : s;
            return !(this.directionY !== F || this.y < e) && (this.pulling || (this.pulling = !0,
              this.trigger("pullingDown")),
              this.scrollTo(this.x, o, this.options.bounceTime, A.bounce),
              this.pulling)
          }
          ,
          t.prototype.finishPullDown = function() {
            this.pulling = !1,
              this.resetPosition(this.options.bounceTime, A.bounce)
          }
          ,
          t.prototype.openPullDown = function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            this.options.pullDownRefresh = t,
              this._initPullDown()
          }
          ,
          t.prototype.closePullDown = function() {
            this.options.pullDownRefresh = !1
          }
          ,
          t.prototype.autoPullDownRefresh = function() {
            var t = this.options.pullDownRefresh
              , i = t.threshold
              , e = void 0 === i ? 90 : i
              , s = t.stop
              , o = void 0 === s ? 40 : s;
            this.pulling || (this.pulling = !0,
              this.scrollTo(this.x, e),
              this.trigger("pullingDown"),
              this.scrollTo(this.x, o, this.options.bounceTime, A.bounce))
          }
      }(tt),
      function(t) {
        t.prototype._initPullUp = function() {
          this.options.probeType = q,
            this.pullupWatching = !1,
            this._watchPullUp()
        }
          ,
          t.prototype._watchPullUp = function() {
            this.pullupWatching || (this.pullupWatching = !0,
              this.on("scroll", this._checkToEnd))
          }
          ,
          t.prototype._checkToEnd = function(t) {
            var i = this
              , e = this.options.pullUpLoad.threshold
              , s = void 0 === e ? 0 : e;
            this.movingDirectionY === R && t.y <= this.maxScrollY + s && (this.once("scrollEnd", function() {
              i.pullupWatching = !1
            }),
              this.trigger("pullingUp"),
              this.off("scroll", this._checkToEnd))
          }
          ,
          t.prototype.finishPullUp = function() {
            var t = this;
            this.pullupWatching ? this.once("scrollEnd", function() {
              t._watchPullUp()
            }) : this._watchPullUp()
          }
          ,
          t.prototype.openPullUp = function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            this.options.pullUpLoad = t,
              this._initPullUp()
          }
          ,
          t.prototype.closePullUp = function() {
            this.options.pullUpLoad = !1,
            this.pullupWatching && (this.pullupWatching = !1,
              this.off("scroll", this._checkToEnd))
          }
      }(tt),
      function(t) {
        t.prototype._initMouseWheel = function() {
          var t = this;
          this._handleMouseWheelEvent(v),
            this.on("destroy", function() {
              clearTimeout(t.mouseWheelTimer),
                clearTimeout(t.mouseWheelEndTimer),
                t._handleMouseWheelEvent(y)
            }),
            this.firstWheelOpreation = !0
        }
          ,
          t.prototype._handleMouseWheelEvent = function(t) {
            t(this.wrapper, "wheel", this),
              t(this.wrapper, "mousewheel", this),
              t(this.wrapper, "DOMMouseScroll", this)
          }
          ,
          t.prototype._onMouseWheel = function(t) {
            var i = this;
            if (this.enabled) {
              t.preventDefault(),
              this.options.stopPropagation && t.stopPropagation(),
              this.firstWheelOpreation && this.trigger("scrollStart"),
                this.firstWheelOpreation = !1;
              var e = this.options.mouseWheel
                , s = e.speed
                , o = void 0 === s ? 20 : s
                , n = e.invert
                , r = void 0 !== n && n
                , h = e.easeTime
                , a = void 0 === h ? 300 : h;
              clearTimeout(this.mouseWheelTimer),
                this.mouseWheelTimer = setTimeout(function() {
                  i.options.snap || a || i.trigger("scrollEnd", {
                    x: i.x,
                    y: i.y
                  }),
                    i.firstWheelOpreation = !0
                }, 400);
              var l = void 0
                , c = void 0;
              switch (!0) {
                case "deltaX"in t:
                  1 === t.deltaMode ? (l = -t.deltaX * o,
                    c = -t.deltaY * o) : (l = -t.deltaX,
                    c = -t.deltaY);
                  break;
                case "wheelDeltaX"in t:
                  l = t.wheelDeltaX / 120 * o,
                    c = t.wheelDeltaY / 120 * o;
                  break;
                case "wheelDelta"in t:
                  l = c = t.wheelDelta / 120 * o;
                  break;
                case "detail"in t:
                  l = c = -t.detail / 3 * o;
                  break;
                default:
                  return
              }
              var p = r ? -1 : 1;
              l *= p,
                c *= p,
              this.hasVerticalScroll || (l = c,
                c = 0);
              var d = void 0
                , u = void 0;
              if (this.options.snap)
                return d = this.currentPage.pageX,
                  u = this.currentPage.pageY,
                  l > 0 ? d-- : l < 0 && d++,
                  c > 0 ? u-- : c < 0 && u++,
                  void this._goToPage(d, u);
              d = this.x + Math.round(this.hasHorizontalScroll ? l : 0),
                u = this.y + Math.round(this.hasVerticalScroll ? c : 0),
                this.movingDirectionX = this.directionX = l > 0 ? -1 : l < 0 ? 1 : 0,
                this.movingDirectionY = this.directionY = c > 0 ? -1 : c < 0 ? 1 : 0,
                d > this.minScrollX ? d = this.minScrollX : d < this.maxScrollX && (d = this.maxScrollX),
                u > this.minScrollY ? u = this.minScrollY : u < this.maxScrollY && (u = this.maxScrollY);
              var m = this.y === u;
              this.scrollTo(d, u, a, A.swipe),
                this.trigger("scroll", {
                  x: this.x,
                  y: this.y
                }),
                clearTimeout(this.mouseWheelEndTimer),
              m && (this.mouseWheelEndTimer = setTimeout(function() {
                i.trigger("scrollEnd", {
                  x: i.x,
                  y: i.y
                })
              }, a))
            }
          }
      }(tt),
      function(t) {
        t.prototype._initZoom = function() {
          var t = this.options.zoom
            , i = t.start
            , e = void 0 === i ? 1 : i
            , s = t.min
            , o = void 0 === s ? 1 : s
            , n = t.max
            , r = void 0 === n ? 4 : n;
          this.scale = Math.min(Math.max(e, o), r),
            this.setScale(this.scale),
            this.scrollerStyle[P.transformOrigin] = "0 0"
        }
          ,
          t.prototype._zoomTo = function(t, i, e, s) {
            this.scaled = !0;
            var o = t / (s || this.scale);
            this.setScale(t),
              this.refresh();
            var n = Math.round(this.startX - (i - this.relativeX) * (o - 1))
              , r = Math.round(this.startY - (e - this.relativeY) * (o - 1));
            n > this.minScrollX ? n = this.minScrollX : n < this.maxScrollX && (n = this.maxScrollX),
              r > this.minScrollY ? r = this.minScrollY : r < this.maxScrollY && (r = this.maxScrollY),
            this.x === n && this.y === r || this.scrollTo(n, r, this.options.bounceTime),
              this.scaled = !1
          }
          ,
          t.prototype.zoomTo = function(t, i, e) {
            var s = x(this.wrapper)
              , o = s.left
              , n = s.top
              , r = i + o - this.x
              , h = e + n - this.y;
            this._zoomTo(t, r, h)
          }
          ,
          t.prototype._zoomStart = function(t) {
            var i = t.touches[0]
              , e = t.touches[1]
              , s = Math.abs(i.pageX - e.pageX)
              , o = Math.abs(i.pageY - e.pageY);
            this.startDistance = u(s, o),
              this.startScale = this.scale;
            var n = x(this.wrapper)
              , r = n.left
              , h = n.top;
            this.originX = Math.abs(i.pageX + e.pageX) / 2 + r - this.x,
              this.originY = Math.abs(i.pageY + e.pageY) / 2 + h - this.y,
              this.trigger("zoomStart")
          }
          ,
          t.prototype._zoom = function(t) {
            if (this.enabled && !this.destroyed && E[t.type] === this.initiated) {
              this.options.preventDefault && t.preventDefault(),
              this.options.stopPropagation && t.stopPropagation();
              var i = t.touches[0]
                , e = t.touches[1]
                , s = u(Math.abs(i.pageX - e.pageX), Math.abs(i.pageY - e.pageY)) / this.startDistance * this.startScale;
              this.scaled = !0;
              var o = this.options.zoom
                , n = o.min
                , r = void 0 === n ? 1 : n
                , h = o.max
                , a = void 0 === h ? 4 : h;
              s < r ? s = .5 * r * Math.pow(2, s / r) : s > a && (s = 2 * a * Math.pow(.5, a / s));
              var l = s / this.startScale
                , c = this.startX - (this.originX - this.relativeX) * (l - 1)
                , p = this.startY - (this.originY - this.relativeY) * (l - 1);
              this.setScale(s),
                this.scrollTo(c, p, 0)
            }
          }
          ,
          t.prototype._zoomEnd = function(t) {
            if (this.enabled && !this.destroyed && E[t.type] === this.initiated) {
              this.options.preventDefault && t.preventDefault(),
              this.options.stopPropagation && t.stopPropagation(),
                this.isInTransition = !1,
                this.isAnimating = !1,
                this.initiated = 0;
              var i = this.options.zoom
                , e = i.min
                , s = void 0 === e ? 1 : e
                , o = i.max
                , n = void 0 === o ? 4 : o
                , r = this.scale > n ? n : this.scale < s ? s : this.scale;
              this._zoomTo(r, this.originX, this.originY, this.startScale),
                this.trigger("zoomEnd")
            }
          }
      }(tt),
      function(t) {
        t.prototype._initInfinite = function() {
          this.options.probeType = 3,
            this.maxScrollY = -$,
            this.infiniteScroller = new Q(this,this.options.infinity)
        }
      }(tt),
      tt.Version = "1.15.2",
      i.default = tt
  }
}]);

(function(a) {
    var h = document,
        d = a.IntersectionObserver || !1;
    d && "IntersectionObserverEntry" in a && "intersectionRatio" in a.IntersectionObserverEntry.prototype && !("isIntersecting" in IntersectionObserverEntry.prototype) && Object.defineProperty(a.IntersectionObserverEntry.prototype, "isIntersecting", {
        get: function() {
            return 0 < this.intersectionRatio
        }
    });
    a.$lazy = function(b, a) {
        "object" === typeof b || (b = [b]);
        "function" !== typeof a && (a = function(b) {
            for (var a, c = 0, f = b.length; c < f; c++)
                if (a = b[c], !e || a.isIntersecting) {
                    a = e ? a.target :
                        a;
                    var d = a.getAttribute("data-srcset"),
                        g = a.getAttribute("data-src");
                    d && (a.srcset = d);
                    g && (a.src = g);
                    e && e.unobserve(a)
                }
        });
        var c = b[0] || b.selector || "[data-src]",
            f = b[1] || b.threshold || .006;
        b = b[2] || b.rootMargin || "0px";
        var e = d ? new d(a, {
            threshold: [f],
            rootMargin: b
        }) : !1;
        f = h.querySelectorAll(c);
        b = 0;
        for (var k = f.length; b < k; b++) c = f[b], e ? e.observe(c) : a([c])
    }
})(window);
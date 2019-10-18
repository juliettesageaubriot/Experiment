const Easing = {
    easeInSine: function (t, b, c, d) {
        return -c * Math.cos(t / d * Math.PI / 2) + c + b;
    },
    easeOutSine: function (t, b, c, d) {
        return c * Math.sin(t / d * Math.PI / 2) + b;
    },
    easeInOutSine: function (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeOutBack: function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    }
}
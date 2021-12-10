var Actions = /** @class */ (function () {
    function Actions(ctx) {
        this.ctx = ctx;
    }
    Actions.prototype.draw = function (i, x, y, width, height) {
        var img = new Image();
        img.src = i;
        this.ctx.drawImage(img, x, y, width, height);
    };
    Actions.prototype.clearall = function () {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    };
    Actions.prototype.generateObjects = function (is, min, max, width, height) {
        var random = is;
        var y1 = Math.floor(Math.random() * (min - max) + min);
        var x1 = Math.floor(Math.random() * (min - max) + min);
        var i = random[Math.floor(Math.random() * random.length)];
        var img = new Image();
        img.src = i;
        this.ctx.drawImage(img, x1, y1, width, height);
    };
    return Actions;
}());

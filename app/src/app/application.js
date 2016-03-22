my.app.Application = (function () {

    /**
     * Application main class.
     * Will be instantiated & initialized by HTML page
     */
    var Application = function () {
        var me = this;
        me.view = new my.app.SomeView();
        document.write("<br>in Application");
    };
    return Application;
})();

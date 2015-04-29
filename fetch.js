$(function() {
    function queryString() {
        var query_string = {};
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0;i < vars.length; i++) {
            var pair = vars[i].split("="),
                value = pair[1];
            for (var j = 2; j < pair.length; j++) {
                value += '=' + pair[j];
            }

            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = value;
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [ query_string[pair[0]], value ];
                query_string[pair[0]] = arr;
            } else {
                query_string[pair[0]].push(value);
            }
        }
        return query_string;
    }

    var query = queryString(),
        url = decodeURIComponent(query.url);

    if (url) {
        $('.cmd-link').val(url);
        $('#fetchCommodity').trigger('click');
    }

});

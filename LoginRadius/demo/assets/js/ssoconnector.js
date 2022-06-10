var stringVariable = window.location.href;
domainName = stringVariable.substring(0, stringVariable.lastIndexOf('/'));

$(function () {
    $("#btn-shopify-login").click(function () {
        var token = localStorage.getItem("LRTokenKey");
        $.ajax({
            url: domainName + "/../ajax_handler/profile",
            type: 'POST',
            dataType: "json",
            data: $.param({
                token: token,
                action: "generateShopifyMultipassURL"
            }),
            success: function (response) {
                if (response.status == "success" && response.data) {
                    window.location.href =  response.data;
                } else {
                    $("#sso-connector-errorMsg").text(response.message);
                }
            },
            error: function (xhr, status, error) {
                $("#sso-connector-errorMsg").text(response);
            }
        });
    });

    $("#btn-bigcommerce-login").click(function () {
        var token = localStorage.getItem("LRTokenKey");
        $.ajax({
            url: domainName + "/../ajax_handler/profile",
            type: 'POST',
            dataType: "json",
            data: $.param({
                token: token,
                action: "generateBigCommerceURL"
            }),
            success: function (response) {
                if (response.status == "success" && response.data) {
                    window.location.href =  response.data;
                } else {
                    $("#sso-connector-errorMsg").text(response.message);
                }
            },
            error: function (xhr, status, error) {
                $("#sso-connector-errorMsg").text(response);
            }
        });
    });
});


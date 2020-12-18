var stringVariable = window.location.href;
domainName = stringVariable.substring(0, stringVariable.lastIndexOf('/'));
$(function () {
    generateShopifyMultipassURL();
});

function generateShopifyMultipassURL() {
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
            console.log(response);
            if (response.status == "success" && response.data) {
                $('#btn-shopify-multipassurl').attr("href",response.data);
            }else{
                $("#shopify-div").hide();
                $("#shopify-multipassurl-errorMsg").text(response.message);

            }
        },
        error: function (xhr, status, error) {
            $("#shopify-multipassurl-errorMsg").text(xhr.responseText);
        }
    });
}

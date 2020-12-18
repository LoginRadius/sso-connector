var stringVariable = window.location.href;
domainName = stringVariable.substring(0, stringVariable.lastIndexOf('/'));
$(function () {
    handleChangePassword();
    
});


function handleChangePassword() {
    $('#btn-user-changepassword').on('click', function () {
        $("#user-changepassword-errorMsg").text("");
        $("#user-changepassword-successMsg").text("");
        if ($('#user-changepassword-oldpassword').val().trim() == '' || $('#user-changepassword-newpassword').val().trim() == '') {
            $("#user-changepassword-errorMsg").text("The password field is required.");
            return;
        } else if ($('#user-changepassword-newpassword').val().trim().length < '6') {
            $("#user-changepassword-errorMsg").text("The New Password field must be at least 6 characters in length.");
            return;
        }
        $("#lr-loading").show();
        $.ajax({
            type: "POST",
            url: domainName + "/../ajax_handler/profile",
            dataType: "json",
            data: $.param({
                token: localStorage.getItem("LRTokenKey"),
                oldpassword: $("#user-changepassword-oldpassword").val(),
                newpassword: $("#user-changepassword-newpassword").val(),
                action: "changePassword"
            }),
            success: function (res) {
                $("#lr-loading").hide();
                if (res.status == 'error') {
                    $("#user-changepassword-errorMsg").text(res.message);
                } else if (res.status == 'success') {
                    $("#user-changepassword-oldpassword").val("");
                    $("#user-changepassword-newpassword").val("");
                    $("#user-changepassword-successMsg").text(res.message);
                }
            },
            error: function (xhr, status, error) {
                $("#lr-loading").hide();
                $("#user-changepassword-errorMsg").text(xhr.responseText);
            }
        });
    });
}


function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
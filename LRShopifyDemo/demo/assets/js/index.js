var stringVariable = window.location.href;
domainName = stringVariable.substring(0, stringVariable.lastIndexOf('/'));
$(function () {
    var accesstoken = localStorage.getItem("LRTokenKey");
    var lruid= localStorage.getItem("LRUserID");
    if (accesstoken != "" && accesstoken != null && lruid != "" && lruid != null) {
        window.location.href = domainName + "/profile.html";
    }
    handleLogin();
    handleSignup();
    handleForgotPassword();
    handleResetPassword();

    var vtype = getUrlParameter("vtype");
    if (vtype == 'reset') {
        jQuery('.lrforgotpassword').hide();
        jQuery('.lrrestpassword').show();
    }
    $("#lr-loading").click(function () {
        $("#lr-loading").hide();
    });
});

function getProfile(access_token, profile_uid) {
    localStorage.setItem('LRTokenKey', access_token);
    localStorage.setItem('LRUserID', profile_uid);

    $.ajax({
        url: domainName + "/../ajax_handler/login",
        type: 'POST',
        dataType: "json",
        data: $.param({
            token: access_token,   
            action: "getProfile"
        }),
        success: function (response) {
            if (response.status == "success") {
                localStorage.setItem('EmailId', response.data.Email[0].Value);
                if (typeof (response.data.FullName) != "undefined" && response.data.FullName !== null) {
                    localStorage.setItem('UserName', response.data.FullName);
                }
                localStorage.setItem('ImageUrl', response.data.ImageUrl);
                localStorage.setItem('LastLoginTime', response.data.LastLoginDate);
                window.location.href = domainName + "/profile.html";
            } else {
                $("#minimal-login-errorMsg").text(response.message);
            }
        }
    });
}

function handleLogin() {
    $('#btn-minimal-login').on('click', function () {
        $("#minimal-login-errorMsg").text("");
        if ($('#minimal-login-email').val().trim() == '') {
            $("#minimal-login-errorMsg").text("The Email Id field is required.");
            return;
        } else if ($('#minimal-login-password').val().trim() == '') {
            $("#minimal-login-errorMsg").text("The Password field is required.");
            return;
        }
        $("#lr-loading").show();
        $.ajax({
            type: "POST",
            url: domainName + "/../ajax_handler/login",
            dataType: "json",
            data: $.param({
                email: $("#minimal-login-email").val(),
                password: $("#minimal-login-password").val(),
                action: "loginByEmail"
            }),

            success: function (response) {
                $("#lr-loading").hide();
                if (response.status == 'error') {           
                    $("#minimal-login-errorMsg").text(response.message);
                } else if (response.status == 'success') {
                    $("#minimal-login-email").val("");
                    $("#minimal-login-password").val("");
                    getProfile(response.data.access_token, response.data.Profile.Uid);
                }
            },
            error: function (xhr, status, error) {
                $("#lr-loading").hide();
                console.log("Login err::", xhr.responseText);
                $("#minimal-login-errorMsg").text("an error occurred");
            }
        });
    });
}


function handleSignup() {
    $('#btn-minimal-signup').on('click', function () {        
        $("#minimal-signup-successMsg").text("");
        $("#minimal-signup-errorMsg").text("");
        if ($('#minimal-signup-email').val().trim() == '') {
            $("#minimal-signup-errorMsg").text("The Email Id field is required.");
            return;
        } else if ($('#minimal-signup-password').val().trim() == '') {
            $("#minimal-signup-errorMsg").text("The Password field is required.");
            return;
        } else if ($('#minimal-signup-password').val().trim().length < '6') {
            $("#minimal-signup-errorMsg").text("The Password field must be at least 6 characters in length.");
            return;
        } else if ($("#minimal-signup-password").val() != $("#minimal-signup-confirmpassword").val()) {
            $("#minimal-signup-errorMsg").text("Passwords do not match.");
            return;
        }
        $("#lr-loading").show();
        $.ajax({
            
            type: "POST",
            url: domainName + "/../ajax_handler/login",
            dataType: "json",
            data: $.param({
                email: $("#minimal-signup-email").val(),
                password: $("#minimal-signup-password").val(),
                verificationurl: domainName,
                action: "registration"
            }),
            success: function (res) {
                $("#lr-loading").hide();
                if (res.status == 'registered') {
                    $("#minimal-signup-successMsg").text(res.message);
                     $("#minimal-signup-email").val('');
                     $("#minimal-signup-password").val('');
                     $("#minimal-signup-confirmpassword").val('');
                } else if (res.status == 'success') {
                     $("#minimal-signup-email").val('');
                     $("#minimal-signup-password").val('');
                     $("#minimal-signup-confirmpassword").val('');
                    getProfile(res.result.Data.access_token, res.result.Data.Profile.Uid);
                } else if (res.status == 'error') {              
                    $("#minimal-signup-errorMsg").text(res.message);
                }
            },
            error: function (xhr, status, error) {
                $("#lr-loading").hide();
                $("#minimal-signup-errorMsg").text(xhr.responseText);     
            }
        });
    });
}

function handleForgotPassword() {
    $('#btn-minimal-forgotpassword').on('click', function () {
        $("#minimal-forgotpassword-successMsg").text("");
        $("#minimal-forgotpassword-errorMsg").text("");
        if ($('#minimal-forgotpassword-email').val().trim() == '') {
            $("#minimal-forgotpassword-errorMsg").text("The Email Id field is required.");
            return;
        }
        $("#lr-loading").show();
        $.ajax({
            type: "POST",
            url: domainName + "/../ajax_handler/login",
            dataType: "json",
            data: $.param({
                email: $("#minimal-forgotpassword-email").val(),
                resetPasswordUrl: domainName + "/forgot.html",
                action: "forgotPassword"
            }),
            success: function (response) {
                $("#lr-loading").hide();
                if (response.status == 'success') {   
                    $("#minimal-forgotpassword-email").val("");
                    $("#minimal-forgotpassword-successMsg").text(response.message);
                } else if (response.status == 'error') {           
                    $("#minimal-forgotpassword-errorMsg").text(response.message);
                }
            },
            error: function (xhr, status, error) {
                $("#lr-loading").hide();
                $("#minimal-forgotpassword-errorMsg").text(xhr.responseText);       
            }
        });
    });
}

function handleResetPassword() {
    $('#btn-minimal-resetpassword').on('click', function () {
        $("#minimal-resetpassword-successMsg").text("");
        $("#minimal-resetpassword-errorMsg").text("");
        if ($('#minimal-resetpassword-password').val().trim() == '') {
            $("#minimal-resetpassword-errorMsg").text("The Password field is required.");
            return;
        }else if ($('#minimal-resetpassword-password').val().trim().length < '6') {
            $("#minimal-resetpassword-errorMsg").text("The Password field must be at least 6 characters in length.");
            return;
        }
        else if ($('#minimal-resetpassword-password').val() != $('#minimal-resetpassword-confirmpassword').val()) {
            $("#minimal-resetpassword-errorMsg").text("Passwords do not match.");
            return;
        } 
        $("#lr-loading").show();
        $.ajax({
            type: "POST",
            url: domainName + "/../ajax_handler/login",
            dataType: "json",
            data: $.param({
                resettoken: getUrlParameter("vtoken"),
                password: $("#minimal-resetpassword-password").val(),
                action: "resetPassword"
            }),
            success: function (response) {
                $("#lr-loading").hide();
                if (response.status == 'success') { 
                    $("#minimal-resetpassword-password").val("");
                    $("#minimal-resetpassword-confirmpassword").val("");
                    $("#minimal-resetpassword-successMsg").text(response.message);
                } else if (response.status == 'error') {             
                    $("#minimal-resetpassword-errorMsg").text(response.message);
                }
            },
            error: function (xhr, status, error) {
                $("#lr-loading").hide();
                $("#minimal-resetpassword-errorMsg").text(xhr.responseText);        
            }
        });
    });
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}
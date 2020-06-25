var code,
    captchaValid = false
;

$( "#commentForm" ).on('submit', function (e) {
    if (!captchaValid) {
        e.preventDefault();
        validateCaptcha();
    }
});

$( "#captchaForm" ).on('submit', function (e) {
    e.preventDefault();
    validateCaptcha();
});

function createCaptcha() {
    document.getElementById( "captcha" ).innerHTML = "";
    var charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
    var lengthOtp = 6;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
        var index = Math.floor(Math.random() * charsArray.length + 1);
        if (captcha.indexOf(charsArray[index]) === -1)
            captcha.push(charsArray[index]);
        else i--;
    }
    var canv = document.createElement( "canvas" );
    canv.id = "captcha";
    canv.width = 120;
    canv.height = 50;
    var ctx = canv.getContext( "2d" );
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha.join(""), 0, 30);
    code = captcha.join( "" );
    document.getElementById( "captcha" ).appendChild(canv);
}

function validateCaptcha() {
    if (document.getElementById( "captchaTextBox" ).value === code) {
        $( "#commentFormSubmit" ).removeClass( "hidden" );
        $( "#captchaBox" ).hide();
        captchaValid = true;
    } else {
        alert( "Invalid Captcha. try Again" );
        createCaptcha();
    }
}

createCaptcha();

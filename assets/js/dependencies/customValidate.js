$(document).ready(function(){
    $('.form_signin').validate({
        rules:{
            name:{
                required: true
            },
            email: {
                email:true,
                required: true
            },
            password:{
                minlength: 6,
                required: true
            },
            confirmation:{
                minlength:6,
                equalTo: '#password'
            },
        },
        success: function(element){
            element
            .text('OK.!').addClass('valid');
        }
    });
});
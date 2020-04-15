
$(document).ready(function(){
    $('.slider').slick({
      slidesToShow: 3,
      slideToScroll: 1,
      centerMode: true,
      centerPadding: '0',
      prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/slider_left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/icons/slider_right.png"></button>',
      responsive: [
        {
          breakpoint: 1412,
          settings: {
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });

    function validaForm(form){
      $(form).validate({
        rules: {
          name: "required",

          phone: "required",
          email: {
            required:  {
                    depends:function(){
                        $(this).val($.trim($(this).val()));
                        return true;
                    }   
                },
            customemail: true
          }
        },
        messages: {
          name: "Пожалуйства, введите имя.",
          phone: "Пожалуйства, введите телефон.",
          email: {
            required: "Пожалуйства, введите почту.",
            email: "Введите правильный E-mail."
          }
        },
      });
    }

    $.validator.addMethod("customemail", 
    function(value, element) {
        return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
    }, 
    "Введите правильный email"
    );
    
    validaForm('#form1');
    validaForm('#form2');


    const navSlide = () => {
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('.header__nav');

      burger.addEventListener('click', ()=>{
        nav.classList.toggle('header__nav-active');
        burger.classList.toggle('toggle');
      });

      
    };

    navSlide();

    $('input[name=phone]').mask("+3 (999) 999-99-99");
  });
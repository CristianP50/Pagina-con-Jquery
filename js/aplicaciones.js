$(document).ready(function(){
    // ---Encabezado---

    var fixedHeader = $('#fixedheader');

    $(window).on('scroll',function(){

        var proyectosOffsetStop = $('#proyectos').offset().top;

        if ($(window).scrollTop() >= proyectosOffsetStop){

            fixedHeader.css('margin-top', 0)
            
        } else if($(window).scrollTop() <= proyectosOffsetStop/2){

            fixedHeader.css('margin-top', '-68px')

        }
    });

    // scroll suave mostrar y ocultar el boton de volver arriba

    var btnVolverArriba = $('#btnvolverarriba');

    $(window).on('scroll',function(){

        var proyectosOffsetStop = $('#proyectos').offset().top;

        if ($(window).scrollTop() >= proyectosOffsetStop){

            btnVolverArriba.css('margin-right', 0)
            
        } else if($(window).scrollTop() <= proyectosOffsetStop/2){

            btnVolverArriba.css('margin-right', '-60px')

        }
    });

    // --Movimiento suave de scroo para inicio y volver arriba

    $('a.volver-arriba').on('click', function(e){

        e.preventDefault();

        if ($(window).scrollTop() != 0) {
        
            $('html,body').stop().animate({scrollTop:0},1000);
        }
    });

    // --Movimiento suave para el resto de los elementos del menú--

    $('a.scroll-suave').on('click', function(e){

        e.preventDefault();
        var seccionOT = $($(this).attr('href')).offset().top
        
        $('html,body').stop().animate({scrollTop: seccionOT},1000);
    })

    $('a.scroll-acercade').on('click', function(e){

        e.preventDefault();
        var seccionOT = $($(this).attr('href')).offset().top - 122
        
        $('html,body').stop().animate({scrollTop: seccionOT},1000);
    })

    $('a.scroll-equipo').on('click', function(e){

        e.preventDefault();
        var seccionOT = $($(this).attr('href')).offset().top - 68
        
        $('html,body').stop().animate({scrollTop: seccionOT},1000);
    })

    // ---Modal-----

    $('.imagen-proyecto').on('click', function(){

        var rutaImagen = $(this).attr('src');
        var modal = ' <div class="modal" id="modal"><img src="'+rutaImagen+'" alt=""><div class="btn-cerrar" id="btnCerrar"><i class="fas fa-times"></i></div></div>';

        $('#proyectos').after(modal);

        $('#btnCerrar').on('click', function(){
            $('#modal').remove();
        })
    })

    $(document).on('keyup', function(e){

        if(e.which==27){
            $('#modal').remove();
        }
    })

    // ----slider-----

    var slider = $('#slider');
    var btnAnterior = $('#btnAnterior');
    var btnSiguiente = $('#btnSiguiente');

    // pasar ultimo slide al primer lugar----

    $('#slider .slide:last').insertBefore('#slider .slide:first');

    slider.css('margin-left', '-43%');

    // ---funcion slider a la derecha---

    function  moverDerecha(){

        if(!slider.is(':animated')){
            slider.animate({
                marginLeft:'-105.6%'
            },700, function(){
                $('#slider .slide:first').insertAfter('#slider .slide:last');
                slider.css('margin-left','-43%');
                resetInterval();
            }); 
        }
        
    }

    btnSiguiente.on('click', moverDerecha);


    // ----mover hacia la izquierda---

    function  moverIzquierda(){

        if(!slider.is(':animated')){
            $('#slider .slide:last').insertBefore('#slider .slide:first');
            slider.css('margin-left','-105.6%');
            slider.animate({
                marginLeft:'-43%'
            },700, function(){
                resetInterval();
            });

        }
       
    }

    btnAnterior.on('click', moverIzquierda);

    // Intervalo para que el slider se mueva automáticamente cada 5s

    var intervalo = setInterval(moverDerecha,5000);

    function resetInterval(){
        clearInterval(intervalo);
        intervalo = setInterval(moverDerecha,5000);
    }



    // ---Validación formulario----

    var formulario = $('#formulario');
    var nombre = $('#nombre');
    var email = $('#email');
    var mensajes = $('#mensajes');
    
    function valNombre(e){

        if(nombre.val() == '' || nombre.val() == null){
            e.preventDefault();
            $('input[type= "text"]+ .error').css('display','block');
        }else{
            $('input[type= "text"]+ .error').css('display','none');
        }
    }

    function valEmail(e){

        if(email.val() == '' || email.val() == null){
            e.preventDefault();
            $('input[type= "email"]+ .error').css('display','block');
        }else{
            $('input[type= "email"]+ .error').css('display','none');
        }
    }

    function valMensajes(e){

        if(mensajes.val() == '' || mensajes.val() == null){
            e.preventDefault();
            $('textarea + .error').css('display','block');
        }else{
            $('textarea + .error').css('display','none');
        }
    }

    function validacion(e){
        valNombre(e);
        valEmail(e);
        valMensajes(e);
    }

    formulario.on('submit', validacion);


    // -----Menú movil----

    var numero = 1

    $('#btnMenu').on('click', function(e){

        e.preventDefault();
        if(numero == 1){
            $('.menu-movil .menu-principal').animate({left:0},300, function(){
                numero = 0;
            });
        }else{
            $('.menu-movil .menu-principal').animate({left:'-100%'},300, function(){
                numero = 1;
            })
        }
    })

    $('.menu-movil .menu-principal').on('click', function(){

        $('.menu-movil .menu-principal').animate({left:'-100%'},300, function(){
            numero = 1;
        })
    })


});
$( ()=> {

   
    let scrollTop = 0;
    const winHeight = $(window).height() - 50;
    
    $(window).scroll(()=> {

        scrollTop = $(window).scrollTop();
        const topTop = $("#top").offset().top ; 
        const aboutTop = $("#about").offset().top ; 

        const port1Top = $("#portfolio").offset().top ;
        const port2Top = $("#port2").offset().top ;
        const port3Top = $("#port3").offset().top ;
        const port4Top = $("#port4").offset().top ;  

        const eventTop =   $("#event").offset().top ; 
        const contactTop = $("#contact").offset().top ;         

        
       
        if( $(window).scrollTop() >= topTop ) {          
            $("#menu a").eq(0).addClass('act').siblings().removeClass('act'); 
        }
        if( $(window).scrollTop() >= aboutTop  ) {          
            $("#menu a").eq(1).addClass('act').siblings().removeClass('act');
           
        }
        if( $(window).scrollTop() >= aboutTop  -  200 ) {
            progressAni(); 
        }

        if(  $(window).scrollTop() >= port1Top - 200 ) {            
            $("#port1").addClass('act');
        }
        if(  $(window).scrollTop() >= port1Top) {
            $("#menu a").eq(2).addClass('act').siblings().removeClass('act');
        }
        if(  $(window).scrollTop() >= port1Top +200 ) {
            $("#port2").addClass('act');
        }
        if(  $(window).scrollTop() >= port2Top +200 ) {
            $("#port3").addClass('act');
        }

        
         if(  $(window).scrollTop() >= port3Top +200 ) {
            $("#port4").addClass('act');
        }

        if(  $(window).scrollTop() >= eventTop ) {
            $("#menu a").eq(3).addClass('act').siblings().removeClass('act');            
        }
        if(  $(window).scrollTop() >= contactTop ) {
            $("#menu a").eq(4).addClass('act').siblings().removeClass('act');            
        }

       
        if( $(window).innerWidth() > 800  ) {            
            if( scrollTop >  winHeight ) {
                $("#top nav").addClass('act');
            } else {
                $("#top nav").removeClass('act');
            }

        }
    });
    
    const menuClose = ()=> {
        $("#top nav").removeClass('act');
        $("#top button").text('menu');
        $("body").css('overflow' , 'auto');
    }
    if( $(window).innerWidth() <= 800  ) {       
        $("#top button").click( ()=> {
                const txt = $("#top button").text() === 'menu';
                txt ? 
                ( 
                    $("#top nav").addClass('act')  , 
                    $("#top button").text('close') ,
                    $("body").css('overflow' , 'hidden')
                ) : 
                menuClose();
        });
        $("#menu a").click(()=> {
            menuClose();           
        });
    }

    
    const text = "환영합니다.\nTR MULTI SPORTS CENTER 입니다";
    const arrText = [...text]    
    const $typeText =$('#typeText');    

    let i = 0;
    const tt = () => {
        const char = arrText[i++];
        $typeText.append(char === '\n'  ?  '<br>'  : char  );
        if( i === arrText.length  ) clearInterval( timer  );
    }
    const timer = setInterval( tt , 200 );
   
   
    const progressAni = ()=> {
            let no = 0; 
            $("#skill progress").each( (i , j)=> {
                no = i * 200; 
                const x = parseInt(  $("#skill progress").eq(i).text()  );
                $("#skill progress").eq( i ).delay( no ).animate( { value : x }, 1000);
            } ); 
    }    
    
    $(".mobile-1").click( e => {
        e.preventDefault();
        window.open( 
            e.currentTarget.href , 
            'win1' , 
            'top=50, left=100, width= 414, height=740, toolbar=no, scrollbars=no, resizable=no'
        ); 
    });
    $("#mobile-1").keypress( e => {
        if( e.key === "Enter") {
            $(e.currentTarget).trigger('click'); 
        }
    });
   
    $("#event button").click( e => {
        
        let src = $(e.currentTarget).children('img').attr('src');
        const alt = $(e.currentTarget).children('img').attr('alt');
       
        src = src.replace(".jpg" , "_big.jpg");        
        $("#popup img").attr({ "src" : src , "alt" : alt });
        $("#popup h3").text( alt );
        $("#popup").fadeIn();
    });
    $("#popup").click( ()=> {
        $("#popup").fadeOut();
    });
    $(document).keydown( e=> {
        if(e.key === "Escape")   $("#popup").fadeOut();
    });

   
});
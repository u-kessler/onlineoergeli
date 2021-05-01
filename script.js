$("document").ready(function() {
    // The DOM is ready!
    // The rest of the code goes here

    

    // B
    
    var b_button = $("#B");
    var b_sound = new Audio("sounds/B.mp3")

    b_button.on("mousedown", function (){
        b_sound.play();
    });

    b_button.on("mouseup", function (){
        b_sound.pause();
        b_sound.currentTime = 0;
    });

    b_button.on("touchstart", function (){
        b_sound.play();
    });

    b_button.on("touchend", function (){
        b_sound.pause();
        b_sound.currentTime = 0;
    });



    // F7

    var f7_button = $("#F7");
    var f7_sound = new Audio("sounds/F7.mp3")

    f7_button.on("mousedown", function (){
        f7_sound.play();
    });

    f7_button.on("mouseup", function (){
        f7_sound.pause();
        f7_sound.currentTime = 0;
    });

    f7_button.on("touchstart", function (){
        f7_sound.play();
    });

    f7_button.on("touchend", function (){
        f7_sound.pause();
        f7_sound.currentTime = 0;
    });


    // Es 

    var es_button = $("#Es");
    var es_sound = new Audio("sounds/Es.mp3")

    es_button.on("mousedown", function (){
        es_sound.play();
    });

    es_button.on("mouseup", function (){
        es_sound.pause();
        es_sound.currentTime = 0;
    });

    es_button.on("touchstart", function (){
        es_sound.play();
    });

    es_button.on("touchend", function (){
        es_sound.pause();
        es_sound.currentTime = 0;
    });


    // B7

    var b7_button = $("#B7");
    var b7_sound = new Audio("sounds/B7.mp3")

    b7_button.on("mousedown", function (){
        b7_sound.play();
    });

    b7_button.on("mouseup", function (){
        b7_sound.pause();
        b7_sound.currentTime = 0;
    });

    b7_button.on("touchstart", function (){
        b7_sound.play();
    });

    b7_button.on("touchend", function (){
        b7_sound.pause();
        b7_sound.currentTime = 0;
    });



    // As

    var as_button = $("#As");
    var as_sound = new Audio("sounds/As.mp3")

    as_button.on("mousedown", function (){
        as_sound.play();
    });

    as_button.on("mouseup", function (){
        as_sound.pause();
        as_sound.currentTime = 0;
    });

    as_button.on("touchstart", function (){
        as_sound.play();
    });

    as_button.on("touchend", function (){
        as_sound.pause();
        as_sound.currentTime = 0;
    });



    // Es7

    var es7_button = $("#Es7");
    var es7_sound = new Audio("sounds/Es7.mp3")

    es7_button.on("mousedown", function (){
        es7_sound.play();
    });

    es7_button.on("mouseup", function (){
        es7_sound.pause();
        es7_sound.currentTime = 0;
    });

    es7_button.on("touchstart", function (){
        es7_sound.play();
    });

    es7_button.on("touchend", function (){
        es7_sound.pause();
        es7_sound.currentTime = 0;
    });



    // Des

    var des_button = $("#Des");
    var des_sound = new Audio("sounds/Des.mp3")

    des_button.on("mousedown", function (){
        des_sound.play();
    });

    des_button.on("mouseup", function (){
        des_sound.pause();
        des_sound.currentTime = 0;
    });

    des_button.on("touchstart", function (){
        des_sound.play();
    });

    des_button.on("touchend", function (){
        des_sound.pause();
        des_sound.currentTime = 0;
    });


    
    // As7

    var as7_button = $("#As7");
    var as7_sound = new Audio("sounds/As7.mp3")

    as7_button.on("mousedown", function (){
        as7_sound.play();
    });

    as7_button.on("mouseup", function (){
        as7_sound.pause();
        as7_sound.currentTime = 0;
    });

    as7_button.on("touchstart", function (){
        as7_sound.play();
    });

    as7_button.on("touchend", function (){
        as7_sound.pause();
        as7_sound.currentTime = 0;
    });

    
});
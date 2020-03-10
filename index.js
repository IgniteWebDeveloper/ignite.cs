var options = {
        strings: ["Innovations","Creativity &","Trendings..."],
        stringsElement: null,
        typeSpeed: 100,
        startDelay: 1200,
        backSpeed: 100,
        backDelay: 150,
        loop: true,
        loopCount: false,
        showCursor: false,
        cursorChar: '|',
        attr: null,
        contentType: 'html',
        callback: function() {},
        preStringTyped: function() {},
        onStringTyped: function() {},
        resetCallback: function() {}
    }

    var typed = new Typed('#change', options);

    
    
    
    
    
    
    
    
    
    
    
    var t4= new TimelineMax();
    t4.fromTo('#nav', 1.5 ,{
        top:'-100%'
    }, {
        top:0,
        ease: Expo.easeInOut    
    })
    // var t4= new TimelineMax();
    t4.fromTo('#headings1 h2', 1.5 ,{
        top:'-100%'
    }, {
        top:0,
        ease: Expo.easeInOut    
    })
    t4.fromTo('#headings2', 2 ,{
        top:'-100%'
    }, {
        top:'30%',
        ease: Expo.easeInOut    
    })
    t4.fromTo('#headings2 h2', 1 ,{
        opacity:0
    }, {
        opacity:'1',
        ease: Expo.easeInOut    
    })
    t4.fromTo('#headings2 h1', 1 ,{
        opacity:0
    }, {
        opacity:'1',
        ease: Expo.easeInOut    
    })
    t4.fromTo('#email', 1 ,{
        opacity:0
    }, {
        opacity:'1',
        ease: Expo.easeInOut    
    })
    t4.fromTo('#headings2 a', 1 ,{
        opacity:0,
        scale:'1.1'
    }, {
        opacity:'1',
        scale:'1',
        ease: Expo.easeInOut    
    })
    // t4.fromTo('#lining', 1,{
    //     loop:'true',
    //     loopCount:'false',
    //     top:'-100%',
    //     opacity:0
    // }, {
    //     top:0,
    //     opacity:'1',
    //     ease: Expo.easeInOut    
    // })


    var t4= new TimelineMax();
    t4.
    fromTo('#portfolio', 1 ,{
        right:'-100%'
    }, {
        right:0,
        ease: Expo.easeInOut    
    },'+3')
   
   
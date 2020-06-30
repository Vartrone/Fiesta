 /* function lev() {
    var menu = document.getElementById('menu');
    var btn = document.getElementById("menu_btn");
    var list = document.getElementsByTagName('nav');
    var pad = document.getElementsByClassName("pad");
    var btns = document.getElementsByClassName("btn");
    var cross = document.getElementsByClassName("cross");


    function test() {
      if (menu.style.display === 'none') {
        menu.style.display = 'flex';
        // list.style.height ='100vh';
       // btns.style.display = 'none';
       // cross.style.display = 'block';

      } else {
        menu.style.display = 'none';
        //btns.style.display = 'block';
        //cross.style.display = 'none'


        // list.style.height= '6vh';
        console.log('console.logdone 2')


      };
    }

    btn.addEventListener('click', test);

    console.log('done all')

  };

  lev();*/
      var menu = document.getElementById('menu');
      var btn = document.getElementById("menu_btn");
      var list = document.getElementsByTagName('nav');
      var pad = document.getElementsByClassName("pad");
      var btns = document.getElementsByClassName("btn");
      var cross = document.getElementById("cross1");
  btn.addEventListener('click',function() {
    if (menu.style.display === 'none') {
      menu.style.display = 'flex';
      // list.style.height ='100vh';
      
     
  
    } else {
      menu.style.display = 'none'
    }
    if(btn.style.display = 'none'){
      btn.style.display = 'block';
    }else{
      btn.style.display = 'none';
    }
    if( cross.style.display = 'block'){
       cross.style.display = 'none';
    }else{
       cross.style.display = 'none';
    }
  
  
      // list.style.height= '6vh';
      console.log('console.logdone 2')
  
  
    ;
  })
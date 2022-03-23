function goRight (boucan) {
    document.getElementById(boucan).scrollLeft += 304;
  };
  function goLeft (boucan) {
    document.getElementById(boucan).scrollLeft -= 304;
  };
  window.onload = function () {

    var Anime = document.getElementById("Anime");
    var MyList = document.getElementById("My List");
    var ActionAdventures = document.getElementById("Action & Adventures");
    var Comedies = document.getElementById("TV Comedies");
    var Japan = document.getElementById("Japanese Animation");
    var MyListdata = ['Valkyrie.jpg', 'My List Rohan Kishibe.jpg', 'My List Jojo.jpg', 'My List Shaman King.jpg', 'Baki.jpg','Jujutsu kaisen.jpg'];
    var Animedata = ['Ajin.jpg', 'Eden Zero.jpg', 'Fate Lost.jpg', 'Sky High survival.jpg', 'Z The Beginning.jpg',  'Bleach.jpg'];
    var ActionAdventuresdata = ['Black Lightning.jpg', 'Jurassic World.jpg', 'Stranger Things.jpg', 'Vikings Valhalla.jpg', 'Squid Game.jpg', 'Demon slayer film.jpg'];
    var Comediesdata = ['How to sell drugs online (1).jpg', 'Rick and Morty.jpg', 'Scissor Seven.jpg', 'The Office.jpeg', 'The Ranch.jpg', 'Owari no seraph.jpg'];
    var Japandata = ['Apocrypha.jpg', 'Saint Seiya.jpg', 'Saiki Kusuo.jpg', 'Devilman Crybaby.jpg', 'Jojos Bizarre Adventure.jpg', 'film jujutsu kaisen.jpeg'];
    let i = 0;
  
    // My List
  
    var arr = [];
    while (arr.length < MyListdata.length) {
      var r = Math.floor(Math.random() * MyListdata.length);
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    i = 0;
  
    while (i < MyListdata.length) {
      MyList.innerHTML += ('afterend', '<div><div class="w-80"><a href="#"><img src="./assets/img/Anime/' + MyListdata[arr[i]] + '" class="rounded"></a></div></div>')
      i++;
    }
  
    // watch it
  
    var arr = [];
    while (arr.length < MyListdata.length) {
      var r = Math.floor(Math.random() * MyListdata.length);
      if (arr.indexOf(r) === -1) arr.push(r);
    }
  
    i = 0;
    while (i < Animedata.length) {
      Anime.innerHTML += ('afterend', '<div><div class="w-80"><a href="#"><img src="./assets/img/My List/' + Animedata[arr[i]] + '" class="rounded"></a></div></div>')
      i++;
    }
  
    // Action & Adventures
    
     arr = [];
    while (arr.length < ActionAdventuresdata.length) {
      var r = Math.floor(Math.random() * ActionAdventuresdata.length);
      if (arr.indexOf(r) === -1) arr.push(r);
    }
  
    i = 0;
  
    
    while (i < ActionAdventuresdata.length) {
      ActionAdventures.innerHTML += ('afterend', '<div><div class="w-80"><a href="#"><img src="./assets/img/Action & Adventures/' + ActionAdventuresdata[arr[i]] + '" class="rounded"></a></div></div>')
      i++;
    }
  
    // Comedies
  
    arr = [];
    while (arr.length < Comediesdata.length) {
      var r = Math.floor(Math.random() * Comediesdata.length);
      if (arr.indexOf(r) === -1) arr.push(r);
    }
  
    i = 0;
  
    
    while (i < Comediesdata.length) {
      Comedies.innerHTML += ('afterend', '<div><div class="w-80"><a href="#"><img src="./assets/img/Tv Comedies/' + Comediesdata[arr[i]] + '" class="rounded"></a></div></div>')
      i++;
    }
  
      // japan
  
      arr = [];
      while (arr.length < Japandata.length) {
        var r = Math.floor(Math.random() * Japandata.length);
        if (arr.indexOf(r) === -1) arr.push(r);
      }
    
      i = 0;
    
      
      while (i < Japandata.length) {
        Japan.innerHTML += ('afterend', '<div><div class="w-80"><a href="#"><img src="./assets/img/Japanese/' + Japandata[arr[i]] + '" class="rounded"></a></div></div>')
        i++;
      }
      $(function () {
        $(window).on("scroll", function () {
          if ($(window).scrollTop() > 120) {
            $("#bar").css("backgroundColor", "black");
          } else if ($(window).scrollTop() > 20){
            $("#bar").css("backgroundColor", "#181818");
          }
          else {
            $("#bar").css("backgroundColor", "transparent");
          }
        });
      });
  
  }
  
  //smooth gradient
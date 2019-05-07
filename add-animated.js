var form=document.querySelector("#form");
$("#poster1 img").attr('src',"");
$("#poster1 strong").textContent="";
$("#poster2 img").attr('src',"");
$("#poster2 strong").textContent="";
$("#poster3 img").attr('src',"");
$("#poster3 strong").textContent="";


form.addEventListener('submit' , (e) =>{
    e.preventDefault();
    if(form.id.value==""){
        alert("please enter row id");
    }
    else{
        m0="";
        m1="";
        m2="";
        if($("#poster1 strong").text()!="")
            m0=$("#poster1 strong").text();
        if($("#poster2 strong").text()!="")
            m1=$("#poster2 strong").text();
        if($("#poster3 strong").text()!="")
            m2=$("#poster3 strong").text();
        // marr=[form.m0.value,form.m1.value,form.m2.value];
        marr=[m0,m1,m2];
        var link1=document.querySelector("#poster1 img").src;
        var link2=document.querySelector("#poster2 img").src;
        var link3=document.querySelector("#poster3 img").src;
        if(link1=="file:///C:/gg/movuet/add-animated.html")
            link1="";
        if(link2=="file:///C:/gg/movuet/add-animated.html")
            link2="";
        if(link3=="file:///C:/gg/movuet/add-animated.html")
            link3="";
        larr=[link1,link2,link3];
        db.collection('rows-animated').doc(form.id.value).set({
            id : form.id.value,
            m:marr,
            l:larr
        })
        form.m0.value=''
        form.m1.value=''
        form.m2.value=''
        form.id.value=''
        $("#poster1 img").attr('src',"");
        $("#poster1 strong").textContent="";
        $("#poster2 img").attr('src',"");
        $("#poster2 strong").textContent="";
        $("#poster3 img").attr('src',"");
        $("#poster3 strong").textContent="";

    }

})


// $('#term1').focus(function(){
//       var full = $("#poster1").has("img").length ? true : false;
//       if(full == false){
//          $('#poster1').empty();
//       }
//    });


   var getPoster1 = function(){
        console.log("p1");
        var film = $('#term1').val();

         if(film == ''){

            $('#poster1').append('<div class="alert"><strong>Oops!</strong> Try adding something into the search field.</div>');

         } else {

            $('#poster1').html('<div class="alert"><strong>Loading...</strong></div>');

            $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=" + film + "&callback=?", function(json) {
               if (json.total_results != 0){
                console.log(json);
                     $('#poster1').html('<p>Your search found: <strong>' + json.results[0].title + '</strong></p><img src=\"http://image.tmdb.org/t/p/w500/' + json.results[0].poster_path + '\" class=\"img-responsive\" >');
                  } else {
                     $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=goonies&callback=?", function(json) {

                       console.log(json);
                        $('#poster1').html('<div class="alert"><p>We\'re afraid nothing was found for that search.</p></div><p>Perhaps you were looking for The Goonies?');
                     });
                  }
             });

          }

        return false;
   }



var getPoster2 = function(){
console.log("p2");
        var film = $('#term2').val();

         if(film == ''){

            $('#poster2').append('<div class="alert"><strong>Oops!</strong> Try adding something into the search field.</div>');

         } else {

            $('#poster2').html('<div class="alert"><strong>Loading...</strong></div>');

            $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=" + film + "&callback=?", function(json) {
               if (json != "Nothing found."){
console.log(json);
                     $('#poster2').html('<p>Your search found: <strong>' + json.results[0].title + '</strong></p><img src=\"http://image.tmdb.org/t/p/w500/' + json.results[0].poster_path + '\" class=\"img-responsive\" >');
                  } else {
                     $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=goonies&callback=?", function(json) {

                       console.log(json);
                        $('#poster2').html('<div class="alert"><p>We\'re afraid nothing was found for that search.</p></div><p>Perhaps you were looking for The Goonies?</p><img id="thePoster" src="http://image.tmdb.org/t/p/w500/' + json[0].poster_path + ' class="img-responsive" />');
                     });
                  }
             });

          }

        return false;
   }



var getPoster3 = function(){
console.log("p3");
        var film = $('#term3').val();

         if(film == ''){

            $('#poster3').append('<div class="alert"><strong>Oops!</strong> Try adding something into the search field.</div>');

         } else {

            $('#poster3').html('<div class="alert"><strong>Loading...</strong></div>');

            $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=" + film + "&callback=?", function(json) {
               if (json != "Nothing found."){
console.log(json);
                     $('#poster3').html('<p>Your search found: <strong>' + json.results[0].title + '</strong></p><img src=\"http://image.tmdb.org/t/p/w500/' + json.results[0].poster_path + '\" class=\"img-responsive\" >');
                  } else {
                     $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=goonies&callback=?", function(json) {

                       console.log(json);
                        $('#poster3').html('<div class="alert"><p>We\'re afraid nothing was found for that search.</p></div><p>Perhaps you were looking for The Goonies?</p><img id="thePoster" src="http://image.tmdb.org/t/p/w500/' + json[0].poster_path + ' class="img-responsive" />');
                     });
                  }
             });

          }

        return false;
   }

   $('#search1').click(getPoster1);
   $('#search2').click(getPoster2);
   $('#search3').click(getPoster3);

   $('#term1').keyup(function(event){
       if(event.keyCode == 13){
           getPoster1;
       }
   });

   $('#term2').keyup(function(event){
       if(event.keyCode == 13){
           getPoster2;
       }
   });
   $('#term3').keyup(function(event){
       if(event.keyCode == 13){
           getPoster3;
       }
   });

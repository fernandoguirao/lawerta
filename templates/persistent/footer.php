    <footer id="footer" class="">
      <div class="container">
        <div class="copyright" style="display:none;">
          ©Jorge Lawerta. All rights reserved
        </div>
        <div class="icons">
          <a href="">
            O
          </a>
        </div>
        <h2 class="title">
          Longbearded
        </h2>
        <span class="description-short">
          Personal project
        </span>
        <div class="description-long">
          <p>
            Aquí me gustaría poder poner cualquier cosa que quiera. Es decir un texto completamente editable; lo básico como negrita, saltos de línea, los links, el color de los links.
          </p>
          <p>
            Además de poder hacer los textos todo lo largos que quiera, aunque en este caso no creo que sean muy largos.
          </p>
          <p>
            Aquí pondría que este proyecto personal puedes comprarlo en diferentes formatos en el link.
          </p>
        </div>
      </div>
    </footer>
<!--
    <footer>
      ©Jorge Lawerta. All rights reserved
    </footer>
-->
    <!-- Footer scripts -->
    <!-- 
    %% Uncomment on live %%
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
    -->
    <script>window.jQuery || document.write('<script src="static/js/vendor/jquery-1.10.1.min.js"><\/script>')</script>
    <script src="static/js/vendor/bootstrap.js"></script>
    <script type="text/javascript">
      (function(d){
        var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT');
        p.type = 'text/javascript';
        p.setAttribute('data-pin-hover', true);
        p.async = true;
        p.src = '//assets.pinterest.com/js/pinit.js';
        f.parentNode.insertBefore(p, f);
      }(document));
    </script>
    <script src="static/js/main.js"></script>
    <script src="static/js/works-object.js"></script>
    <!--
    % Uncomment on live %
    <script>
      var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
      (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src='//www.google-analytics.com/ga.js';
      s.parentNode.insertBefore(g,s)}(document,'script'));
    </script>
    -->
    
    <!-- If smartphone open socialmedia links on apps -->
    <script>
      <?php
      
      //Detect special conditions devices
      $iPod    = stripos($_SERVER['HTTP_USER_AGENT'],"iPod");
      $iPhone  = stripos($_SERVER['HTTP_USER_AGENT'],"iPhone");
      $iPad    = stripos($_SERVER['HTTP_USER_AGENT'],"iPad");
      $Android = stripos($_SERVER['HTTP_USER_AGENT'],"Android");
      $webOS   = stripos($_SERVER['HTTP_USER_AGENT'],"webOS");
      $safari = stripos($_SERVER["HTTP_USER_AGENT"], 'Safari');
      
      if( $iPod || $iPhone || $iPad ){ ?>
      
      $(".facebook a").click(function(event) {
        event.preventDefault();
        var facebookfail = "fb://profile/113299752076531";
        
        var loadedAt = +new Date;
        setTimeout(
        function(){
          if (+new Date - loadedAt < 2000){
            window.location = facebookfail;
          }
        }
        ,100);
        
        function LaunchApp1(){
          window.open("https://www.facebook.com/pages/Lawerta/113299752076531","_blank");
        };
        LaunchApp1()
      });
      
      $(".twitter a").click(function(event) {
        event.preventDefault();
        var twitfail = "twitter:///user?screen_name=Lawerta";
        
        var loadedAt2 = +new Date;
        setTimeout(
        function(){
          if (+new Date - loadedAt2 < 2000){
            window.location = twitfail;
          }
        }
        ,100);
        
        function LaunchApp2(){
          window.open("https://twitter.com/Lawerta","_blank");
        };
        LaunchApp2()
      });
      
      $(".instagram a").click(function(event) {
        event.preventDefault();
        var instafail = "instagram://user?username=Lawerta";
        
        var loadedAt3 = +new Date;
        setTimeout(
        function(){
          if (+new Date - loadedAt3 < 2000){
            window.location = instafail;
          }
        }
        ,100);
        
        function LaunchApp3(){
          window.open("http://instagram.com/lawerta","_blank");
        };
        LaunchApp3()
      });
      
      <?php } 
      
      if (strpos($_SERVER['HTTP_USER_AGENT'], 'Safari') && !strpos($_SERVER['HTTP_USER_AGENT'], 'Chrome')) { ?>
        $('html').addClass('safari');
      <?php } ?>

    </script>
  </body>
</html>

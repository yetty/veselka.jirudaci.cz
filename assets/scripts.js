/* Hele, frajere, nejsi nějakej zvědavej? */

$(document).ready(function () {
  
  var userLang = (navigator.language || navigator.userLanguage).substr(0,2);
  
  translations = {
    'cs': {
      timetableTitle: 'Program',
      giftsTitle: 'Svatební dary',
      volunteersTitle: 'Chceš nám pomoct?',
      contactTitle: 'Kontakt'      
    },
    
    'en': {
      introTitle: 'Something Is Going On!',
      infoTitle: 'Basic info',
      timetableTitle: 'Program',
      parkingTitle: 'Parking & Transportation',
      giftsTitle: 'Wedding gifts',
      volunteersTitle: 'Would you like to help?'
    },   
    'es': {
      introTitle: 'Jajajaja'
    },
  }
  
  
  kCs = Object.keys(translations['cs']);
  kEn = Object.keys(translations['en']);
  kEs = Object.keys(translations['es']);
  
  function diffTrans(orig, trans) {
    return orig.filter(x => !trans.includes(x))
              .concat(trans.filter(x => !orig.includes(x)));
  }
  
  console.log("Missing in EN:", diffTrans(kCs, kEn));
  console.log("Missing in ES:", diffTrans(kCs, kEs));
  
  currentTranslation = translations[userLang] || translations['en'];
  
  $("#template-container").loadTemplate("template.html", currentTranslation, {
    success: function () {


      
      function hashChange() {
          var hash = window.location.hash;
          var els = $("nav a[href$='"+hash+"']");
          els.addClass('active').removeClass('before').removeClass('after');
          els.prevAll().addClass('before').removeClass('active').removeClass('after');
          els.nextAll().addClass('after').removeClass('active').removeClass('before');
          $('section').removeClass('active');
          $(hash).addClass('active');
          $(".animatedPath").css('visibility', 'hidden');
       
          setTimeout(function () {
            $("section.active .animatedPath").css('visibility', 'visible');
            anime({
              targets: document.querySelectorAll('section.active path.animatedPath'),
              loop: false,
              direction: 'normal',
              strokeDashoffset: [anime.setDashoffset, 0],
              easing: 'easeInOutSine',
              duration: 1000,
              delay: (el, i) => { return i * 500 }
            });
          }, 1000);


      
      }
      
      hashChange();
      $(window).on('hashchange', hashChange);
      moveFigures();
      

      
      
      function moveFigures() {
        //$("section").css("padding-bottom", $(".gauc").height());

        
        var scroll = $(window).scrollTop();
        var documentHeight = $(document).height();
        var position = scroll / (documentHeight - $(window).height());
        var translateX = 340 * position;
        console.log(translateX, position);
    
        
        
        $(".juda").css("transform", `translateX(${translateX}px)`); 
        $(".jira").css("transform", `translateX(-${translateX}px)`);  
      }
      
      $(document).on('scroll', function () {
        moveFigures();

        
        
        
        var lastVisible;
        $('section .section-trigger').each(function () {
          if($(this).visible(true) == true) {
            lastVisible = $(this).parent();
          }
        });
        
        if(lastVisible) {
          var hash = '#'+lastVisible.attr('id');
          if (window.location.hash != hash) {
            history.pushState(null, null, hash);
            hashChange();
          }
        }
      });
      
      

    }
  });
  
  
  /*
  var end = new Date('06/05/2021 2:00 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.ceil((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        
        if (hours == 1) { 
          var txtHours = '1 hodinu';
        } else if (hours == 0 || hours >= 5) {
          var txtHours = hours + ' hodin';
        } else {
          var txtHours = hours + ' hodiny';
        }
        
        document.getElementById('countdown').innerHTML = 'už za ' + days + ' dní' + ' a ' + txtHours;
    }

    showRemaining();
    timer = setInterval(showRemaining, 30000);
    */
});
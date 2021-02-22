/* Hele, frajere, nejsi nějakej zvědavej? */


var allTranslations = {};


$(document).ready(function () {
  
  var userLang = (navigator.language || navigator.userLanguage).substr(0,2);
  
  translations = {  
    'cs': {},
    'cs-CZ': {},
    'sk': {},
    'sk-SK': {},  
    'en': {
      "Jířa a Juda mají veselku!": "Jířa and Juda are getting married!",
      "Už je to tak, budeme se brát. Bude se jíst, zpívat i tančit (možná i ženich bude). Zkrátka bude veselo.": "That's right! We will all be eating, singing and dancing. It will be a joyful time.",
      "A vy jste k tomu zváni!": "And you are invited!",
      "Kdy a kde?": "When and where?",
      "v sobotu 5. června od 14:00": "On Saturday 5th June at 2 pm",
      "Bělá 14, okres Semily": "in Bělá 14, Semily region",
      "To ale není všechno!": "But that's not all!",
      "Přijedete?": "Are you coming?",
      "Pokud jste si jistí, že dorazíte, dejte nám prosím vědět pomocí jednoduchého formuláře.": "Please, let us know by writing us a message if you are or are not going to join us.",
      "Prosíme, dejte nám vědět do 16. 5. 2021.": "Please, let us know by 16th May 2021",
      "(A pokud víte, že dorazit nemůžete, dejte vědět taky.)": "(And if you know you can't come, let us know as well.)",
      "Nahlásit (ne)účast": "Link to an RSVP form in CZ",
      "A teď už k tomu zajímavému!": "Now, let's talk about the interesting stuff!",
      "Mohlo by se vám hodit vědět...": "You might want to know...",
      "Co vás na svatbě čeká?": "What can I expect at the wedding?",
      "Jak je to s místem a parkováním?": "Where is it, and where can I park?",
      "Jak se na svatbu obléct?": "What do I wear?",
      "Dá se někde přespat?": "Can I stay overnight somewhere?",
      "Jak vybrat svatební dar?": "How do I choose a wedding gift?",
      "Mohu se svatbou pomoci?": "Can I help at the wedding?",
      "Zpátky na rozcestník": "Back to the menu",
      "Program": "Program",
      "14:00": "2 pm",
      "Obřad": "Wedding ceremony",
      "15:00": "3 pm",
      "Pohoštění & volná zábava<br>Veselí...<br>Veselí...<br><small>Veselí...</small>": "Food & Party<br>Fun...<br>Fun...<br><small>Fun...</small>",
      "(Konec očekáváme nejpozději v 22:00, ale vypařit se můžete i dříve.)": "(We expect to end by 10 pm, but you can leave earlier.)",
      "Místo, parkování & doprava": "Place, parking & transportation",
      "Na tom ještě pracujeme.<br> Včas vám dáme vědět, co a jak.": "We are still working on that.<br> We'll let you know more soon.",
      "Oblečení": "Dress code",
      "Svatba se bude konat venku. Oblečte se pěkně, pohodlně a podle počasí. Očekáváme krásný letní den, tak si, pánové, vezměte nějakou\n      sváteční košili*, a dámy - vy si obvykle dokážete dobře poradit. Cokoli v barvách louky nebude šlápnutí vedle.": "The wedding will take place outside. Dress nicely, comfortably and according to the weather. We expect a nice and sunny day; so, gentlemen, you can wear your Sunday shirt and, ladies, you are usually very good at this. Anything in the colours of wild flowers won't look out of place.",
      "*ale žádné džíny.": " ",
      "Ubytování & přespávání": "Accommodation & Staying overnight",
      "Mladí a stateční mohou přespat na louce.": "The young and courageous can sleep outside under the stars.",
      "Ostatním doporučujeme <a href='mailto:ubytovani@centralnovapaka.cz'>Hotel Centrál</a>.": "To the rest of you, we recommend <a href='mailto:ubytovani@centralnovapaka.cz'>Hotel Centrál</a>.",
      "V neděli dopoledne se na místě svatby bude konat slavnostní bohoslužba. Pokud budete přespávat, jste také zváni.": "There will be a special Sunday service at the wedding location on Sunday morning. If you decide to stay overnight, you are invited.",
      "Svatební dary": "Wedding gifts",
      "Prosíme, nedávejte nám žádné hmotné dary. Rozhodně ne bez předchozí domluvy. Jako svatební dar uvítáme finanční příspěvek v libovolné výši.": "Please, don't give us any material gifts, not without talking to us beforehand. If you want to support our journey together, you can bless us with a financial contribution of any amount.",
      "Svůj dar nám můžete poslat i na účet: 2901927558 / 2010": "You can send us your gift to<br><br>IBAN: CZ1620100000002901927558<br>BIC: FIOBCZPPXXX",
      "Chceš nám se svatbou pomoct?": "Do you want to help us?",
      "Určitě za to budeme rádi a vděční. Stačí jen vyplnit krátký formulář, abychom věděli, jaké jsou tvé možnosti. Po vyplnění tě co nejdříve kontaktujeme a domluvíme se.": "We will appreciate it. You just need to fill out a short form, so that we know what is your availability. Afterwards, we will try to contact you ASAP to agree on more details.",
      "Vyplnit formulář": "Fill out the form",
      "Kontakt": "Contact",
      "Ozvěte se nám. Ať už s dotazem, přáním nebo s povzbuzením. Budeme za to rádi.": "Contact us. Whether you have any questions, wishes or encouragement, we will be happy."
    },    
  }
  

  var currentTranslation = new Proxy(translations[userLang] || translations['en'], {
    get: function(target, name) {
      allTranslations[name] = target[name] || "";
      return target[name] || name;
    }
  });

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
        //console.log(translateX, position);
    
        
        
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
      
         console.log(JSON.stringify(allTranslations, null, 2)); 

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
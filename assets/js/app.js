var animationBallSVG = ' \
<svg id="YY" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 600 600"> \
  <defs> \
    <style> \
#YY{ \
  transition: .3s; \
  animation-name: rotation; \
  animation-play-state: running; \
  animation-direction: alternate-reverse; \
  animation-duration: 20s; \
  animation-timing-function: ease-all; \
  animation-iteration-count: infinite; \
} \
#upWall { \
  fill: none; \
} \
#downWall { \
  fill: none; transform: translateY(2px)\
} \
#greenBallContainer { \
  clip-path: url(#dwContainer); \
} \
#whiteBallContainer { \
  clip-path: url(#uwContainer); \
} \
#greenBall{ \
  filter: none; \
  fill: #00ff00; \
  transform: translateY(160px); \
  animation-name: pendulous; \
  animation-duration: 5s; \
  animation-timing-function: ease-all; \
  animation-iteration-count: infinite; \
} \
#whiteBall{ \
  fill: #fff; \
  transform: translateY(160px); \
  animation-name: pendulous; \
  animation-duration: 5s; \
  animation-timing-function: ease-all; \
  animation-iteration-count: infinite; \
} \
@keyframes pendulous { \
  0% {transform: translateY(180px);} \
  50% {transform: translateY(-180px);} \
  100% {transform: translateY(180px);}} \
@-webkit-keyframes pendulous { \
  0% {transform: translateY(180px);} \
  50% {transform: translateY(-180px);} \
  100% {transform: translateY(180px);}} \
@-moz-keyframes pendulous { \
  0% {transform: translateY(180px);} \
  50% {transform: translateY(-180px);} \
  100% {transform: translateY(180px);}} \
@-ms-keyframes pendulous { \
  0% {transform: translateY(180px);} \
  50% {transform: translateY(-180px);} \
  100% {transform: translateY(180px);}} \
@-o-keyframes pendulous { \
  0% {transform: translateY(180px);} \
  50% {transform: translateY(-180px);} \
  100% {transform: translateY(180px);} \
} \
\
@keyframes rotation { \
  0% {transform: rotate(0deg);} \
  50% {transform: rotate(180deg);} \
  50.00000001% {transform: rotate(-180deg);} \
  100% {transform: rotate(360deg);}} \
@-webkit-keyframes rotation { \
  0% {transform: rotate(0deg);} \
  50% {transform: rotate(180deg);} \
  50.00000001% {transform: rotate(-180deg);} \
  100% {transform: rotate(360deg);}} \
@-moz-keyframes rotation { \
  0% {transform: rotate(0deg);} \
  50% {transform: rotate(180deg);} \
  50.00000001% {transform: rotate(-180deg);} \
  100% {transform: rotate(360deg);}} \
@-ms-keyframes rotation { \
  0% {transform: rotate(0deg);} \
  50% {transform: rotate(180deg);} \
  50.00000001% {transform: rotate(-180deg);} \
  100% {transform: rotate(360deg);}} \
    </style> \
    <clipPath id="uwContainer"> \
      <path id="upWall" d="M300,316.5c-110.46,0-200-3.13-200-7v291H500v-291C500,313.37,410.46,316.5,300,316.5Z" transform="translate(0 0.5)"/> \
    </clipPath> \
    <clipPath id="dwContainer"> \
      <path id="downWall" d="M100-.5v310c0,3.87,89.54,7,200,7s200-3.13,200-7V-.5Z" transform="translate(0 0.5)"/> \
    </clipPath> \
  </defs> \
  <g id="whiteBallContainer"> \
    <circle id="whiteBall" cx="300" cy="300" r="83.73"/> \
  </g> \
  <g id="greenBallContainer"> \
    <circle id="greenBall" cx="300" cy="300" r="83.73"/> \
  </g> \
</svg>';

var sunsetSVG = ' \
<svg id="YY" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 600 600"> \
  <defs> \
    <style> \
#YY{ \
  animation-play-state: running; \
  opacity: .8; \
  transition: .3s; \
} \
#upWall { \
  fill: none; \
} \
#downWall { \
  fill: none; transform: translateY(2px)\
} \
#greenBallContainer { \
  clip-path: url(#dwContainer); \
  filter: drop-shadow(0px 0px 20px #ffefd6); \
  -webkit-filter: drop-shadow(0px 0px 20px #ffefd6); \
  -moz-filter: drop-shadow(0px 0px 20px #ffefd6); \
  ;-ms-filter: drop-shadow(0px 0px 20px #ffefd6); \
  -o-filter: drop-shadow(0px 0px 20px #ffefd6); \
} \
#whiteBallContainer { \
  clip-path: url(#uwContainer); \
  filter: drop-shadow(0px 0px 20px #ffefd6); \
  -webkit-filter: drop-shadow(0px 0px 20px #ffefd6); \
  -moz-filter: drop-shadow(0px 0px 20px #ffefd6); \
  ;-ms-filter: drop-shadow(0px 0px 20px #ffefd6); \
  -o-filter: drop-shadow(0px 0px 20px #ffefd6); \
  transform: translateX(-4px); \
} \
#greenBall{ \
  animation-play-state: running; \
  fill: #fefefe; \
  transform: translateY(0px); \
  animation-name: amanecerMoon; \
  animation-duration: 100s; \
  animation-timing-function: ease-all; \
  animation-iteration-count: infinite; \
} \
#whiteBall{ \
  animation-play-state: running; \
  fill: #fefefe; \
  filter: url(#turbulence); \
  transform: translateY(0px); \
  opacity: .9; \
  animation-name: amanecerReflect; \
  animation-duration: 100s; \
  animation-timing-function: ease-all; \
  animation-iteration-count: infinite; \
} \
@keyframes amanecerMoon { \
  0% {transform: translateY(110px);} \
  50% {transform: translateY(-80px);} \
  100% {transform: translateY(110px);}} \
    \ \ \
    @keyframes amanecerReflect { \
      0% {transform: translateY(-78px);} \
      50% {transform: translateY(112px);} \
      100% {transform: translateY(-78px);} }\
    \ \ \
@-webkit-keyframes pendulous { \
  0% {transform: translateY(180px);} \
  50% {transform: translateY(-180px);} \
  100% {transform: translateY(180px);}} \
@-moz-keyframes pendulous { \
  0% {transform: translateY(180px);} \
  50% {transform: translateY(-180px);} \
  100% {transform: translateY(180px);}} \
@-ms-keyframes pendulous { \
  0% {transform: translateY(180px);} \
  50% {transform: translateY(-180px);} \
  100% {transform: translateY(180px);}} \
@-o-keyframes pendulous { \
  0% {transform: translateY(180px);} \
  50% {transform: translateY(-180px);} \
  100% {transform: translateY(180px);} \
} \
@keyframes rotation { \
  0% {transform: rotate(0deg);} \
  50% {transform: rotate(180deg);} \
  100% {transform: rotate(360deg);}} \
@-webkit-keyframes rotation { \
  0% {transform: rotate(0deg);} \
  50% {transform: rotate(180deg);} \
  100% {transform: rotate(360deg);}} \
@-moz-keyframes rotation { \
  0% {transform: rotate(0deg);} \
  50% {transform: rotate(180deg);} \
  100% {transform: rotate(360deg);}} \
@-ms-keyframes rotation { \
  0% {transform: rotate(0deg);} \
  50% {transform: rotate(180deg);} \
  100% {transform: rotate(360deg);}} \
@-o-keyframes rotation { \
  0% {transform: rotate(0deg);} \
  50% {transform: rotate(180deg);} \
  100% {transform: rotate(360deg);}} \
    </style> \
    <clipPath id="uwContainer"> \
      <path id="upWall" d="M300,316.5c-110.46,0-200-3.13-200-7v291H500v-291C500,313.37,410.46,316.5,300,316.5Z" transform="translate(0 0.5)"/> \
    </clipPath> \
    <clipPath id="dwContainer"> \
      <path id="downWall" d="M100-.5v310c0,3.87,89.54,7,200,7s200-3.13,200-7V-.5Z" transform="translate(0 0.5)"/> \
    </clipPath> \
  </defs> \
  <g id="whiteBallContainer"> \
    <circle id="whiteBall" cx="300" cy="300" r="83.73"/> \
  </g> \
  <g id="greenBallContainer"> \
    <circle id="greenBall" cx="300" cy="300" r="83.73"/> \
  </g> \
  \
  <filter id="turbulence" x="0" y="0" width="200%" height="200%"> \
        <feTurbulence id="sea-filter" numOctaves="3" seed="2" baseFrequency="0.02 0.05"></feTurbulence> \
        <feDisplacementMap scale="30" in="SourceGraphic"></feDisplacementMap> \
        <animate xlink:href="#sea-filter" attributeName="baseFrequency" dur="100s"  \
        keyTimes="0;0.01;1" values="0.1 0.6;0.07 0.8;0.2 0.6" repeatCount="indefinite"/> \
  </filter> \
</svg>';

const scrollzone = "bravo"//ID of zone where u wanna detect scrolling, must be an ID
const rest = "300"//Sleep time after scroll was made (This will be the time to make your animation)
const zonesAmount = 2//Amount of scroll interaction permited(zone 0 is included, so if you put 3, you will get 4 zones)
var scrollElement = document.getElementById(scrollzone);//Element where detect scroll

//Zone to show
var currentzone = 0;
lang = "en"

//Elements to change
const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");
const foot = document.getElementById("foot");
const subtitle = document.getElementById("subtitle");
const moretitle = document.getElementById("moretitle");
const moretitle2 = document.getElementById("moretitle2");
const contact = document.getElementById("contact");
const investor = document.getElementById("investor");
const moreTitleContent = document.getElementById("moreTitleContent");
const firstLand = document.getElementById("firstLand");
const firstLandContent = document.getElementById("firstLandContent");
const firstLandContent2 = document.getElementById("firstLandContent2");
const bg = document.getElementById('bg');
const YY = document.getElementById('YY');
const navContainer = document.getElementById('navContainer');
const menu = document.getElementById('menu');
const menuBottom = document.getElementById('menuBottom');
const groupMenu = document.getElementById('groupMenu');
const showCloseBtn = document.getElementById('showCloseBtn');

//SVG BG Loader
function loadSVG(u){
  document.getElementById('bg').innerHTML = u;
}

//Transition facilitator
function bottomBlur(l,c,d){//l is element and c is content text
  l.style = "opacity: 0;transform: translateY(10px)";
  setTimeout(function(){ l.innerHTML = c; l.style = "opacity: 1"; }, d);
}

function steadyBlur(l,c,d){
  l.style = "opacity: 0;";
  setTimeout(function(){ l.innerHTML = c; l.style = "opacity: 1"; }, d);
}

function steadyBlurStaySame(l,d){
  l.style = "opacity: 0;";
  setTimeout(function(){ l.style = "opacity: 1"; }, d);
}

function lostInBlur(l){
  l.style = "transition: opacity .3s; opacity: 0;";
}

function appearOnBlur(l){
  l.style = "transition: opacity .3s; opacity: 1;";
}

function imgFromBottom(l){
  l.style ="top: 0%; transform: scale(1); opacity: 1;"
}

function imgToBottom(l){
  l.style ="top: 110%; transform: scale(1.2); opacity: 0;"
}

function imgToTop(l){
  l.style ="top: -110%; transform: scale(1.2); opacity: 0;"
}

//Paragraph setter
function takeLeft(l,d){
  setTimeout(function(){ l.style = "text-align: left;" }, d);
}

function takeRight(l,d){
  setTimeout(function(){ l.style = "text-align: right;" }, d);
}

function takeCenter(l,d){
  setTimeout(function(){ l.style = "text-align: center;" }, d);
}

//Color setter
function setColor(l,hx,d){
  setTimeout(function(){ l.style ="color: "+ hx +";" }, d);
}

//language trigger
function byLanguage(en,es){  
  if (lang == 'en') { 
    return en;
    
  }else if(lang == 'es'){}
    return es;
  }

//zone trigger
function zoneTrigger(){
  var zoner = eval("zone"+currentzone+"()")
  zoner
}

//Funciones por zonas
var alreadyLoadedSVG = false
var alreadyLoadedSVG2 = false

function zone0(){
  steadyBlur(foot, byLanguage('© 2023 Argen.one. All rights reserved. We do not own any trademarks or represent a legal entity.',
  '© 2023 Argen.one. Todos los derechos reservados. No poseemos ninguna marca comercial ni representamos una entidad legal.'
  ),rest);
  steadyBlur(contact, byLanguage('Contact','Contacto'),rest);
  steadyBlur(investor, byLanguage('Investors','Inversionistas'),rest);
  document.documentElement.setAttribute('data-theme', "light")
  bg.classList.remove("indexBack");
  menu.style.transform = "translateY(0px)"
  menuBottom.style.transform = "translateY(60px)"
  alreadyLoadedSVG2 = false
  if (!alreadyLoadedSVG){
    lostInBlur(bg);
    setTimeout(function(){ loadSVG(animationBallSVG); appearOnBlur(bg);}, 300);
    alreadyLoadedSVG = true;
  }
  //Take text to left
  takeLeft(firstLandContent,rest);
  takeLeft(moreTitleContent,rest)
  //Reanudar rotation Animation
  document.getElementById("YY").style='animation-play-state: running';
  //Set content
  bottomBlur(title, byLanguage('Hybrid & sustainable planet.',
  'Planeta híbrido y sustentable.'
  ),rest);
  steadyBlur(subtitle, byLanguage('A new economy, where life is the asset & growth comes naturally.',
  'Una nueva economía, donde la vida es el activo y el crecimiento llega naturalmente.'
  ),rest);
  steadyBlur(moretitle, byLanguage('Know the platform <button class="invertedBtn"></button>',
    'Conocé la plataforma <button class="invertedBtn"></button>'
  ),rest);
  steadyBlur(moretitle2, byLanguage('Watch intro <button class="invertedBtn"></button>',
    'Ver intro <button class="invertedBtn"></button>'
  ),rest);
  
  steadyBlur(paragraph, "", rest);
}

function zone1(){
  document.documentElement.setAttribute('data-theme', "light")
  //Appear BallAnimation
  menu.style.transform = "translateY(-60px)"
  menuBottom.style.transform = "translateY(0px)"
  lostInBlur(bg);
  appearOnBlur(bg);
  //Pause rotation Animation
  document.getElementById("YY").style="animation-play-state: paused";
  //Take text to left
  takeLeft(firstLandContent,rest);
  takeLeft(moreTitleContent,rest)
  //Appear from bottom
  bottomBlur(title, byLanguage('Protecting what cannot be trade, the health of the world.',
  'Protegiendo lo que no se negocia, la salud del mundo.'
  ),rest);
  steadyBlur(subtitle, byLanguage('Cause Ecology is the new economy.',
  'Porque la Ecología, es la nueva economía.'
  ),rest);
  steadyBlur(moretitle, byLanguage('Discover more about the proyect <button class="invertedBtn"></button>',
    'Descubrí más sobre el proyecto <button class="invertedBtn"></button>'
  ),rest);
  steadyBlur(moretitle2, "", rest);
  steadyBlur(paragraph, "", rest);
}

function zone2(){
  menu.style.transform = "translateY(-60px)"
  menuBottom.style.transform = "translateY(0px)"
  document.documentElement.setAttribute('data-theme', "dark")
  if (!alreadyLoadedSVG2){
  bg.classList.add("indexBack");
  //Rename & animate text
  lostInBlur(bg);
  setTimeout(function(){ loadSVG(sunsetSVG); appearOnBlur(bg);}, 300);}
  alreadyLoadedSVG2 = true;
  takeCenter(firstLandContent,rest);
  lostInBlur(subtitle);
  lostInBlur(moretitle);
  setTimeout(function(){ takeCenter(firstLandContent,rest) }, rest);
  bottomBlur(title, byLanguage("Bringing life , where trees are assets & growth comes naturally.", "Brindando vida, donde los árboles son activos y el crecimiento ocurre de forma natural."),rest);
  bottomBlur(paragraph, byLanguage(`<h3>A World in Harmony</h3>
  <p>
    Where nature and human development coexist in harmony, protecting and preserving biodiversity for future generations. Our mission is to promote circular economy and environmental conservation, empowering individuals and businesses to participate in taking care of our planet.
  </p>
  
  <h3>Our Mission</h3>
  <p>
    Environmental conservation is our clear and powerful focus: using crowd investing to acquire strategic nature reserves and protect them forever. We believe that collaboration between environmentally conscious individuals and committed businesses is key to achieving global sustainability.
  </p>
  
  <h3>Value Proposition</h3>
  <p>Sustainable Impact: Directly contribute to the conservation of natural reserves and biodiversity, creating a lasting and positive footprint on the planet.</p>
  <p>Circular Economy: Resources used responsibly and sustainably, minimizing waste and promoting reuse.</p>
  <p>Strategic Partnerships: Collaborate with environmentally responsible companies, creating synergies that benefit both nature and the profitability of our investors.</p>
  
  <h3>Benefits for Investors</h3>
  <p>Financial Returns: In addition to making a significant difference in environmental conservation, receive financial returns through dividends generated by collaborating companies.</p>
  <p>Recognition and Prestige: Being part of the project demonstrates a solid commitment to sustainability and social responsibility. Our investors are recognized as drivers of positive change.</p>
  <p>Opportunities for Active Participation: Investors can participate in strategic decisions and contribute their expertise for the growth and success of the project.</p>
  
  <p>
    Together, we can make a difference and create a sustainable future for all, protecting our planet for future generations.
  </p>
  `,
  `
  <h3>Un mundo en armonía</h3>
  <p>
    Donde la naturaleza y el desarrollo humano coexistan en armonía, protegiendo y preservando la biodiversidad para las generaciones futuras. Nuestra misión es fomentar la economía circular y la conservación ambiental, empoderando a individuos y empresas para participar en el cuidado de nuestro planeta.
  </p>
  
  <h3>Nuestra misión</h3>
  <p>
    La conservación del medio ambiente, nuestro enfoque es claro y poderoso: utilizar el crow investing para adquirir reservas naturales estratégicas y protegerlas para siempre. Creemos que la colaboración entre personas con conciencia ambiental y empresas comprometidas es clave para alcanzar la sostenibilidad global.
  </p>
  
  <h3>Propuesta de Valor</h3>
    <p>Impacto Sostenible: Contribuir directamente a la conservación de reservas naturales y al cuidado de la biodiversidad, creando una huella duradera y positiva en el planeta.</p>
    <p>Economía Circular: Recursos utilizados de manera responsable y sostenible, minimizando el desperdicio y promoviendo la reutilización.</p>
    <p>Alianzas Estratégicas: Colaborar con empresas comprometidas con la responsabilidad ambiental, creando sinergias que benefician tanto a la naturaleza como a la rentabilidad de nuestros inversores.</p>
  
  <h3>Beneficios para los Inversionistas</h3>
    <p>Rendimiento Financiero: Además de hacer una diferencia significativa en la conservación ambiental, recibir retornos financieros a través de dividendos generados por empresas colaboradoras.</p>
    <p>Reconocimiento y Prestigio: Ser parte del proyecto demuestra un compromiso sólido con la sostenibilidad y la responsabilidad social. Nuestros inversores son reconocidos como impulsores del cambio positivo.</p>
    <p>Oportunidades de Participación Activa: Los inversores pueden participar en decisiones estratégicas y aportar su experiencia para el crecimiento y éxito del proyecto.</p>
  
  <p>
    Juntos, podemos marcar la diferencia y crear un futuro sostenible para todos que protege nuestro planeta para las generaciones venideras.
  </p>
  `),rest);
  alreadyLoadedSVG = false;
}

//Init function on load
document.addEventListener("DOMContentLoaded", init);
function init() {

  //Detect language
  var a = (navigator.language || navigator.userLanguage || navigator.browserLanguage)
      if (a){
        let aTwoFirst = a.substring(0, 2);
        if (aTwoFirst == "es"){
          lang = 'es'
        } else{
          lang = 'en'
        }
        
      }

  loadSVG(sunsetSVG)//Load Background
  zone0()
  var static = true;//Boolean to keep scroll animation steady
  
  //Key listener
  document.onkeydown = checkKey;
  //Key counter & zone setter
  function checkKey(e) {
      if(!static){return};
      e = e || window.event;
      if (e.keyCode == '40') {
          // down arrow
          if(currentzone>=zonesAmount){
            currentzone=zonesAmount;
            return;
          }
          else if(currentzone>=0){
          currentzone++;
          zoneTrigger();
        }       
      }
      else if (e.keyCode == '38') {
          if(!static){return};
          // up arrow
          if(currentzone<=0){
            currentzone=0;
            return;
          }
          else if(currentzone>0){
          currentzone--;
          zoneTrigger();
        }        
      }
      static = false;
      setTimeout(function(){ static = true; }, rest);
      console.log('Changing to zone '+ currentzone + ' by key.')
      i = currentzone*100;
  }

  var rotationgAngle = 0;

  //Displayer menu on click
  var displayedMenu = false;
  showCloseBtn.addEventListener("click", showHide);
  function showHide() {
    if(displayedMenu){
      groupMenu.style.transform="translateX(5px)";
      groupMenu.style.opacity="0";
      rotateReady = rotationgAngle + 45;
      rotationgAngle = rotateReady;
      showCloseBtn.style.transform="rotate("+ rotationgAngle +"deg)";
      setTimeout(function(){ 
        groupMenu.style.display="none";
        displayedMenu = false;
      }, 300);
    }
    else{
      rotateReady = rotationgAngle + 45;
      rotationgAngle = rotateReady;
      showCloseBtn.style.transform="rotate("+ rotationgAngle +"deg)";
      groupMenu.style.display="block";
      setTimeout(function(){
        groupMenu.style.opacity="1";
        groupMenu.style.transform="translateX(0px)";
        displayedMenu = true;
      }, 10);
    }
  }

  menuBottom.addEventListener("click", takeMeUp);
  function takeMeUp() {
    zone2();
    zone1();
    setTimeout(function(){ 
      zone0();
    }, 300);
    currentzone = 0;
  }

  moretitle.addEventListener("click", more1);
  function more1() {
    zone2();
    currentzone = 2;
  }

  moretitle2.addEventListener("click", more);
  function more() {
    zone1();
    currentzone = 1;
  }
}


//Browser detector
var browser_name = '';
isIE = /*@cc_on!@*/false || !!document.documentMode;
isEdge = !isIE && !!window.StyleMedia;
if(navigator.userAgent.indexOf("Chrome") != -1 && !isEdge)
{
    browser_name = 'chrome';
}
else if(navigator.userAgent.indexOf("Safari") != -1 && !isEdge)
{
    browser_name = 'safari';
}
else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
{
    browser_name = 'firefox';
}
else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
{
    var div = document.getElementById('bg');
    div.innerHTML += '<img style="background-repeat: no-repeat;" src="assets/images/svgToGif.gif">';
    browser_name = 'ie';
}
else if(isEdge)
{
    browser_name = 'edge';
}
else 
{
    browser_name = 'other-browser';
}
/* alert(browser_name); */

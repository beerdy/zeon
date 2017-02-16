/*=================================
SMOOTH SCROLL PLUGIN
===================================*/
function ssc_init(){if(document.body){var e=document.body,s=document.documentElement,c=window.innerHeight,t=e.scrollHeight;if(ssc_root=document.compatMode.indexOf("CSS")>=0?s:e,ssc_currentElement=e,ssc_initdone=!0,top!=self)ssc_frame=!0;else if(t>c&&(e.offsetHeight<=c||s.offsetHeight<=c)&&(ssc_root.style.height="auto",ssc_root.offsetHeight<=c)){var r=document.createElement("div");r.style.clear="both",e.appendChild(r)}ssc_fixedback||(e.style.backgroundAttachment="scroll",s.style.backgroundAttachment="scroll"),ssc_keyboardsupport&&ssc_addEvent("keydown",ssc_keydown)}}function ssc_scrollArray(e,s,c,t){if(t||(t=1e3),ssc_directionCheck(s,c),ssc_que.push({x:s,y:c,lastX:0>s?.99:-.99,lastY:0>c?.99:-.99,start:+new Date}),!ssc_pending){var r=function(){for(var o=+new Date,n=0,a=0,i=0;i<ssc_que.length;i++){var l=ssc_que[i],_=o-l.start,u=_>=ssc_animtime,d=u?1:_/ssc_animtime;ssc_pulseAlgorithm&&(d=ssc_pulse(d));var f=l.x*d-l.lastX>>0,m=l.y*d-l.lastY>>0;n+=f,a+=m,l.lastX+=f,l.lastY+=m,u&&(ssc_que.splice(i,1),i--)}if(s){var h=e.scrollLeft;e.scrollLeft+=n,n&&e.scrollLeft===h&&(s=0)}if(c){var p=e.scrollTop;e.scrollTop+=a,a&&e.scrollTop===p&&(c=0)}s||c||(ssc_que=[]),ssc_que.length?setTimeout(r,t/ssc_framerate+1):ssc_pending=!1};setTimeout(r,0),ssc_pending=!0}}function ssc_wheel(e){ssc_initdone||ssc_init();var s=e.target,c=ssc_overflowingAncestor(s);if(!c||e.defaultPrevented||ssc_isNodeName(ssc_currentElement,"embed")||ssc_isNodeName(s,"embed")&&/\.pdf/i.test(s.src))return!0;var t=e.wheelDeltaX||0,r=e.wheelDeltaY||0;t||r||(r=e.wheelDelta||0),Math.abs(t)>1.2&&(t*=ssc_stepsize/120),Math.abs(r)>1.2&&(r*=ssc_stepsize/120),ssc_scrollArray(c,-t,-r),e.preventDefault()}function ssc_keydown(e){var s=e.target,c=e.ctrlKey||e.altKey||e.metaKey;if(/input|textarea|embed/i.test(s.nodeName)||s.isContentEditable||e.defaultPrevented||c)return!0;if(ssc_isNodeName(s,"button")&&e.keyCode===ssc_key.spacebar)return!0;var t,r=0,o=0,n=ssc_overflowingAncestor(ssc_currentElement),a=n.clientHeight;switch(n==document.body&&(a=window.innerHeight),e.keyCode){case ssc_key.up:o=-ssc_arrowscroll;break;case ssc_key.down:o=ssc_arrowscroll;break;case ssc_key.spacebar:t=e.shiftKey?1:-1,o=-t*a*.9;break;case ssc_key.pageup:o=.9*-a;break;case ssc_key.pagedown:o=.9*a;break;case ssc_key.home:o=-n.scrollTop;break;case ssc_key.end:var i=n.scrollHeight-n.scrollTop-a;o=i>0?i+10:0;break;case ssc_key.left:r=-ssc_arrowscroll;break;case ssc_key.right:r=ssc_arrowscroll;break;default:return!0}ssc_scrollArray(n,r,o),e.preventDefault()}function ssc_mousedown(e){ssc_currentElement=e.target}function ssc_setCache(e,s){for(var c=e.length;c--;)ssc_cache[ssc_uniqueID(e[c])]=s;return s}function ssc_overflowingAncestor(e){var s=[],c=ssc_root.scrollHeight;do{var t=ssc_cache[ssc_uniqueID(e)];if(t)return ssc_setCache(s,t);if(s.push(e),c===e.scrollHeight){if(!ssc_frame||ssc_root.clientHeight+10<c)return ssc_setCache(s,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow"),"scroll"===overflow||"auto"===overflow))return ssc_setCache(s,e)}while(e=e.parentNode)}function ssc_addEvent(e,s,c){window.addEventListener(e,s,c||!1)}function ssc_removeEvent(e,s,c){window.removeEventListener(e,s,c||!1)}function ssc_isNodeName(e,s){return e.nodeName.toLowerCase()===s.toLowerCase()}function ssc_directionCheck(e,s){e=e>0?1:-1,s=s>0?1:-1,(ssc_direction.x!==e||ssc_direction.y!==s)&&(ssc_direction.x=e,ssc_direction.y=s,ssc_que=[])}function ssc_pulse_(e){var s,c,t;return e*=ssc_pulseScale,1>e?s=e-(1-Math.exp(-e)):(c=Math.exp(-1),e-=1,t=1-Math.exp(-e),s=c+t*(1-c)),s*ssc_pulseNormalize}function ssc_pulse(e){return e>=1?1:0>=e?0:(1==ssc_pulseNormalize&&(ssc_pulseNormalize/=ssc_pulse_(1)),ssc_pulse_(e))}var ssc_framerate=150,ssc_animtime=500,ssc_stepsize=150,ssc_pulseAlgorithm=!0,ssc_pulseScale=6,ssc_pulseNormalize=1,ssc_keyboardsupport=!0,ssc_arrowscroll=50,ssc_frame=!1,ssc_direction={x:0,y:0},ssc_initdone=!1,ssc_fixedback=!0,ssc_root=document.documentElement,ssc_currentElement,ssc_key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},ssc_que=[],ssc_pending=!1,ssc_cache={};setInterval(function(){ssc_cache={}},1e4);var ssc_uniqueID=function(){var e=0;return function(s){return s.ssc_uniqueID||(s.ssc_uniqueID=e++)}}(),ischrome=/chrome/.test(navigator.userAgent.toLowerCase());ischrome&&(ssc_addEvent("mousedown",ssc_mousedown),ssc_addEvent("mousewheel",ssc_wheel),ssc_addEvent("load",ssc_init));

jQuery(document).ready(function($){ 
  
/*=================================
ANCHORS
===================================*/
jQuery(document).ready(function(){
  jQuery('.navbar-nav a[href*="#"]:not([href="#"])').bind('click',function () {
    var headerHeight;
    var hash    = this.hash;
    var idName  = hash.substring(1);    // get id name
    var alink   = this;                 // this button pressed
    // check if there is a section that had same id as the button pressed
    if ( jQuery('section [id*=' + idName + ']').length > 0 && jQuery(window).width() >= 751 ){
      jQuery('.current').removeClass('current');
      jQuery(alink).parent('li').addClass('current');
    }else{
      jQuery('.current').removeClass('current');
    }
    if ( jQuery(window).width() >= 751 ) {
      headerHeight = jQuery('.navbar-fixed-top').height();
    } else {
      headerHeight = 0;
    }
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = jQuery(this.hash);
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        jQuery('html,body').animate({
          scrollTop: target.offset().top - headerHeight + 30
        }, 1200);
        return false;
      }
    }
  });
});

jQuery(document).ready(function(){
    var headerHeight;
    jQuery('.current').removeClass('current');
    jQuery('.navbar-nav a[href$="' + window.location.hash + '"]').parent('li').addClass('current');
    if ( jQuery(window).width() >= 751 ) {
      headerHeight = jQuery('.navbar-fixed-top').height();
    } else {
      headerHeight = 0;
    }
    if (location.pathname.replace(/^\//,'') == window.location.pathname.replace(/^\//,'') && location.hostname == window.location.hostname) {
      var target = jQuery(window.location.hash);
      if (target.length) {
        jQuery('html,body').animate({
          scrollTop: target.offset().top - headerHeight + 30
        }, 1200);
        return false;
      }
    }
});

/* TOP NAVIGATION MENU SELECTED ITEMS */

function scrolled() {
    jQuery(this).off('scroll')[0].setTimeout(function(){

      if ( jQuery(window).width() >= 751 ) {
          var yola_scrollTop = jQuery(window).scrollTop();       // cursor position
          var headerHeight = jQuery('.navbar-nav').outerHeight();   // header height
          var isInOneSection = 'no';                              // used for checking if the cursor is in one section or not
          // for all sections check if the cursor is inside a section
          jQuery("section").each( function() {
            var thisID = '#' + jQuery(this).attr('id');           // section id
            var yola_offset = jQuery(this).offset().top;         // distance between top and our section
            var thisHeight  = jQuery(this).outerHeight();         // section height
            var thisBegin   = yola_offset - headerHeight;                      // where the section begins
            var thisEnd     = yola_offset + thisHeight - headerHeight;         // where the section ends  
            // if position of the cursor is inside of the this section
            if ( yola_scrollTop >= thisBegin && yola_scrollTop <= thisEnd ) {
              isInOneSection = 'yes';
              jQuery('.current').removeClass('current');
              jQuery('.navbar-nav a[href$="' + thisID + '"]').parent('li').addClass('current');    // find the menu button with the same ID section
              return false;
            }
            if (isInOneSection == 'no') {
              jQuery('.current').removeClass('current');
            }
          });
      }
 
      jQuery(this).on('scroll',scrolled);
    }, 500)
}
jQuery(window).on('scroll',scrolled);

});
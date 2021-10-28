// Import stylesheets
import './style.scss';
import $ from "jquery";


$(document).ready(function(){
  $(".circularProgress").each(function(index,progress){
    var percentage = parseInt($(progress).attr("data-progress"));
    $(progress).css({
      "background-image":"conic-gradient(var(--progressBarColor)"+ percentage +"deg,rgba(0,0,0,0.1) "+percentage+"deg)",
    })
  });
});
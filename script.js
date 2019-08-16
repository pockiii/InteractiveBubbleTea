$(function() {
  $("body").click(function(e) {
    if (e.target.id == "small") {
      document.getElementById("cup").style.height = '12rem';
      document.getElementById("bot").style.margin = '5rem 0 0 0';
      document.getElementById("container").style.margin = '18.7rem 0 0 0';
    } else if (e.target.id == "medium")  {
      document.getElementById("cup").style.height = '14rem';
      document.getElementById("bot").style.margin = '7rem 0 0 0';
      document.getElementById("container").style.margin = '16.7rem 0 0 0';
    }
  });
})
$(function() {
  $("body").click(function(e) {
    document.documentElement.style.setProperty('--tapioca', '#1f1f1f');
    if (e.target.id == "milk tea") {
      document.documentElement.style.setProperty('--tea', '#f0c98d');
      document.documentElement.style.setProperty('--tea-gradient', '#f0c98d');
    } else if (e.target.id == "matcha")  {
      document.documentElement.style.setProperty('--tea', 'rgb(184,225,152)');
      document.documentElement.style.setProperty('--tea-gradient', 'linear-gradient(180deg, rgba(184,225,152,1) 54%, rgba(134,169,83,1) 80%)');
    } else if (e.target.id == "taro")  {
      document.documentElement.style.setProperty('--tea', ' rgb(250,223,255)');
      document.documentElement.style.setProperty('--tea-gradient', 'linear-gradient(180deg, rgba(250,223,255,1) 30%, rgba(255,122,254,1) 100%)');
    } else if (e.target.id == "brown sugar")  {
      document.documentElement.style.setProperty('--tea', 'rgba(246,235,222,1)');
      document.documentElement.style.setProperty('--tea-gradient', 'linear-gradient(0deg, rgba(209,158,79,1) 0%, rgba(246,235,222,1) 60%)');
    }
  });
})

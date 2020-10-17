export const scrollAnimate = (px) => {
  
  // schedule call button show on scroll logic
  document.body.onscroll = () => {
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? (document.getElementById("CTA").style.display = "block")
      : (document.getElementById("CTA").style.display = "none");
       document.documentElement.scrollTop > window.innerHeight * 1.1 * 7 && document.documentElement.scrollTop < window.innerHeight * 11
      ? (document.getElementById("popular-apps").style.visibility = "visible")
      : (document.getElementById("popular-apps").style.visibility = "hidden");
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      document.getElementById("left-img").style.display = "inline";
      document.getElementById("right-img").style.display = "inline";
    } else {
      document.getElementById("left-img").style.display = "none";
      document.getElementById("right-img").style.display = "none";
    }
    if (
      document.body.scrollTop > window.innerHeight  ||
      document.documentElement.scrollTop > window.innerHeight 
    ) {
      document.getElementById("circle1").style.display = "none";
      document.getElementById("tick1").style.display = "inline";
    } else {
      document.getElementById("circle1").style.display = "inline";
      document.getElementById("tick1").style.display = "none";
    }
    if (
      document.body.scrollTop > window.innerHeight + 70 ||
      document.documentElement.scrollTop > window.innerHeight + 70
    ) {
      document.getElementById("circle2").style.display = "none";
      document.getElementById("tick2").style.display = "inline";
    } else {
      document.getElementById("circle2").style.display = "inline";
      document.getElementById("tick2").style.display = "none";
    }
    if (
      document.body.scrollTop > window.innerHeight + 140 ||
      document.documentElement.scrollTop > window.innerHeight + 140
    ) {
      document.getElementById("circle3").style.display = "none";
      document.getElementById("tick3").style.display = "inline";
    } else {
      document.getElementById("circle3").style.display = "inline";
      document.getElementById("tick3").style.display = "none";
    }
    if (
      document.body.scrollTop > window.innerHeight + 210 ||
      document.documentElement.scrollTop > window.innerHeight + 210
    ) {
      document.getElementById("circle4").style.display = "none";
      document.getElementById("tick4").style.display = "inline";
    } else {
      document.getElementById("circle4").style.display = "inline";
      document.getElementById("tick4").style.display = "none";
    }
   
    if (
      // document.body.scrollTop > window.innerHeight*5 ||
      document.documentElement.scrollTop > (window.innerHeight*2)-120 &&
      document.documentElement.scrollTop < (window.innerHeight*7)+120
          ) {
      document.getElementById("stepsFixed").style.visibility = "visible";
      document.getElementById("section_1Fixed").style.visibility = "visible";

    }
    else{
      document.getElementById("stepsFixed").style.visibility = "hidden";
      document.getElementById("section_1Fixed").style.visibility = "hidden"

    }
    
    
  };
};

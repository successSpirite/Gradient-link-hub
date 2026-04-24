const section = document.querySelector('.section');
const toggleSwitch = document.querySelectorAll('.cl-toggle-switch');




document.addEventListener('DOMContentLoaded', ()=>{
const saveThem = localStorage.getItem("sectionTheme");

if (saveThem === 'dark') { 
  section.classList.add('dark-mode');

  //chechecking all the toggle if the darkmode is on 

  toggleSwitch.forEach(tog => tog.checked = true);
} else {
    section.classList.remove('dark-mode');
  toggleSwitch.forEach(tog => tog.checked = false);
}


  
});


toggleSwitch.forEach(tog => {
  tog.addEventListener('change', ()=>{

    console.log("hi");
  section.classList.toggle('dark-mode');

  //save to local storage after toggling 

  if (section.classList.contains("dark-mode")) {
    localStorage.setItem("sectionTheme", "dark");
    
  }
   else {
    localStorage.setItem("sectionTheme", "light");
  }


  });
});



//scrollReveal
ScrollReveal({ 
    reset: false,      
    distance: '35px',   // short + subtle for mobile
    duration: 650,     
    easing: 'ease-out',
    mobile: true,
    viewFactor: 0.2    
  });

  //  Hero image 
  ScrollReveal().reveal('.photo , .social_icons', { 
    delay: 100, 
    origin: 'top',
    distance: '20px',
    scale: 0.98
  });

  //  "The Mrdanikings" text block
  ScrollReveal().reveal('.writings', { 
    delay: 250, 
    origin: 'bottom'
  });

  //  All 7 service boxes 
  
  ScrollReveal().reveal('.box1-container, .box2-container', { 
    delay: 400,       // wait until header is done
    interval: 100,    // 100ms between each box = smooth wave
    origin: 'bottom',
    scale: 0.95     // tiny zoom-in makes it pop
  });
  

  // Footer 
  ScrollReveal().reveal('.media', { 
    delay: 1200,      // comes in last
    origin: 'bottom',
    distance: '50px'
  });

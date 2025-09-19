let darkMode = true;
let hamMenuShowing = false;


function hamburgerToggle() {
  console.log("Hi from hamburgerToggle");

  const navListElement = document.querySelector(".navListHeader");
  console.log(navListElement);

  if(!hamMenuShowing) 
  {
    navListElement.classList.add("show");
    navListElement.classList.remove("hidden");
    console.log("showing ham menu");

  }
  else
  {
    navListElement.classList.add("hidden");
    navListElement.classList.remove("show");
    hamMenuShowing = false;
  }


  // const navListElement = document.querySelector(".navList"); // Bevist brukt klasse for kun et element med det klassenavnet
  // console.log(navListElement);

  // Metode 1: Skrive CSS i JS som blir inline-CSS
  // navListElement.style.display = "flex";
  // navListElement.style.flexDirection = "column";

  // Metode 2: Endre aktivt klassenavn via external-CSS fil
  /*navListElement.classList.add("show");
  navListElement.classList.remove("hidden");*/
}

// Gjør funksjonen tilgjengelig i globalt scope slik at den kan brukes i inline onclick-egenskaper.
//globalThis.hamburgerToggle = hamburgerToggle;


function darkLightModeToggle() 
{
  console.log("hi from darkLight mode");
  
  const mainElement = document.querySelector(".mainClass");
  // const imgElements = document.querySelector(".imgClass");
  if(darkMode)
  {
    mainElement.classList.add("lightMode");
    // imgElements.classList.add("ligthModeImages");
    darkMode = false;
  }
  else
  {  mainElement.classList.remove("lightMode");
     darkMode = true;
   }
}
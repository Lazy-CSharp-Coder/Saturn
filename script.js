function hamburgerToggle() {
  console.log("Hi from hamburgerToggle");

  const navListElement = document.querySelector(".navList"); // Bevist brukt klasse for kun et element med det klassenavnet
  console.log(navListElement);

  // Metode 1: Skrive CSS i JS som blir inline-CSS
  navListElement.style.display = "flex";
  navListElement.style.flexDirection = "column";

  // Metode 2: Endre aktivt klassenavn via external-CSS fil
  /*navListElement.classList.add("show");
  navListElement.classList.remove("hidden");*/
}

// Gjør funksjonen tilgjengelig i globalt scope slik at den kan brukes i inline onclick-egenskaper.
//globalThis.hamburgerToggle = hamburgerToggle;
darkMode = true;

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
  // { imgElements.classList.remove("lightModeImages");
    mainElement.classList.remove("lightMode");
    darkMode = true;
  }

}
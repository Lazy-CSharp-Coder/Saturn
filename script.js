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
  if(darkMode)
  {
    mainElement.classList.add("lightMode")
    darkMode = false;
  }
  else
  {
    mainElement.classList.remove("lightMode");
    darkMode = true;
  }

}
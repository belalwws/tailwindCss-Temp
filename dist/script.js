const mobylebtn = document.querySelector("#mob-bt");
const mobylemeu = document.querySelector("#mobile-menu");
mobylebtn.addEventListener("click", () => {
  mobylemeu.classList.toggle("hidden");
});

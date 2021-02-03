const addMovieMode = document.getElementById("add-modal");
const startMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
// const backdrop = document.body.firstElementChild;
const cancelAddMovieBtn = addMovieMode.querySelector(".btn--passive");
const addMovieBtn = cancelAddMovieBtn.nextElementSibling;
const userInput = document.querySelectorAll("input");

const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModel = () => {
  addMovieMode.classList.toggle("visible");
  toggleBackdrop();
};

const backdropClickHandler = () => {
  toggleMovieModel();
};

const addMovie = () => {
  const titleValue = userInput[0].value;
  const imageURLValue = userInput[1].value;
  const raitingValue = userInput[2].value;

  if (
    titleValue.trim() === "" ||
    imageURLValue.trim() === "" ||
    raitingValue.trim() === "" ||
    +raitingValue < 1 ||
    +raitingValue > 5
  ) {
    alert("Pleas enter valid value");
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageURLValue,
    raiting: raitingValue,
  };
  movies.push(newMovie);
  console.log(movies);
};

const cancelAddMovie = () => {
  toggleMovieModel();
};

startMovieButton.addEventListener("click", toggleMovieModel);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieBtn.addEventListener("click", cancelAddMovie);
addMovieBtn.addEventListener("click", addMovie);

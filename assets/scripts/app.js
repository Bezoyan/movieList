const addMovieMode = document.getElementById("add-modal");
const startMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
// const backdrop = document.body.firstElementChild;
const cancelAddMovieBtn = addMovieMode.querySelector(".btn--passive");
const addMovieBtn = cancelAddMovieBtn.nextElementSibling;
const userInput = document.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModel = () => {
  addMovieMode.classList.toggle("visible");
  toggleBackdrop();
};

const deleteMove = () => {};

const renderMovieElement = (title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}"/>
  </div>
  <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
  </div>
  `;
  newMovieElement.addEventListener("click", deleteMove);
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const clearMovieInput = () => {
  for (const input of userInput) {
    input.value = "";
  }
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
  toggleMovieModel();
  clearMovieInput();
  renderMovieElement(newMovie.title, newMovie.image, newMovie.raiting);
  updateUI();
};

const cancelAddMovie = () => {
  toggleMovieModel();
  clearMovieInput();
};

startMovieButton.addEventListener("click", toggleMovieModel);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieBtn.addEventListener("click", cancelAddMovie);
addMovieBtn.addEventListener("click", addMovie);

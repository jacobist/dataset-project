

//top-movies array
const titles = [{
    "title": "The Shawshank Redemption",
    "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "rating": "9.3",
    "year": 1994,
    notes: []
},
{
    "title": "The Godfather",
    "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    "rating": "9.2",
    "year": 1972,
    notes: []
},
{
    "title": "The Dark Knight",
    "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "rating": "9.0",
    "year": 2008,
    notes: []
},
{
    "title": "The Godfather Part II",
    "image": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    "rating": "9.0",
    "year": 1974,
    notes: []
},
{
    "title": "12 Angry Men",
    "image": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,11,380,562_.jpg",
    "rating": "9.0",
    "year": 1957,
    notes: []
},
{
    "title": "Schindler's List",
    "image": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "rating": "9.0",
    "year": 1993,
    notes: []
},
{
    "title": "The Lord of the Rings: The Return of the King",
    "image": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "rating": "9.0",
    "year": 2003,
    notes: []
},
{
    "title": "Pulp Fiction",
    "image": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    "rating": "8.9",
    "year": 1994,
    notes: []
},
{
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "image": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "rating": "8.8",
    "year": 2001,
    notes: []
},
{
    "title": "The Good, the Bad and the Ugly",
    "image": "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "rating": "8.8",
    "year": 1966,
    notes: []
}]

// This function adds cards the page to display the data in the array
function showCards() {
 
    for (let i = 0; i < titles.length; i++) {
        createCard(titles[i], i);
        console.log(titles.title)
    }
}
function createCard(movie, i){
    let card = document.createElement('div');
    card.classList.add('card');

    let cardContainer = document.getElementById("card-container");

    let rank = document.createElement('p');
    rank.textContent = i + 1;
    rank.id = 'rank';
    card.appendChild(rank);
    
    let year = document.createElement('p');
    year.textContent = movie.year;
    year.id = 'year';
    card.appendChild(year);

    let rating = document.createElement('p');
    rating.textContent = movie.rating;
    rating.id = 'rating';
    card.appendChild(rating);

    let title = document.createElement('h2');
    title.textContent = movie.title;
    card.appendChild(title);
    title.id = 'title';

    let image = document.createElement('img');
    image.src = movie.image;
    image.alt = movie.image + " Poster";
    card.appendChild(image);

    
    let noteInput = document.createElement('input');
    noteInput.type = 'text';
    noteInput.placeholder = 'note to add';
    noteInput.id = 'input';
    card.appendChild(noteInput)
    
    let add = document.createElement('button');
    add.textContent = "add note";
    add.addEventListener('click', ()=> addNote(movie, noteInput));
    card.appendChild(add);

    // let del = document.createElement('button');
    // del.textContent = 'delete last note';
    // del.addEventListener('click', ()=> removeNote(movie));
    // card.appendChild(del);
    
    let notes = document.createElement('ul');
    notes.textContent = 'NOTES:';
    card.appendChild(notes);

    for (let j = 0; j < movie.notes.length; j++) {
        let note = document.createElement('li');
        note.textContent = movie.notes[j];
        let remove = document.createElement("button");
        remove.textContent = 'Delete';
        remove.addEventListener('click', () => removeNote(movie, j));
        note.appendChild(remove);

        notes.appendChild(note);
    }

    cardContainer.appendChild(card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert('I didnt "jazz" this up as much as I wanted to originally because it was taking longer than I\'d like but it was going to be a theater theme with movie poster displays as cards.');
}

function removeNote(movie, index){
    let cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML= ""
    movie.notes.splice(index, 1);
    showCards();
}

function addNote(movie, input) {
    let cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = "";

    let note = input.value;
    movie.notes.push(note);

    showCards();
}
'use strict';

let numberOfMovies;

function start() {
    numberOfMovies = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfMovies == '' || numberOfMovies == null || isNaN(numberOfMovies)) {
        alert('Введите число');
        numberOfMovies = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function detectPersonalLevel() {
    if (personalMovieDB.count) {
        if ( personalMovieDB.count >= 1 && personalMovieDB.count < 10 )
            alert('Просмотрено довольно мало фильмов');
        if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30)
            alert('Вы классический зритель');
        if ( personalMovieDB.count >= 30)
            alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

function rememberMyMovies() {
let a, b, i = 0;
do { a = prompt("Один из последних просмотренных фильмов?", "");
    b = prompt("На сколько оцените его?", "");
    
    if ( a === null || b === null || a.length == 0 || b.length == 0 || 
        a.length >= 50 || b.length >= 50 || a == '' ||  b == '') {
            alert('Введенное значение не может быть пустым или более 50 символов');
        }
    else {
        personalMovieDB.movies[a] = b;
        i++;
    }
} while (i < 2);
}

rememberMyMovies();

function writeYourGenres() {
    let i = 0;
    do {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${(i+1)}`, '');
        i++;
    }
    while (i < 3);
}

writeYourGenres();

function showMyDB() {
    if ( personalMovieDB.privat == false ) {
        console.log(personalMovieDB);    
    }
}

showMyDB();
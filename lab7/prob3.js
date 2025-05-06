"use strict";

class Exercise3 {
    #movies = new Map();

    add_genre(genre) {
        if (!this.#movies.has(genre)) {
            this.#movies.set(genre, []);
            return true;
        }
        return false;
    }

    add_movie_in_genre(genre, new_movie) {
        if (!this.#movies.has(genre)) return false;
        let movies = this.#movies.get(genre);
        if (movies.some(m => m.id == new_movie.id)) return false;
        movies.push(new_movie);
        return true;
    }

    update_movie_title_by_genre_and_movie_id(genre, movie_id, new_title) {
        let movies = this.#movies.get(genre);
        if (!movies) return false;
        let movie = movies.find(m => m.id == movie_id);
        if (!movie) return false;
        movie.title = new_title;
        return true;
    }

    delete_movie_by_genre_and_movie_id(genre, movie_id) {
        let movies = this.#movies.get(genre);
        if (!movies) return false;
        let index = movies.findIndex(m => m.id == movie_id);
        if (index == -1) return false;
        movies.splice(index, 1);
        return true;
    }

    get_movie_title_by_id(genre, movie_id) {
        let movies = this.#movies.get(genre);
        if (!movies) return '';
        let movie = movies.find(m => m.id == movie_id);
        return movie ? movie.title : '';
    }
}

let manager = new Exercise3();
console.log(manager.add_genre('action')); 
console.log(manager.add_genre('action'));

console.log(manager.add_movie_in_genre('action', { id: '1', title: 'Terminator 1' })); // true
console.log(manager.add_movie_in_genre('action', { id: '2', title: 'Terminator 2' })); // true
console.log(manager.add_movie_in_genre('action', { id: '1', title: 'Terminator 1' })); // false

console.log(manager.update_movie_title_by_genre_and_movie_id('action', '1', 'Terminator 3')); // true
console.log(manager.get_movie_title_by_id('action', '1')); // Terminator 3

console.log(manager.delete_movie_by_genre_and_movie_id('action', '2')); // true
console.log(manager.get_movie_title_by_id('action', '2')); // ''

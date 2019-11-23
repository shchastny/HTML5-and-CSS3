const categories = ["Комедии", "Мелодрамы", "Ужасы", "Фантастика","Триллер"];
//const commentsArr = ["Огонь!", "Супер", "Мне не зашел", "Очень крутой!", "Один раз посомтреть стоит", "Детский фильм"];
const films = [];

class Comment {
    constructor(text, author, stars) {
        this.text = text;
        this.author = author;
        this.stars = stars;
    }
}

class Film {
    constructor(name, cat) {
        this.name = name;
        this.category = categories [cat];
        this.budget = 0;
        this.expertStars = 3;
        this.comments = [];
    }
    addComment(text, author, stars) {
        this.comments.push(new Comment(text, author, stars));
    }
    getAverageStars() {
        let sumStars = 0;
        this.comments.forEach(comment => sumStars += comment.stars);
        return (this.comments.length > 0) ? sumStars / this.comments.length : 0;
    }
}

films.push(new Film('Бриллиантовая рука', 0));
films.push(new Film('Джентльмены удачи', 0));
films.push(new Film('Мальчишник в Вегасе', 0));
films.push(new Film('Форрест Гамп', 1));
films.push(new Film('Титаник', 1));
films.push(new Film('Великий Гэтсби', 1));
films.push(new Film('От заката до рассвета', 2));
films.push(new Film('ОНО', 2));
films.push(new Film('Обитель зла', 2));
films.push(new Film('Начало', 3));
films.push(new Film('Интерстеллар', 3));
films.push(new Film('Аватар', 3));
films.push(new Film('Остров проклятых', 4));
films.push(new Film('Эффект бабочки', 4));
films.push(new Film('Молчание ягнят', 4));

films[0].addComment("огонь", "Вася", 4);
films[0].addComment("такое себе", "Петя", 3);
films[0].addComment("класс", "Вася", 5);
films[0].addComment("лайк", "Петя", 1);

function getFilmsByCategory(cat) {
    const newFilms = [];
    for (let film of films) {
        if (film.category === cat) {
            newFilms.push(film);
        }
    }
    return newFilms;
}


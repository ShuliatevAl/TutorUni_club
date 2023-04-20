class Person {

    constructor(name, surname, sex, age) {
        this.name = name;
        this.surname = surname;
        this.sex = sex;
        this.age = age;
    }

    constructor(subject, experience, price, places) {
        this.subject = subject;
        this.experience = experience;
        this.price = price;
        this.places = places;
    }

    constructor(telegram_link, instagram_link, vk_link, twitter_link) {
        this.telegram_link = telegram_link;
        this.instagram_link = instagram_link;
        this.vk_link = vk_link;
        this.twitter_link = twitter_link;
    }

    name;
    surname;
    sex;
    age;

    subject;
    experience;
    price;
    places;

    telegram_link;
    instagram_link;
    vk_link;
    twitter_link;

    foto;
    description;
}

function createPerson() {

}

let Rinata = new Person(
    this.name = Rinata,
    this.surname = Biktimirova,
    this.sex = female,
    this.age = 23,

    this.subject = chemistry,
    this.experience = 5,
    this.price = 3000,
    this.places = 2,

    this.telegram_link = empty,
    this.instagram_link = empty,
    this.vk_link = empty,
    this.twitter_link = empty,

    this.foto = '../img/Rinata1.webp',
    this.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
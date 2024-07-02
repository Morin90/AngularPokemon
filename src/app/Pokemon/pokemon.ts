export class Pokemon {
    id: number;
    name: string;
    hp: number;
    cp: number;
    picture: string;
    types: Array<string>;
    created: Date;

    constructor(
        name: string = 'Entrer un nom...',
        hp: number = 100,
        cp: number = 10,
        picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
        types: string[] = ['Normal'],
        created: Date = new Date()
    ) {
        this.name = name;
        this.hp = hp;
        this.cp = cp;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
}
/* Commandes pour initialiser H2 avec les données
INSERT INTO POKEMON (ID, NAME, HP, CP, PICTURE, CREATED) VALUES
(1, 'Bulbizarre', 25, 5, 'https://img.over-blog-kiwi.com/2/44/93/52/20170714/ob_39baf9_cdypyksw8aemuns.png', CURRENT_TIMESTAMP),
(2, 'Salamèche', 28, 6, 'https://img.over-blog-kiwi.com/2/44/93/52/20170715/ob_c71d01_250px-salameche-rfvf.png', CURRENT_TIMESTAMP),
(3, 'Carapuce', 21, 4, 'https://img.over-blog-kiwi.com/2/44/93/52/20170717/ob_5b3005_7.png', CURRENT_TIMESTAMP),
(4, 'Aspicot', 16, 2, 'https://img.over-blog-kiwi.com/2/44/93/52/20170718/ob_6c88fd_13.png', CURRENT_TIMESTAMP),
(5, 'Roucool', 30, 7, 'https://img.over-blog-kiwi.com/2/44/93/52/20170720/ob_40f8fd_16.png', CURRENT_TIMESTAMP),
(6, 'Rattata', 18, 6, 'https://img.over-blog-kiwi.com/2/44/93/52/20170720/ob_9cc03b_19a.png', CURRENT_TIMESTAMP),
(7, 'Piafabec', 14, 5, 'https://img.over-blog-kiwi.com/2/44/93/52/20170721/ob_c35417_21.png', CURRENT_TIMESTAMP),
(8, 'Abo', 16, 4, 'https://img.over-blog-kiwi.com/2/44/93/52/20170722/ob_714e86_23.png', CURRENT_TIMESTAMP),
(9, 'Pikachu', 21, 7, 'https://img.over-blog-kiwi.com/2/44/93/52/20170724/ob_e77bd6_25.png', CURRENT_TIMESTAMP),
(10, 'Sabelette', 19, 3, 'https://img.over-blog-kiwi.com/2/44/93/52/20170724/ob_07f15a_27a.png', CURRENT_TIMESTAMP),
(11, 'Mélofée', 25, 5, 'https://img.over-blog-kiwi.com/2/44/93/52/20170726/ob_373d58_35.png', CURRENT_TIMESTAMP),
(12, 'Goupix', 17, 8, 'https://img.over-blog-kiwi.com/2/44/93/52/20170726/ob_2f5bc0_37a.png', CURRENT_TIMESTAMP);
INSERT INTO POKEMON_TYPES (POKEMON_ID, TYPE) VALUES
(1, 'Plante'),
(2, 'Feu'),   
(3, 'Eau'),    
(4, 'Insecte'),
(5, 'Vol'),   
(6, 'Normal'), 
(7, 'Vol'),  
(8, 'Poison'),
(9, 'Electrique'),
(10, 'Sol'), 
(11, 'Fée'), 
(12, 'Feu');  */
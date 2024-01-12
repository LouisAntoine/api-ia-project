import { Recipe } from "../interfaces/recipe.enum";

const recipes: Recipe[] = [
  {
    id: 1,
    title: 'Pâtes à la carbonara',
    ingredients: ['pâtes', 'œufs', 'guanciale', 'parmesan', 'poivre'],
    steps: [
      'Faire cuire les pâtes dans une casserole d\'eau bouillante salée.',
      'Pendant ce temps, faire revenir le guanciale dans une poêle.',
      'Dans un saladier, mélanger les œufs, le parmesan et le poivre.',
      'Égoutter les pâtes et les mettre dans le saladier.',
      'Ajouter le guanciale et mélanger.',
    ],
    time: 15,
    description: 'Les pâtes à la carbonara sont un grand classique de la cuisine italienne.',
    image: 'pates-carbonara.jpeg',
  },
  {
    id: 2,
    title: 'Salade César',
    ingredients: ['laitue', 'poulet grillé', 'croûtons', 'parmesan', 'sauce César'],
    steps: [
      'Laver la laitue et la mettre dans un saladier.',
      'Ajouter le poulet grillé, les croûtons et le parmesan.',
      'Ajouter la sauce César et mélanger.',
    ],
    time: 10,
    description: 'La salade César est une salade composée de la cuisine américaine.',
    image: 'salade-cesar.jpeg',
  },
  {
    id: 3,
    title: 'Tarte aux pommes',
    ingredients: ['pâte brisée', 'pommes', 'sucre', 'beurre', 'œufs', 'crème fraîche'],
    steps: [
      'Éplucher les pommes, les couper en lamelles et les mettre dans un saladier.',
      'Ajouter le sucre et mélanger.',
      'Étaler la pâte brisée dans un moule à tarte.',
      'Ajouter les pommes.',
      'Ajouter le beurre, les œufs et la crème fraîche.',
      'Enfourner pendant 30 minutes à 180°C.',
    ],
    time: 30,
    description: 'La tarte aux pommes est un grand classique de la cuisine française.',
    image: 'tarte-aux-pommes.jpeg',
  },
  {
    id: 4,
    title: 'Tarte au citron',
    ingredients: ['pâte brisée', 'citrons', 'sucre', 'beurre', 'œufs'],
    steps: [
      'Presser les citrons et mettre le jus dans un saladier.',
      'Ajouter le sucre et mélanger.',
      'Étaler la pâte brisée dans un moule à tarte.',
      'Ajouter le mélange citron-sucre.',
      'Ajouter le beurre et les œufs.',
      'Enfourner pendant 30 minutes à 180°C.',
    ],
    time: 30,
    description: 'La tarte au citron est un grand classique de la cuisine française.',
    image: 'tarte-au-citron.jpeg',
  },
  {
    id: 5,
    title: 'Tarte aux fraises',
    ingredients: ['pâte brisée', 'fraises', 'sucre', 'beurre', 'œufs', 'crème fraîche'],
    steps: [
      'Laver les fraises, les couper en lamelles et les mettre dans un saladier.',
      'Ajouter le sucre et mélanger.',
      'Étaler la pâte brisée dans un moule à tarte.',
      'Ajouter les fraises.',
      'Ajouter le beurre, les œufs et la crème fraîche.',
      'Enfourner pendant 30 minutes à 180°C.',
    ],
    time: 30,
    description: 'La tarte aux fraises est un grand classique de la cuisine française.',
    image: 'tarte-aux-fraises.jpeg',
  },
  {
    id: 6,
    title: 'Tarte aux poires',
    ingredients: ['pâte brisée', 'poires', 'sucre', 'beurre', 'œufs', 'crème fraîche'],
    steps: [
      'Éplucher les poires, les couper en lamelles et les mettre dans un saladier.',
      'Ajouter le sucre et mélanger.',
      'Étaler la pâte brisée dans un moule à tarte.',
      'Ajouter les poires.',
      'Ajouter le beurre, les œufs et la crème fraîche.',
      'Enfourner pendant 30 minutes à 180°C.',
    ],
    time: 30,
    description: 'La tarte aux poires est un grand classique de la cuisine française.',
    image: 'tarte-aux-poires.jpeg',
  },
  {
    id: 7,
    title: "Risotto aux champignons",
    ingredients: ["riz Arborio", "champignons", "oignon", "vin blanc", "bouillon de légumes", "parmesan", "beurre"],
    steps: [
      "Faire revenir l'oignon dans une casserole avec un peu de beurre.",
      "Ajouter le riz Arborio et remuer jusqu'à ce qu'il devienne translucide.",
      "Verser le vin blanc et laisser réduire.",
      "Ajouter progressivement le bouillon de légumes en remuant constamment jusqu'à cuisson du riz.",
      "Incorporer les champignons sautés, le parmesan et une noisette de beurre.",
    ],
    time: 25,
    description: "Le risotto aux champignons est un plat italien crémeux et savoureux.",
    image: 'risotto-aux-champignons.jpeg',
  },
  {
    id: 8,
    title: "Pizza margherita",
    ingredients: ["pâte à pizza", "tomates", "mozzarella", "basilic", "huile d'olive"],
    steps: [
      "Étaler la pâte à pizza sur une plaque.",
      "Répartir les tranches de tomates et de mozzarella sur la pâte.",
      "Saupoudrer de basilic frais et arroser d'huile d'olive.",
      "Cuire au four préchauffé à 220°C jusqu'à ce que la croûte soit dorée.",
    ],
    time: 20,
    description: "La pizza margherita est une pizza italienne classique avec des ingrédients simples et délicieux.",
    image: "pizza-margherita.jpeg",
    ratings: [
      {
        rating: 4,
        comment: "Très bonne recette, je recommande !",
      },
      {
        rating: 5,
        comment: "Excellent !",
      },
    ],
  },
  {
    id: 9,
    title: "Bœuf bourguignon",
    ingredients: ["bœuf", "oignons", "carottes", "vin rouge", "bouillon de bœuf", "lardons", "champignons"],
    steps: [
      "Faire dorer le bœuf dans une cocotte avec un peu d'huile.",
      "Ajouter les oignons, les carottes et les lardons.",
      "Verser le vin rouge et laisser mijoter.",
      "Ajouter le bouillon de bœuf et laisser cuire à feu doux jusqu'à ce que la viande soit tendre.",
      "Incorporer les champignons et cuire encore quelques minutes.",
    ],
    time: 180,
    description: "Le bœuf bourguignon est un plat français traditionnel, riche en saveurs et en textures.",
    image: "boeuf-bourguignon.jpeg"
  },
  {
    id: 10,
    title: "Gâteau au chocolat",
    ingredients: ["farine", "sucre", "cacao en poudre", "levure chimique", "œufs", "beurre", "vanille"],
    steps: [
      "Mélanger la farine, le sucre, le cacao en poudre et la levure chimique dans un saladier.",
      "Ajouter les œufs, le beurre fondu et la vanille. Bien mélanger.",
      "Verser la pâte dans un moule beurré et fariné.",
      "Cuire au four préchauffé à 180°C pendant environ 25 minutes.",
      "Laisser refroidir avant de démouler et de servir.",
    ],
    time: 25,
    description: "Le gâteau au chocolat est un dessert irrésistible pour les amateurs de chocolat.",
    image: "gateau-au-chocolat.jpeg",
    ratings: [
      {
        rating: 5,
        comment: "Excellent !",
      },
      {
        rating: 4,
        comment: "Délicieux !",
      }
    ],
  },
  {
    id: 11,
    title: "Poulet rôti aux herbes",
    ingredients: ["poulet entier", "herbes de Provence", "ail", "citron", "huile d'olive", "sel", "poivre"],
    steps: [
      "Préchauffer le four à 200°C.",
      "Frotter le poulet avec les herbes de Provence, l'ail émincé, le jus de citron, l'huile d'olive, le sel et le poivre.",
      "Placer le poulet dans un plat allant au four et cuire pendant environ 1 heure.",
      "Arroser régulièrement le poulet avec le jus de cuisson pendant la cuisson.",
    ],
    time: 60,
    description: "Le poulet rôti aux herbes est un plat savoureux et simple à préparer.",
    image: "poulet-roti-aux-herbes.jpeg",
    ratings: [
      {
        rating: 5,
        comment: "Excellent !",
      },
      {
        rating: 4,
        comment: "Délicieux !",
      }
    ],
  },
  {
    id: 12,
    title: "Sushi rolls",
    ingredients: ["riz à sushi", "algues nori", "saumon frais", "avocat", "concombre", "wasabi", "sauce soja"],
    steps: [
      "Préparer le riz à sushi selon les instructions sur l'emballage.",
      "Disposer une feuille d'algue nori sur une natte en bambou.",
      "Étaler une fine couche de riz sur l'algue, laissant un espace libre en haut.",
      "Ajouter des lamelles de saumon, d'avocat et de concombre.",
      "Rouler l'algue avec la garniture en utilisant la natte en bambou comme guide.",
      "Couper le rouleau en morceaux et servir avec du wasabi et de la sauce soja.",
    ],
    time: 45,
    description: "Les sushi rolls sont une délicieuse option pour les amateurs de cuisine japonaise.",
    image: "sushi-rolls.jpeg"
  },
  {
    id: 13,
    title: "Poulet au curry",
    ingredients: ["poulet", "oignons", "ail", "gingembre", "tomates", "lait de coco", "curry en poudre"],
    steps: [
      "Faire dorer le poulet dans une poêle avec un peu d'huile.",
      "Ajouter les oignons, l'ail et le gingembre hachés.",
      "Incorporer les tomates concassées et laisser mijoter.",
      "Verser le lait de coco et saupoudrer de curry en poudre. Laisser cuire jusqu'à épaississement de la sauce.",
      "Servir le poulet au curry avec du riz cuit à la vapeur.",
    ],
    time: 40,
    description: "Le poulet au curry est un plat épicé et parfumé d'origine indienne.",
    image: "poulet-au-curry.jpeg"
  },
  {
    id: 14,
    title: "Pâtes primavera",
    ingredients: ["pâtes", "courgettes", "poivrons", "tomates cerises", "ail", "basilic", "parmesan"],
    steps: [
      "Faire cuire les pâtes dans une casserole d'eau bouillante salée.",
      "Dans une poêle, faire revenir l'ail dans de l'huile d'olive.",
      "Ajouter les légumes (courgettes, poivrons, tomates cerises) et cuire jusqu'à ce qu'ils soient tendres.",
      "Mélanger les légumes cuits avec les pâtes cuites.",
      "Saupoudrer de basilic frais et de parmesan avant de servir.",
    ],
    time: 20,
    description: "Les pâtes primavera sont un plat italien coloré et plein de saveurs.",
    image: "pates-primavera.jpeg"
  },
  {
    id: 15,
    title: "Tacos au poulet",
    ingredients: ["tortillas", "poulet grillé", "salsa", "guacamole", "oignons", "coriandre", "citron vert"],
    steps: [
      "Réchauffer les tortillas dans une poêle.",
      "Garnir les tortillas avec du poulet grillé, de la salsa, du guacamole, des oignons hachés, de la coriandre fraîche et un filet de citron vert.",
      "Plier les tortillas en forme de tacos et servir.",
    ],
    time: 15,
    description: "Les tacos au poulet sont une option délicieuse pour un repas rapide et savoureux.",
    image: "tacos-au-poulet.jpeg"
  },
  {
    id: 16,
    title: "Ratatouille",
    ingredients: ["aubergines", "courgettes", "poivrons", "tomates", "oignons", "ail", "thym"],
    steps: [
      "Couper tous les légumes en fines tranches.",
      "Dans une casserole, faire revenir les oignons et l'ail dans de l'huile d'olive.",
      "Ajouter les légumes coupés, le thym et cuire jusqu'à ce qu'ils soient tendres.",
      "Servir la ratatouille chaude en accompagnement ou en plat principal.",
    ],
    time: 35,
    description: "La ratatouille est un plat provençal traditionnel à base de légumes mijotés.",
    image: "ratatouille.jpeg"
  },
  {
    id: 17,
    title: "Soupe de potiron",
    ingredients: ["potiron", "oignons", "pommes de terre", "bouillon de légumes", "crème fraîche", "muscade", "sel", "poivre"],
    steps: [
      "Éplucher et couper le potiron, les oignons et les pommes de terre en morceaux.",
      "Dans une casserole, faire revenir les oignons dans un peu de beurre.",
      "Ajouter le potiron et les pommes de terre, puis verser le bouillon de légumes.",
      "Cuire jusqu'à ce que les légumes soient tendres, puis mixer la soupe.",
      "Ajouter la crème fraîche, la muscade, le sel et le poivre. Chauffer avant de servir.",
    ],
    time: 30,
    description: "La soupe de potiron est une option réconfortante et parfaite pour l'automne.",
    image: "soupe-de-potiron.jpeg"
  },
  {
    id: 18,
    title: "Pancakes aux myrtilles",
    ingredients: ["farine", "levure chimique", "sucre", "œufs", "lait", "beurre", "myrtilles"],
    steps: [
      "Dans un bol, mélanger la farine, la levure chimique et le sucre.",
      "Ajouter les œufs, le lait et le beurre fondu. Bien mélanger.",
      "Incorporer délicatement les myrtilles dans la pâte.",
      "Verser des portions de pâte sur une poêle chaude et cuire des deux côtés jusqu'à ce qu'ils soient dorés.",
      "Servir les pancakes avec du sirop d'érable.",
    ],
    time: 25,
    description: "Les pancakes aux myrtilles sont un petit-déjeuner délicieux et moelleux.",
    image: "pancakes-aux-myrtilles.jpeg"
  },
  {
    id: 19,
    title: "Pâtes à la puttanesca",
    ingredients: ["spaghetti", "tomates", "anchois", "olives", "câpres", "ail", "huile d'olive", "piment"],
    steps: [
      "Cuire les spaghetti dans de l'eau bouillante salée.",
      "Dans une poêle, faire revenir l'ail dans de l'huile d'olive.",
      "Ajouter les tomates, les anchois, les olives, les câpres et le piment. Cuire jusqu'à ce que la sauce soit parfumée.",
      "Mélanger la sauce avec les spaghetti cuits.",
      "Servir chaud avec un filet d'huile d'olive supplémentaire."
    ],
    time: 20,
    description: "Les pâtes à la puttanesca sont une recette italienne pleine de saveurs méditerranéennes.",
    image: "pates-puttanesca.jpeg"
  },
  {
    id: 20,
    title: "Gnocchis au pesto",
    ingredients: ["gnocchis", "basilic", "ail", "pignons de pin", "parmesan", "huile d'olive"],
    steps: [
      "Faire cuire les gnocchis dans de l'eau bouillante salée.",
      "Dans un mixeur, mélanger le basilic, l'ail, les pignons de pin et le parmesan pour préparer le pesto.",
      "Égoutter les gnocchis et les mélanger avec le pesto préparé.",
      "Ajouter un filet d'huile d'olive avant de servir.",
      "Saupoudrer de parmesan supplémentaire si désiré."
    ],
    time: 15,
    description: "Les gnocchis au pesto sont un plat italien simple et délicieux.",
    image: "gnocchis-pesto.jpeg"
  },
  {
    id: 21,
    title: "Crevettes à l'ail",
    ingredients: ["crevettes", "ail", "persil", "huile d'olive", "citron", "sel", "poivre"],
    steps: [
      "Faire chauffer de l'huile d'olive dans une poêle.",
      "Ajouter les crevettes et les faire sauter jusqu'à ce qu'elles soient roses.",
      "Ajouter l'ail haché et le persil. Cuire jusqu'à ce que l'ail soit doré.",
      "Presser un peu de jus de citron, assaisonner avec du sel et du poivre.",
      "Servir chaud en garnissant de persil frais."
    ],
    time: 15,
    description: "Les crevettes à l'ail sont une entrée rapide et savoureuse.",
    image: "crevettes-ail.jpeg"
  },
  {
    id: 22,
    title: "Salade de quinoa aux légumes",
    ingredients: ["quinoa", "poivrons", "concombre", "tomates cerises", "feta", "olives", "menthe", "vinaigrette"],
    steps: [
      "Cuire le quinoa selon les instructions sur l'emballage.",
      "Couper les poivrons, le concombre, les tomates cerises et la feta en dés.",
      "Mélanger le quinoa cuit avec les légumes, la feta et les olives.",
      "Ajouter de la menthe fraîche hachée et assaisonner avec une vinaigrette légère.",
      "Réfrigérer avant de servir."
    ],
    time: 25,
    description: "La salade de quinoa aux légumes est une option saine et délicieuse.",
    image: "salade-quinoa-legumes.jpeg"
  },
  {
    id: 23,
    title: "Côtes de porc au miel et moutarde",
    ingredients: ["côtes de porc", "miel", "moutarde", "ail", "sauge", "huile d'olive", "sel", "poivre"],
    steps: [
      "Préchauffer le four à 180°C.",
      "Mélanger le miel, la moutarde, l'ail écrasé, la sauge, l'huile d'olive, le sel et le poivre dans un bol.",
      "Badigeonner les côtes de porc avec ce mélange.",
      "Cuire au four pendant 25-30 minutes jusqu'à ce qu'elles soient bien cuites.",
      "Arroser avec le jus de cuisson avant de servir."
    ],
    time: 35,
    description: "Les côtes de porc au miel et moutarde sont sucrées et épicées à la perfection.",
    image: "cotes-porc-miel-moutarde.jpeg"
  },
  {
    id: 24,
    title: "Poulet grillé au citron",
    ingredients: ["poulet", "citron", "ail", "origan", "huile d'olive", "sel", "poivre"],
    steps: [
      "Mariner le poulet avec du jus de citron, de l'ail émincé, de l'origan, de l'huile d'olive, du sel et du poivre.",
      "Laisser reposer pendant au moins 30 minutes.",
      "Griller le poulet jusqu'à ce qu'il soit bien cuit et doré.",
      "Arroser avec un peu de jus de citron avant de servir.",
      "Garnir d'herbes fraîches si désiré."
    ],
    time: 40,
    description: "Le poulet grillé au citron est léger, frais et plein de saveurs méditerranéennes.",
    image: "poulet-grille-citron.jpeg"
  },
  {
    id: 25,
    title: "Raviolis aux épinards et ricotta",
    ingredients: ["raviolis", "épinards", "ricotta", "parmesan", "sauce tomate", "ail", "basilic", "sel", "poivre"],
    steps: [
      "Faire cuire les raviolis selon les instructions sur l'emballage.",
      "Dans une poêle, faire revenir l'ail dans de l'huile d'olive.",
      "Ajouter les épinards jusqu'à ce qu'ils soient fanés.",
      "Mélanger les épinards avec de la ricotta et du parmesan.",
      "Servir les raviolis avec la sauce tomate, le mélange d'épinards et garnir de basilic."
    ],
    time: 30,
    description: "Les raviolis aux épinards et ricotta sont une option délicieuse pour les amateurs de pâtes.",
    image: "raviolis-epinards-ricotta.jpeg"
  },
  {
    id: 26,
    title: "Brochettes de saumon teriyaki",
    ingredients: ["saumon", "sauce teriyaki", "poivrons", "oignons", "courgettes", "huile d'olive", "graines de sésame"],
    steps: [
      "Couper le saumon en cubes et les mariner dans la sauce teriyaki pendant 30 minutes.",
      "Enfiler les morceaux de saumon sur des brochettes avec des morceaux de poivrons, d'oignons et de courgettes.",
      "Badigeonner les brochettes d'huile d'olive et les griller jusqu'à ce que le saumon soit cuit.",
      "Saupoudrer de graines de sésame avant de servir."
    ],
    time: 25,
    description: "Les brochettes de saumon teriyaki sont une option savoureuse pour un repas léger.",
    image: "brochettes-saumon-teriyaki.jpeg"
  },
  {
    id: 27,
    title: "Poulet au beurre indien",
    ingredients: ["poulet", "tomates", "oignons", "ail", "gingembre", "curcuma", "coriandre", "cumin", "crème"],
    steps: [
      "Faire revenir le poulet dans une poêle jusqu'à ce qu'il soit doré.",
      "Ajouter les oignons, l'ail et le gingembre hachés.",
      "Incorporer les tomates concassées, le curcuma, la coriandre et le cumin.",
      "Verser la crème et laisser mijoter jusqu'à ce que la sauce épaississe.",
      "Servir le poulet au beurre avec du riz basmati."
    ],
    time: 45,
    description: "Le poulet au beurre indien est riche en saveurs et crémeux.",
    image: "poulet-beurre-indien.jpeg"
  },
  {
    id: 28,
    title: "Pâtes aux fruits de mer",
    ingredients: ["pâtes", "crevettes", "moules", "calmars", "ail", "persil", "vin blanc", "huile d'olive"],
    steps: [
      "Cuire les pâtes dans de l'eau bouillante salée.",
      "Dans une poêle, faire revenir l'ail dans de l'huile d'olive.",
      "Ajouter les fruits de mer (crevettes, moules, calmars) et cuire jusqu'à ce qu'ils soient bien cuits.",
      "Ajouter les pâtes cuites et mélanger avec du persil frais haché.",
      "Arroser avec du vin blanc avant de servir."
    ],
    time: 30,
    description: "Les pâtes aux fruits de mer sont une option élégante et délicieuse.",
    image: "pates-fruits-de-mer.jpeg"
  },
  {
    id: 29,
    title: "Chili végétarien",
    ingredients: ["haricots rouges", "pois chiches", "lentilles", "tomates concassées", "oignons", "poivrons", "chili en poudre", "cumin", "coriandre", "sel", "poivre"],
    steps: [
      "Faire revenir les oignons et les poivrons dans une grande casserole.",
      "Ajouter les haricots rouges, les pois chiches et les lentilles.",
      "Verser les tomates concassées et assaisonner avec du chili en poudre, du cumin, de la coriandre, du sel et du poivre.",
      "Laisser mijoter jusqu'à ce que les saveurs se mélangent.",
      "Servir chaud avec du riz ou des tortillas."
    ],
    time: 40,
    description: "Le chili végétarien est une alternative savoureuse et saine.",
    image: "chili-vegetarien.jpeg"
  },
  {
    id: 30,
    title: "Fajitas au poulet",
    ingredients: ["tortillas", "poulet grillé", "poivrons", "oignons", "épices à fajitas", "salsa", "guacamole", "fromage râpé"],
    steps: [
      "Réchauffer les tortillas dans une poêle.",
      "Garnir les tortillas avec du poulet grillé, des poivrons et des oignons sautés.",
      "Saupoudrer généreusement d'épices à fajitas.",
      "Ajouter de la salsa, du guacamole et du fromage râpé.",
      "Plier les tortillas en forme de fajitas et servir chaud."
    ],
    time: 20,
    description: "Les fajitas au poulet sont une option délicieuse pour un repas tex-mex.",
    image: "fajitas-poulet.jpeg"
  },
  {
    id: 31,
    title: "Burger végétarien",
    ingredients: ["pain à burger", "steak végétarien", "fromage cheddar", "tomate", "laitue", "cornichons", "mayonnaise", "ketchup", "moutarde"],
    steps: [
      "Griller le steak végétarien selon les instructions sur l'emballage.",
      "Assembler le burger en plaçant le steak sur le pain à burger.",
      "Ajouter du fromage cheddar fondu, des tranches de tomate, de la laitue et des cornichons.",
      "Badigeonner le haut du pain avec de la mayonnaise, du ketchup et de la moutarde.",
      "Servir avec des frites ou des légumes."
    ],
    time: 15,
    description: "Le burger végétarien est une alternative savoureuse et nutritive.",
    image: "burger-vegetarien.jpeg"
  },
  {
    id: 32,
    title: "Poulet croustillant au miel",
    ingredients: ["poulet", "miel", "moutarde de Dijon", "ail", "paprika", "sel", "poivre"],
    steps: [
      "Préchauffer le four à 200°C.",
      "Mélanger le miel, la moutarde de Dijon, l'ail émincé, le paprika, le sel et le poivre dans un bol.",
      "Enrober les morceaux de poulet de ce mélange.",
      "Disposer les morceaux de poulet sur une plaque de cuisson et cuire au four jusqu'à ce qu'ils soient croustillants.",
      "Arroser avec le reste de la sauce avant de servir."
    ],
    time: 35,
    description: "Le poulet croustillant au miel est sucré, épicé et irrésistible.",
    image: "poulet-croustillant-miel.jpeg"
  },
  {
    id: 33,
    title: "Pâtes Alfredo aux crevettes",
    ingredients: ["pâtes fettuccine", "crevettes", "ail", "parmesan râpé", "crème", "beurre", "persil", "sel", "poivre"],
    steps: [
      "Cuire les pâtes fettuccine dans une casserole d'eau bouillante salée.",
      "Dans une poêle, faire revenir l'ail dans du beurre.",
      "Ajouter les crevettes et cuire jusqu'à ce qu'elles soient roses.",
      "Incorporer la crème, le parmesan râpé, le sel et le poivre.",
      "Mélanger les pâtes cuites avec la sauce aux crevettes et garnir de persil."
    ],
    time: 25,
    description: "Les pâtes Alfredo aux crevettes sont crémeuses et pleines de saveurs de la mer.",
    image: "pates-alfredo-crevettes.jpeg"
  },
  {
    id: 34,
    title: "Salade de couscous méditerranéenne",
    ingredients: ["couscous", "poivrons", "concombre", "tomates", "oignons rouges", "olives", "feta", "huile d'olive", "citron", "menthe", "sel", "poivre"],
    steps: [
      "Cuire le couscous selon les instructions sur l'emballage.",
      "Couper les poivrons, le concombre, les tomates, les oignons rouges et la feta en dés.",
      "Mélanger le couscous cuit avec les légumes, les olives et la feta.",
      "Assaisonner avec de l'huile d'olive, du jus de citron, de la menthe hachée, du sel et du poivre.",
      "Réfrigérer avant de servir."
    ],
    time: 20,
    description: "La salade de couscous méditerranéenne est fraîche et pleine de saveurs méditerranéennes.",
    image: "salade-couscous-mediterraneenne.jpeg"
  },
  {
    id: 35,
    title: "Curry de pois chiches",
    ingredients: ["pois chiches", "tomates concassées", "oignons", "ail", "gingembre", "curry en poudre", "lait de coco", "coriandre", "sel", "poivre"],
    steps: [
      "Faire revenir les oignons, l'ail et le gingembre dans une casserole.",
      "Ajouter les pois chiches, les tomates concassées et le curry en poudre.",
      "Verser le lait de coco et laisser mijoter jusqu'à ce que la sauce épaississe.",
      "Assaisonner avec de la coriandre fraîche, du sel et du poivre.",
      "Servir le curry de pois chiches avec du riz basmati."
    ],
    time: 30,
    description: "Le curry de pois chiches est une option végétalienne délicieusement épicée.",
    image: "curry-pois-chiches.jpeg"
  },
  {
    id: 36,
    title: "Tacos au poisson",
    ingredients: ["filets de poisson", "farine de maïs", "chou", "crème aigre", "salsa", "coriandre", "citron vert", "sel", "poivre"],
    steps: [
      "Paner les filets de poisson dans de la farine de maïs et les faire frire jusqu'à ce qu'ils soient dorés.",
      "Assemblez les tacos en plaçant les filets de poisson croustillants sur des tortillas.",
      "Ajouter du chou finement coupé, de la crème aigre, de la salsa et de la coriandre.",
      "Arroser de jus de citron vert et assaisonner avec du sel et du poivre.",
      "Servir avec des quartiers de citron vert supplémentaires."
    ],
    time: 25,
    description: "Les tacos au poisson sont légers, croustillants et pleins de saveurs fraîches.",
    image: "tacos-poisson.jpeg"
  },
  {
    id: 37,
    title: "Salade de fruits",
    ingredients: ["fraises", "bananes", "pommes", "kiwis", "orange", "sucre"],
    steps: [
      "Couper les fruits en morceaux et les mettre dans un saladier.",
      "Saupoudrer de sucre et mélanger.",
      "Réfrigérer avant de servir."
    ],
    time: 15,
    description: "La salade de fruits est une option rafraîchissante pour le dessert.",
    image: "salade-fruits.jpeg"
  },
  {
    id: 38,
    title: "Brochettes de poulet satay",
    ingredients: ["poulet", "cacahuètes", "sauce soja", "miel", "ail", "gingembre", "citronnelle", "coriandre", "sauce aux arachides"],
    steps: [
      "Couper le poulet en morceaux et les enfiler sur des brochettes.",
      "Dans un bol, mélanger les cacahuètes, la sauce soja, le miel, l'ail émincé, le gingembre, la citronnelle et la coriandre.",
      "Badigeonner les brochettes de cette marinade et laisser reposer pendant au moins 30 minutes.",
      "Griller les brochettes de poulet satay jusqu'à ce qu'elles soient bien cuites.",
      "Servir avec une sauce aux arachides pour tremper."
    ],
    time: 35,
    description: "Les brochettes de poulet satay sont riches en saveurs asiatiques et parfaites pour une collation ou un repas léger.",
    image: "brochettes-poulet-satay.jpeg"
  },
  {
    id: 39,
    title: "Risotto aux fruits de mer",
    ingredients: ["riz Arborio", "crevettes", "moules", "calmars", "oignon", "vin blanc", "bouillon de poisson", "parmesan", "beurre"],
    steps: [
      "Faire revenir l'oignon dans une casserole avec un peu de beurre.",
      "Ajouter le riz Arborio et remuer jusqu'à ce qu'il devienne translucide.",
      "Verser le vin blanc et laisser réduire.",
      "Incorporer progressivement le bouillon de poisson en remuant constamment jusqu'à cuisson du riz.",
      "Ajouter les fruits de mer (crevettes, moules, calmars) préalablement cuits.",
      "Incorporer le parmesan et une noisette de beurre. Mélanger délicatement.",
      "Servir chaud, saupoudré de parmesan supplémentaire si désiré."
    ],
    time: 30,
    description: "Le risotto aux fruits de mer est un plat italien délicieusement riche en saveurs marines.",
    image: "risotto-fruits-de-mer.jpeg"
  },
  {
    id: 40,
    title: "Poulet rôti aux herbes provençales",
    ingredients: ["poulet entier", "herbes de Provence", "ail", "citron", "huile d'olive", "sel", "poivre"],
    steps: [
      "Préchauffer le four à 200°C.",
      "Frotter le poulet avec les herbes de Provence, l'ail émincé, le jus de citron, l'huile d'olive, le sel et le poivre.",
      "Placer le poulet dans un plat allant au four et cuire pendant environ 1 heure.",
      "Arroser régulièrement le poulet avec le jus de cuisson pendant la cuisson.",
      "Servir chaud, coupé en morceaux, avec des quartiers de citron."
    ],
    time: 60,
    description: "Le poulet rôti aux herbes provençales est une explosion de saveurs méditerranéennes.",
    image: "poulet-roti-herbes-provencales.jpeg"
  },
  {
    id: 41,
    title: "Pizza aux quatre fromages",
    ingredients: ["pâte à pizza", "mozzarella", "gorgonzola", "ricotta", "parmesan", "sauce tomate", "origan", "huile d'olive"],
    steps: [
      "Étaler la pâte à pizza sur une plaque.",
      "Répartir la sauce tomate sur la pâte.",
      "Disposer les différents fromages (mozzarella, gorgonzola, ricotta, parmesan) sur la sauce.",
      "Saupoudrer d'origan et arroser d'huile d'olive.",
      "Cuire au four préchauffé à 220°C jusqu'à ce que la croûte soit dorée et les fromages fondus.",
      "Déguster cette délicieuse pizza aux quatre fromages."
    ],
    time: 25,
    description: "La pizza aux quatre fromages est un festin pour les amateurs de fromage.",
    image: "pizza-quatre-fromages.jpeg"
  },
  {
    id: 42,
    title: "Salade de quinoa aux fruits",
    ingredients: ["quinoa", "fraises", "mangue", "avocat", "menthe", "noix", "vinaigrette au miel"],
    steps: [
      "Cuire le quinoa selon les instructions sur l'emballage.",
      "Laisser refroidir le quinoa cuit.",
      "Couper les fraises, la mangue et l'avocat en morceaux.",
      "Dans un grand bol, mélanger le quinoa refroidi avec les fruits coupés.",
      "Ajouter des feuilles de menthe fraîche et des noix.",
      "Arroser de vinaigrette au miel et mélanger délicatement.",
      "Servir cette salade de quinoa aux fruits pour une explosion de saveurs estivales."
    ],
    time: 30,
    description: "La salade de quinoa aux fruits est une option fraîche et nutritive pour les journées ensoleillées.",
    image: "salade-quinoa-fruits.jpeg"
  },
  {
    id: 43,
    title: "Pâtes à la bolognaise",
    ingredients: ["spaghetti", "viande hachée", "oignon", "ail", "sauce tomate", "vin rouge", "origan", "basilic", "parmesan"],
    steps: [
      "Cuire les pâtes (spaghetti) selon les instructions sur l'emballage.",
      "Dans une poêle, faire revenir l'oignon et l'ail dans un peu d'huile.",
      "Ajouter la viande hachée et faire cuire jusqu'à ce qu'elle soit bien dorée.",
      "Verser le vin rouge et laisser mijoter jusqu'à évaporation.",
      "Ajouter la sauce tomate, l'origan et le basilic. Laisser mijoter.",
      "Servir la sauce bolognaise sur les pâtes cuites, saupoudrées de parmesan."
    ],
    time: 40,
    description: "Les pâtes à la bolognaise sont un grand classique de la cuisine italienne, apprécié par petits et grands.",
    image: "pates-bolognaise.jpeg"
  },
  {
    id: 44,
    title: "Velouté de champignons aux herbes",
    ingredients: ["champignons", "oignons", "ail", "bouillon de légumes", "crème fraîche", "thym", "persil"],
    steps: [
      "Faire revenir les oignons et l'ail dans une casserole jusqu'à ce qu'ils soient dorés.",
      "Ajouter les champignons et faire sauter jusqu'à ce qu'ils soient tendres.",
      "Verser le bouillon de légumes et laisser mijoter pendant 20 minutes.",
      "Ajouter la crème fraîche, le thym et le persil. Mixer le tout jusqu'à obtention d'une consistance veloutée.",
      "Assaisonner selon le goût et servir chaud."
    ],
    time: 30,
    description: "Un velouté de champignons aux herbes parfait pour se réchauffer pendant l'hiver.",
    image: "veloute-champignons-herbes.jpeg"
  },
  {
    id: 45,
    title: "Gratin de courge butternut au fromage",
    ingredients: ["courge butternut", "fromage râpé", "crème fraîche", "ail, sel", "poivre", "muscade"],
    steps: [
      "Couper la courge butternut en tranches fines et les faire cuire à la vapeur jusqu'à ce qu'elles soient tendres.",
      "Préparer une sauce avec la crème fraîche, l'ail, le sel, le poivre et la muscade.",
      "Alterner les tranches de courge et la sauce dans un plat à gratin.",
      "Saupoudrer de fromage râpé et cuire au four jusqu'à ce que le fromage soit doré.",
      "Servir chaud, accompagné d'une salade verte."
    ],
    time: 40,
    description: "Un gratin de courge butternut au fromage pour un repas réconfortant pendant les jours froids d'hiver.",
    image: "gratin-courge-butternut-fromage.jpeg"
  },
  {
    id: 48,
    title: "Croustade aux pommes et aux canneberges",
    ingredients: ["pommes", "canneberges", "sucre", "cannelle", "farine", "beurre", "flocons d'avoine"],
    steps: [
      "Mélanger les pommes et les canneberges avec du sucre et de la cannelle. Disposer dans un plat allant au four.",
      "Dans un bol, mélanger la farine, le beurre et les flocons d'avoine pour former une pâte croustillante.",
      "Répartir la pâte sur le mélange de fruits.",
      "Cuire au four jusqu'à ce que la croustade soit dorée et que les fruits soient tendres.",
      "Servir chaud, éventuellement avec une boule de glace à la vanille."
    ],
    time: 50,
    description: "Une croustade aux pommes et aux canneberges pour une touche sucrée en dessert pendant les soirées d'hiver.",
    image: "croustade-pommes-canneberges.jpeg"
  }
];

export default recipes;

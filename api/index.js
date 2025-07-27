const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let randos = [
  {
    id: 1,
    title: "Le pas de l'Oeille",
    date: "2025-06-29",
    location: "Vercors",
    difficulty: "Moyen",
    interest: "Moyen",
    tags: ["Pierrier", "Lapiaz", "Bouquetins"],
    description: "Rando faite pour échapper à la météo caniculaire à Lyon. Pas d'ombre après le vallon de Fauge. Descente par les pistes, peu d'intérêt. Break au resto du téléphérique (ouveert) et sieste au lac des Prés. Pas vu de bouquetins.",
    url: "https://www.visorando.com/randonnee-pas-de-l-oeille-par-le-vallon-de-la-faug/"
  },
  {
    id: 2,
    title: "Les chalets de Sales",
    date: "2025-06-09",
    location: "Giffre",
    difficulty: "Moyen",
    interest: "Fort",
    tags: ["Bouquetin", "Cirque", "Refuge"],
    description: "Très fréquentée mais cirque magnifique. Grande harde de bouquetins, peu farouches. Le refuge n'ouvrait que le week-end suivant. A prolonger si plus de temps.",
    url: "https://www.visorando.com/randonnee-les-chalets-de-sales-depuis-le-lignon/"
  },
  {
    id: 3,
    title: "Lac des verdets",
    date: "2025-06-08",
    location: "Giffre",
    difficulty: "Moyen",
    interest: "Faible",
    tags: ["Refuge"],
    description: "Montée sur piste facile mais rando stoppée car le brouillard ne s'est pas levé",
    url: "https://www.visorando.com/randonnee-lac-des-verdets/"
  },
  {
    id: 4,
    title: "Le bout du monde",
    date: "2025-06-07",
    location: "Giffre",
    difficulty: "Facile",
    interest: "Fort",
    tags: ["Torrent", "Cirque", "Cascade"],
    description: "Parking non payant à partir de 15h30. Faite par mauvais temps donc peu frequentée mais très populaire. Vu la météo humide, rando stoppée. Plusieurs torrents à traverser difficilement mais cascades magnifiques",
    url: "https://www.visorando.com/randonnee-le-bout-du-monde-3/"
  },
  {
    id: 5,
    title: "Le site d'Alleuze",
    date: "2025-05-31",
    location: "Auvergne",
    difficulty: "Moyen",
    interest: "Moyen",
    tags: ["Ruine"],
    description: "Chemins agréables, pas fréquentés sauf au château. Attention à la dernière montée, difficle sous la chaleur (un vrai chemin de croix)",
    url: "https://www.visorando.com/randonnee-le-site-d-alleuze/"
  },
  {
    id: 6,
    title: "Le plomb du Cantal",
    date: "2025-05-30",
    location: "Auvergne",
    difficulty: "Moyen",
    interest: "Moyen",
    tags: ["360°"],
    description: "Très frequentée au sommet si téléphérique ouvert, descente sur piste moins intéressante. Aucune ombre. Restos au téléphérique et au départ",
    url: "https://www.visorando.com/randonnee-plomb-du-cantal-a-partir-du-col-de-prat-/"
  },
  {
    id: 7,
    title: "Lacs Robert par l'Oursière",
    date: "2025-05-18",
    location: "Belledonne",
    difficulty: "Moyen",
    interest: "Moyen",
    tags: ["Névé", "Cascade", "Lac"],
    description: "Assez fréquentée aux lacs. Pour la descente, pris la brèche Nord vu l'enneigement. Dernier km sur la route.",
    url: "https://www.visorando.com/randonnee-lacs-robert-par-l-oursiere/"
  },
  {
    id: 8,
    title: "Boucle des 3 vallons",
    date: "2025-05-03",
    location: "Dévoluy",
    difficulty: "Moyen",
    interest: "Fort",
    tags: ["Névé", "Bouquetin"],
    description: "Rando stoppée à cause de nombreux névés au col. Nombreux bouquetins. A refaire !",
    url: "https://www.visorando.com/randonnee-boucle-des-trois-vallons-a-saint-etienne/"
  },
  {
    id: 9,
    title: "Col des Aiguilles",
    date: "2025-05-02",
    location: "Dévoluy",
    difficulty: "Moyen",
    interest: "Fort",
    tags: ["Névé", "Chamois"],
    description: "Très belle rando, faite en A/R à cause de l'enneigement. Vu quelques chamois.",
    url: "https://www.visorando.com/randonnee-col-de-l-aiguille/"
  },
  {
    id: 10,
    title: "Crêtes de Baumes par les Etroits",
    date: "2025-05-01",
    location: "Dévoluy",
    difficulty: "Moyen",
    interest: "Moyen",
    tags: ["360°"],
    description: "Rando pour mise en bouche d'un week-end dans le Dévoluy. Intérêt pour faune (serpents, faucons crécerelles ?) & flore.",
    url: "https://www.visorando.com/randonnee-cretes-de-baumes-par-les-etroits/"
  },
  {
    id: 11,
    title: "Crêt de la Goutte",
    date: "2025-04-06",
    location: "Jura",
    difficulty: "Moyen",
    interest: "Moyen",
    tags: ["Névé", "Vent"],
    description: "1ère montée raide (sur piste) ensuite aucune difficulté. Attention très venteux (bien se couvrir.)",
    url: "https://www.visorando.com/randonnee-menthieres-cret-de-la-goutte-par-le-sac-/"
  }
];


app.get('/', (req, res) => {
  res.json(randos);
});
app.post('/randos', (req, res) => {
  const nouvelleRando = req.body;
  nouvelleRando.id = randos.length + 1;
  randos.push(nouvelleRando);
  res.status(201).json(nouvelleRando);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API lancée sur http://localhost:${PORT}`);
});

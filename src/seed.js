const Data = require("./data");

const randos = [
  {
    title: "Lac de Loie",
    date: "2023-07-30",
    location: "Val d'Aoste",
    difficulty: "Moyen",
    interest: "Fort",
    tags: ["Lac"],
    description: "Pause au lac assez fréquenté, vallon très beau",
    url: "https://www.altituderando.com/Lac-de-Loie-2354m-en-boucle-par-Lillaz-et-le-vallon-de-Bardoney",
    images: ["1", "2", "3", "4"]
  },
  {
    title: "Pointe de Metz",
    date: "2023-07-31",
    location: "Val d'Aoste",
    difficulty: "Moyen",
    interest: "Moyen",
    tags: ["Lac"],
    description: "Rando sympa. Petite section hors sentier",
    url: "https://www.altituderando.com/Pointe-de-Metz-2552m-Pointe-de-Chaligne-2607m-et-Lago-Fallere-en-boucle-par",
    images: ["1", "2"]
  },
  {
    title: "Boucle Grand Collet",
    date: "2023-08-01",
    location: "Val d'Aoste",
    difficulty: "Moyen",
    interest: "Fort",
    tags: ["Chamois", "Bouquetin", "Gran Paradiso"],
    description: "Très belle rando pas très fréquenté, belle vue sur Grand Paradiso.",
    url: "https://www.komoot.com/fr-fr/smarttour/709796",
    images: ["1", "2", "3", "4", "5"]
  },
  {
    title: "Lago Goletta",
    date: "2023-08-02",
    location: "Val d'Aoste",
    difficulty: "Difficile",
    interest: "Fort",
    tags: ["Lac", "Refuge", "Cascade"],
    description: "Belle randonnée. Monté au lac, vue sur le glacier (mais vent glacial) Nous avons mangé au refuge puis fait une boucle sur le chemin 13C",
    url: "https://fr.wikiloc.com/itineraires-randonnee/rifugio-benevolo-lago-goletta-colle-goletta-via-thumel-altavia-80203405",
    images: ["1", "2", "3", "4"]
  },
  {
    title: "Refuge Bezzi et bonus",
    date: "2023-08-03",
    location: "Val d'Aoste",
    difficulty: "Difficile",
    interest: "Moyen",
    tags: ["Lac", "Refuge"],
    description: "Après avoir atteint le refuge, nous sommes monté au lac St MArtin pour manger. Puis nous avons fait le retour par le balcon : très long...",
    url: "",
    images: ["1", "2", "3", "4"]
  },
  {
    title: "Bivouac Gérard-Grappein",
    date: "2023-08-06",
    location: "Val d'Aoste",
    difficulty: "Difficile",
    interest: "Fort",
    tags: ["Chamois", "Bouquetin", "Glacier"],
    description: "Jamis autant vu de bouquetins, par contre presque pas croiser d'humains !",
    url: "",
    images: ["1", "2", "3", "4"]
  },
  {
    title: "Refuge Vittorio Sella",
    date: "2023-08-08",
    location: "Val d'Aoste",
    difficulty: "Moyen",
    interest: "Moyen",
    tags: ["Refuge"],
    description: "Assez fréquenté",
    url: "https://www.visorando.com/randonnee-aller-retour-au-refuge-vittorio-sella-de/",
    images: ["1", "2", "3"]
  },
  {
    title: "Laghi di Lussert et Mont des Laures",
    date: "2023-08-09",
    location: "Val d'Aoste",
    difficulty: "Difficile",
    interest: "Moyen",
    tags: ["Lac"],
    description: "Rando sympa",
    url: "https://www.altituderando.com/Laghi-di-Lussert-et-Mont-des-Laures-3121m",
    images: ["1", "2", "3"]
  },
  {
    title: "Le pas de l'Oeille",
    date: "2025-06-29",
    location: "Vercors",
    difficulty: "Moyen",
    interest: "Moyen",
    tags: ["Pierrier", "Lapiaz", "Bouquetin"],
    description: "Rando faite pour échapper à la météo caniculaire à Lyon. Pas d'ombre après le vallon de Fauge. Descente par les pistes, peu d'intérêt. Break au resto du téléphérique (ouveert) et sieste au lac des Prés. Pas vu de bouquetins.",
    url: "https://www.visorando.com/randonnee-pas-de-l-oeille-par-le-vallon-de-la-faug/",
    images: ["1", "2", "3", "4"]
  },
  {
    title: "Les chalets de Sales",
    date: "2025-06-09",
    location: "Giffre",
    difficulty: "Moyen",
    interest: "Fort",
    tags: ["Bouquetin", "Cirque", "Refuge"],
    description: "Très fréquentée mais cirque magnifique. Grande harde de bouquetins, peu farouches. Le refuge n'ouvrait que le week-end suivant. A prolonger si plus de temps.",
    url: "https://www.visorando.com/randonnee-les-chalets-de-sales-depuis-le-lignon/",
    images: ["1", "2", "3", "4", "5"]
  },
  {
    title: "Lac des verdets",
    date: "2025-06-08",
    location: "Giffre",
    difficulty: "Moyen",
    interest: "Faible",
    tags: ["Refuge"],
    description: "Montée sur piste facile mais rando stoppée car le brouillard ne s'est pas levé.",
    url: "https://www.visorando.com/randonnee-lac-des-verdets/",
    images: ["1"]
  },
  {
    title: "Le bout du monde",
    date: "2025-06-07",
    location: "Giffre",
    difficulty: "Facile",
    interest: "Fort",
    tags: ["Torrent", "Cirque", "Cascade"],
    description: "Parking non payant à partir de 15h30. Faite par mauvais temps donc peu frequentée mais très populaire. Vu la météo humide, rando stoppée. Plusieurs torrents à traverser difficilement mais cascades magnifiques.",
    url: "https://www.visorando.com/randonnee-le-bout-du-monde-3/",
    images: ["1", "2", "3", "4"]
  }
];


async function seedDatabase() {
  try {
    // Optionnel : supprimer toutes les anciennes données avant de reseeder
    await Data.deleteMany({});

    // Insérer les nouvelles données
    await Data.insertMany(randos);

    console.log("Base de données initialisée avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'initialisation de la base :", error);
  }
}

module.exports = seedDatabase;
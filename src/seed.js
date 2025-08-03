const Data = require("./data");

const randos = [
  {
    "_id": "lac-de-loie",
    "title": "Lac de Loie",
    "date": "2023-07-30T00:00:00",
    "location": "Vallée d'Aoste",
    "difficulty": "Moyen",
    "interest": "Fort",
    "tags": ["Lac"],
    "description": "Pause au lac assez fréquenté, vallon très beau",
    "url": "https://www.altituderando.com/Lac-de-Loie-2354m-en-boucle-par-Lillaz-et-le-vallon-de-Bardoney",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250667/1_qm7buu.jpg",
        "public_id": "1_qm7buu"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250670/2_p4nell.jpg",
        "public_id": "2_p4nell"
      }
    ]
  },
  {
    "_id": "pointe-de-metz",
    "title": "Pointe de Metz",
    "date": "2023-07-31T00:00:00",
    "location": "Vallée d'Aoste",
    "difficulty": "Moyen",
    "interest": "Moyen",
    "tags": ["Lac"],
    "description": "Rando sympa. Attention petite section hors sentier",
    "url": "https://www.altituderando.com/Pointe-de-Metz-2552m-Pointe-de-Chaligne-2607m-et-Lago-Fallere-en-boucle-par",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250731/1_inl9v2.jpg",
        "public_id": "1_inl9v2"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250734/2_kxgugv.jpg",
        "public_id": "2_kxgugv"
      }
    ]
  },
  {
    "_id": "boucle-grand-collet",
    "title": "Boucle Grand Collet",
    "date": "2023-08-01T00:00:00",
    "location": "Vallée d'Aoste",
    "difficulty": "Moyen",
    "interest": "Fort",
    "tags": ["Chamois", "Bouquetin", "Gran-Paradiso"],
    "description": "Très belle rando pas très fréquenté, belle vue sur Grand Paradiso.",
    "url": "https://www.komoot.com/fr-fr/smarttour/709796",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249957/1_wqyibu.jpg",
        "public_id": "1_wqyibu"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249971/2_cgwl9j.jpg",
        "public_id": "2_cgwl9j"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249955/3_clyqyl.jpg",
        "public_id": "3_clyqyl"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249968/4_v665fs.jpg",
        "public_id": "4_v665fs"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250043/5_av0wks.jpg",
        "public_id": "5_av0wks"
      }
    ]
  },
  {
    "_id": "lago-goletta",
    "title": "Lago Goletta",
    "date": "2023-08-02T00:00:00",
    "location": "Vallée d'Aoste",
    "difficulty": "Difficile",
    "interest": "Fort",
    "tags": ["Lac", "Refuge", "Cascade"],
    "description": "Belle randonnée. Monté au lac, vue sur le glacier (mais vent glacial) Nous avons mangé au refuge puis fait une boucle sur le chemin 13C",
    "url": "https://fr.wikiloc.com/itineraires-randonnee/rifugio-benevolo-lago-goletta-colle-goletta-via-thumel-altavia-80203405",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250178/1_rjcmvl.jpg",
        "public_id": "1_rjcmvl"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250174/3_fmupmr.jpg",
        "public_id": "3_fmupmr"
      }
    ]
  },
  {
    "_id": "refuge-bezzi",
    "title": "Refuge Bezzi",
    "date": "2023-08-03T00:00:00",
    "location": "Vallée d'Aoste",
    "difficulty": "Difficile",
    "interest": "Moyen",
    "tags": ["Lac", "Refuge"],
    "description": "Après avoir atteint le refuge, nous sommes monté au lac St Martin pour manger. Puis nous avons fait le retour par le balcon : très long...",
    "url": null,
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250372/1_zpxrvc.jpg",
        "public_id": "1_zpxrvc"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250375/2_jzhaff.jpg",
        "public_id": "2_jzhaff"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250377/3_y75mbw.jpg",
        "public_id": "3_y75mbw"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250380/4_rqpcqa.jpg",
        "public_id": "4_rqpcqa"
      }
    ]
  },
  {
    "_id": "bivouac-gerard-grappein",
    "title": "Bivouac Gérard-Grappein",
    "date": "2023-08-06T00:00:00",
    "location": "Vallée d'Aoste",
    "difficulty": "Difficile",
    "interest": "Fort",
    "tags": ["Chamois", "Bouquetin", "Glacier"],
    "description": "Jamais vu autant de bouquetins, par contre presque pas croiser d'humains !",
    "url": null,
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250464/1_lft6i6.jpg",
        "public_id": "1_lft6i6"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250466/3_diyzuy.jpg",
        "public_id": "3_diyzuy"
      }
    ]
  },
  {
    "_id": "refuge-vittorio-sella",
    "title": "Refuge Vittorio Sella",
    "date": "2023-08-08T00:00:00",
    "location": "Vallée d'Aoste",
    "difficulty": "Moyen",
    "interest": "Moyen",
    "tags": ["Refuge"],
    "description": "Assez fréquenté",
    "url": "https://www.visorando.com/randonnee-aller-retour-au-refuge-vittorio-sella-de/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250539/1_beadam.jpg",
        "public_id": "1_beadam"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250537/2_udnbg9.jpg",
        "public_id": "2_udnbg9"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250542/3_vjvc8d.jpg",
        "public_id": "3_vjvc8d"
      }
    ]
  },
  {
    "_id": "laghi-di-lussert-et-mont-des-laures",
    "title": "Laghi di Lussert et Mont des Laures",
    "date": "2023-08-09T00:00:00",
    "location": "Vallée d'Aoste",
    "difficulty": "Difficile",
    "interest": "Moyen",
    "tags": ["Lac"],
    "description": "Rando sympa",
    "url": "https://www.altituderando.com/Laghi-di-Lussert-et-Mont-des-Laures-3121m",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250596/1_qb8frq.jpg",
        "public_id": "1_qb8frq"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250598/3_d9dxoh.jpg",
        "public_id": "3_d9dxoh"
      }
    ]
  },
  {
    "_id": "le-pas-de-loeille",
    "title": "Le pas de l'Oeille",
    "date": "2025-06-29T00:00:00",
    "location": "Vercors",
    "difficulty": "Moyen",
    "interest": "Moyen",
    "tags": ["Pierrier", "Lapiaz", "Bouquetin"],
    "description": "Rando faite pour échapper à la météo caniculaire à Lyon. Pas d'ombre après le vallon de Fauge. Descente par les pistes, peu d'intérêt.",
    "url": "https://www.visorando.com/randonnee-pas-de-l-oeille-par-le-vallon-de-la-faug/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249819/1_u1xhrx.webp",
        "public_id": "1_u1xhrx"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249815/2_j9wgrn.webp",
        "public_id": "2_j9wgrn"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249821/4_fjjnvg.webp",
        "public_id": "4_fjjnvg"
      }
    ]
  },
  {
    "_id": "les-chalets-de-sales",
    "title": "Les chalets de Sales",
    "date": "2025-06-09T00:00:00",
    "location": "Giffre",
    "difficulty": "Moyen",
    "interest": "Fort",
    "tags": ["Bouquetin", "Cirque", "Refuge"],
    "description": "Très fréquentée mais cirque magnifique. Grande harde de bouquetins, peu farouches. Le refuge n'ouvrait que le week-end suivant. A prolonger si plus de temps.",
    "url": "https://www.visorando.com/randonnee-les-chalets-de-sales-depuis-le-lignon/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249738/1_kaywgm.webp",
        "public_id": "1_kaywgm"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249740/2_kik8jc.webp",
        "public_id": "2_kik8jc"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249744/3_h7la5y.webp",
        "public_id": "3_h7la5y"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249742/4_xohcvs.webp",
        "public_id": "4_xohcvs"
      }
    ]
  },
  {
    "_id": "lac-des-verdets",
    "title": "Lac des verdets",
    "date": "2025-06-08T00:00:00",
    "location": "Giffre",
    "difficulty": "Moyen",
    "interest": "Faible",
    "tags": ["Refuge"],
    "description": "Montée sur piste facile mais rando stoppée car le brouillard ne s'est pas levé.",
    "url": "https://www.visorando.com/randonnee-lac-des-verdets/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249669/1_vnonyt.webp",
        "public_id": "1_vnonyt"
      }
    ]
  },
  {
    "_id": "le-bout-du-monde",
    "title": "Le bout du monde",
    "date": "2025-06-07T00:00:00",
    "location": "Giffre",
    "difficulty": "Facile",
    "interest": "Fort",
    "tags": ["Torrent", "Cirque", "Cascade"],
    "description": "Parking non payant à partir de 15h30. Faite par mauvais temps donc peu frequentée mais très populaire. Vu la météo humide, rando stoppée.",
    "url": "https://www.visorando.com/randonnee-le-bout-du-monde-3/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249484/1_i2zlf5.webp",
        "public_id": "1_i2zlf5"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249265/2_rodyww.webp",
        "public_id": "2_rodyww"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249267/4_sv4xih.webp",
        "public_id": "4_sv4xih"
      }
    ]
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
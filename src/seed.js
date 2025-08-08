const Data = require("./data");

const randos = [
  {
    "_id": "lac-de-loie",
    "title": "Lac de Loie",
    "date": "2023-07-30T00:00:00.000Z",
    "location": "Vallée d'Aoste",
    "difficulty": "Moyen",
    "interest": "Fort",
    "tags": ["Lac", "Torrent"],
    "description": "Première randonnée de notre séjour dans la vallée d'Aoste. Pause au lac assez fréquenté, vallon très beau !",
    "url": "https://www.altituderando.com/Lac-de-Loie-2354m-en-boucle-par-Lillaz-et-le-vallon-de-Bardoney",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250667/1_qm7buu.jpg",
        "public_id": "v1754250667/1_qm7buu"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250670/2_p4nell.jpg",
        "public_id": "v1754250670/2_p4nell"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250672/3_rc30tg.jpg",
        "public_id": "v1754250672/3_rc30tg"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250664/4_nwhgoq.jpg",
        "public_id": "v1754250664/4_nwhgoq"
      }
    ]
  },
  {
    "_id": "pointe-de-metz",
    "title": "Pointe de Metz",
    "date": "2023-07-31T00:00:00.000Z",
    "location": "Vallée d'Aoste",
    "difficulty": "Moyen",
    "interest": "Moyen",
    "tags": ["Lac"],
    "description": "Randonnée sympa. Attention à bien s'orienter lors de la petite section hors sentier.",
    "url": "https://www.altituderando.com/Pointe-de-Metz-2552m-Pointe-de-Chaligne-2607m-et-Lago-Fallere-en-boucle-par",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250731/1_inl9v2.jpg",
        "public_id": "v1754250731/1_inl9v2"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250734/2_kxgugv.jpg",
        "public_id": "v1754250734/2_kxgugv"
      }
    ]
  },
  {
    "_id": "boucle-grand-collet",
    "title": "Boucle Grand Collet",
    "date": "2023-08-01T00:00:00.000Z",
    "location": "Vallée d'Aoste",
    "difficulty": "Moyen",
    "interest": "Fort",
    "tags": ["Chamois", "Bouquetin", "Gran-Paradiso"],
    "description": "Très belle randonnée pas trop fréquentée, belle vue sur Gran Paradiso au col.",
    "url": "https://www.komoot.com/fr-fr/smarttour/709796",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249957/1_wqyibu.jpg",
        "public_id": "v1754249957/1_wqyibu"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249971/2_cgwl9j.jpg",
        "public_id": "v1754249971/2_cgwl9j"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249955/3_clyqyl.jpg",
        "public_id": "v1754249955/3_clyqyl"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249968/4_v665fs.jpg",
        "public_id": "v1754249968/4_v665fs"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250043/5_av0wks.jpg",
        "public_id": "v1754250043/5_av0wks"
      }
    ]
  },
  {
    "_id": "lago-goletta",
    "title": "Lago Goletta",
    "date": "2023-08-02T00:00:00.000Z",
    "location": "Vallée d'Aoste",
    "difficulty": "Difficile",
    "interest": "Fort",
    "tags": ["Lac", "Refuge", "Cascade"],
    "description": "Belle randonnée depuis Thumel. Montée le matin au lago Goletta, vue sur le glacier (on ne s'est pas attardé vu le vent glacial.) Nous avons déjeuné au refuge Benevolo puis fait une boucle l'après-midi sur le chemin 13C avec une belle vue sur une impressionante cascade et lac Tsanteleina et sa couleur turquoise.",
    "url": "https://fr.wikiloc.com/itineraires-randonnee/rifugio-benevolo-lago-goletta-colle-goletta-via-thumel-altavia-80203405",
    "images": [
       {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250171/2_vzbqqv.jpg",
        "public_id": "v1754250171/2_vzbqqv"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250178/1_rjcmvl.jpg",
        "public_id": "v1754250178/1_rjcmvl"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250174/3_fmupmr.jpg",
        "public_id": "v1754250174/3_fmupmr"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250176/4_wqrb2f.jpg",
        "public_id": "v1754250176/4_wqrb2f"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250298/5_yoav5l.jpg",
        "public_id": "v1754250298/5_yoav5l"
      }
    ]
  },
  {
    "_id": "refuge-bezzi",
    "title": "Refuge Bezzi",
    "date": "2023-08-03T00:00:00.000Z",
    "location": "Vallée d'Aoste",
    "difficulty": "Difficile",
    "interest": "Moyen",
    "tags": ["Lac", "Refuge", "Bouquetin"],
    "description": "Après avoir atteint le refuge sur une piste facile, nous sommes monté au lago di San Martino pour la pause déjeuner. Puis nous avons decide d'effectuer le retour par le balcon avec sur le parcours quelques difficultés et grimpettes  : ce fut une très longue randonnée (j'ai trouvé un topo qui correspond : + 30 km‑effort…) On a fait une break ensuite !",
    "url": "https://www.altituderando.com/Lago-di-San-Martino-2770m-en-boucle-par-le-refuge-Bezzi-et-le-col-de-la-Becca",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250372/1_zpxrvc.jpg",
        "public_id": "v1754250372/1_zpxrvc"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250375/2_jzhaff.jpg",
        "public_id": "v1754250375/2_jzhaff"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250377/3_y75mbw.jpg",
        "public_id": "v1754250377/3_y75mbw"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250380/4_rqpcqa.jpg",
        "public_id": "v1754250380/4_rqpcqa"
      }
    ]
  },
  {
    "_id": "bivouac-gerard-grappein",
    "title": "Bivouac Gérard-Grappein",
    "date": "2023-08-06T00:00:00.000Z",
    "location": "Vallée d'Aoste",
    "difficulty": "Difficile",
    "interest": "Fort",
    "tags": ["Chamois", "Bouquetin", "Glacier"],
    "description": "Départ de Valnontey pour le bivouac à presque 3200 m soit 1500 m de dénivelé en 10 kms de montée. Jamais vu autant de bouquetins, par contre presque pas croisé d'humains ! Vu sur le glacier.",
    "url": "https://www.inalto.org/fr/rapports/alpinisme/bivacco-pol-grappein-da-valnontey",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250464/1_lft6i6.jpg",
        "public_id": "v1754250464/1_lft6i6"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250458/2_ugi33e.jpg",
        "public_id": "v1754250458/2_ugi33e"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250466/3_diyzuy.jpg",
        "public_id": "v1754250466/3_diyzuy"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250461/5_b1ygls.jpg",
        "public_id": "v1754250461/5_b1ygls"
      }
    ]
  },
  {
    "_id": "refuge-vittorio-sella",
    "title": "Refuge Vittorio Sella",
    "date": "2023-08-08T00:00:00.000Z",
    "location": "Vallée d'Aoste",
    "difficulty": "Moyen",
    "interest": "Moyen",
    "tags": ["Refuge"],
    "description": "Très fréquenté par les familles italiennes (avec la mamie, les enfants et le petit chien) qui vont déjeuner au refuge. On a un peu prolongé avant de redescendre prendre le café à ce même refuge.",
    "url": "https://www.visorando.com/randonnee-aller-retour-au-refuge-vittorio-sella-de/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250539/1_beadam.jpg",
        "public_id": "v1754250539/1_beadam"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250537/2_udnbg9.jpg",
        "public_id": "v1754250537/2_udnbg9"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250542/3_vjvc8d.jpg",
        "public_id": "v1754250542/3_vjvc8d"
      }
    ]
  },
  {
    "_id": "laghi-di-lussert-et-mont-des-laures",
    "title": "Laghi di Lussert et Mont des Laures",
    "date": "2023-08-09T00:00:00.000Z",
    "location": "Vallée d'Aoste",
    "difficulty": "Difficile",
    "interest": "Moyen",
    "tags": ["Lac", "Pierrier"],
    "description": "Dernière randonnée de notre séjour dans la vallée d'Aoste. On a déjeuné au refuge Grauson avant de poursuivre jusqu'au col des Laures. Assez difficile dans la dernière montée avec de gros blocs rocheux. Encore 20 km A/R et 1200 m de dénivelé !",
    "url": "https://www.altituderando.com/Laghi-di-Lussert-et-Mont-des-Laures-3121m",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250596/1_qb8frq.jpg",
        "public_id": "v1754250596/1_qb8frq"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250593/2_jcatka.jpg",
        "public_id": "v1754250593/2_jcatka"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754250598/3_d9dxoh.jpg",
        "public_id": "v1754250598/3_d9dxoh"
      }
    ]
  },
  {
    "_id": "le-pas-de-loeille",
    "title": "Le pas de l'Oeille",
    "date": "2025-06-29T00:00:00.000Z",
    "location": "Vercors",
    "difficulty": "Moyen",
    "interest": "Moyen",
    "tags": ["Pierrier", "Bouquetin"],
    "description": "Randonnée faite pour échapper à la météo caniculaire à Lyon. Pas d'ombre après le vallon de Fauge. Descente par les pistes, peu d'intérêt. Break au resto du téléphérique (ouveert) et sieste au lac des Prés. Pas vu de bouquetins.",
    "url": "https://www.visorando.com/randonnee-pas-de-l-oeille-par-le-vallon-de-la-faug/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249819/1_u1xhrx.webp",
        "public_id": "v1754249819/1_u1xhrx"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249815/2_j9wgrn.webp",
        "public_id": "v1754249815/2_j9wgrn"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249817/3_ennvso.webp",
        "public_id": "v1754249817/3_ennvso"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249821/4_fjjnvg.webp",
        "public_id": "v1754249821/4_fjjnvg"
      }
    ]
  },
  {
    "_id": "les-chalets-de-sales",
    "title": "Les chalets de Sales",
    "date": "2025-06-09T00:00:00.000Z",
    "location": "Giffre",
    "difficulty": "Moyen",
    "interest": "Fort",
    "tags": ["Bouquetin", "Cirque", "Refuge"],
    "description": "Très fréquentée et encore le parking semblait vide mais cirque magnifique. Grande harde de bouquetins, peu farouches. Le refuge n'ouvrait que le week-end suivant. A prolonger si plus de temps.",
    "url": "https://www.visorando.com/randonnee-les-chalets-de-sales-depuis-le-lignon/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249738/1_kaywgm.webp",
        "public_id": "v1754249738/1_kaywgm"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249740/2_kik8jc.webp",
        "public_id": "v1754249740/2_kik8jc"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249744/3_h7la5y.webp",
        "public_id": "v1754249744/3_h7la5y"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249742/4_xohcvs.webp",
        "public_id": "v1754249742/4_xohcvs"
      }
    ]
  },
  {
    "_id": "lac-des-verdets",
    "title": "Lac des verdets",
    "date": "2025-06-08T00:00:00.000Z",
    "location": "Giffre",
    "difficulty": "Moyen",
    "interest": "Faible",
    "tags": ["Refuge"],
    "description": "Montée sur piste facile mais randonnée stoppée car le brouillard ne s'est pas levé. Peu d'intêret.",
    "url": "https://www.visorando.com/randonnee-lac-des-verdets/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249669/1_vnonyt.webp",
        "public_id": "v1754249669/1_vnonyt"
      }
    ]
  },
  {
    "_id": "le-bout-du-monde",
    "title": "Le bout du monde",
    "date": "2025-06-07T00:00:00.000Z",
    "location": "Giffre",
    "difficulty": "Facile",
    "interest": "Fort",
    "tags": ["Torrent", "Cirque", "Cascade"],
    "description": "Parking non payant à partir de 15h30. Faite par mauvais temps donc peu frequentée mais très populaire. Vu la météo humide, randonnée stoppée. Plusieurs torrents à traverser difficilement mais cascades magnifiques.",
    "url": "https://www.visorando.com/randonnee-le-bout-du-monde-3/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249484/1_i2zlf5.webp",
        "public_id": "v1754249484/1_i2zlf5"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249265/2_rodyww.webp",
        "public_id": "v1754249265/2_rodyww"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249264/3_yporfa.webp",
        "public_id": "v1754249264/3_yporfa"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754249267/4_sv4xih.webp",
        "public_id": "v1754249267/4_sv4xih"
      }
    ]
  },
  {
    "_id": "alleuze",
    "title": "Le site d'Alleuze",
    "date": "2025-05-31T00:00:00.000Z",
    "location": "Auvergne",
    "difficulty": "Facile",
    "interest": "Moyen",
    "tags": ["Ruine", "Rapace"],
    "description": "Chemins agréables (vu un milan cette fois-ci photographié) avec quelques beaux points de vue sur les gorges, pas fréquentés sauf au château. D'ailleurs au départ, ne pas louper le sentier (pas visible) Attention à  la dernière montée, difficile sous la chaleur (un vrai chemin de croix!)",
    "url": "https://www.visorando.com/randonnee-le-site-d-alleuze/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754550165/3_dta2f0.jpg",
        "public_id": "v1754550165/3_dta2f0"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754550161/4_w1btxq.jpg",
        "public_id": "v1754550161/4_w1btxq"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754550158/5_hsonla.jpg",
        "public_id": "v1754550158/5_hsonla"
      }
    ]
  },
  {
    "_id": "le-plomb-du-cantal",
    "title": "Le plomb du Cantal",
    "date": "2025-05-30T00:00:00.000Z",
    "location": "Auvergne",
    "difficulty": "Moyen",
    "interest": "Moyen",
    "tags": ["360°"],
    "description": "Très frequentée au sommet si téléphérique ouvert, descente sur piste moins intéressante. Aucune ombre. Vu milans (j'ai loupé la photo) Restos au téléphérique et au départ.",
    "url": "https://www.visorando.com/randonnee-plomb-du-cantal-a-partir-du-col-de-prat-/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754550181/1_ghx0li.jpg",
        "public_id": "v1754550181/1_ghx0li"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754550177/2_geqsxh.jpg",
        "public_id": "v1754550177/2_geqsxh"
      }
    ]
  },
  {
    "_id": "lacs-robert-par-loursiere",
    "title": "Lacs Robert par l'Oursière",
    "date": "2025-05-18T00:00:00.000Z",
    "location": "Belledonne",
    "difficulty": "Moyen",
    "interest": "Moyen",
    "tags": ["Névé", "Cascade", "Lac"],
    "description": "Assez fréquentée aux lacs. Pour la descente, pris par la brèche Nord vu l'enneigement. Dernier km sur la route principale moins intéressant...",
    "url": "https://www.visorando.com/randonnee-lacs-robert-par-l-oursiere/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754549211/1_iob5xw.jpg",
        "public_id": "v1754549211/1_iob5xw"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754549209/2_uyyoli.jpg",
        "public_id": "v1754549209/2_uyyoli"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754549216/3_zuvvkn.jpg",
        "public_id": "v1754549216/3_zuvvkn"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754549213/4_sy6rja.jpg",
        "public_id": "v1754549213/4_sy6rja"
      }
    ]
  },
  {
    "_id": "boucle-des-3-vallons",
    "title": "Boucle des 3 vallons",
    "date": "2025-05-03T00:00:00.000Z",
    "location": "Dévoluy",
    "difficulty": "Moyen",
    "interest": "Fort",
    "tags": ["Névé", "Bouquetin"],
    "description": "Randonnée stoppée à cause de nombreux névés au col. Nombreux bouquetins. A refaire !",
    "url": "https://www.visorando.com/randonnee-boucle-des-trois-vallons-a-saint-etienne/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548509/1_vdk4n1.jpg",
        "public_id": "v1754548509/1_vdk4n1"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548510/2_q0nr9e.jpg",
        "public_id": "v1754548510/2_q0nr9e"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548507/3_c9t5hg.jpg",
        "public_id": "v1754548507/3_c9t5hg"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548508/4_jqxaqa.jpg",
        "public_id": "v1754548508/4_jqxaqa"
      }
    ]
  },
  {
    "_id": "col-aiguille",
    "title": "Col de l'Aiguille",
    "date": "2025-05-02T00:00:00.000Z",
    "location": "Dévoluy",
    "difficulty": "Moyen",
    "interest": "Fort",
    "tags": ["Névé", "Chamois", "Cascade"],
    "description": "Très belle rando, faite en A/R à cause de l'enneigement. Vu quelques chamois juste avant de repartir de la pause déjeuner.",
    "url": "https://www.visorando.com/randonnee-col-de-l-aiguille/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548595/1_fc2iu9.jpg",
        "public_id": "v1754548595/1_fc2iu9"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548697/2_jrgrj6.jpg",
        "public_id": "v1754548697/2_jrgrj6"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548593/3_jyhxl2.jpg",
        "public_id": "v1754548593/3_jyhxl2"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548591/4_yseudd.jpg",
        "public_id": "v1754548591/4_yseudd"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548590/5_wgafdi.jpg",
        "public_id": "v1754548590/5_wgafdi"
      }
    ]
  },
  {
    "_id": "crêtes-de-baumes-par-les-etroits",
    "title": "Crêtes de Baumes par les Etroits",
    "date": "2025-05-01T00:00:00.000Z",
    "location": "Dévoluy",
    "difficulty": "Moyen",
    "interest": "Moyen",
    "tags": ["360°"],
    "description": "Randonnée pour mise en bouche d'un week-end dans le Dévoluy. Intérêt pour faune (serpents, faucons crécerelle ?) & flore.",
    "url": "https://www.visorando.com/randonnee-cretes-de-baumes-par-les-etroits/",
    "images": [
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548800/1_ffnfft.jpg", "public_id": "v1754548800/1_ffnfft"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548736/2_cbbf8g.jpg", "public_id": "v1754548736/2_cbbf8g"}
    ]
  },
  {
    "_id": "cret-de-la-goutte",
    "title": "Crêt de la Goutte",
    "date": "2025-04-06T00:00:00.000Z",
    "location": "Jura",
    "difficulty": "Moyen",
    "interest": "Moyen",
    "tags": ["Névé", "Vent"],
    "description": "1ère montée raide (sur piste) ensuite aucune difficulté. Attention très venteux (bien se couvrir.)",
    "url": "https://www.visorando.com/randonnee-menthieres-cret-de-la-goutte-par-le-sac-/",
    "images": []
  },
  {
    "_id": "caldera-de-los-cuervos",
    "title": "Caldera de los Cuervos",
    "date": "2024-11-24T00:00:00.000Z",
    "location": "Lanzarote",
    "difficulty": "Facile",
    "interest": "Moyen",
    "tags": ["Volcan"],
    "description": "1ère courte randonnée sur Lanzarote faite le matin. Assez frequentée. Balade facile qui permet de rentrer dans le cratère et d'en faire le tour.",
    "url": "https://www.visorando.com/randonnee-caldera-de-los-cuervos/",
    "images": [
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548162/1_ebch9g.jpg", "public_id": "v1754548162/1_ebch9g"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548162/2_uivhyn.jpg", "public_id": "v1754548162/2_uivhyn"}
    ]
  },
  {
    "_id": "tour-de-l-islote-del-mojon",
    "title": "Tour de l'Islote del Mojon",
    "date": "2024-11-24T00:00:00.000Z",
    "location": "Lanzarote",
    "difficulty": "Facile",
    "interest": "Fort",
    "tags": ["Océan", "Lave"],
    "description": "Départ du village del Golfo. Après avoir déjeuner de bons plats de poissons à la Casa Rafa, nous avons fait la boucle en partie dans le parc de Timanfaya à travers les champs de lave. Le retour se fait le long de l'océan. Pause à la playa del Paso (mer agitée !)",
    "url": "https://www.visorando.com/randonnee-tour-de-l-islote-del-mojon-au-depart-d-e/",
    "images": [
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548290/3_d2lp2e.jpg", "public_id": "v1754548290/3_d2lp2e"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548288/4_wvufgu.jpg", "public_id": "v1754548288/4_wvufgu"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548285/5_s9wb2q.jpg", "public_id": "v1754548285/5_s9wb2q"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548289/6_ak4cri.jpg", "public_id": "v1754548289/6_ak4cri"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548285/7_mrda3c.jpg", "public_id": "v1754548285/7_mrda3c"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548287/8_fy1gmz.jpg", "public_id": "v1754548287/8_fy1gmz"}
    ]
  },
  {
    "_id": "caldera-blanca",
    "title": "Caldera blanca",
    "date": "2024-11-25T00:00:00.000Z",
    "location": "Lanzarote",
    "difficulty": "Facile",
    "interest": "Fort",
    "tags": ["Volcan", "360°"],
    "description": "Randonnée sur la crête de la caldera.  Assez frequentée, partir tôt aussi pour la chaleur de la pierre volcanique et le parking rapidement rempli. Montée assez raide mais belles vues.",
    "url": "https://www.visorando.com/randonnee-caldera-blanca-lanzarote/",
    "images": [
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548081/1_mz9ixn.jpg", "public_id": "v1754548081/1_mz9ixn"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548081/2_vxyuvw.jpg", "public_id": "v1754548081/2_vxyuvw"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548082/3_y9ovoc.jpg", "public_id": "v1754548082/3_y9ovoc"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548083/4_ibkl4p.jpg", "public_id": "v1754548083/4_ibkl4p"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548081/5_y5uwht.jpg", "public_id": "v1754548081/5_y5uwht"}
    ]
  },
  {
    "_id": "vignoble-de-la-geria",
    "title": "Vignoble de la Geria",
    "date": "2024-11-26T00:00:00.000Z",
    "location": "Lanzarote",
    "difficulty": "Facile",
    "interest": "Moyen",
    "tags": ["Vignoble", "Volcan", "360°"],
    "description": "Départ de la Asomada (Airbnb), randonnée à travers les vignes faite en sens inverse du topo. Pas grande monde. Fait l'A/R rapide au sommet du Guardilama (cratère aménagé en jardin)",
    "url": "https://www.visorando.com/randonnee-vignoble-de-la-geria/",
    "images": [
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548350/1_hmyiub.jpg", "public_id": "v1754548350/1_hmyiub"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548350/2_i24blk.jpg", "public_id": "v1754548350/2_i24blk"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548351/3_muv2al.jpg", "public_id": "v1754548351/3_muv2al"}
    ]
  },
  {
    "_id": "montana-blanca",
    "title": "Montana blanca",
    "date": "2024-11-27T00:00:00.000Z",
    "location": "Lanzarote",
    "difficulty": "Facile",
    "interest": "Moyen",
    "tags": ["Volcan", "Canyon"],
    "description": "Fait le détour pour visiter le canyon (un peu de monde), partie la plus intéressante. Puis montée assez raide pour le sommet (de plus en plus brumeux au fil des jours)",
    "url": "https://www.visorando.com/randonnee-volcan-montana-blanca-en-boucle-depuis-l/",
    "images": [
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548414/1_jwtrz7.jpg", "public_id": "v1754548414/1_jwtrz7"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548413/2_nxzis7.jpg", "public_id": "v1754548413/2_nxzis7"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548412/3_pqq7cf.jpg", "public_id": "v1754548412/3_pqq7cf"}
    ]
  },
  {
    "_id": "boucle-au-depart-d-haria",
    "title": "Boucle au départ d'Haria",
    "date": "2024-11-28T00:00:00.000Z",
    "location": "Lanzarote",
    "difficulty": "Facile",
    "interest": "Moyen",
    "tags": ["Vent", "Océan"],
    "description": "Départ d'Haria pour monter vers le col (plusieurs traversées de la route principale) Après on se retrouve dans les jardins. Beau belvèdere sur la plage de Famara.  Au point 5, on a repris directement vers le village et non sur la crête vu le vent. Peu fréquenté",
    "url": "https://www.visorando.com/randonnee-boucle-au-depart-d-haria/",
    "images": [
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754547891/1_pxaeay.jpg", "public_id": "v1754547891/1_pxaeay"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754547891/2_telzcm.jpg", "public_id": "v1754547891/2_telzcm"}
    ]
  },
  {
    "_id": "tour-des-hameaux-de-laigue-agnelle",
    "title": "Tour des hameaux de l'Aigue Agnelle",
    "date": "2024-08-10T00:00:00.000Z",
    "location": "Queyras",
    "difficulty": "Facile",
    "interest": "Moyen",
    "tags": ["Marmotte"],
    "description": "Jour d'arrivée à Molines, petite rando au départ de l'Airbnb pour mise en jambes. Vu quelques marmottes.",
    "url": "https://www.visorando.com/randonnee-tour-des-hameaux-de-laigue-agnelle/",
    "images": [
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754302605/1_ouvhg0.jpg", "public_id": "v1754302605/1_ouvhg0"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754302604/2_dcnrpy.jpg", "public_id": "v1754302604/2_dcnrpy"}
    ]
  },
  {
    "_id": "la-gardiole-de-lalp",
    "title": "La gardiole de l'Alp",
    "date": "2024-08-11T00:00:00.000Z",
    "location": "Queyras",
    "difficulty": "Moyen",
    "interest": "Moyen",
    "tags": ["Marmotte", "360°"],
    "description": "Belle randonnée pas très fréquentée en partie sur les crêtes au-dessus des hameaux de Molines. Belle vue sur les Ecrins.",
    "url": "https://www.visorando.com/randonnee-la-gardiole-de-l-alp/",
    "images": [
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754302620/1_nbflbn.jpg", "public_id": "v1754302620/1_nbflbn"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754302621/2_fvo7nm.jpg", "public_id": "v1754302621/2_fvo7nm"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754302625/3_wiampp.jpg", "public_id": "v1754302625/3_wiampp"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754302623/4_wc7yax.jpg", "public_id": "v1754302623/4_wc7yax"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754302627/5_lllkeh.jpg", "public_id": "v1754302627/5_lllkeh"}
    ]
  },
  {
    "_id": "pic-de-caramantran-et-lacs-blanchet",
    "title": "Pic de Caramantran et lacs Blanchet",
    "date": "2024-08-12T00:00:00.000Z",
    "location": "Queyras",
    "difficulty": "Moyen",
    "interest": "Fort",
    "tags": ["Lac", "Refuge", "Bouquetin", "360°"],
    "description": "Beau 3000m accessible, à faire que ce soit pour le panorama ou les lacs Blanchet. Pause déjeuner au refuge de la Blanche, toujours aussi sympa pour te trouver une table même si tu n'as pas réservé !",
    "url": "https://www.visorando.com/randonnee-pic-de-caramantran-et-ses-lacs-depuis-l-/",
    "images": [
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754302651/1_xvn4dm.jpg", "public_id": "v1754302651/1_xvn4dm"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754302658/2_zi6jfg.jpg", "public_id": "v1754302658/2_zi6jfg"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754302653/3_pkolnb.jpg", "public_id": "v1754302653/3_pkolnb"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754302650/4_vbalsc.jpg", "public_id": "v1754302650/4_vbalsc"},
      {"url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754302656/5_hefpfh.jpg", "public_id": "v1754302656/5_hefpfh"}
    ]
  },
  {
    "_id": "col-de-jean",
    "title": "Col de Jean",
    "date": "2025-07-12T00:00:00.000Z",
    "location": "Vanoise",
    "difficulty": "Moyen",
    "interest": "Moyen",
    "tags": [],
    "description": "Randonnée au-dessus de Méribel. La montée se fait à découvert donc s'il fait assez chaud, ça la rend assez difficile. Beau panorama au col. Le grand lac est petit...",
    "url": "https://www.visorando.com/randonnee-col-de-jean-au-dessus-des-allues/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548873/1_dkjymt.jpg",
        "public_id": "1754548873/1_dkjymt"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548875/2_zs7h08.jpg",
        "public_id": "1754548875/2_zs7h08"
      }
    ]
  },
  {
    "_id": "col-du-soufre",
    "title": "Col du Soufre",
    "date": "2025-07-13T00:00:00.000Z",
    "location": "Vanoise",
    "difficulty": "Moyen",
    "interest": "Fort",
    "tags": ["Torrent", "Refuge", "Lac", "Glacier", "Bouquetin"],
    "description": "Direction le col du Soufre dans le parc de la Vanoise. Nous n'avons pas fait les 23kms ni vu le glacier car les nuages s'accumulaient au col. Nous avons déjeuné à un petit lac avec cascade en-dessous du lac du Mont Coua. Puis nous sommes redescendu au refuge du Saut prendre le café où des bouquetins faisaient l'animation.",
    "url": "https://www.visorando.com/randonnee-le-col-du-soufre-pour-un-belvedere-sur-l/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754549014/1_xxb7yk.jpg",
        "public_id": "1754549014/1_xxb7yk"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754549016/2_dhfba4.jpg",
        "public_id": "1754549016/2_dhfba4"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548954/3_gb3rwt.jpg",
        "public_id": "1754548954/3_gb3rwt"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754548952/4_pmyxyq.jpg",
        "public_id": "1754548952/4_pmyxyq"
      }
    ]
  },
  {
    "_id": "pain-de-sucre",
    "title": "Pain de sucre",
    "date": "2024-08-13T00:00:00.000Z",
    "location": "Queyras",
    "difficulty": "Difficile",
    "interest": "Fort",
    "tags": ["360°"],
    "description": "Montée courte mais raide. Assez aérienne vers la fin. Attention à la descente, retrouver le bon chemin. Très fréquenté sur la partie du col Vieux. La vue est belle à plus de 3000m si les nuages (italiens) ne sont pas trop présents !",
    "url": "https://www.visorando.com/randonnee-le-pain-de-sucre-2/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754302673/1_svgbky.jpg",
        "public_id": "1754302673/1_svgbky"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754302671/2_q855xf.jpg",
        "public_id": "1754302671/2_q855xf"
      }
    ]
  },
  {
    "_id": "crete-de-la-marcelette",
    "title": "Crête de la Marcelette",
    "date": "2024-08-14T00:00:00.000Z",
    "location": "Queyras",
    "difficulty": "Moyen",
    "interest": "Moyen",
    "tags": [],
    "description": "Rando sur les crêtes interrompue à cause d'une dégradation pluvieuse.",
    "url": "https://www.visorando.com/randonnee-saint-veran-crete-de-la-marcelette/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754302686/1_nckcbm.jpg",
        "public_id": "1754302686/1_nckcbm"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754302688/2_itvssk.jpg",
        "public_id": "1754302688/2_itvssk"
      }
    ]
  },
  {
    "_id": "lago-di-camoscera",
    "title": "Lago di Camoscera",
    "date": "2024-08-20T00:00:00.000Z",
    "location": "Alta Valle Varaita",
    "difficulty": "Moyen",
    "interest": "Moyen",
    "tags": ["Lac"],
    "description": "Départ de Ponte Pelvo pour 800m de dénivélé. Fait en A/R, mais possible de faire boucle. Dernière montée assez raide surtout pour une reprise après un virus...",
    "url": "https://fr.wikiloc.com/itineraires-randonnee/lago-della-camoscera-da-celle-di-bellino-54351923",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290420/1_yenxkq.jpg",
        "public_id": "1754290420/1_yenxkq"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290421/2_fze8tl.jpg",
        "public_id": "1754290421/2_fze8tl"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290419/3_lmeteb.jpg",
        "public_id": "1754290419/3_lmeteb"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290422/4_p8wvi8.jpg",
        "public_id": "1754290422/4_p8wvi8"
      }
    ]
  },
  {
    "_id": "rifugio-vallanta",
    "title": "Rifugio Vallanta",
    "date": "2024-08-21T00:00:00.000Z",
    "location": "Alta Valle Varaita",
    "difficulty": "Moyen",
    "interest": "Fort",
    "tags": ["Lac", "Refuge", "Monviso", "Torrent"],
    "description": "Jusqu'au refuge Vallanta en A/R. Randonnée assez frequentée, mais très belle le long du torrent. Il faisait assez frais au refuge.",
    "url": "https://www.alpicuneesi.it/itinerari/vallevaraita/1506.htm",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290477/1_awnprg.jpg",
        "public_id": "1754290477/1_awnprg"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290480/2_gsylcz.jpg",
        "public_id": "1754290480/2_gsylcz"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290478/3_lmqm4y.jpg",
        "public_id": "1754290478/3_lmqm4y"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290480/4_xsxepr.jpg",
        "public_id": "1754290480/4_xsxepr"
      }
    ]
  },
  {
    "_id": "monte-ferra",
    "title": "Monte Ferra",
    "date": "2024-08-22T00:00:00.000Z",
    "location": "Alta Valle Varaita",
    "difficulty": "Moyen",
    "interest": "Moyen",
    "tags": ["Marmotte", "Rapace", "Fouine"],
    "description": "Vers le Monte Ferra en A/R, montée au sommet non faite (arrivée da la nebbia) Nous avons croisé un berger et un autre randonneur. Rencontré une fouine. Et vu des rapaces.",
    "url": "https://www.altituderando.com/Monte-Ferra-3094m",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290530/1_uafyyr.jpg",
        "public_id": "1754290530/1_uafyyr"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290532/2_j077ri.jpg",
        "public_id": "1754290532/2_j077ri"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290528/3_vuyd3x.jpg",
        "public_id": "1754290528/3_vuyd3x"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290527/4_z6w75s.jpg",
        "public_id": "1754290527/4_z6w75s"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290530/5_gfnvze.jpg",
        "public_id": "1754290530/5_gfnvze"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290526/6_gnpau7.jpg",
        "public_id": "1754290526/6_gnpau7"
      }
    ]
  },
  {
    "_id": "colle-di-bellino",
    "title": "Colle di Bellino",
    "date": "2024-08-23T00:00:00.000Z",
    "location": "Alta Valle Varaita",
    "difficulty": "Moyen",
    "interest": "Fort",
    "tags": ["Marmotte", "Torrent"],
    "description": "Départ de Sant'Anna. Très venteux au col. Très belle randonnée en A/R dans un cadre enchanteur ! (1000m de dénivelé pour 15kms au total)",
    "url": "https://cuneotrekking.com/itinerari/escursioni/escursione-al-monte-bellino-2942-m-valle-varaita/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290618/1_jbszcu.jpg",
        "public_id": "1754290618/1_jbszcu"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290624/2_zpmkrd.jpg",
        "public_id": "1754290624/2_zpmkrd"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290617/3_mvdvaa.jpg",
        "public_id": "1754290617/3_mvdvaa"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290622/4_vk0rnd.jpg",
        "public_id": "1754290622/4_vk0rnd"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290621/5_m3go5u.jpg",
        "public_id": "1754290621/5_m3go5u"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290619/6_qmsz2l.jpg",
        "public_id": "1754290619/6_qmsz2l"
      }
    ]
  },
  {
    "_id": "notre-dame-des-alpages-",
    "title": "Notre-Dame des Alpages",
    "date": "2024-05-09T00:00:00.000Z",
    "location": "Aravis",
    "difficulty": "Moyen",
    "interest": "Moyen",
    "tags": ["Chamois", "Bouquetin", "Mont-Blanc"],
    "description": "Départ de la Giettaz de notre Airbnb (ne pas louper le point de vente de reblochons fermiers) Randonnée sympa pas fréquentée, vu un chamois et quelques bouquetins (apparemment maldades dans ce coin de Savoie) Beau point de vue sur le Mont-Blanc",
    "url": "https://www.visorando.com/randonnee-notre-dame-des-alpages-au-depart-de-la-g/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290367/1_a8w1kz.jpg",
        "public_id": "1754290367/1_a8w1kz"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290366/2_q2gdib.jpg",
        "public_id": "1754290366/2_q2gdib"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290368/3_ujy4li.jpg",
        "public_id": "1754290368/3_ujy4li"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290368/4_sd14zy.jpg",
        "public_id": "1754290368/4_sd14zy"
      }
    ]
  },
  {
    "_id": "combe-des-aravis",
    "title": "Combe des Aravis",
    "date": "2024-05-10T00:00:00.000Z",
    "location": "Aravis",
    "difficulty": "Difficile",
    "interest": "Moyen",
    "tags": ["Névé"],
    "description": "Départ des Confins. Nous avons essayé le Passage du Père mais beaucoup trop enneigé et instable pour continuer. Nous sommes redescendu et fait une boucle par la Pierre marquée. Assez frequenté.",
    "url": "",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290303/1_fvn0wx.jpg",
        "public_id": "1754290303/1_fvn0wx"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290304/2_oon0s3.jpg",
        "public_id": "1754290304/2_oon0s3"
      }
    ]
  },
  {
    "_id": "croisse-baulet",
    "title": "Croisse Baulet",
    "date": "2024-05-11T00:00:00.000Z",
    "location": "Aravis",
    "difficulty": "Difficile",
    "interest": "Fort",
    "tags": ["Névé", "Mont-Blanc"],
    "description": "Montée raide dès le départ, peu frequentée. 1000m de dénivelé pour moins de 10km au total. Au sommet beau panorama, notamment sur le Mont Blanc si les nuages le permettent. Encore très enneigé (plusieurs fois on s'est enfoncé) et descente glissante (un petit doigt s'en souvient...)",
    "url": "https://www.visorando.com/randonnee-croisse-baulet-en-boucle-depuis-le-plan/",
    "images": [
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290242/1_h93k6w.jpg",
        "public_id": "1754290242/1_h93k6w"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290242/2_nsazi4.jpg",
        "public_id": "1754290242/2_nsazi4"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290242/3_opa85p.jpg",
        "public_id": "1754290242/3_opa85p"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290243/4_vkcjii.jpg",
        "public_id": "1754290243/4_vkcjii"
      },
      {
        "url": "https://res.cloudinary.com/djmn3bzxe/image/upload/v1754290243/5_cjqehj.jpg",
        "public_id": "1754290243/5_cjqehj"
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
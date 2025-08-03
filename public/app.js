fetch('http://localhost:3000/api/data') 
  .then(res => res.json())
  .then(data => {
    const page = document.body.getAttribute('data-page');
    if (page === 'index') {
      loadIndex(data);
     
const { locations, difficulties, interests, tags } = extractCategories(data);

  const menus = {
    'Massif': locations,
    'Difficulté': difficulties,
    'Intérêt': interests,
    'Tag': tags,
  };

      generateMenusFromData(menus);
      initMenuToggle();
    }
    if (page === 'listing') {
      loadListingFiltered(data);
    }
    if (page === 'detail') {
      loadDetail();
    }
  })
  .catch(err => {console.error('Erreur API', err);
      const index = document.querySelector('.gallery');
      const error = document.createElement('div');
      error.innerHTML = `<div class="error">Problème avec les données 😕</div>`;
      index.appendChild(error);}
);

function extractCategories(data) {
  const locations = [...new Set(data.map(r => r.location))];
  const difficulties = [...new Set(data.map(r => r.difficulty))];
  const interests = [...new Set(data.map(r => r.interest))];
  const tags = [...new Set(data.flatMap(r => r.tags))];

  return { locations, difficulties, interests, tags };
}

// PAGE INDEX : Affiche les 4 dernières randos
function loadIndex(data) {
  const gallery = document.querySelector('.gallery');
  const lastFour = [...data].slice(-4).reverse();
  lastFour.forEach((rando, index)  => {
    const isSecond = index === 1;
    const bloc = document.createElement('div');
    bloc.innerHTML = `
  <details ${isSecond ? 'open' : ''} name="paysages">
    <summary><img src="images/${rando._id}_1.webp" alt="${rando.title}"></summary>
    <div class="details-content">
      <h2><a href="detail.html?id=${rando._id}">${rando.title}</a></h2>
    </div>
  </details>`
;

gallery.appendChild(bloc.firstElementChild);
  });
}

// PAGE LISTING : Affiche les résultats filtrés
function loadListingFiltered(data) {
  const params = new URLSearchParams(window.location.search);
  const loc = params.get('location');
  const diff = params.get('difficulty');
  const int = params.get('interest');
  const tag = params.get('tag');

  
  let filtered = [...data].reverse();
  if (loc) filtered = filtered.filter(r => r.location === loc);
  if (diff) filtered = filtered.filter(r => r.difficulty === diff);
  if (int) filtered = filtered.filter(r => r.interest === int);
  if (tag) filtered = filtered.filter(r => r.tags.includes(tag));

  const containerFilter = document.querySelector('.container-filter');
 containerFilter.innerHTML = '';

  if (filtered.length === 0) {
    containerFilter.innerHTML = '<p>Aucune randonnée trouvée 😕</p>';
    return;
  }

  filtered.forEach(rando => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="img-card"><img src="images/${rando._id}_1.webp" alt="${rando.title}"></div>
      <div class="card-content">
      <div class="card-title"><a href="detail.html?id=${rando._id}"><h2>${rando.title}</h2></a></div>
      <div class="description">
        <p>${rando.description}</p>
        </div>
        <span class="wrap-menu">
          <h4 class="menu-card menu-location"><span class="icon">${rando.location}</h4>
          <h4 class="menu-card menu-difficult"><span class="icon">${rando.difficulty}</h4>
          <h4 class="menu-card menu-heart"><span class="icon">${rando.interest}</h4>
          <h4 class="menu-card menu-tag tag-card"><span class="icon"> ${rando.tags[0]}</h4>
        </span>
      </div>`;
    containerFilter.appendChild(card);
  });
}


// PAGE DETAIL : Affiche les infos d’une rando par ID
function loadDetail() {
  const main = document.querySelector('main');
  main.innerHTML = '';
  const id = new URLSearchParams(window.location.search).get('id');

  fetch(`http://localhost:3000/api/data/${id}`) 
    .then(res => {
      if (!res.ok) throw new Error('Rando introuvable');
      return res.json();
    })
    .then(rando => {
      const rawDate = new Date(rando.date);
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      const formattedDate = rawDate.toLocaleDateString('fr-FR', options);

      const imagesHTML = rando.images
        .map(num => `<div class="img-detail"><img src="images/${rando._id}_${num}.webp" alt="photo${num}"></div>`)
        .join('');

      const linkHTML = rando.url
        ? `<a href="${rando.url}" target="_blank"><i class="fa-solid fa-link"></i></a>`
        : `<i class="fa-solid fa-link-slash"></i>`;

      const detail = document.createElement('div');
      detail.className = 'detail';
      detail.innerHTML = `
        <div class="content">
          <div class="main-info">
            <div class="sub-title">
              <h2>${rando.title}</h2>
              ${linkHTML}
              <div class="date">
                <p><i class="fa-regular fa-calendar-days"></i> ${formattedDate}</p>
              </div>
            </div>
            <div class="text">
              <p>${rando.description}</p>
            </div>
          </div>  
          <div class="detail-menu">
            <h4 class="menu-card menu-location"><span class="icon">${rando.location}</span></h4>
            <h4 class="menu-card menu-difficult"><span class="icon">${rando.difficulty}</span></h4>
            <h4 class="menu-card menu-heart"><span class="icon">${rando.interest}</span></h4>
            <h4 class="menu-card menu-tag tag-card"><span class="icon">${rando.tags.join(', ')}</span></h4>
          </div>
        </div> 
        <div class="map">
          <button id="first"></button>
          <button id="next"></button>
          <button id="last"></button>
        </div>
        <div class="center">
          <div class="wrapper">
            <div class="inner">
              ${imagesHTML}
            </div> 
          </div> 
        </div>
      `;

      main.appendChild(detail);
      const imageCount = detail.querySelectorAll('.img-detail').length;
      initSlider(imageCount);
    })
    .catch(err => {
      main.innerHTML = `<p class="error">Erreur lors du chargement de la randonnée 😕</p>`;
      console.error(err);
    });
}

// FILTRES : Redirection au clic selon ton menu HTML
function initFilters() {
  document.querySelectorAll('.menu-dropdown li').forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.closest('.menu');
      const category = parent.querySelector('.label')?.dataset.original;
      const value = item.textContent.trim();

      const params = new URLSearchParams();

      if (category === 'Massif') params.set('location', value);
      else if (category === 'Difficulté') params.set('difficulty', value);
      else if (category === 'Intérêt') params.set('interest', value);
      else if (category === 'Tag') params.set('tag', value);

      window.location.href = `listing.html?${params.toString()}`;
    });
  });
}


//Créer le menu déroulant
function generateMenusFromData(data) {
   
  const menuContainer = document.getElementById('menu-container');
  menuContainer.innerHTML = ''; // Clear existing menus if needed

  const classes = {
    'Massif': 'menu-location',
    'Difficulté': 'menu-difficult',
    'Intérêt': 'menu-heart',
    'Tag': 'menu-tag'
  };

   Object.entries(data).forEach(([label, values]) => {
 
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const title = document.createElement('h4');
    title.classList.add('menu-title', classes[label]);

    const icon = document.createElement('span');
    icon.classList.add('icon');

    const labelSpan = document.createElement('span');
    labelSpan.classList.add('label');
    labelSpan.dataset.original = label;
    labelSpan.textContent = label;
   
    title.appendChild(icon);
    title.appendChild(labelSpan);

    const dropdown = document.createElement('ul');
    dropdown.classList.add('menu-dropdown');

    values.forEach((val) => {
      const li = document.createElement('li');
      li.textContent = val;
      dropdown.appendChild(li);
    });

    menu.appendChild(title);
    menu.appendChild(dropdown);
    menuContainer.appendChild(menu)
  });
  initMenuListeners(); 

}

//Ouvre le menu déroulant
function initMenuToggle() {
  document.querySelectorAll('.menu-title').forEach((title) => {
    title.addEventListener('click', () => {
      const parent = title.closest('.menu');
      if (parent) {
        parent.classList.toggle('open');
      }
    });
  });
}

//Sélection et affichage d'une option dans le menu déroulant 
function initMenuListeners() {
  document.querySelectorAll('.menu-dropdown li').forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.closest('.menu');
      const label = parent.querySelector('.label');
      if (label) label.textContent = item.textContent;
        parent.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    document.querySelectorAll('.menu').forEach(menu => {
      if (!menu.contains(e.target)) {
        menu.classList.remove('open');
      }
    });
  });
}
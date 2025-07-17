//Menu déroulant
document.querySelectorAll('.menu').forEach(menu => {
  const label = menu.querySelector('.menu-title .label');
  const dropdown = menu.querySelector('.menu-dropdown');
 
  // Ouvrir/fermer au clic sur le titre
  menu.querySelector('.menu-title').addEventListener('click', () => {
    dropdown.classList.toggle('open');
  });

  // Mettre à jour le titre au clic sur une option
  dropdown.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
      label.textContent = item.textContent;
      dropdown.classList.remove('open');
    });
  });

  // Fermer le menu si on clique ailleurs
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
});

//Menu reset
document.addEventListener('DOMContentLoaded', () => {
  const resetBtn = document.getElementById('reset-menu');

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      document.querySelectorAll('.menu-title .label').forEach(label => {
        const original = label.getAttribute('data-original');
        if (original) {
          label.textContent = original;
        }
      });
    });
  }
});

//Menu confirm à tester
document.addEventListener('DOMContentLoaded', () => {
  const confirmBtn = document.getElementById('confirm-menu');

  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      const selections = {};

      document.querySelectorAll('.menu').forEach(menu => {
        const label = menu.querySelector('.menu-title .label');
        if (label) {
          const key = label.getAttribute('data-original');
          const value = label.textContent;
          if (key) {
            selections[key] = value;
          }
        }
      });

      /*console.log('Choix confirmés :', selections);
      alert('Choix validés :\n' + Object.entries(selections).map(([k, v]) => `${k} : ${v}`).join('\n'));*/
    });
  } 
});

//Boutons header à activer
document.addEventListener('DOMContentLoaded', () => {
  const homeBtn = document.getElementById('home');
  const backBtn = document.getElementById('back');

  if (homeBtn) {
    homeBtn.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.history.back();
    });
  }
});

//Boutons slider
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".inner");
  const cards = document.querySelectorAll(".card");
  const total = cards.length;

  let currentIndex = 0;

  const firstBtn = document.getElementById("first");
  const nextBtn = document.getElementById("next");
  const lastBtn = document.getElementById("last");

  if (slides && total > 0) {
    if (firstBtn) {
      firstBtn.addEventListener("click", () => {
        currentIndex = 0;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % total;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      });
    }

    if (lastBtn) {
      lastBtn.addEventListener("click", () => {
        currentIndex = total - 1;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      });
    }
  } 
});
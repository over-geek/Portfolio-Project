const menuBtn = document.getElementById('menu-btn-open');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');

function navToggle() {
  menuBtn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}

menuBtn.addEventListener('click', navToggle);

document.documentElement.addEventListener('click', (e) => {
  if (e.target.matches('.menu-item')) {
    menu.classList.remove('show-menu');
    menuBtn.classList.remove('open');
    overlay.classList.remove('overlay-show');
    document.body.classList.remove('stop-scrolling');
  }
});

// Project Cards Info
const projectData = [
  {
    image: 'asset/snapshot1.svg',
    title: 'Tonic',
    technologies: ['Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
  },
  {
    image: 'asset/snapshot2.svg',
    title: 'Multi-Post Stories',
    technologies: ['Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
  },
  {
    image: 'asset/snapshot3.svg',
    title: 'Tonic',
    technologies: ['Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
  },
  {
    image: 'asset/snapshot4.svg',
    title: 'Multi-Post Stories',
    technologies: ['Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
  },
];

// Render project cards
const projectCard = document.querySelector('.card-container');

function displayCard(id) {
  projectCard.innerHTML += `
    <div class="cards card-1">
      <div>
        <img src="${projectData[id].image}" alt="screenshot" class="screenshot">
      </div>
      <div class="card-description">
        <div>
          <h3 class="card-title">${projectData[id].title}</h3>
          <div class="card-bg-info">
            <p>Canopy</p>
            <ul>
                <li>${projectData[id].technologies[0]}</li>
                <li>${projectData[id].technologies[1]}</li>
            </ul>
          </div>
        </div>
        <div class="card-text">
          <p>
          ${projectData[id].text}
          </p>
        </div>
        <div class="card-skills">
          <ul>
            <li>${projectData[id].skills[0]}</li>
            <li>${projectData[id].skills[1]}</li>
            <li>${projectData[id].skills[2]}</li>
          </ul>
        </div>
        <div>
          <button class="btn project-btn">See Project</button>
        </div>
      </div>
    </div>
  `;
}

for (let i = 0; i < projectData.length; i += 1) {
  displayCard(i);
}
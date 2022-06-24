console.log('main.js loaded');

const container = document.querySelector('.container');

const projectObjects = [
  {
    title: 'Counter',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque blanditiis doloribus sequi provident explicabo rerum vel reiciendis consequatur quidem.',
    link: 'counter.html',
  },
  {
    title: 'Todo List',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque blanditiis doloribus sequi provident explicabo rerum vel reiciendis consequatur quidem.',
    link: 'todolist.html',
  },
]

document.addEventListener("DOMContentLoaded", function loadProjects() {
  projectObjects.forEach(project => {
    // Make Card
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    // Make Title
    const cardTitle = document.createElement('h1');
    cardTitle.textContent = project.title;
    // Make Description
    const cardDesc = document.createElement('p');
    cardDesc.innerHTML = project.description;
    // Make Link
    const cardLink = document.createElement('a');
    cardLink.textContent = `Go to ${project.title}`;
    cardLink.href = `${project.title.replace(' ', '').toLowerCase(project.title)}/${project.link}`;
    // Append everything
    container.append(cardDiv);
    cardDiv.append(cardTitle, cardDesc, cardLink);
    console.log();
  });
})
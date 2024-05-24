document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: 'Kanvar Singh Project',
            description: 'Digital Clock',
            image: 'kanvarsingh.jpg',
            link: 'https://sites.google.com/henry.k12.ga.us/yearby-programming/projects-2023-2024/kanvar-singh'
        },
        {
            title: 'Kaylin Thomas',
            description: 'Digital Clock',
            image: 'kaylin Thomas.jpg',
            link: 'https://sites.google.com/henry.k12.ga.us/yearby-programming/projects-2023-2024/kaylin-thomas'
        },
        {
             title: 'Malana Miller',
            description: 'Pinball Game',
            image: 'https://via.placeholder.com/300x200',
            link: 'https://sites.google.com/henry.k12.ga.us/yearby-programming/projects-2023-2024/miller'
        }
    ];

    const projectsContainer = document.getElementById('projects');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
});
// JavaScript Document

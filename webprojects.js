document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: 'Kanvar Singh Project',
            description: 'Digital Clock',
            image: 'https://via.placeholder.com/300x200',
            link: 'https://sites.google.com/d/1nAocbl6QabjOcmAYL5HxziCk7Tqd-hBX/p/1FHuR2zpg1RK64_UMOy0no0cpwvUUPptS/edit'
        },
        {
            title: 'Project 2',
            description: 'Description for project 2.',
            image: 'https://via.placeholder.com/300x200',
            link: 'https://example.com/project2'
        },
        {
            title: 'Project 3',
            description: 'Description for project 3.',
            image: 'https://via.placeholder.com/300x200',
            link: 'https://example.com/project3'
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

function addRecommendation() {
    var recommendationText = document.getElementById('new-recommendation').value;
    var recommenderName = document.getElementById('recommender-name').value;

    if (recommendationText && recommenderName) {
        var recommendationSection = document.querySelector('.recommendations-container');

        var newRecommendation = document.createElement('div');
        newRecommendation.className = 'recommendation card';

        var profilePic = document.createElement('div');
        profilePic.className = 'profile-pic';
        var img = document.createElement('img');
        img.src = 'default-user.png';  // Default user image
        profilePic.appendChild(img);

        var recommendationContent = document.createElement('div');
        recommendationContent.className = 'recommendation-content';

        var usernameElement = document.createElement('span');
        usernameElement.className = 'username';
        usernameElement.textContent = recommenderName;

        var recommendationTextElement = document.createElement('p');
        recommendationTextElement.textContent = recommendationText;

        recommendationContent.appendChild(usernameElement);
        recommendationContent.appendChild(recommendationTextElement);

        newRecommendation.appendChild(profilePic);
        newRecommendation.appendChild(recommendationContent);

        recommendationSection.appendChild(newRecommendation);

        // Clear form inputs
        document.getElementById('new-recommendation').value = '';
        document.getElementById('recommender-name').value = '';
    } else {
        alert('Please enter both a recommendation and a name.');
    }
}

function showProjectDetails(projectId) {
    var projectDetails = document.getElementById('project-details');
    projectDetails.innerHTML = ''; // Clear previous details

    var projects = {
        'project1': {
            title: 'Project 1: E-commerce Website',
            description: 'Developed a fully functional e-commerce website with a shopping cart and payment gateway integration.'
        },
        'project2': {
            title: 'Project 2: Portfolio Website',
            description: 'Created a responsive portfolio website to showcase my projects and skills.'
        },
        'project3': {
            title: 'Project 3: Blogging Platform',
            description: 'Built a blogging platform with user authentication and content management features.'
        }
    };

    var project = projects[projectId];

    if (project) {
        var h2 = document.createElement('h2');
        h2.textContent = project.title;

        var p = document.createElement('p');
        p.textContent = project.description;

        projectDetails.appendChild(h2);
        projectDetails.appendChild(p);
    }
}

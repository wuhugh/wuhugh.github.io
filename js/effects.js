// Once the document has loaded, fetch all the possible views and attach listeners to display the
// proper view onclick
document.addEventListener("DOMContentLoaded", function() {
  fetch("/views/about-me.html")
    .then(response => {
      return response.text();
    })
    .then(htmlData => {
      let aboutMe = document.getElementById("about-me");
      aboutMe.innerHTML = htmlData;
      aboutMe.style.display = "block";
    });

  fetch("/views/experience.html")
    .then(response => {
      return response.text();
    })
    .then(htmlData => {
      let experience = document.getElementById("experience");
      experience.innerHTML = htmlData;
      experience.style.display = "none";
    });

  fetch("/views/projects.html")
    .then(response => {
      return response.text();
    })
    .then(htmlData => {
      let projects = document.getElementById("projects");
      projects.innerHTML = htmlData;
      projects.style.display = "none";
    });

  fetch("/views/links.html")
    .then(response => {
      return response.text();
    })
    .then(htmlData => {
      let links = document.getElementById("links");
      links.innerHTML = htmlData;
      links.style.display = "none";
    });

  setupTabListeners();
});

function setupTabListeners() {
  document.getElementById("about-me-tab").addEventListener("click", function() {
    toggleVisibility("about-me");
  });

  document.getElementById("experience-tab").addEventListener("click", function() {
    toggleVisibility("experience");
  });

  document.getElementById("projects-tab").addEventListener("click", function() {
    toggleVisibility("projects");
  });

  document.getElementById("links-tab").addEventListener("click", function() {
    toggleVisibility("links");
  });
}

// Hides all views except the one whose div ID is passed in
function toggleVisibility(divId) {
  let views = Array.from(document.getElementById("content-wrapper").children);

  views.forEach(item => {
    if (item.id === divId) {
      item.style.display = "block";
    }
    else {
      item.style.display = "none";
    }
  })
}
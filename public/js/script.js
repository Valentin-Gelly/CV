let languages = {}

function getAllRepoGit(){
    fetch("https://api.github.com/users/Valentin-Gelly/repos")
    .then(response => response.json())
    .then(data => {
        let list = document.getElementById('list-repo');
        for (let i = 0; i < data.length; i++) {
            getLanguages(data[i].name);
        }
        data.forEach(repo => {
            let li = document.createElement('section');
            li.classList.add('list-group-item');
            li.href = repo.html_url;
            li.target = "_blank";
            li.style.textDecoration = "none";
            li.style.color = "black";
            li.innerHTML = `<h2 class='repoName'>${repo.name}</a></h2>`;
            li.style.padding = "10px";
            li.style.margin = "10px";
            li.style.border = "1px solid #000";
            li.style.borderRadius = "5px";
            li.style.textAlign = "center";
            li.style.backgroundColor = "#f1f1f1";
            li.style.boxShadow = "0 0 5px #000";
            li.style.cursor = "pointer";
            li.style.transition = "all 0.3s";

            
            if (repo.description != null)
            li.innerHTML += `<p class="repoDescription">${repo.description}</p>`;


            li.innerHTML += `<p class="repoLanguage">Language: ${repo.language}</p>`;


            list.appendChild(li);

        });
    });
}

function  getLanguages(idRepo){
    fetch("https://api.github.com/repos/Valentin-Gelly/"+idRepo+"/languages")
    .then(response => response.json())
    .then(data => {
        languages[idRepo]  ={};
        for (let key in data) {
            languages[idRepo][key] = data[key];

        }
        console.log(languages);
        return languages;
    });
}



getAllRepoGit();
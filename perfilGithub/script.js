document
  .getElementById("form-pesquisa")
  .addEventListener("submit", pesquisarPerfil);

function pesquisarPerfil(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;

  fetch(`https://api.github.com/users/${username}`) //
    .then((response) => response.json())
    .then((data) => {
      const profileDiv = document.getElementById("profile");

      profileDiv.innerHTML = `
            <img src=${data.avatar_url} alt="foto do perfil" /> 
            <p>Nome: ${data.name}</p>
            <p>Repositórios públicos: ${data.public_repos} </p>
            <p>Seguidores: ${data.followers} </p>
          `;
    });
}

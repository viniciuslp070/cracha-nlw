const linksSocialMedia = {
  github: 'viniciuslp070',
  youtube: 'channel/UChcjqECIsA3eT8j4J5GJh8g',
  facebook: 'viniciuspoloniato',
  instagram: 'viniciuspoloniato',
  twitter: 'vinipoloniato'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      foto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

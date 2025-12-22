const container = document.querySelector('#team')




function addTeam() {
const newTeam = document.createElement('li')
newTeam.textContent = 'new team'
container.appendChild(newTeam)
}

function removeTeam() {
  if (container.lastChild) {
container.removeChild(container.lastChild);
  }else {
    alert("all teams are removed!")
  }

}
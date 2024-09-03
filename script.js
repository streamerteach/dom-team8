window.onload = function() {
    // Lyssna efter händelser
    let teamMember = document.getElementsByClassName("team-member")
    

    for (let i = 0; i < teamMember.length; i++) {
        teamMember[i].addEventListener("mouseover", effectOn)
        teamMember[i].addEventListener("mouseout", effectOff)
        teamMember[i].addEventListener("mousedown", editTitle)
    }
}
var editTitle = function() {
    // Ändra "team-title"

    let teamMember = this;
    let teamTitle = teamMember.querySelector(".team-title");
    let newTeamTitle = window.prompt("New team title","")
    teamTitle.innerText = newTeamTitle;
};

function effectOn() {
    // Rita en ram runt personen, kanske lite drop shadow?
    this.classList.add('hovering')
}

function effectOff(){
    // Stäng av effekten när musen inte längre är ovanför personen
    this.classList.remove('hovering')
}

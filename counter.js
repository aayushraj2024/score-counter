let teamHomeScore = 0;
let teamGuestScore = 0;

const teamHomeScoreDisplay = document.getElementById("team-home-score");
const teamGuestScoreDisplay = document.getElementById("team-guest-score");

teamHomeScoreDisplay.textContent = teamHomeScore;
teamGuestScoreDisplay.textContent = teamGuestScore;

function addScoreToTeamHome(score) {
  teamHomeScore += score;
  teamHomeScoreDisplay.textContent = teamHomeScore;
}

function addScoreToTeamGuest(score) {
  teamGuestScore += score;
  teamGuestScoreDisplay.textContent = teamGuestScore;
}

function reset() {
  teamHomeScore = 0;
  teamGuestScore = 0;

  teamHomeScoreDisplay.textContent = teamHomeScore;
  teamGuestScoreDisplay.textContent = teamGuestScore;
}

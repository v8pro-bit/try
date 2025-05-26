<script>
  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-input");
    const matchCards = document.querySelectorAll(".match-card-link");

    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();

      matchCards.forEach(card => {
        const teamNames = card.querySelectorAll(".team-name");
        let matchFound = false;

        teamNames.forEach(team => {
          if (team.textContent.toLowerCase().includes(query)) {
            matchFound = true;
          }
        });

        card.style.display = matchFound ? "block" : "none";
      });
    });
  });
</script>
  <script>
function updateCountdown() {
  const countdowns = document.querySelectorAll('.countdown');

  countdowns.forEach(countdown => {
    const matchDateStr = countdown.dataset.matchDate;
    if (!matchDateStr) return;

    const matchTime = new Date(matchDateStr).getTime();
    const now = Date.now();
    const diff = matchTime - now;

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      let timeString = '';
      if (days > 0) timeString += `${days}d `;
      if (hours > 0 || days > 0) timeString += `${hours}h `;
      if (minutes > 0 || hours > 0 || days > 0) timeString += `${minutes}m `;
      timeString += `${seconds}s`;

      countdown.textContent = ` Starts in: ${timeString}`;
    } else {
      countdown.textContent = '🟢 Live or Finished';
    }
  });
}

setInterval(updateCountdown, 1000);
updateCountdown();
</script>

const getSenators = () => {
  var q = $(".dropdown").val()
  fetch(`https://thecongresstracker.herokuapp.com/api/v1/members?chamber=senate&state=${q}`)
    .then(response => response.json())
    .then(parsedResponse => displaySens())
    .catch(error => console.error({ error }));
};

const getReps = () => {
  var q = $(".dropdown").val()
  fetch(`https://thecongresstracker.herokuapp.com/api/v1/members?chamber=house&state=${q}`)
    .then(response => response.json())
    .then(parsedResponse => compileReps(parsedResponse))
    .catch(error => console.error({ error }));
};

const compileReps = (representatives) => {
  representatives.forEach(representative => {
    displayReps(representative);
  });
};

const displayReps = (representative) => {
  $('#representatives').append(`
    <article class="individual-index">
      <p class="name-link rep-name">${representative.name}</p>
      <p class="rep-id" display="none">${representative.id}</p>
      <p class="rep-party">${representative.party}</p>
      <p class="rep-twitter">${representative.twitter}</p>
      <p class="rep-facebook">${representative.facebook}</p>
      <p class="rep-seniority">${representative.seniority}</p>
      <p class="rep-next-election">${representative.next_election}</p>
    </article>`)
}

$("#find-button").on("click", () => {
  getReps();
  $('.search-container').slideUp(900);
  $('.index-container').slideDown();
})

$('.name-link').on("click", () => {
  $('.index-container').slideUp(900);
  $('.individual-member-container').slideDown();
})

$(".topnav-container").on("click", () => {
  $('.index-container').slideUp(600);
  $('.individual-member-container').slideUp(600);
  $('.search-container').slideDown(600);
})

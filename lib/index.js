const getSenators = () => {
  var q = $(".dropdown").val()
  fetch(`https://thecongresstracker.herokuapp.com/api/v1/members?chamber=senate&state=${q}`)
    .then(response => response.json())
    .then(parsedResponse => compileSenators(parsedResponse))
    .catch(error => console.error({ error }));
};

const compileSenators = (senators) => {
  senators.forEach(senator => {
    displaySenators(senator);
  });
};

const displaySenators = (senator) => {
  $('#senators').append(`
    <article class="individual-index">
      <p class="name-link sen-name">${senator.name}</p>
      <p class="sen-id">${senator.id}</p>
      <p class="sen-party">${senator.party}</p>
      <p class="sen-twitter">${senator.twitter}</p>
      <p class="sen-facebook">${senator.facebook}</p>
      <p class="sen-seniority">${senator.seniority}</p>
      <p class="sen-next-election">${senator.next_election}</p>
    </article>`)
}

const getRepresentatives = () => {
  var q = $(".dropdown").val()
  fetch(`https://thecongresstracker.herokuapp.com/api/v1/members?chamber=house&state=${q}`)
    .then(response => response.json())
    .then(parsedResponse => compileRepresentatives(parsedResponse))
    .catch(error => console.error({ error }));
};

const compileRepresentatives = (representatives) => {
  representatives.forEach(representative => {
    displayRepresentatives(representative);
  });
};

const displayRepresentatives = (representative) => {
  $('#representatives').append(`
    <article class="individual-index">
      <p class="name-link rep-name">${representative.name}</p>
      <p class="rep-id">${representative.id}</p>
      <p class="rep-party">${representative.party}</p>
      <p class="rep-twitter">${representative.twitter}</p>
      <p class="rep-facebook">${representative.facebook}</p>
      <p class="rep-seniority">${representative.seniority}</p>
      <p class="rep-next-election">${representative.next_election}</p>
    </article>`)
}

$("#find-button").on("click", () => {
  getRepresentatives();
  getSenators();
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

const getSenators = () => {
  var q = $(".dropdown").val()
  fetch(`https://thecongresstracker.herokuapp.com/api/v1/members?chamber=senate&state=${q}`)
    .then(response => response.json())
    .then(parsedResponse => compileSenators(parsedResponse))
    .catch(error => console.error({ error }));
}

const compileSenators = (senators) => {
  senators.forEach(senator => {
    displaySenators(senator);
  });
}

const displaySenators = (senator) => {
  $('#senators').append(`
    <article class="individual-index">
      <p class="name-link sen-name">${senator.name}</p>
      <p class="member-id sen-id" value="${senator.id}">${senator.id}</p>
      <p class="sen-party">Party: ${senator.party}</p>
      <p class="sen-seniority">Years in office: ${senator.seniority}</p>
      <p class="sen-next-election">Up for re-election: ${senator.next_election}</p>
    </article>`)
}

const getRepresentatives = () => {
  var q = $(".dropdown").val()
  fetch(`https://thecongresstracker.herokuapp.com/api/v1/members?chamber=house&state=${q}`)
    .then(response => response.json())
    .then(parsedResponse => compileRepresentatives(parsedResponse))
    .catch(error => console.error({ error }));
}

const compileRepresentatives = (representatives) => {
  representatives.forEach(representative => {
    displayRepresentatives(representative);
  });
}

const displayRepresentatives = (representative) => {
  $('#representatives').append(`
    <article class="individual-index">
      <p class="name-link rep-name">${representative.name}</p>
      <p class="member-id rep-id">${representative.id}</p>
      <p class="rep-party">Party: ${representative.party}</p>
      <p class="rep-twitter">${representative.twitter}</p>
      <p class="rep-facebook">${representative.facebook}</p>
      <p class="rep-seniority">Years in office: ${representative.seniority}</p>
      <p class="rep-next-election">Up for re-election: ${representative.next_election}</p>
    </article>`)
}

const getIndividualMember = (q) => {
  fetch(`https://thecongresstracker.herokuapp.com//api/v1/members/${q}`)
    .then(response => response.json())
    .then(parsedResponse => displayMember(parsedResponse))
    .catch(error => console.error({ error }));
}

const displayMember = (member) => {
  $('.individual-item').append(`
    <article class="individual-member">
      <p class="member-name">${member.first_name} ${member.last_name}</p>
      <p class="member-id" value="${member.id}">${member.id}</p>
      <p class="member-party">Party: ${member.party}</p>
      <a href="https://twitter.com/${member.twitter}"class="fab fa-twitter-square" id="member-social-media"></a><a href="https://www.facebook.com/${member.facebook}" class="fab fa-facebook" id="member-social-media"></a>
    </article>`)
}

const getArticles = (name) => {
  let splitName = name.split(' ')
  let first = splitName[0]
  let last = splitName[splitName.length -1]
  fetch(`https://thecongresstracker.herokuapp.com/api/v1/articles?first_name=${first}&last_name=${last}`)
    .then(response => response.json())
    .then(parsedResponse => compileArticles(parsedResponse))
    .catch(error => console.error({ error }));
}

const compileArticles = (articles) => {
  articles.forEach(article => {
    displayArticles(article);
  });
}

const displayArticles = (article) => {
  $('.articles-item').append(`
    <article class="article">
      <a href="${article.url}" class="article-title-link">${article.title}</a>
      <p class="article-description">${article.description}</p>
    </article>`)
}

$("#find-button").on("click", () => {
  getRepresentatives();
  getSenators();
  $('.search-container').slideUp(900);
  $('.index-container').slideDown();
  $('#index-close-button').slideDown(600);
})

$(".index-container").on("click", '.name-link', function() {
  var q = this.parentElement.childNodes[3].innerHTML
  var name = this.parentElement.childNodes[1].innerText
  getIndividualMember(q);
  getArticles(name);
  $('.index-container').slideUp(1100);
  $('#index-close-button').slideUp(600);
  $('.individual-member-container').slideDown(1100);
})

$("#close-button").on("click", () => {
  $('.individual-member-container').slideUp(1100);
  $('.index-container').slideDown(1100);
  $('.individual-member').remove();
  $('.article').remove();
  $('#index-close-button').slideDown(600);
})

$(".topnav-container").on("click", () => {
  $('.index-container').slideUp(600);
  $('.individual-member-container').slideUp(600);
  $('.search-container').slideDown(600);
  $('.individual-member').remove();
  $('.article').remove();
  $('.individual-index').remove();
})

$("#index-close-button").on("click", () => {
  $('.index-container').slideUp(600);
  $('.individual-member-container').slideUp(600);
  $('.search-container').slideDown(600);
  $('.individual-member').remove();
  $('.article').remove();
  $('.individual-index').remove();
  $('#index-close-button').slideUp(600);
})

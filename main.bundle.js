/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	"use strict";

	var getSenators = function getSenators() {
	  var q = $(".dropdown").val();
	  fetch("https://thecongresstracker.herokuapp.com/api/v1/members?chamber=senate&state=" + q).then(function (response) {
	    return response.json();
	  }).then(function (parsedResponse) {
	    return compileSenators(parsedResponse);
	  }).catch(function (error) {
	    return console.error({ error: error });
	  });
	};

	var compileSenators = function compileSenators(senators) {
	  senators.forEach(function (senator) {
	    displaySenators(senator);
	  });
	};

	var displaySenators = function displaySenators(senator) {
	  $('#senators').append("\n    <article class=\"individual-index\">\n      <p class=\"name-link sen-name\">" + senator.name + "</p>\n      <p class=\"member-id sen-id\" value=\"" + senator.id + "\">" + senator.id + "</p>\n      <p class=\"sen-party\">Party: " + senator.party + "</p>\n      <p class=\"sen-seniority\">Years in office: " + senator.seniority + "</p>\n      <p class=\"sen-next-election\">Up for re-election: " + senator.next_election + "</p>\n    </article>");
	};

	var getRepresentatives = function getRepresentatives() {
	  var q = $(".dropdown").val();
	  fetch("https://thecongresstracker.herokuapp.com/api/v1/members?chamber=house&state=" + q).then(function (response) {
	    return response.json();
	  }).then(function (parsedResponse) {
	    return compileRepresentatives(parsedResponse);
	  }).catch(function (error) {
	    return console.error({ error: error });
	  });
	};

	var compileRepresentatives = function compileRepresentatives(representatives) {
	  representatives.forEach(function (representative) {
	    displayRepresentatives(representative);
	  });
	};

	var displayRepresentatives = function displayRepresentatives(representative) {
	  $('#representatives').append("\n    <article class=\"individual-index\">\n      <p class=\"name-link rep-name\">" + representative.name + "</p>\n      <p class=\"member-id rep-id\">" + representative.id + "</p>\n      <p class=\"rep-party\">Party: " + representative.party + "</p>\n      <p class=\"rep-twitter\">" + representative.twitter + "</p>\n      <p class=\"rep-facebook\">" + representative.facebook + "</p>\n      <p class=\"rep-seniority\">Years in office: " + representative.seniority + "</p>\n      <p class=\"rep-next-election\">Up for re-election: " + representative.next_election + "</p>\n    </article>");
	};

	var getIndividualMember = function getIndividualMember(q) {
	  fetch("https://thecongresstracker.herokuapp.com//api/v1/members/" + q).then(function (response) {
	    return response.json();
	  }).then(function (parsedResponse) {
	    return displayMember(parsedResponse);
	  }).catch(function (error) {
	    return console.error({ error: error });
	  });
	};

	var displayMember = function displayMember(member) {
	  $('.individual-item').append("\n    <article class=\"individual-member\">\n      <p class=\"member-name\">" + member.first_name + " " + member.last_name + "</p>\n      <p class=\"member-id\" value=\"" + member.id + "\">" + member.id + "</p>\n      <p class=\"member-party\">Party: " + member.party + "</p>\n      <a href=\"https://twitter.com/" + member.twitter + "\"class=\"fab fa-twitter-square\" id=\"member-social-media\"></a><a href=\"https://www.facebook.com/" + member.facebook + "\" class=\"fab fa-facebook\" id=\"member-social-media\"></a>\n    </article>");
	};

	var getArticles = function getArticles(name) {
	  var splitName = name.split(' ');
	  var first = splitName[0];
	  var last = splitName[splitName.length - 1];
	  fetch("https://thecongresstracker.herokuapp.com/api/v1/articles?first_name=" + first + "&last_name=" + last).then(function (response) {
	    return response.json();
	  }).then(function (parsedResponse) {
	    return compileArticles(parsedResponse);
	  }).catch(function (error) {
	    return console.error({ error: error });
	  });
	};

	var compileArticles = function compileArticles(articles) {
	  articles.forEach(function (article) {
	    displayArticles(article);
	  });
	};

	var displayArticles = function displayArticles(article) {
	  $('.articles-item').append("\n    <article class=\"article\">\n      <a href=\"" + article.url + "\" class=\"article-title-link\">" + article.title + "</a>\n      <p class=\"article-description\">" + article.description + "</p>\n    </article>");
	};

	$("#find-button").on("click", function () {
	  getRepresentatives();
	  getSenators();
	  $('.search-container').slideUp(900);
	  $('.index-container').slideDown();
	  $('#index-close-button').slideDown(600);
	});

	$(".index-container").on("click", '.name-link', function () {
	  var q = this.parentElement.childNodes[3].innerHTML;
	  var name = this.parentElement.childNodes[1].innerText;
	  getIndividualMember(q);
	  getArticles(name);
	  $('.index-container').slideUp(1100);
	  $('#index-close-button').slideUp(600);
	  $('.individual-member-container').slideDown(1100);
	});

	$("#close-button").on("click", function () {
	  $('.individual-member-container').slideUp(1100);
	  $('.index-container').slideDown(1100);
	  $('.individual-member').remove();
	  $('.article').remove();
	  $('#index-close-button').slideDown(600);
	});

	$(".topnav-container").on("click", function () {
	  $('.index-container').slideUp(600);
	  $('.individual-member-container').slideUp(600);
	  $('.search-container').slideDown(600);
	  $('.individual-member').remove();
	  $('.article').remove();
	  $('.individual-index').remove();
	});

	$("#index-close-button").on("click", function () {
	  $('.index-container').slideUp(600);
	  $('.individual-member-container').slideUp(600);
	  $('.search-container').slideDown(600);
	  $('.individual-member').remove();
	  $('.article').remove();
	  $('.individual-index').remove();
	  $('#index-close-button').slideUp(600);
	});

/***/ })
/******/ ]);
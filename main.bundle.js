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
	  $('#senators').append("\n    <article class=\"individual-index\">\n      <p class=\"name-link sen-name\">" + senator.name + "</p>\n      <p class=\"sen-id\">" + senator.id + "</p>\n      <p class=\"sen-party\">" + senator.party + "</p>\n      <p class=\"sen-twitter\">" + senator.twitter + "</p>\n      <p class=\"sen-facebook\">" + senator.facebook + "</p>\n      <p class=\"sen-seniority\">" + senator.seniority + "</p>\n      <p class=\"sen-next-election\">" + senator.next_election + "</p>\n    </article>");
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
	  $('#representatives').append("\n    <article class=\"individual-index\">\n      <p class=\"name-link rep-name\">" + representative.name + "</p>\n      <p class=\"rep-id\">" + representative.id + "</p>\n      <p class=\"rep-party\">" + representative.party + "</p>\n      <p class=\"rep-twitter\">" + representative.twitter + "</p>\n      <p class=\"rep-facebook\">" + representative.facebook + "</p>\n      <p class=\"rep-seniority\">" + representative.seniority + "</p>\n      <p class=\"rep-next-election\">" + representative.next_election + "</p>\n    </article>");
	};

	$("#find-button").on("click", function () {
	  getRepresentatives();
	  getSenators();
	  $('.search-container').slideUp(900);
	  $('.index-container').slideDown();
	});

	$('.name-link').on("click", function () {
	  $('.index-container').slideUp(900);
	  $('.individual-member-container').slideDown();
	});

	$(".topnav-container").on("click", function () {
	  $('.index-container').slideUp(600);
	  $('.individual-member-container').slideUp(600);
	  $('.search-container').slideDown(600);
	});

/***/ })
/******/ ]);
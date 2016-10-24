"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getPagesFromState(state) {
  return state.pages;
}

function getPageFromPages(pagesState, pageId) {
  return pagesState && pagesState[pageId];
}

function setPageToPages(state, pageId, pageState) {
  return Object.assign(_defineProperty({}, pageId, pageState), state);
}

var config = {
  getPagesFromState: getPagesFromState,
  getPageFromPages: getPageFromPages,
  setPageToPages: setPageToPages,
  getPageFromState: function getPageFromState(state, pageId) {
    return this.getPageFromPages(this.getPagesFromState(state), pageId);
  }
};

exports.default = config;
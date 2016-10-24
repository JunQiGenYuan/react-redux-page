function getPagesFromState(state) {
  return state.pages;
}

function getPageFromPages(pagesState, pageId) {
  return pagesState && pagesState[pageId];
}

function setPageToPages(state, pageId, pageState) {
  return Object.assign({
    [pageId]: pageState
  }, state);
}

const config = {
  getPagesFromState,
  getPageFromPages,
  setPageToPages,
  getPageFromState: function (state, pageId) {
    return this.getPageFromPages(
      this.getPagesFromState(state),
      pageId
    );
  }
};

export default config

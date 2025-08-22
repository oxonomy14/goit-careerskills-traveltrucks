//export const selectAllCampers = state => state.campersList.campers.items;
export const selectLoading = state => state.campersList.campers.loadingCampers;
export const selectError = state => state.campersList.campers.errorCampers;
export const selectPage = state => state.campersList.campers.page;
export const selectPages = state => state.campersList.campers.pages;
export const selectTotal = state => state.campersList.campers.total;
export const selectFilter = state => state.filter.filters; 
export const selectAllCampers = state =>
  state.campersList.campers?.items || [];

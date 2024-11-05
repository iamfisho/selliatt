export default (store) => {
  // Cargar el estado desde localStorage al iniciar
  const savedState = sessionStorage.getItem('vuex');
  if (savedState) {
    store.replaceState(JSON.parse(savedState));
  }

  store.subscribe((mutation, state) => {
    sessionStorage.setItem('vuex', JSON.stringify(state));
  });
};
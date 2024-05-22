export const isUserLoggedIn = (): boolean => {
  return sessionStorage.getItem("logged") === "true";
};

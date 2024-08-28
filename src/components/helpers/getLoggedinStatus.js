export const getLoggedInStatus = () => {
    const loggedIn = localStorage.getItem('loggedin');
    return loggedIn === 'true'; 
};
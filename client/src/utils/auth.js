import decode from 'jwt-decode';

class AuthService {
    // Retrieve the user profile from the token
    getUser() {
        try {
            return decode(this.getToken());
        } catch (err) {
            return null;
        }
    }

    // Check if the user is logged in by verifying if the token is valid
    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    // Get the token from localStorage
    getToken() {
        return localStorage.getItem('id_token');
    }

    // Save the token to localStorage
    setToken(token) {
        localStorage.setItem('id_token', token);
    }

    // Handle login by saving the token and redirecting to home
    login(idToken) {
        this.setToken(idToken);
        window.location.assign('/');
    }

    // Handle logout by removing the token and reloading the page
    logout() {
        localStorage.removeItem('id_token');
        window.location.reload();
    }

    // Check if the token has expired
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true; 
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    }
}

export default new AuthService();

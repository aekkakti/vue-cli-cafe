const API = process.env.VUE_APP_API;

export const loginRequest = (user) => {
    return new Promise((resolve, reject) => {
        fetch(`${API}/login`, {
            method: "POST",
            headers: {
                'Authorization' : `Bearer ${localStorage.getItem('myAppToken')}`
            },
        })
            .then((response) => response.json())
            .then((result) => resolve(result.data.user_token))
            .catch((error) => {
                reject(error);
            });
    });
};
const API = process.env.VUE_APP_API;

export const loginRequest = () => {
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

export const logoutRequest = () => {
    return new Promise((reject) => {
        fetch(`${API}/logout`, {
            method: "POST",
            headers: {
                'Authorization' : `Bearer ${localStorage.getItem('myAppToken')}`
            },
        })
            .then((response) => response.json())
            .catch((error) => {
                reject(error);
            });
    });
}

export const registerRequest = () => {
    return new Promise((resolve, reject) => {
        fetch(`${API}/user`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('myAppToken')}`
            },
        })
            .then((response) => response.json())
            .then((result) => resolve(result.data.user_token))
            .catch((error) => {
                reject(error);
        });
    })
}

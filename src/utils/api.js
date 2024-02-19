const API = process.env.VUE_APP_API;

export const loginRequest = (user) => {
    return new Promise((resolve, reject) => {
        fetch(`${API}/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(user),
        })
            .then((response) => {return response.json()})
            .then((result) => resolve(result.data.user_token))
            .catch((error) => {
                reject(error);
            });
    });
};

export const logoutRequest = () => {
    return new Promise((resolve, reject) => {
        fetch(`${API}/logout`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${localStorage.getItem('myAppToken')}`
            },
        })
            .then((response) => { return response.json() })
            .then((result) => resolve(result.data))
            .catch((error) => {
                reject(error);
            });
    });
}

export const registerRequest = (user) => {
    return new Promise((resolve, reject) => {
        fetch(`${API}/user`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((result) => resolve(result.data.user_token))
            .catch((error) => {
                reject(error);
        });
    })
}

export const addOrderRequest = (user) => {
    return new Promise ((resolve, reject) => {
        fetch(`${API}/order`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((result) => resolve(result.data.user_token))
            .catch((error) => {
                reject(error);
            })
    })
}

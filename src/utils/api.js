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
    return new Promise((resolve) => {
        fetch(`${API}/user`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('myAppToken')}`,
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((result) => resolve(result))
            .catch((error) => {
                console.log(error)
        });
    })
}

export const viewUsers = () => {
    return new Promise((resolve) => {
        fetch(`${API}/user`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Bearer ${localStorage.getItem('myAppToken')}`,
            },
        })
            .then((response) => response.json())
            .then((result) => resolve(result))
            .catch((error) => {
                console.log(error)
            });
    })
}

export const viewUser = (userId) => {
    return new Promise((resolve) => {
        fetch(`${API}/user/${userId}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Bearer ${localStorage.getItem('myAppToken')}`,
            },
        })
            .then((response) => response.json())
            .then((result) => resolve(result))
            .catch((error) => {
                console.log(error)
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

export const showWorkShifts = () => {
    return new Promise((resolve) => {
        fetch(`${API}/work-shift`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${localStorage.getItem('myAppToken')}`
            },
        })
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                resolve(result)
            })
    })
}

export const openWorkshiftRequest = (index) => {
    return new Promise((resolve) => {
        fetch(`${API}/work-shift/${index}/open`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${localStorage.getItem('myAppToken')}`
            },
        })
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                resolve(result)
            })
    })
}

export const closeWorkshiftRequest = (index) => {
    return new Promise( (resolve) => {
        fetch(`${API}/work-shift/${index}/close`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${localStorage.getItem('myAppToken')}`
            },
        })
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                resolve(result)
            })
    })
}

export const removeUserRequest = (userId) => {
    return new Promise( (resolve) => {
        fetch(`${API}/user/${userId}/to-dismiss`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${localStorage.getItem('myAppToken')}`
            },
        })
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                resolve(result)
                console.log(userId)
            })
    })
}

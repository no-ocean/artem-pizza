export const getData = (value) => {
    return fetch(process.env.REACT_APP_BACKEND_HOST + value).then(
        (res) => {
            if(res.ok) {
                return res.json();
            } else {
                throw new Error("Something went wrong");
            }
        }
    );
}

export const postData = (data, value) => {
    return fetch(process.env.REACT_APP_BACKEND_HOST + value, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}
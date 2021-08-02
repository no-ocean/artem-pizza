export const getData = (value) => {
    return fetch(`http://localhost:4000/v1/${value}`).then(
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
    return fetch(`http://localhost:4000/v1/${value}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}
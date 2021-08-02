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
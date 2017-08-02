import "whatwg-fetch"

export let get = url => {
    return fetch(url, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        return response.json();
    });
};

export let post = (url,data) => {
    return fetch(url,{
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
    }).then(response=>{
        return response.json();
    });
};

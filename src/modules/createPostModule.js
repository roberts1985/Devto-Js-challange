const createPost = async (koderObject) => {
    //const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDg2MDU2Yjk3MTQ0MTE3NWQ5NDQzOCIsImlhdCI6MTY4MjQ2NDg3MCwiZXhwIjoxNjgyNTUxMjcwfQ.dgprCSc91kh948lOW3WDBHYRh7pZ6Zybr6ntd-6QxFg'
    const authToken = localStorage.getItem("token")
    console.log("Estoy en createPostModule.js")
    console.log(authToken)

    let response = await fetch(
        //`https://devto-challange-default-rtdb.firebaseio.com/.json`, {
        `http://localhost:8080/posts`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(koderObject)
    })
    let data = await response.json()
    return data
}

const getElement = async () => {
    //let response = await fetch("https://devto-challange-default-rtdb.firebaseio.com/.json" );
    let response = await fetch("http://localhost:8080/posts" );
    let data = await response.json();
    return data;
}

export{ createPost, getElement}
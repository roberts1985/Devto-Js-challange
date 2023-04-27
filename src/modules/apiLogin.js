const createUser = async (koderObject) => {
    //const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDg2MDU2Yjk3MTQ0MTE3NWQ5NDQzOCIsImlhdCI6MTY4MjQ2NDg3MCwiZXhwIjoxNjgyNTUxMjcwfQ.dgprCSc91kh948lOW3WDBHYRh7pZ6Zybr6ntd-6QxFg'

    let response = await fetch(
        //`https://devto-challange-default-rtdb.firebaseio.com/.json`, {
        `http://localhost:8080/users`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(koderObject)
    })
    let data = await response.json()
    return data
}

const loginUser = async (koderObject) => {
    //const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDg2MDU2Yjk3MTQ0MTE3NWQ5NDQzOCIsImlhdCI6MTY4MjQ2NDg3MCwiZXhwIjoxNjgyNTUxMjcwfQ.dgprCSc91kh948lOW3WDBHYRh7pZ6Zybr6ntd-6QxFg'

    let response = await fetch(
        //`https://devto-challange-default-rtdb.firebaseio.com/.json`, {
        `http://localhost:8080/auth/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(koderObject)
    })
    let data = await response.json()
    return data
}

export { createUser, loginUser }
const BASE_URL = 'http://localhost:8080/posts/';
const authToken = localStorage.getItem("token")

const getPostById = async (id) => {
  

  let response = await fetch(
    `${BASE_URL}${id}`, {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    }
  })
  let data = await response.json()
  return data
}

const deleteByid = async (id) => {
  let response = await fetch(
    `${BASE_URL}${id}`, {
    method: "DELETE",
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    }
  })
  
  
  let data = await response.json();

  return data;
}

export { getPostById, deleteByid }
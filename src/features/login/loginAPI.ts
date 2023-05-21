export type Crendentials = {
  login : string;
  password: string;
}

//curl -X POST http://localhost:3000/auth/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"
//curl http://localhost:3000/auth/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJzdWIiOjEsImlhdCI6MTY4NDY5NTk4MywiZXhwIjoxNjg0Njk2MDQzfQ.R7vXFoT2rGyvoMijn-5SW_qdKWhVQxfujWWIeeEIdro"
export async function submitLoginRequest(crendentials: Crendentials) {
  const data = {
    username : crendentials.email,
    password : crendentials.password,
  }

  const response = await fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  const responseJson = await response.json()

  return responseJson
}

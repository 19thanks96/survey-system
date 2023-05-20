export type Crendentials = {
  login : string;
  password: string;
}

export async function submitLoginRequest(crendentials: Crendentials) {
  const response = await fetch('http://localhost/')
  console.log('response work!')
  const responseJson = await response.json()
  return responseJson
}

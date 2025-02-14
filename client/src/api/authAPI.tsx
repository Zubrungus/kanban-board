import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try{
    const response = await fetch('auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();
    if(!response.ok){
      console.error('Error, check network tab');
    }

    return data;
  } catch(err){
    console.error(`Error: ${err}`);
    return [];
  }
}



export { login };

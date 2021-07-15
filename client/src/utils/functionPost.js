import axios from 'axios';

export async function saveUser(userData) {
  try {
    const formData = new FormData();
    formData.append('firstName', userData.firstName);
    formData.append('lastName', userData.lastName);
    formData.append('email', userData.email);
    formData.append('phone', userData.phone);
    formData.append('gender', userData.gender);
    formData.append('image', userData.image);
    const response = await axios({
      url: `http://localhost:3002/auth/signup`,
      method: 'POST',
      data: formData,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

import axios from 'axios';

export const checkUserIsAdmin = currentUser => {
    if(!currentUser || !Array.isArray(currentUser.userRoles)) return false;
    const { userRoles } = currentUser
    
    if(userRoles.includes('admin')) return true;

    return false;
}

//utility function to take the current user and check if it is valid and has the userRoles array 
//then check if userRoles includes admin role 

//Utility function to deal with firebase function for payments

export const apiInstance = axios.create({
    // baseURL: 'http://localhost:5001/my-ecommerce-website-fac9f/us-central1/api'
    baseURL: 'https://us-central1-my-ecommerce-website-fac9f.cloudfunctions.net/api'
});
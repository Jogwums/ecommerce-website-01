export const checkUserIsAdmin = currentUser => {
    if(!currentUser || !Array.isArray(currentUser.userRoles)) return false;
    const { userRoles } = currentUser
    
    if(userRoles.includes('admin')) return true;

    return false;
}

//utility function to take the current user and check if it is valid and has the userRoles array 
//then check if userRoles includes admin role 


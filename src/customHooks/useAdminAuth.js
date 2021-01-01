import React, {useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { checkUserIsAdmin } from './../Utils/index'

const mapState = ({ user }) => ({
    currentUser: user.currentUser

})
const useAdminAuth = props => { 
    const {currentUser} = useSelector(mapState);
    const history = useHistory();

    useEffect(() => {
        if(!checkUserIsAdmin(currentUser)){
            history.push('/login')
        }

    }, [currentUser])
}

export default useAdminAuth;


import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { checkUserIsAdmin } from './../../Utils/index'
import './styles.css'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const AdminToolbar = () => {
    const { currentUser } = useSelector(mapState)
    
    const isAdmin = checkUserIsAdmin(currentUser);

    if(!isAdmin) return null;

    return (
        <div className="admin-toolbar">
            <ul>
                <li>
                    <Link to="/admin">
                        My Admin...
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default AdminToolbar

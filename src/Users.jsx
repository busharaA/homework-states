import User from "./User";
import PropTypes from 'prop-types';

const Users = ({ users, children }) => {
    return (
        <>
            {
                users.map(user => {
                    return <User ime={user.ime} prezime={user.prezime} dob={user.dob} />
                })
            }
            <p>{children}</p>
        </>
    )
}

export default Users;

Users.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            ime: PropTypes.string,
            prezime: PropTypes.string,
            dob: PropTypes.number
        })
    )
}
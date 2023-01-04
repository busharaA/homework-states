import User from "./User";
import PropTypes from 'prop-types';

const Users = ({ users }) => {
    return (
        <>
            {
                users.map(user => {
                    return <User ime={user.ime} prezime={user.prezime} dob={user.dob} />
                })
            }
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
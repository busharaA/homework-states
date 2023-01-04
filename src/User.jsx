const User = ({ ime, prezime, dob }) => {
    return (
        <div>
            <h3>Ime: {ime}</h3>
            <h3>Prezime: {prezime}</h3>
            <h3>Dob: {dob}</h3>
        </div>
    )
}

export default User;
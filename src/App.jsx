import { Component } from "react";
//import Tekst from "./Tekst";
import Users from "./Users";

class App extends Component
{
    state = {
        text: "Svi korisnici",
        korisnici: [
            {
                ime: 'Branko',
                prezime: 'Branković',
                dob: 32
            },
            {
                ime: 'Janko',
                prezime: 'Janković',
                dob: 42
            },
            {
                ime: 'Stanko',
                prezime: 'Stanković',
                dob: 52
            },
        ]
    };

    render() {
        const { korisnici } = this.state;
        return (
            <>
                <Users users={korisnici} />
            </>
        );
    }
}

export default App;

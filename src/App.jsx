import { Component } from "react";
//import Tekst from "./Tekst";
import Users from "./Users";

class App extends Component
{
    state = {
        children: "Svi korisnici",
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
        const { korisnici, children } = this.state;
        return (
            <>
                <Users users={korisnici}>
                    {children}
                </Users>
            </>
        );
    }
}

export default App;

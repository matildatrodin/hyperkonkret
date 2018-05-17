import React from 'react';

export class Footer extends React.Component{

    render(){
        return(
            <footer className="App-footer">
            <div className="App-footer-text">
            Vi tycker det är en självklarhet att alla ska kunna lära sig vad som helst.
            Vi vill skapa en lärandemiljö som hjälper lärarna att hjälpa elever.
            Inspiration, motivation och studieteknik i ett paket.

            Our mission is to provide a world-class education to anyone,
            anywhere that earlier had problems learning.
            </div>
            <div className="App-footer-buttons">
            <button>FAQ</button>
            <button>Support</button>
            </div>
            </footer>
        );
    }

}

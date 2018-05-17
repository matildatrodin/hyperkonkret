import React from 'react';

export class Footer extends React.Component{

    render(){
        return(
            <footer className="App-footer">
            <div className="App-footer-text">
               Inspiration, motivation och studieteknik i ett paket.
            </div>
            <div className="App-footer-buttons">
                <button className="Footer-button">FAQ</button>
                <button className="Footer-button">Support</button>
                <button className="Footer-button">Samarbeten</button>
            </div>
            </footer>
        );
    }

}

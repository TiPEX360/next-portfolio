import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopLetter extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            manual: false,
            position: 0,
            letters: [this.props.letter, this.props.letter]
        };

        
        setInterval(this.togglePosition.bind(this, false), this.props.interval);
        setTimeout(this.togglePosition.bind(this, false), this.props.delay);
    }

    togglePosition(manual) {
        if(this.state.manual && manual) return
        let newState = {}
        if(manual){
            if(this.state.position === 2 || this.state.position === 0) newState = {manual: true, position: 1, letters: [this.state.letters[0].toUpperCase(), this.props.letter]};
            else newState = {manual: true, position: 2, letters: [this.state.letters[1], this.state.letters[1].toUpperCase()]};
        }
        else {
            if(this.state.position === 2 || this.state.position === 0) newState = {manual: false, position: 1, letters: [this.state.letters[0], this.props.letter]};
            else newState = {manual: false, position: 2, letters: [this.props.letter, this.state.letters[1]]};    
        }
        this.setState(newState)
    }

    render() {
        const twoLetters = {
            float: 'left',
            position: 'relative',
            width: '100%',
            height: '400%',
            top: '-200%',
            transition: 'transform 0.4s ease',
        }

        const letter = {
            position: 'relative',
            textAlign: 'center',
            width: '100%',
            height: '25%',
        }

        return(
            <div onMouseEnter={this.togglePosition.bind(this, true)} style={{...twoLetters, transform: 'translateY(' + this.state.position * 25 + '%)',}}>
                <div style={letter}>
                    {this.state.manual && this.state.position == 2 ? <b>{this.state.letters[1]}</b> : <b>{this.state.letters[1]}</b>}
                </div>
                <div style={letter}>
                    {this.state.letters[0]}
                </div>
                <div style={letter}>
                    
                </div>
            </div>
        );
    }
}


//PropTypes
TopLetter.propTypes = {
    letter: PropTypes.string.isRequired,
}

export default TopLetter;
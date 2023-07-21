import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LeftLetter extends Component {
    
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
        let newState = {}
        if(this.state.manual && manual) return
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
        let twoLetters = {
            float: 'left',
            position: 'relative',
            left: '-200%',
            width: '400%',
            transition: 'transform 0.4s ease',
            height: '100%',
        }

        const letter = {
            float: 'left',
            position: 'relative',
            textAlign: 'center',
            width: '25%',
            height: '100%',
        }
        
        return(
            <div onMouseEnter={this.togglePosition.bind(this, true)} style={{...twoLetters, transform: 'translateX(' + this.state.position * 25 + '%)',}}>
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
LeftLetter.propTypes = {
    letter: PropTypes.string.isRequired,
}

export default LeftLetter;

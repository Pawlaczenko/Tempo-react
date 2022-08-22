import {FiCornerDownLeft} from 'react-icons/fi'

export const handleKeyStroke = (e,) => {
    console.log(e.key);
}

export const validatePressedLetter = (letter) => {
    if(letter === 'Enter') return '\n';
    return letter;
}

export const setLetter = (letter) => {
    if(letter === ' ') return '_';
    if(letter === '\n') return <><FiCornerDownLeft /><br /></>

    return letter;
}

export const ignoreKeyPress = (letter) => {
    return !(letter === 'Shift' || letter === 'Control' || letter === 'CapsLock' || letter === 'Alt' || letter === 'AltGraph');
}
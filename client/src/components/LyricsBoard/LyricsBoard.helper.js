import {FiCornerDownLeft} from 'react-icons/fi'

export const checkForEnter = (letter) => {
    return (letter === 'Enter') ? '\n' : letter;
}

export const replaceWhitespaceCharacters = (letter) => {
    switch(letter){
        case ' ': return '_';
        case '\n': return <><FiCornerDownLeft /><br /></>;
        default: return letter;
    }
}

export const isNotFunctionKey = (letter) => {
    return !['Shift', 'Control', 'CapsLock', 'Alt', 'AltGraph','Tab'].includes(letter);
}

export const calculateProgress = (currentIndex, noOfLetters) => {
    return (currentIndex / noOfLetters) * 100 || 0;
}

export const generateUniqueKey = (keyCode) => `${keyCode}-${new Date().getTime()}`;

export const generateTypingErrorObject = (index,state="uncorrected") => {
    return {
        index: index, 
        state: state
    }
};
import {TYPING_ERROR_STATES} from '../../constants';

export const getErrorsCount = (errors,type) => errors.filter(err => err.state === type).length;

export const getWordsCount = (noOfLetters) => ((noOfLetters / 5));

export const calculateNetWPM = (noOfLetters, time, errors) => {
    const timeInMinutes = time.minutes + (time.seconds / 60);
    const wpm = Math.round((getWordsCount(noOfLetters) - getErrorsCount(errors,TYPING_ERROR_STATES.UNCORRECT)) / timeInMinutes);
    return Math.max(0,wpm);
} 

export const calculateAccuracy = (noOfLetters, errors) => {
    const correctCharacters = noOfLetters - errors.length;
    return ((correctCharacters / noOfLetters) * 100).toFixed(2);
}
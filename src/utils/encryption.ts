export const caesarCipher = (text: string, shift: number, decrypt: boolean = false): string => {
  return text
    .split('')
    .map((char) => {
      if (char.match(/[a-zA-Z]/)) {
        const code = char.charCodeAt(0);
        const isUpperCase = code >= 65 && code <= 90;
        const base = isUpperCase ? 65 : 97;
        const shiftAmount = decrypt ? -shift : shift;
        return String.fromCharCode(
          ((code - base + shiftAmount + 26) % 26) + base
        );
      }
      return char;
    })
    .join('');
};

export const vigenereCipher = (text: string, key: string, decrypt: boolean = false): string => {
  const keyRepeated = key
    .toLowerCase()
    .repeat(Math.ceil(text.length / key.length))
    .slice(0, text.length);

  return text
    .split('')
    .map((char, i) => {
      if (char.match(/[a-zA-Z]/)) {
        const isUpperCase = char === char.toUpperCase();
        const textChar = char.toLowerCase();
        const keyChar = keyRepeated[i];
        const textCode = textChar.charCodeAt(0) - 97;
        const keyCode = keyChar.charCodeAt(0) - 97;
        
        let result;
        if (decrypt) {
          result = (textCode - keyCode + 26) % 26;
        } else {
          result = (textCode + keyCode) % 26;
        }
        
        const finalChar = String.fromCharCode(result + 97);
        return isUpperCase ? finalChar.toUpperCase() : finalChar;
      }
      return char;
    })
    .join('');
};

const MORSE_CODE: { [key: string]: string } = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
  'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
  'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
  'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
  '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
  '9': '----.', '0': '-----', ' ': ' '
};

export const morseCode = (text: string, decrypt: boolean = false): string => {
  if (decrypt) {
    const reverseMorse = Object.fromEntries(
      Object.entries(MORSE_CODE).map(([key, value]) => [value, key])
    );
    return text
      .split('   ')
      .map(word => 
        word
          .split(' ')
          .map(char => reverseMorse[char] || '')
          .join('')
      )
      .join(' ');
  }
  
  return text
    .toUpperCase()
    .split('')
    .map(char => MORSE_CODE[char] || char)
    .join(' ')
    .replace(/ {2,}/g, '   ');
};
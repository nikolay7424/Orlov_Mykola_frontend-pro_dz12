const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); 

function generateKey(keyLength, charset) {
  let result = '';
  for(let i = 0; i < keyLength - 1; i++) {
    result += charset[Math.floor(Math.random() * (charset.length - 1))];
  }
  return result;
}
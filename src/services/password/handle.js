import permittedCharacters from "./utils/permitted-characters.js";

async function handle() {
    let characters = await permittedCharacters();
    let password = "";

    const passwwordLength = process.env.PASSWORD_LENGTH;

    for (let i=0; i<passwwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password
}

export default handle;
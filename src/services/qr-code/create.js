import prompt from "prompt";

import promptQRCode from "../../prompts/prompt-qrcode";

async function createQRCode() {

    prompt.get(promptQRCode, );

    prompt.start();
}


export default createQRCode;
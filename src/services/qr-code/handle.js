import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
    if (err) {
        console.log("error on application");
        return;
    }
    
    const isSmall = result.type == 2;

    qr.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green("QR Code generado com sucesso:\n"));
        console.log(qrcode);
    });
}

export default handle;
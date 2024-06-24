import chalk from "chalk";

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite um link para gerar o QR CODE"),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre o tipo de QRCode (1 - NORMAL) ou (2 - TERMINAL)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha entre 1 e 2"),
        required: true,
    },
];

export default promptQRCode;
class Start {
    constructor() {
        this.playerName = "You"
        this.botName = "You kalahπ€ͺikybot"
        this.playerOption;
        this.botOption;
        this.winner = ""
    }
    get getBotOption() {
        return this.botOption;
    }
    set setBotOption(option) {
        this.botOption = option;
    }
    get getPlayerOption() {
        return this.playerOption
    }
    set setPlayerOption(option) {
        this.playerOption = option;
    }
    botBrain() {
        const option = ["π", "β", "β"];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }
    winCalculation() {
        if (this.botOption == "π" && this.playerOption == "β") {
            return this.winner = this.playerName
        } else if (this.botOption == "π" && this.playerOption == "β") {
            return this.winner = this.botName;
        } else if (this.botOption == "β" && this.playerOption == "π") {
            return this.winner = this.botName;
        } else if (this.botOption == "β" && this.playerOption == "β") {
            return this.winner = this.playerName
        } else if (this.botOption == "β" && this.playerOption == "π") {
            return this.winner = this.playerName
        } else if (this.botOption == "β" && this.playerOption == "β") {
            return this.winner = this.botName;
        } else {
            return this.winner = "SERI"
        }
    }
    matchResult() {
        if (this.winner != "SERI") {
            return `${this.winner} MENANG!`;
        } else {
            return `WAAA ${this.winner}, GAK ADA YG MENANG `;
        }
    }
}
function pickOption(params) {
    const start = new Start();
    start.setPlayerOption = params;
    start.setBotOption = start.botBrain();
    start.winCalculation();
    const inGame = document.getElementById("inGame");
    const result = document.getElementById("result");
    inGame.textContent = "..."
    result.textContent = "..."
    setTimeout(() => {
        inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOption}`
        result.textContent = start.matchResult();
    }, 1500);
}
import type {Script} from "./components/UIElements/RulesArea.tsx";

const grandmother = {
    name: "Vovó",
    description: "Você começa sabendo um jogador do bem e o personagem dele. Se o Demônio matá-lo, você também morre.",
    icon: "https://wiki.bloodontheclocktower.com/images/2/26/Icon_grandmother.png"
}

const sailor = {
    name: "Marinheiro",
    description: "A cada noite, escolha um jogador vivo: um de vocês fica bêbado até o anoitecer. Você não pode morrer.",
    icon: "https://wiki.bloodontheclocktower.com/images/1/16/Icon_sailor.png"
}

const chambermaid = {
    name: "Camareira",
    description: "A cada noite, escolha 2 jogadores vivos (exceto você): saiba quantos deles acordaram esta noite pelas próprias habilidades.",
    icon: "https://wiki.bloodontheclocktower.com/images/8/87/Icon_chambermaid.png"
}

const exorcist = {
    name: "Exorcista",
    description: "A cada noite*, escolha um jogador (exceto o da noite anterior): o Demônio, se escolhido, descobre quem você é e não age esta noite.",
    icon: "https://wiki.bloodontheclocktower.com/images/c/c2/Icon_exorcist.png"
}

const innkeeper = {
    name: "Taverneiro",
    description: "A cada noite*, escolha 2 jogadores: eles não podem morrer esta noite, mas um deles fica bêbado até o anoitecer.",
    icon: "https://wiki.bloodontheclocktower.com/images/0/0c/Icon_innkeeper.png"
}

const gambler = {
    name: "Apostador",
    description: "A cada noite*, escolha um jogador e tente adivinhar o personagem dele: se errar, você morre.",
    icon: "https://wiki.bloodontheclocktower.com/images/f/fd/Icon_gambler.png"
}

const gossip = {
    name: "Fofoqueiro",
    description: "A cada dia, você pode fazer uma alegação publicamente. Esta noite, se a alegação era verdadeira, um jogador morre.",
    icon: "https://wiki.bloodontheclocktower.com/images/c/c7/Icon_gossip.png"
}

const courtier = {
    name: "Cortesã",
    description: "Uma vez por jogo, à noite, escolha um personagem: ele fica bêbado por 3 noites e 3 dias.",
    icon: "https://wiki.bloodontheclocktower.com/images/e/e0/Icon_courtier.png"
}

const professor = {
    name: "Cientista",
    description: "Uma vez por jogo, à noite*, escolha um jogador morto: se ele for um Cidadão, é revivido.",
    icon: "https://wiki.bloodontheclocktower.com/images/6/65/Icon_professor.png"
}

const minstrel = {
    name: "Bardo",
    description: "Quando um Lacaio morre por execução, todos os outros jogadores (exceto Viajantes) ficam bêbados até o anoitecer de amanhã.",
    icon: "https://wiki.bloodontheclocktower.com/images/2/24/Icon_minstrel.png"
}

const tealady = {
    name: "Moça do Chá",
    description: "Se ambos os seus vizinhos vivos são do bem, eles não podem morrer.",
    icon: "https://wiki.bloodontheclocktower.com/images/1/16/Icon_tealady.png"
}

const pacifist = {
    name: "Pacifista",
    description: "Jogadores do bem podem sobreviver à execuções.",
    icon: "https://wiki.bloodontheclocktower.com/images/5/5d/Icon_pacifist.png"
}

const fool = {
    name: "Bobo",
    description: "Na 1ª vez que você for morrer, você não morre.",
    icon: "https://wiki.bloodontheclocktower.com/images/d/d9/Icon_fool.png"
}

const goon = {
    name: "Capanga",
    description: "A cada noite, o 1º jogador que escolher você com a própria habilidade fica bêbado até o anoitecer. Você passa a ter o mesmo alinhamento que ele.",
    icon: "https://wiki.bloodontheclocktower.com/images/6/6f/Icon_goon.png"
}

const lunatic = {
    name: "Lunático",
    description: "Você pensa que é um Demônio, mas você não é. O Demônio sabe quem você é e quem você escolhe à noite.",
    icon: "https://wiki.bloodontheclocktower.com/images/6/64/Icon_lunatic.png"
}

const tinker = {
    name: "Imprudente",
    description: "Você pode morrer a qualquer momento.",
    icon: "https://wiki.bloodontheclocktower.com/images/9/98/Icon_tinker.png"
}

const moonchild = {
    name: "Filha da Lua",
    description: "Quando você souber que morreu, escolha publicamente 1 jogador vivo. Esta noite, se o jogador escolhido era do bem, ele morre.",
    icon: "https://wiki.bloodontheclocktower.com/images/d/dc/Icon_moonchild.png"
}

const godfather = {
    name: "Mafioso",
    description: "Você começa sabendo quais Forasteiros estão em jogo. Se um Forasteiro morreu hoje de dia, escolha um jogador esta noite: o alvo morre. [−1 ou +1 Forasteiro]",
    icon: "https://wiki.bloodontheclocktower.com/images/d/d0/Icon_godfather.png"
}

const devilsadvocate = {
    name: "Advogado do Diabo",
    description: "A cada noite, escolha um jogador vivo (exceto o da noite anterior): se ele for executado amanhã, não morrerá.",
    icon: "https://wiki.bloodontheclocktower.com/images/0/09/Icon_devilsadvocate.png"
}

const assassin = {
    name: "Assassino",
    description: "Uma vez por jogo, à noite*, escolha um jogador: ele morre mesmo que, por alguma razão, não possa morrer.",
    icon: "https://wiki.bloodontheclocktower.com/images/4/49/Icon_assassin.png"
}

const mastermind = {
    name: "Mentor",
    description: "Se o jogo terminaria com a morte por execução do Demônio, jogue por mais 1 dia. Se então um jogador for executado, o time dele perde.",
    icon: "https://wiki.bloodontheclocktower.com/images/d/d5/Icon_mastermind.png"
}

const zombuul = {
    name: "Zumbuul",
    description: "A cada noite*, se ninguém morreu durante o dia, escolha um jogador: ele morre. Na 1ª vez que você for morrer, continua vivo, mas é registrado como morto.",
    icon: "https://wiki.bloodontheclocktower.com/images/1/15/Icon_zombuul.png"
}

const pukka = {
    name: "Púca",
    description: "A cada noite, escolha um jogador: ele fica envenenado. O jogador envenenado anteriormente morre e então fica são.",
    icon: "https://wiki.bloodontheclocktower.com/images/f/f4/Icon_pukka.png"
}

const shabaloth = {
    name: "Xabalote",
    description: "A cada noite*, escolha 2 jogadores: eles morrem. Um jogador morto escolhido na noite anterior pode ser regurgitado.",
    icon: "https://wiki.bloodontheclocktower.com/images/1/1f/Icon_shabaloth.png"
}

const po = {
    name: "Po",
    description: "A cada noite*, você pode escolher um jogador: ele morre. Se a sua última escolha foi 'ninguém', escolha 3 jogadores esta noite.",
    icon: "https://wiki.bloodontheclocktower.com/images/b/b2/Icon_po.png"
}

export const badMoonRising : Script = {
    name: "Bad Moon Rising",
    qrCode: "src/assets/bad_moon_qr.jpg",
    citizen: [
        grandmother,
        sailor,
        chambermaid,
        exorcist,
        innkeeper,
        gambler,
        gossip,
        courtier,
        professor,
        minstrel,
        tealady,
        pacifist,
        fool
    ],
    outsider: [
        goon,
        lunatic,
        tinker,
        moonchild
    ],
    minion: [
        godfather,
        devilsadvocate,
        assassin,
        mastermind
    ],
    demon: [
        zombuul,
        pukka,
        shabaloth,
        po
    ]
}
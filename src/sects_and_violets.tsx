import type {Script} from "./components/UIElements/RulesArea.tsx";

const clockmaker = {
    name: "Relojoeiro",
    description: "Você começa sabendo a quantos passos o Demônio está de seu Lacaio mais próximo.",
    icon: "https://wiki.bloodontheclocktower.com/images/3/3d/Icon_clockmaker.png"
}

const dreamer = {
    name: "Sonhador",
    description: "A cada noite, escolha um jogador (exceto você ou Viajantes): aprenda 1 personagem do bem e 1 do mal, um deles corresponde ao jogador escolhido.",
    icon: "https://wiki.bloodontheclocktower.com/images/f/f2/Icon_dreamer.png"
}

const snakecharmer = {
    name: "Encantador",
    description: "A cada noite, escolha um jogador vivo: um Demônio escolhido desta forma troca de personagem e alinhamento com você, e então fica envenenado.",
    icon: "https://wiki.bloodontheclocktower.com/images/0/08/Icon_snakecharmer.png"
}

const mathematician = {
    name: "Matemático",
    description: "A cada noite, aprenda quantas habilidades de jogadores funcionaram de forma anormal (desde o amanhecer) devido a habilidades de outros personagens.",
    icon: "https://wiki.bloodontheclocktower.com/images/f/f1/Icon_mathematician.png"
}

const flowergirl = {
    name: "Florista",
    description: "A cada noite*, saiba se um Demônio votou hoje.",
    icon: "https://wiki.bloodontheclocktower.com/images/a/ac/Icon_flowergirl.png"
}

const towncrier = {
    name: "Arauto da Cidade",
    description: "A cada noite*, saiba se um Lacaio nomeou hoje.",
    icon: "https://wiki.bloodontheclocktower.com/images/e/ef/Icon_towncrier.png"
}

const oracle = {
    name: "Oráculo",
    description: "A cada noite*, saiba quantos jogadores mortos são do mal.",
    icon: "https://wiki.bloodontheclocktower.com/images/b/bb/Icon_oracle.png"
}

const savant = {
    name: "Prodígio",
    description: "A cada dia, você pode visitar o Narrador para aprender 2 coisas em segredo: 1 é verdadeira e 1 é falsa.",
    icon: "https://wiki.bloodontheclocktower.com/images/d/d5/Icon_savant.png"
}

const seamstress = {
    name: "Costureira",
    description: "Uma vez por jogo, à noite, você pode escolher 2 jogadores (exceto você): saiba se eles têm o mesmo alinhamento.",
    icon: "https://wiki.bloodontheclocktower.com/images/5/53/Icon_seamstress.png"
}

const philosopher = {
    name: "Filósofo",
    description: "Uma vez por jogo, à noite, escolha um personagem do bem: ganhe aquela habilidade. Se esse personagem estiver em jogo, ele fica bêbado.",
    icon: "https://wiki.bloodontheclocktower.com/images/5/5d/Icon_philosopher.png"
}

const artist = {
    name: "Artista",
    description: "Uma vez por jogo, durante o dia, em segredo, você pode fazer uma pergunta de sim/não para o Narrador.",
    icon: "https://wiki.bloodontheclocktower.com/images/1/1a/Icon_artist.png"
}

const juggler = {
    name: "Malabarista",
    description: "Em seu primeiro dia, você pode tentar adivinhar publicamente até 5 personagens de até 5 jogadores. À noite, aprenda quantos você acertou.",
    icon: "https://wiki.bloodontheclocktower.com/images/4/42/Icon_juggler.png"
}

const sage = {
    name: "Sábio",
    description: "Se você for morto pelo Demônio, saiba que ele é 1 dentre 2 jogadores.",
    icon: "https://wiki.bloodontheclocktower.com/images/a/a0/Icon_sage.png"
}

const mutant = {
    name: "Mutante",
    description: "Se você alucinar que é um Forasteiro, você pode ser executado.",
    icon: "https://wiki.bloodontheclocktower.com/images/2/2e/Icon_mutant.png"
}

const sweetheart = {
    name: "Queridinha",
    description: "Quando você morrer, um jogador fica bêbado.",
    icon: "https://wiki.bloodontheclocktower.com/images/6/6a/Icon_sweetheart.png"
}

const barber = {
    name: "Barbeiro",
    description: "Se você morreu hoje, o Demônio poderá escolher dois jogadores (exceto outro Demônio): eles trocam de personagens entre si.",
    icon: "https://wiki.bloodontheclocktower.com/images/1/16/Icon_barber.png"
}

const klutz = {
    name: "Desastrado",
    description: "Quando souber que morreu, escolha publicamente um jogador vivo: se ele for do mal, o seu time perde.",
    icon: "https://wiki.bloodontheclocktower.com/images/b/bc/Icon_klutz.png"
}

const eviltwin = {
    name: "Gêmea Má",
    description: "Você e um oponente se conhecem e sabem o personagem um do outro. Se o jogador do bem for executado, o Mal vence. O Bem não pode vencer enquanto ambos viverem.",
    icon: "https://wiki.bloodontheclocktower.com/images/f/f4/Icon_eviltwin.png"
}

const witch = {
    name: "Feiticeira",
    description: "A cada noite, escolha um jogador: se ele nomear amanhã, morre. Se apenas 3 jogadores estão vivos, você perde essa habilidade.",
    icon: "https://wiki.bloodontheclocktower.com/images/7/7b/Icon_witch.png"
}

const cerenovus = {
    name: "Cerenovus",
    description: "A cada noite, escolha um personagem do bem e um jogador: amanhã, o jogador deve alucinar que é esse personagem; do contrário, pode ser executado.",
    icon: "https://wiki.bloodontheclocktower.com/images/4/45/Icon_cerenovus.png"
}

const pithag = {
    name: "Bruxa do Fosso",
    description: "A cada noite*, escolha um jogador e um personagem para ele se tornar (se não estiver em jogo). Se um Demônio é criado, as mortes serão arbitrárias esta noite.",
    icon: "https://wiki.bloodontheclocktower.com/images/6/6b/Icon_pithag.png"
}

const fanggu = {
    name: "Fang Gu",
    description: "A cada noite*, você escolhe um jogador: ele morre. O 1º Forasteiro a ser morto assim, torna-se um Fang Gu do mal e você morre em vez dele. [+1 Forasteiro]",
    icon: "https://wiki.bloodontheclocktower.com/images/0/0e/Icon_fanggu.png"
}

const vigormortis = {
    name: "Vigormortis",
    description: "A cada noite*, você escolhe um jogador: ele morre. Lacaios que você mata mantêm suas habilidades e envenenam um vizinho Cidadão. [-1 Forasteiro].",
    icon: "https://wiki.bloodontheclocktower.com/images/1/1a/Icon_vigormortis.png"
}

const nodashii = {
    name: "No Dashii",
    description: "A cada noite*, escolha um jogador: ele morre. Seus dois vizinhos Cidadãos estão envenenados.",
    icon: "https://wiki.bloodontheclocktower.com/images/e/eb/Icon_nodashii.png"
}

const vortox = {
    name: "Vortox",
    description: "A cada noite*, escolha um jogador: ele morre. Habilidades de Cidadãos geram informações falsas. A cada dia, se ninguém for executado, o Mal vence.",
    icon: "https://wiki.bloodontheclocktower.com/images/8/89/Icon_vortox.png"
}

export const sectsAndViolets : Script = {
    name : "Sects And Violets",
    citizen: [
        clockmaker,
        dreamer,
        snakecharmer,
        mathematician,
        flowergirl,
        towncrier,
        oracle,
        savant,
        seamstress,
        philosopher,
        artist,
        juggler,
        sage
    ],
    outsider: [
        mutant,
        sweetheart,
        barber,
        klutz
    ],
    minion: [
        eviltwin,
        witch,
        cerenovus,
        pithag
    ],
    demon: [
        fanggu,
        vigormortis,
        nodashii,
        vortox
    ]
}
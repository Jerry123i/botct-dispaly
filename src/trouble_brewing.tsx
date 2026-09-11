import type {Role, Script} from "./components/UIElements/RulesArea.tsx";

const washerwoman :Role = {
    name: "Lavadeira",
    description: "Você começa sabendo que 1 dentre 2 jogadores é um Cidadão específico.",
    icon: "https://wiki.bloodontheclocktower.com/images/8/85/Icon_washerwoman.png"
}

const librarian :Role = {
    name: "Bibliotecário",
    description: "Você começa sabendo que 1 dentre 2 jogadores é um Forasteiro específico. (Ou que há zero Forasteiros em jogo.)",
    icon: "https://wiki.bloodontheclocktower.com/images/e/e0/Icon_librarian.png"
}

const investigator :Role = {
    name: "Investigador",
    description: "Você começa sabendo que 1 dentre 2 jogadores é um Lacaio específico.",
    icon: "https://wiki.bloodontheclocktower.com/images/a/ad/Icon_investigator.png"
}

const chef :Role = {
    name: "Chef",
    description: "Você começa sabendo quantos pares de jogadores do mal existem.",
    icon: "https://wiki.bloodontheclocktower.com/images/d/d5/Icon_chef.png"
}

const empath :Role = {
    name: "Empático",
    description: "A cada noite, saiba quantos de seus 2 vizinhos vivos são do mal.",
    icon: "https://wiki.bloodontheclocktower.com/images/1/13/Icon_empath.png"
}

const fortuneteller :Role = {
    name: "Vidente",
    description: "A cada noite, escolha 2 jogadores: saiba se dentre eles há um Demônio. Há um jogador do bem que é registrado como Demônio para você.",
    icon: "https://wiki.bloodontheclocktower.com/images/9/97/Icon_fortuneteller.png"
}

const undertaker :Role = {
    name: "Coveiro",
    description: "A cada noite*, aprenda qual personagem morreu por execução hoje.",
    icon: "https://wiki.bloodontheclocktower.com/images/0/05/Icon_undertaker.png"
}

const monk :Role = {
    name: "Monge",
    description: "A cada noite*, escolha um jogador (exceto você): ele está a salvo do Demônio esta noite.",
    icon: "https://wiki.bloodontheclocktower.com/images/7/7c/Icon_monk.png"
}

const slayer :Role = {
    name: "Atirador",
    description: "Uma vez por jogo, durante o dia, escolha um jogador publicamente: se ele for o Demônio, ele morre.",
    icon: "https://wiki.bloodontheclocktower.com/images/d/d3/Icon_slayer.png"
}

const soldier :Role = {
    name: "Soldado",
    description: "Você está a salvo do Demônio.",
    icon: "https://wiki.bloodontheclocktower.com/images/c/c3/Icon_soldier.png"
}

const ravenkeeper :Role = {
    name: "Mestre dos Corvos",
    description: "Se você morrer à noite, você é acordado para escolher um jogador: aprenda o personagem dele.",
    icon: "https://wiki.bloodontheclocktower.com/images/e/ef/Icon_ravenkeeper.png"
}

const mayor :Role = {
    name: "Prefeito",
    description: "Se apenas 3 jogadores estão vivos e não houver execução, o seu time vence. Se você for morrer à noite, outro jogador pode morrer em vez disso.",
    icon: "https://wiki.bloodontheclocktower.com/images/a/a1/Icon_mayor.png"
}

const virgin :Role = {
    name: "Virgem",
    description: "Na 1ª vez que você é nomeado, se o nomeador for um Cidadão, ele é executado imediatamente.",
    icon: "https://wiki.bloodontheclocktower.com/images/d/d3/Icon_virgin.png"
}

const butler :Role = {
    name: "Mordomo",
    description: "A cada noite, escolha um jogador (exceto você): amanhã, você só poderá votar enquanto ele estiver votando também.",
    icon: "https://wiki.bloodontheclocktower.com/images/1/19/Icon_butler.png"
}

const drunk :Role = {
    name: "Bêbado",
    description: "Você não sabe que é o Bêbado. Você acha que é um Cidadão, mas não é.",
    icon: "https://wiki.bloodontheclocktower.com/images/4/4a/Icon_drunk.png"
}

const recluse :Role = {
    name: "Recluso",
    description: "Você pode ser registrado como se fosse do mal e um Demônio ou Lacaio, mesmo quando morto.",
    icon: "https://wiki.bloodontheclocktower.com/images/6/60/Icon_recluse.png"
}

const saint :Role = {
    name: "Santo",
    description: "Se você morrer por execução, o seu time perde.",
    icon: "https://wiki.bloodontheclocktower.com/images/c/c9/Icon_saint.png"
}

const poisoner :Role = {
    name: "Envenenador",
    description: "A cada noite, escolha um jogador: ele fica envenenado até o anoitecer.",
    icon: "https://wiki.bloodontheclocktower.com/images/b/b1/Icon_poisoner.png"
}

const spy :Role = {
    name: "Espião",
    description: "A cada noite, você vê o Grimório. Você pode ser registrado como se fosse do bem e um Cidadão ou Forasteiro, mesmo morto.",
    icon: "https://wiki.bloodontheclocktower.com/images/5/54/Icon_spy.png"
}

const scarletwoman :Role = {
    name: "Mulher Escarlate",
    description: "Se há 5 ou mais jogadores vivos e o Demônio morrer, você se torna o Demônio. (Viajantes não contam.)",
    icon: "https://wiki.bloodontheclocktower.com/images/1/13/Icon_scarletwoman.png"
}

const baron :Role = {
    name: "Barão",
    description: "Há Forasteiros adicionais em jogo. [+2 Forasteiros]",
    icon: "https://wiki.bloodontheclocktower.com/images/6/6d/Icon_baron.png"
}

const imp : Role = {
    name: "Capeta",
    description: "A cada noite*, escolha um jogador: ele morre. Se você se matar dessa forma, um Lacaio se torna o Capeta.",
    icon: "https://wiki.bloodontheclocktower.com/images/5/5c/Icon_imp.png"
}

export const troubleBrewing :Script = {
    name: "Trouble Brewing",
    citizen: [
        washerwoman,
        librarian,
        investigator,
        chef,
        empath,
        fortuneteller,
        undertaker,
        monk,
        ravenkeeper,
        virgin,
        slayer,
        soldier,
        mayor
    ],
    outsider: [
        butler,
        drunk,
        recluse,
        saint
    ],
    minion: [
        poisoner,
        spy,
        scarletwoman,
        baron
    ],
    demon: [
        imp
    ]
}

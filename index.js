// 1
const companhia = 'Hyped CO';
console.log(`\nWelcome to ${company}\n`);

// 2
var roupas = [];

// 3
roupas = [
    {
        id: Math.random().toString().substr(2, 6),
        titulo: 'autentic',
        tamanho: 'p/m/g/gg',
        tecido: [
            'algodão, poliester',
        ],
        video: 'https://www.youtube.com/embed/HyaRbo8R_-o',
        infantil: false
    }
];

// 4
const addRoupa = (titulo, tamanho, tecido, video, infantil) => {

    lista.push({
        id: Math.random().toString().substr(2, 6),
        titulo,
        tamanho,
        tecido,
        video,
        infantil
    });

    console.log('Sua lista de roupas:\n');
    console.log(lista);
    console.log(`\nPeça "${titulo}" adicionada com sucesso!\n`);
    console.log('---------------------------------------');
}

addRoupa('nice shirt', 'g/gg', ['poliester', 'algodão'], 'https://www.google.com', false);
addRoupa('nice jeans', 'p/m', ['poliester', 'jeans'], 'https://www.google.com', true);

// 5
const mostrarRoupa = () => {
    roupa.forEach(item => {
        console.log(`Item: "${item.title}"`);

        console.log(`Tamanho:\n> ${item.tamanho}`);

        console.log(`Infantil: ${item.infantil}\n`);
        console.log('---------------------------------------');
    })
};

mostrarRoupa();

// 6
    const deletaRoupa= id => {
    const novaRoupa = roupas.filter(item => item.id != id);
    const roupa = roupas.filter(item => !novaRoupa.includes(item));

    if (!roupa.length) {
        return console.log(`Peça "${id}" não encontrada.`);
    }

    roupas = novaRoupa;
    console.log(`Peça "${id} - ${roupa[0].title}"deletada!\n`);
    console.log('\nSua lista de Roupas\n');
    console.log(roupas);
}

deletaRoupa(999999);

// 7
const buscaRoupas = campo => {
    const novaRoupa = roupas.filter(item => item.title.toLowerCase().includes(campo.toLowerCase()));

    if (!novaRoupa.length) {
        return console.log(`\nPeça "${campo}" não encontrada.\n`);
    }

    let resultado = novaRoupa.length;
    console.log(`\nRoupas containing "${campo}": ${results}\n`);
    console.log(novaRoupa);
}

searchRoupas('hyped');
searchRoupas('autentic');

// 8
const atualizaRoupas = (id, roupa) => {
    let atualizado = false;

    const novaRoupa = roupas.map(item => {
        if (item.id == id) {
            if (roupa.title) {
                item.title = roupa.title;
            }
            if (roupa.difficulty) {
                item.difficulty = roupa.difficulty;
            }
            if (roupa.ingredients) {
                item.ingredients = roupa.ingredients;
            }
            if (roupa.instructions) {
                item.instructions = roupa.instructions;
            }
            if (roupa.video) {
                item.video = roupa.video;
            }
            if (roupa.vegan) {
                item.vegan = roupa.vegan;
            }
            atualizado = true;
            console.log(`\nRoupa "${id} - ${item.title}" atualizada!\n`);
        }
    });

    if (!atualizado) {
        return console.log(`\nRoupa "${id}" não encontrada\n`);
    }

    console.log('Sua lista de Roupas:\n');
    console.log(roupas);
}

updateRoupas(999999);

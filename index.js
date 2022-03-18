// 1
const companhia = 'Hyped CO';
console.log(`*----------------*----------------*`);
console.log(`\nWelcome to ${company}\n`);
console.log(`*----------------*----------------*`);

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
    console.log(roupas);
    console.log(`\nPeça "${titulo}" adicionada com sucesso!\n`);
    console.log(`*----------------*----------------*`);
}

addRoupa('nice shirt', 'g/gg', ['poliester', 'algodão'], 'https://www.google.com', false);
addRoupa('nice jeans', 'p/m', ['poliester', 'jeans'], 'https://www.google.com', true);

// 5
const mostrarRoupa = () => {
    roupas.forEach(item => {
        console.log(`Item: "${item.title}"`);
        console.log(`Tamanho:\n> ${item.tamanho}`);
        console.log(`Infantil: ${item.infantil}\n`);
        console.log(`*----------------*----------------*`);
    })
};

mostrarRoupa();

// 6
const deletaRoupa = id => {
    const novaRoupa = roupas.filter(item => item.id != id);
    const roupa = roupas.filter(item => !novaRoupa.includes(item));

    if (!roupa.length) {
        return console.log(`Peça "${id}" não encontrada.`);
    }

    roupas = novaRoupa;
    console.log(`Peça "${id} - ${roupa[0].title}"deletada!\n`);
    console.log('\nSua lista de Roupas\n');
    console.log(roupas);
    console.log(`*----------------*----------------*`);
}

// deletaRoupa();

// 7
const buscaRoupas = campo => {
    const novaRoupa = roupas.filter(item => item.title.toLowerCase().includes(campo.toLowerCase()));

    if (!novaRoupa.length) {
        return console.log(`\nPeça "${campo}" não encontrada.\n`);
    }

    let resultado = novaRoupa.length;
    console.log(`\nConteúdo de Roupas "${campo}": ${results}\n`);
    console.log(novaRoupa);
    console.log(`*----------------*----------------*`);
}

buscaRoupas('hyped');
buscaRoupas('autentic');

// 8
const atualizaRoupas = (id, roupa) => {
    let atualizado = false;

    const novaRoupa = roupas.map(item => {
        if (item.id == id) {
            if (roupa.titulo) {
                item.titulo = roupa.titulo;
            }
            if (roupa.tamanho) {
                item.tamanho = roupa.tamanho;
            }
            if (roupa.tecido) {
                item.tecido = roupa.tecido;
            }
            if (roupa.video) {
                item.video = roupa.video;
            }
            if (roupa.infantil) {
                item.infantil = roupa.infantil;
            }
            atualizado = true;
            console.log(`\nRoupa "${id} - ${item.title}" atualizada!\n`);
            console.log(`*----------------*----------------*`);
        }
    });

    if (!atualizado) {
        return console.log(`\nRoupa "${id}" não encontrada\n`);
    }
    console.log('Sua lista de Roupas:\n');
    console.log(`*---------------------------------*`);
    console.log(roupas);
    console.log(`*---------------------------------*`);
}

// atualizaRoupas(); 

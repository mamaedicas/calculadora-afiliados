
$(document).ready(function() {
    const cards = ['vida-atual', 'nicho', 'vida-almejada', 'inscreva-se'];

    function mostrarCard(cardId) {
        $('.card').hide().removeClass('active');
        $('#' + cardId).show().addClass('active');
    }

    function getCurrentCardIndex() {
        const activeCard = $('.card.active').attr('id');
        return cards.indexOf(activeCard);
    }

    function nextCard() {
        let currentCardIndex = getCurrentCardIndex();
        currentCardIndex = Math.min(cards.length - 1, currentCardIndex + 1);
        mostrarCard(cards[currentCardIndex]);
    }

    function prevCard() {
        let currentCardIndex = getCurrentCardIndex();
        currentCardIndex = Math.max(0, currentCardIndex - 1);
        mostrarCard(cards[currentCardIndex]);
    }

    $('#renda-desejada').on('input', function() {
        let valor = parseInt($(this).val()).toLocaleString('pt-BR');
        $('#tempo-producao-display').text(valor + ' reais');
    });

    $('#prosseguir').click(function() {
        nextCard();
    });

    $('#avancar').click(function() {
        nextCard();
    });

    $('#quero-aprender').click(function() {
        nextCard();
    });

    $('#prosseguir-2').click(function() {
        nextCard();
    });
    
    $('#voltar').click(function() {
        prevCard();
    });

    $('#home-btn').click(function() {
        mostrarCard('vida-atual');
    });

    const selectNicho = document.getElementById('nicho-dropdown');
    for (let nicho in categorias) {
        const option = document.createElement('option');
        option.value = nicho;
        option.textContent = nicho;
        selectNicho.appendChild(option);
    }

    $('#confirmar-nicho').click(function() {
        const nichoSelecionado = $('#nicho-dropdown').val();
        $('#nicho-selecionado').text(nichoSelecionado);
        $('#confirmacao-nicho').show();
    });




    $('#prosseguir-2').click(function() {
        const nichoSelecionado = $('#nicho-dropdown').val();
        const rendaMensal = parseFloat($('#renda-desejada').val()) || 1000;
    
        const categoria = categorias[nichoSelecionado];
        const comissaoPorProduto = categoria.valor * categoria.comissao;
        const quantidadeNecessaria = Math.ceil(rendaMensal / comissaoPorProduto);
        const valorTotalNecessario = quantidadeNecessaria * categoria.valor;
        let rendaFormatada = parseInt(rendaMensal).toLocaleString('pt-BR');
        let valorTotalFormatado = parseInt(valorTotalNecessario).toLocaleString('pt-BR');
        $('#result').html(`Para ter uma renda mensal de R$${rendaFormatada}, você precisará vender o equivalente a R$${valorTotalFormatado}, ou ${quantidadeNecessaria} unidades de ${categoria.produto} por mês.`);
    });

    // Mostrar o primeiro card ao carregar a página
    mostrarCard('vida-atual');
});


const categorias = {
    "Beleza": { "comissao": 0.15, "valor": 500, "produto": "Perfume Chanel No. 5" },
    "Bolsas, Malas e Mochilas": { "comissao": 0.13, "valor": 800, "produto": "Mala Samsonite Grande" },
    "Brinquedos e jogos": { "comissao": 0.09, "valor": 300, "produto": "LEGO Super Mario" },
    "Calçados, bolsas e óculos escuros": { "comissao": 0.13, "valor": 500, "produto": "Tênis Nike Air Max" },
    "Câmera e fotografia": { "comissao": 0.09, "valor": 4000, "produto": "Canon EOS Rebel T7i" },
    "Casa": { "comissao": 0.09, "valor": 500, "produto": "Jogo de Panelas Tramontina" },
    "Celulares": { "comissao": 0.07, "valor": 8200, "produto": "iPhone 14" },
    "Comidas e bebidas": { "comissao": 0.13, "valor": 12, "produto": "Macarrão Barilla" },
    "Cozinha": { "comissao": 0.09, "valor": 400, "produto": "Panela de Pressão Elétrica Philips Walita" },
    "Dispositivos Amazon": { "comissao": 0.15, "valor": 408, "produto": "Amazon Echo" },
    "Eletrodomésticos de linha branca": { "comissao": 0.08, "valor": 2500, "produto": "Geladeira Brastemp Frost Free Duplex" },
    "Eletrônicos portáteis": { "comissao": 0.09, "valor": 1500, "produto": "Apple AirPods Pro" },
    "Eletroportáteis de cuidado pessoal": { "comissao": 0.09, "valor": 250, "produto": "Secador de Cabelo Taiff" },
    "Esportes, aventura e lazer": { "comissao": 0.08, "valor": 1500, "produto": "Bicicleta Caloi Aro 29" },
    "Ferramentas e Construção": { "comissao": 0.09, "valor": 400, "produto": "Furadeira Bosch" },
    "Instrumentos musicais e acessórios": { "comissao": 0.09, "valor": 600, "produto": "Violão Tagima" },
    "Jardim e Piscina": { "comissao": 0.09, "valor": 500, "produto": "Piscina Inflável Mor" },
    "Joias": { "comissao": 0.13, "valor": 2000, "produto": "Colar de Ouro 18k" },
    "Móveis": { "comissao": 0.08, "valor": 2000, "produto": "Sofá 3 Lugares Retrátil" },
    "Papelaria e Escritório": { "comissao": 0.09, "valor": 1000, "produto": "Impressora HP LaserJet" },
    "PC": { "comissao": 0.09, "valor": 4000, "produto": "Notebook Dell Inspiron" },
    "Peças e acessórios automotivos": { "comissao": 0.10, "valor": 400, "produto": "Bateria Moura 60Ah" },
    "Pet Shop": { "comissao": 0.13, "valor": 200, "produto": "Ração Royal Canin para Cães" },
    "Produtos para bebês": { "comissao": 0.13, "valor": 1000, "produto": "Cadeirinha Fisher Price" },
    "Relógios": { "comissao": 0.13, "valor": 500, "produto": "Relógio Casio G-Shock" },
    "Roupas e acessórios": { "comissao": 0.13, "valor": 400, "produto": "Jaqueta Levi's Masculina" },
    "Saúde e cuidados pessoais": { "comissao": 0.13, "valor": 150, "produto": "Fralda Pants Pampers Premium Care" },
    "TV, áudio e cinema em casa": { "comissao": 0.09, "valor": 2500, "produto": "Smart TV Samsung 50\" 4K" },
    "Videogames e consoles": { "comissao": 0.08, "valor": 5000, "produto": "PlayStation 5" }
};

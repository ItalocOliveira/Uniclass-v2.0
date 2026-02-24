

const detalhesComercios = {
    "Cantina CT": {
        img: "map-docs/imgs/cantina-ct.jpg",
        desc: `
            <ul class="popup-lista">
                <li><i class="bi bi-cup-hot"></i> Salgados variados</li>
                <li><i class="bi bi-cup-straw"></i> Sucos naturais</li>
                <li><i class="bi bi-cup-hot-fill"></i> Café</li>
            </ul>

            <div class="popup-status aberto">
                <i class="bi bi-clock"></i>
                Aberto agora · 07h–22h
            </div>

            <div class="popup-acoes">
                <button class="btn-primario">
                    <i class="bi bi-geo-alt-fill"></i>
                    Como chegar
                </button>
                <button class="btn-secundario">
                    <i class="bi bi-menu-down"></i>
                    Cardápio
                </button>
                <button class="btn-secundario">
                    <i class="bi bi-eye"></i>
                    Ver detalhes
                </button>
            </div>
        `
    },

"Tapiocabana": {
    img: "map-docs/imgs/tapiocabana.png",
    desc: `
        <ul class="popup-lista">
            <li><i class="bi bi-egg-fried"></i> Tapiocas doces e salgadas</li>
            <li><i class="bi bi-cheese"></i> Recheios variados</li>
            <li><i class="bi bi-cup-straw"></i> Bebidas naturais</li>
        </ul>

        <div class="popup-status aberto">
            <i class="bi bi-clock"></i>
            Aberto agora · 07h–22h
        </div>

        <div class="popup-acoes">
            <button class="btn-primario">
                <i class="bi bi-geo-alt-fill"></i>
                Como chegar
            </button>
            <button class="btn-secundario" onclick="togglePopupContent('Tapiocabana', 'menu')">
                <i class="bi bi-menu-down"></i>
                Cardápio
            </button>
            <button class="btn-secundario">
                <i class="bi bi-eye"></i>
                Ver detalhes
            </button>
        </div>
    `,
//CARDAPIO. LEMBRANDO QUE O NOSSO É NOSSO E DELES É O DELES
    cardapioHTML: `
        <div class="popup-cardapio-container" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <div class="header-cardapio" style="display:flex; align-items:center; gap:10px; margin-bottom:15px;">
                <button onclick="togglePopupContent('Tapiocabana', 'home')" style="background:none; border:none; color:#3553C1; cursor:pointer; font-size:18px; padding:0;">
                    <i class="bi bi-arrow-left"></i>
                </button>
                <h3 style="margin:0; color:#3553C1; font-size:18px; width:100%; text-align:center; padding-right:25px;">Cardapio</h3>
            </div>

            <div class="categorias-scroll" style="display:flex; gap:8px; margin-bottom:15px; overflow-x:auto; padding-bottom:5px;">
                <span style="background:#f0f7f0; color:#3553C1;border:1px solid #3553C1; padding:4px 12px; border-radius:8px; font-size:12px; white-space:nowrap;">Salgados</span>
                <span style="background:#f5f5f5; color:#666; padding:4px 12px; border-radius:8px; font-size:12px; white-space:nowrap;">Doces</span>
                <span style="background:#f5f5f5; color:#666; padding:4px 12px; border-radius:8px; font-size:12px; white-space:nowrap;">Bebidas</span>
            </div>

            <div class="lista-itens" style="display:flex; flex-direction:column; gap:12px; max-height:250px; overflow-y:auto; padding-right:5px;">
                
                <div class="item-card" style="display:flex; gap:10px; background:#fff; border-radius:12px; overflow:hidden; border-bottom: 1px solid #eee; padding-bottom: 10px;">
                    <img src="map-docs/imgs/receita-de-tapioca-com-frango-requeijao.webp" style="width:70px; height:70px; object-fit:cover; border-radius:10px;" />
                    <div style="flex:1;">
                        <div style="display:flex; justify-content:space-between; align-items:start;">
                            <span style="font-weight:600; font-size:14px; color:#111;">Frango com Catupiry</span>
                            <i class="bi bi-plus-circle" style="color:#3553C1; font-size:16px;"></i>
                        </div>
                        <p style="margin:2px 0; font-size:11px; color:#777;">Frango desfiado e cremoso</p>
                        <span style="color:#2e7d32; font-weight:700; font-size:14px;">R$ 22,00</span>
                    </div>
                </div>

                <div class="item-card" style="display:flex; gap:10px; background:#fff; border-radius:12px; overflow:hidden; border-bottom: 1px solid #eee; padding-bottom: 10px;">
                    <img src="map-docs/imgs/tapioca-de-carne.jpg" style="width:70px; height:70px; object-fit:cover; border-radius:10px;" />
                    <div style="flex:1;">
                        <div style="display:flex; justify-content:space-between; align-items:start;">
                            <span style="font-weight:600; font-size:14px; color:#111;">Carne de Sol com Queijo</span>
                            <i class="bi bi-plus-circle" style="color:#3553C1; font-size:16px;"></i>
                        </div>
                        <p style="margin:2px 0; font-size:11px; color:#777;">Carne seca e queijo coalho</p>
                        <span style="color:#2e7d32; font-weight:700; font-size:14px;">R$ 25,00</span>
                    </div>
                </div>

                <div class="item-card" style="display:flex; gap:10px; background:#fff; border-radius:12px; overflow:hidden; border-bottom: 1px solid #eee; padding-bottom: 10px;">
                    <img src="map-docs/imgs/tapioca-doce.jpg" style="width:70px; height:70px; object-fit:cover; border-radius:10px;" />
                    <div style="flex:1;">
                        <div style="display:flex; justify-content:space-between; align-items:start;">
                            <span style="font-weight:600; font-size:14px; color:#111;">Tapioca Doce</span>
                            <i class="bi bi-plus-circle" style="color:#3553C1; font-size:16px;"></i>
                        </div>
                        <p style="margin:2px 0; font-size:11px; color:#777;">Tapioca com leite ninho</p>
                        <span style="color:#2e7d32; font-weight:700; font-size:14px;">R$ 21,00</span>
                    </div>
                </div>

            </div>
        </div>
    `
},

    "Restaurante Dona Xica": {
        img: "map-docs/imgs/restaurante-piscina-icon.png",
        desc: `
            <ul class="popup-lista">
                <li><i class="bi bi-egg-fried"></i> Pratos executivos</li>
                <li><i class="bi bi-bowl-hot"></i> Refeições completas</li>
                <li><i class="bi bi-cup-straw"></i> Bebidas geladas</li>
            </ul>

            <div class="popup-status aberto">
                <i class="bi bi-clock"></i>
                Aberto agora · 07h–22h
            </div>

            <div class="popup-acoes">
                <button class="btn-primario">
                    <i class="bi bi-geo-alt-fill"></i>
                    Como chegar
                <button class="btn-secundario"
                        onclick="togglePopupContent('Restaurante Dona Xica', 'menu')">
                    <i class="bi bi-menu-down"></i>
                    Cardápio
                </button>

                <button class="btn-secundario">
                    <i class="bi bi-eye"></i>
                    Ver detalhes
                </button>
            </div>
        `,
//CARDAPIO. LEMBRANDO QUE O NOSSO É NOSSO E DELES É O DELES
    cardapioHTML: `
        <div class="popup-cardapio-container" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <div class="header-cardapio" style="display:flex; align-items:center; gap:10px; margin-bottom:15px;">
                <button onclick="togglePopupContent('Restaurante Dona Xica', 'home')" style="background:none; border:none; color:#3553C1; cursor:pointer; font-size:18px; padding:0;">
                    <i class="bi bi-arrow-left"></i>
                </button>
                <h3 style="margin:0; color:#3553C1; font-size:18px; width:100%; text-align:center; padding-right:25px;">Cardapio</h3>
            </div>

            <div class="categorias-scroll" style="display:flex; gap:8px; margin-bottom:15px; overflow-x:auto; padding-bottom:5px;">
                <span style="background:#f0f7f0; color:#3553C1;border:1px solid #3553C1; padding:4px 12px; border-radius:8px; font-size:12px; white-space:nowrap;">Salgados</span>
                <span style="background:#f5f5f5; color:#666; padding:4px 12px; border-radius:8px; font-size:12px; white-space:nowrap;">Doces</span>
                <span style="background:#f5f5f5; color:#666; padding:4px 12px; border-radius:8px; font-size:12px; white-space:nowrap;">Bebidas</span>
            </div>

            <div class="lista-itens" style="display:flex; flex-direction:column; gap:12px; max-height:250px; overflow-y:auto; padding-right:5px;">
                
                <div class="item-card" style="display:flex; gap:10px; background:#fff; border-radius:12px; overflow:hidden; border-bottom: 1px solid #eee; padding-bottom: 10px;">
                    <img src="map-docs/imgs/self-service.jpg" style="width:70px; height:70px; object-fit:cover; border-radius:10px;" />
                    <div style="flex:1;">
                        <div style="display:flex; justify-content:space-between; align-items:start;">
                            <span style="font-weight:600; font-size:14px; color:#111;">Self Service</span>
                            <i class="bi bi-plus-circle" style="color:#3553C1; font-size:16px;"></i>
                        </div>
                        <p style="margin:2px 0; font-size:11px; color:#777;">Crie seu prato!</p>
                        <span style="color:#2e7d32; font-weight:700; font-size:14px;">R$ 23,00</span>
                    </div>
                </div>

            </div>
        </div>`
    },

    "Minaçaí": {
        img: "map-docs/imgs/minacai-icon.png",
        desc: `
            <ul class="popup-lista">
                <li><i class="bi bi-snow"></i> Açaí e cremes gelados</li>
                <li><i class="bi bi-strawberry"></i> Acompanhamentos variados</li>
                <li><i class="bi bi-cup-straw"></i> Bebidas naturais</li>
            </ul>

            <div class="popup-status aberto">
                <i class="bi bi-clock"></i>
                Aberto agora · 07h–22h
            </div>

            <div class="popup-acoes">
                <button class="btn-primario">
                    <i class="bi bi-geo-alt-fill"></i>
                    Como chegar
                </button>
                <button class="btn-secundario">
                    <i class="bi bi-menu-down"></i>
                    Cardápio
                </button>
                <button class="btn-secundario">
                    <i class="bi bi-eye"></i>
                    Ver detalhes
                </button>
            </div>
        `
    },

    "Pizzaria": {
        img: "map-docs/imgs/pizzaria-icon.jpg",
        desc: `
            <ul class="popup-lista">
                <li><i class="bi bi-pizza"></i> Pizzas artesanais</li>
                <li><i class="bi bi-burger"></i> Lanches rápidos</li>
                <li><i class="bi bi-cup-straw"></i> Bebidas</li>
            </ul>

            <div class="popup-status aberto">
                <i class="bi bi-clock"></i>
                Aberto agora · 07h–22h
            </div>

            <div class="popup-acoes">
                <button class="btn-primario">
                    <i class="bi bi-geo-alt-fill"></i>
                    Como chegar
                </button>
                <button class="btn-secundario">
                    <i class="bi bi-menu-down"></i>
                    Cardápio
                </button>
                <button class="btn-secundario">
                    <i class="bi bi-eye"></i>
                    Ver detalhes
                </button>
            </div>
        `
    },

    "Comercio do Museu": {
        img: "map-docs/imgs/comercio-museu.jpg",
        desc: `
            <ul class="popup-lista">
                <li><i class="bi bi-bread-slice"></i> Lanches rápidos</li>
                <li><i class="bi bi-cup-straw"></i> Bebidas</li>
                <li><i class="bi bi-bag"></i> Souvenirs</li>
            </ul>

            <div class="popup-status aberto">
                <i class="bi bi-clock"></i>
                Aberto agora · 07h–22h
            </div>

            <div class="popup-acoes">
                <button class="btn-primario">
                    <i class="bi bi-geo-alt-fill"></i>
                    Como chegar
                </button>
                <button class="btn-secundario">
                    <i class="bi bi-menu-down"></i>
                    Cardápio
                </button>
                <button class="btn-secundario">
                    <i class="bi bi-eye"></i>
                    Ver detalhes
                </button>
            </div>
        `
    }
};
const detalhesPraca = {
    "Praça das Pedras": {
        img: "map-docs/imgs/praca.jpg",
        desc: `
            <div class="popup-status aberto">
                <i class="bi bi-clock"></i>
                Aberto agora · 07h–22h
            </div>

            <div class="popup-acoes">
                <button class="btn-primario">
                    <i class="bi bi-geo-alt-fill"></i>
                    Como chegar
                </button>
                <button class="btn-secundario">
                    <i class="bi bi-telephone"></i>
                    Ligar
                </button>
                <button class="btn-secundario">
                    <i class="bi bi-eye"></i>
                    Ver detalhes
                </button>
            </div>
        `
    },
}
const detalhesReitoria = {
    "Reitoria": {
        img: "map-docs/imgs/reitoria.webp",
        desc: `
            <ul class="popup-lista">
                <li><i class="bi bi-building"></i> Administração</li>
                <li><i class="bi bi-folder2"></i> Secretarias</li>
                <li><i class="bi bi-clock"></i> Atendimento 08h–18h</li>
            </ul>

            <div class="popup-status aberto">
                <i class="bi bi-check-circle-fill"></i>
                Aberto agora
            </div>

            <div class="popup-acoes">
                <button class="btn-primario">
                    <i class="bi bi-geo-alt-fill"></i>
                    Como chegar
                </button>
                <button class="btn-secundario">
                    <i class="bi bi-eye"></i>
                    Ver detalhes
                </button>
            </div>
        `
    },

}
const detalhesBiblioteca = {
    "Biblioteca": {
        img: "map-docs/imgs/biblioteca.webp",
        desc: `
            <ul class="popup-lista">
                <li><i class="bi bi-book"></i> Acervo de livros e periódicos</li>
                <li><i class="bi bi-laptop"></i> Espaço de estudo e computadores</li>
                <li><i class="bi bi-clock"></i> Funcionamento 07h–22h</li>
            </ul>

            <div class="popup-status aberto">
                <i class="bi bi-check-circle-fill"></i>
                Aberto agora
            </div>

            <div class="popup-acoes">
                <button class="btn-primario">
                    <i class="bi bi-geo-alt-fill"></i>
                    Como chegar
                </button>
                <button class="btn-secundario">
                    <i class="bi bi-eye"></i>
                    Ver detalhes
                </button>
            </div>
        `
    }
};
const detalhesMuseu = {
    "Museu": {
        img: "map-docs/imgs/museu.jpg",
        desc: `
            <ul class="popup-lista">
                <li><i class="bi bi-bank"></i> Exposições permanentes e temporárias</li>
                <li><i class="bi bi-palette"></i> Acervo de arte e história</li>
                <li><i class="bi bi-clock"></i> Funcionamento 08h–20h</li>
            </ul>

            <div class="popup-status aberto">
                <i class="bi bi-check-circle-fill"></i>
                Aberto agora
            </div>

            <div class="popup-acoes">
                <button class="btn-primario">
                    <i class="bi bi-geo-alt-fill"></i>
                    Como chegar
                </button>
                <button class="btn-secundario">
                    <i class="bi bi-eye"></i>
                    Ver detalhes
                </button>
            </div>
        `
    }
};
const detalhesEstacionamento = {
    "Estacionamento do EVA": {
        img: "map-docs/imgs/estacionamento.png",
        desc: gerarDescEstacionamento()
    },
    "Estacionamento do Auditório": {
        img: "map-docs/imgs/estacionamento.png",
        desc: gerarDescEstacionamento()
    },
    "Estacionamento do Primeiros Socorros": {
        img: "map-docs/imgs/estacionamento.png",
        desc: gerarDescEstacionamento()
    },
    "Estacionamento de Psicologia": {
        img: "map-docs/imgs/estacionamento.png",
        desc: gerarDescEstacionamento()
    },
    "Estacionamento da Reitoria": {
        img: "map-docs/imgs/estacionamento.png",
        desc: gerarDescEstacionamento()
    }
};
const detalhesAuditorio = {
    "Auditório": {
        img: "map-docs/imgs/auditorio.webp",
        desc: `
            <ul class="popup-lista">
                <li><i class="bi bi-mic"></i> Espaço para palestras e eventos</li>
                <li><i class="bi bi-person-video3"></i> Capacidade para até 300 pessoas</li>
                <li><i class="bi bi-clock"></i> Funcionamento 08h–22h</li>
            </ul>

            <div class="popup-status aberto">
                <i class="bi bi-check-circle-fill"></i>
                Aberto agora
            </div>

            <div class="popup-acoes">
                <button class="btn-primario">
                    <i class="bi bi-geo-alt-fill"></i>
                    Como chegar
                </button>
                <button class="btn-secundario">
                    <i class="bi bi-eye"></i>
                    Ver detalhes
                </button>
            </div>
        `
    }
};
const detalhesEva = {
    "EVA": {
        img: "map-docs/imgs/eva.webp",
        desc: `
            <ul class="popup-lista">
                <li>
                    <i class="bi bi-mic"></i>
                    Espaço para palestras e eventos
                </li>
                <li>
                    <i class="bi bi-people"></i>
                    Capacidade para até 300 pessoas
                </li>
                <li>
                    <i class="bi bi-clock"></i>
                    Funcionamento 08h–22h
                </li>
            </ul>

            <div class="popup-status aberto">
                <i class="bi bi-check-circle-fill"></i>
                Aberto agora
            </div>

            <div class="popup-acoes">
                <button class="btn-primario">
                    <i class="bi bi-geo-alt-fill"></i>
                    Como chegar
                </button>
                <button class="btn-secundario">
                    <i class="bi bi-eye"></i>
                    Ver detalhes
                </button>
            </div>
        `
    }
};
const detalhesGinasio = { 
    "Ginasio": {
        img: "map-docs/imgs/ginasio-unipe.png",
        desc: `
            <ul class="popup-lista">
                <li><i class="bi bi-dribbble"></i> Quadra poliesportiva</li>
                <li><i class="bi bi-people"></i> Capacidade para até 800 pessoas</li>
                <li><i class="bi bi-lightning-charge"></i> Atividades esportivas e eventos</li>
                <li><i class="bi bi-clock"></i> Funcionamento 07h–23h</li>
            </ul>

            <div class="popup-status aberto">
                <i class="bi bi-check-circle-fill"></i>
                Aberto agora
            </div>

            <div class="popup-acoes">
                <button class="btn-primario">
                    <i class="bi bi-geo-alt-fill"></i>
                    Como chegar
                </button>
                <button class="btn-secundario">
                    <i class="bi bi-eye"></i>
                    Ver detalhes
                </button>
            </div>
        `
    }
};

const markerConfig = {
    'comercio': {
        dataSource: detalhesComercios, 
        icon: 'comercio-icon.png',
        size: [60, 60],
        anchor: [31, 43],
    },
    'reitoria': {
        dataSource: detalhesReitoria, 
        icon: 'reitoria-icon.png',
        size: [66, 66],
        anchor: [34, 42],
    },
    'biblioteca': {
        dataSource: detalhesBiblioteca,
        icon: 'biblioteca-icon.png',
        size: [66, 66],
        anchor: [34, 42],
    },
    'estacionamento': {
        dataSource: detalhesEstacionamento,
        icon: 'estacionamento-icon.png',
        size: [66, 66],
        anchor: [30, 41],
    },
    'auditorio': {
        dataSource: detalhesAuditorio,
        icon: 'auditorio-icon.png',
        size: [66, 66],
        anchor: [31, 41],
    },
    'eva': {
        dataSource: detalhesEva,
        icon: 'eva-icon.png',
        size: [66, 66],
        anchor: [34, 43],
    },
    'ginasio': {
        dataSource: detalhesGinasio,
        icon: 'ginasio-icon.png',
        size: [66, 66],
        anchor: [33, 40],
    },
    'museu': {
        dataSource: detalhesMuseu,
        icon: 'museu-icon.png',
        size: [48, 48],
        anchor: [24, 36],
    },
    'praça das pedras': {
        dataSource: detalhesPraca,
        icon: 'praca-icon.png',
        size: [48, 48],
        anchor: [28, 28],
    }
};
const indoorMarkers = {
    'banheiro': {
        url: 'map-docs/imgs/assets/icons/wc-icon.png',
        sizeMeters: 5
    },
    'escada':{
        url: 'map-docs/imgs/assets/icons/stairs-icon.png',
        sizeMeters: 5
    },
    'bebedouro': {
        url: 'map-docs/imgs/assets/icons/water-drinker-icon.png',
        sizeMeters: 5
    }
};

// Camadas
const buildingLayers = {
    "Bloco A": L.tileLayer('map-docs/tiles/level_0/indoor/laranja/bloco_a/solid/{z}/{x}/{y}.png', { 
        pane: "paneA",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco B": L.tileLayer('map-docs/tiles/level_0/indoor/laranja/bloco_b/solid/{z}/{x}/{y}.png', { 
        pane: "paneB",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco C": L.tileLayer('map-docs/tiles/level_0/indoor/laranja/bloco_c/solid/{z}/{x}/{y}.png', { 
        pane: "paneC",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    // "Bloco D": L.tileLayer('map-docs/tiles/level_0/indoor/roxo/bloco_d/solid/{z}/{x}/{y}.png', { 
    //     pane: "paneD",
    //     minZoom: 17, maxZoom: 21, tms: false, 
    //     opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    // }),
    // "Bloco E": L.tileLayer('map-docs/tiles/level_0/indoor/roxo/bloco_e/solid/{z}/{x}/{y}.png', { 
    //     pane: "paneE",
    //     minZoom: 17, maxZoom: 21, tms: false, 
    //     opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    // }),
    // "Bloco F": L.tileLayer('map-docs/tiles/level_0/indoor/roxo/bloco_f/solid/{z}/{x}/{y}.png', { 
    //     pane: "paneF",
    //     minZoom: 17, maxZoom: 21, tms: false, 
    //     opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    // }),
    "Bloco G": L.tileLayer('map-docs/tiles/level_0/indoor/vermelho/bloco_g/solid/{z}/{x}/{y}.png', { 
        pane: "paneG",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco H": L.tileLayer('map-docs/tiles/level_0/indoor/vermelho/bloco_h/solid/{z}/{x}/{y}.png', { 
        pane: "paneH",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco I": L.tileLayer('map-docs/tiles/level_0/indoor/vermelho/bloco_i/solid/{z}/{x}/{y}.png', { 
        pane: "paneI",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco J": L.tileLayer('map-docs/tiles/level_0/indoor/amarelo/bloco_j/solid/{z}/{x}/{y}.png', { 
        pane: "paneJ",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco K": L.tileLayer('map-docs/tiles/level_0/indoor/amarelo/bloco_k/solid/{z}/{x}/{y}.png', { 
        pane: "paneK",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco L": L.tileLayer('map-docs/tiles/level_0/indoor/amarelo/bloco_l/solid/{z}/{x}/{y}.png', { 
        pane: "paneL",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco M": L.tileLayer('map-docs/tiles/level_0/indoor/ciano/bloco_m/solid/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco N": L.tileLayer('map-docs/tiles/level_0/indoor/ciano/bloco_n/solid/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco O": L.tileLayer('map-docs/tiles/level_0/indoor/ciano/bloco_o/solid/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco P": L.tileLayer('map-docs/tiles/level_0/indoor/ciano/bloco_p/solid/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco Q": L.tileLayer('map-docs/tiles/level_0/indoor/beje/bloco_q/solid/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco R": L.tileLayer('map-docs/tiles/level_0/indoor/beje/bloco_r/solid/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco S": L.tileLayer('map-docs/tiles/level_0/indoor/verde/bloco_s/solid/{z}/{x}/{y}.png', { 
        pane: "paneS", 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Auditorio": L.tileLayer('map-docs/tiles/level_0/indoor/verde/auditorio/solid/{z}/{x}/{y}.png', { 
        pane: "paneAuditorio",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Biblioteca": L.tileLayer('map-docs/tiles/level_0/indoor/azul/biblioteca/solid/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Reitoria": L.tileLayer('map-docs/tiles/level_0/indoor/azul/reitoria/solid/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Museu": L.tileLayer('map-docs/tiles/level_0/indoor/azul/museu/solid/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "EVA": L.tileLayer('map-docs/tiles/level_0/indoor/azul/eva/solid/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "CT": L.tileLayer('map-docs/tiles/level_0/indoor/amarelo/ct/solid/{z}/{x}/{y}.png', { 
        pane: "paneCT",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    // "Corr. AL": L.tileLayer('map-docs/tiles/level_0/indoor/laranja/corredor/leste/solid/{z}/{x}/{y}.png', { 
    //     pane: "corredorAL",
    //     minZoom: 17, maxZoom: 21, tms: false, 
    //     opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    // }),
    "Corr. AO": L.tileLayer('map-docs/tiles/level_0/indoor/laranja/corredor/oeste/solid/{z}/{x}/{y}.png', { 
        pane: "corredorAO",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    // "Corr. FS": L.tileLayer('map-docs/tiles/level_0/indoor/roxo/corredor/norte/solid/{z}/{x}/{y}.png', { 
    //     pane: "corredorFS",
    //     minZoom: 17, maxZoom: 21, tms: false, 
    //     opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    // }),
    // "Corr. FN": L.tileLayer('map-docs/tiles/level_0/indoor/roxo/corredor/sul/solid/{z}/{x}/{y}.png', { 
    //     pane: "corredorFN",
    //     minZoom: 17, maxZoom: 21, tms: false, 
    //     opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    // }),
    "Corr. S": L.tileLayer('map-docs/tiles/level_0/indoor/verde/corredor/solid/{z}/{x}/{y}.png', { 
        pane: "corredorS",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Cantina CT": L.tileLayer('map-docs/tiles/level_0/indoor/comercial/cantina_ct/solid/{z}/{x}/{y}.png', { 
        pane: "paneCantinaCT",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Comércio Museu": L.tileLayer('map-docs/tiles/level_0/indoor/comercial/comercio_museu/solid/{z}/{x}/{y}.png', { 
        pane: "paneComercioMuseu",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Dona Chica": L.tileLayer('map-docs/tiles/level_0/indoor/comercial/dona_chica/solid/{z}/{x}/{y}.png', { 
        pane: "paneDonaChica",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Minaçaí": L.tileLayer('map-docs/tiles/level_0/indoor/comercial/minacai/solid/{z}/{x}/{y}.png', { 
        pane: "paneMinacai",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Pizzaria": L.tileLayer('map-docs/tiles/level_0/indoor/comercial/pizzaria/solid/{z}/{x}/{y}.png', { 
        pane: "panePizzaria",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Tapiocabana": L.tileLayer('map-docs/tiles/level_0/indoor/comercial/tapiocabana/solid/{z}/{x}/{y}.png', { 
        pane: "paneTapiocabana",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
};

const buildingIndoorLayers = {
    "Bloco A": L.tileLayer('map-docs/tiles/level_0/indoor/laranja/bloco_a/transparent/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco B": L.tileLayer('map-docs/tiles/level_0/indoor/laranja/bloco_b/transparent/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco C": L.tileLayer('map-docs/tiles/level_0/indoor/laranja/bloco_c/transparent/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    // "Bloco D": L.tileLayer('map-docs/tiles/level_0/indoor/roxo/bloco_d/transparent/{z}/{x}/{y}.png', { 
    //     minZoom: 17, maxZoom: 21, tms: false, 
    //     opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    // }),
    // "Bloco E": L.tileLayer('map-docs/tiles/level_0/indoor/roxo/bloco_e/transparent/{z}/{x}/{y}.png', { 
    //     minZoom: 17, maxZoom: 21, tms: false, 
    //     opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    // }),
    // "Bloco F": L.tileLayer('map-docs/tiles/level_0/indoor/roxo/bloco_f/transparent/{z}/{x}/{y}.png', { 
    //     minZoom: 17, maxZoom: 21, tms: false, 
    //     opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    // }),
    "Bloco G": L.tileLayer('map-docs/tiles/level_0/indoor/vermelho/bloco_g/transparent/{z}/{x}/{y}.png', { 
        pane: "paneG",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco H": L.tileLayer('map-docs/tiles/level_0/indoor/vermelho/bloco_h/transparent/{z}/{x}/{y}.png', { 
        pane: "paneH",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco I": L.tileLayer('map-docs/tiles/level_0/indoor/vermelho/bloco_i/transparent/{z}/{x}/{y}.png', { 
        pane: "paneI",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco J": L.tileLayer('map-docs/tiles/level_0/indoor/amarelo/bloco_j/transparent/{z}/{x}/{y}.png', { 
        pane: "paneJ",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco K": L.tileLayer('map-docs/tiles/level_0/indoor/amarelo/bloco_k/transparent/{z}/{x}/{y}.png', { 
        pane: "paneK",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco L": L.tileLayer('map-docs/tiles/level_0/indoor/amarelo/bloco_l/transparent/{z}/{x}/{y}.png', { 
        pane: "paneL",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco M": L.tileLayer('map-docs/tiles/level_0/indoor/ciano/bloco_m/transparent/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco N": L.tileLayer('map-docs/tiles/level_0/indoor/ciano/bloco_n/transparent/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco O": L.tileLayer('map-docs/tiles/level_0/indoor/ciano/bloco_o/transparent/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco P": L.tileLayer('map-docs/tiles/level_0/indoor/ciano/bloco_p/transparent/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco Q": L.tileLayer('map-docs/tiles/level_0/indoor/beje/bloco_q/transparent/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco R": L.tileLayer('map-docs/tiles/level_0/indoor/beje/bloco_r/transparent/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco S": L.tileLayer('map-docs/tiles/level_0/indoor/verde/bloco_s/transparent/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Auditorio": L.tileLayer('map-docs/tiles/level_0/indoor/verde/auditorio/transparent/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Biblioteca": L.tileLayer('map-docs/tiles/level_0/indoor/azul/biblioteca/transparent/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Reitoria": L.tileLayer('map-docs/tiles/level_0/indoor/azul/reitoria/transparent/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Museu": L.tileLayer('map-docs/tiles/level_0/indoor/azul/museu/transparent/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "EVA": L.tileLayer('map-docs/tiles/level_0/indoor/azul/eva/transparent/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "CT": L.tileLayer('map-docs/tiles/level_0/indoor/amarelo/ct/transparent/{z}/{x}/{y}.png', { 
        pane: "paneCT",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    // "Corr. AL": L.tileLayer('map-docs/tiles/level_0/indoor/laranja/corredor/leste/transparent/{z}/{x}/{y}.png', { 
    //     pane: "corredorAL",
    //     minZoom: 17, maxZoom: 21, tms: false, 
    //     opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    // }),
    "Corr. AO": L.tileLayer('map-docs/tiles/level_0/indoor/laranja/corredor/oeste/transparent/{z}/{x}/{y}.png', { 
        pane: "corredorAO",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    // "Corr. FS": L.tileLayer('map-docs/tiles/level_0/indoor/roxo/corredor/norte/transparent/{z}/{x}/{y}.png', { 
    //     pane: "corredorFS",
    //     minZoom: 17, maxZoom: 21, tms: false, 
    //     opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    // }),
    // "Corr. FN": L.tileLayer('map-docs/tiles/level_0/indoor/roxo/corredor/sul/transparent/{z}/{x}/{y}.png', { 
    //     pane: "corredorFN",
    //     minZoom: 17, maxZoom: 21, tms: false, 
    //     opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    // }),
    "Corr. S": L.tileLayer('map-docs/tiles/level_0/indoor/verde/corredor/transparent/{z}/{x}/{y}.png', { 
        pane: "corredorS",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Cantina CT": L.tileLayer('map-docs/tiles/level_0/indoor/comercial/cantina_ct/transparent/{z}/{x}/{y}.png', { 
        pane: "paneCantinaCT",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Comércio Museu": L.tileLayer('map-docs/tiles/level_0/indoor/comercial/comercio_museu/transparent/{z}/{x}/{y}.png', { 
        pane: "paneComercioMuseu",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Dona Chica": L.tileLayer('map-docs/tiles/level_0/indoor/comercial/dona_chica/transparent/{z}/{x}/{y}.png', { 
        pane: "paneDonaChica",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Minaçaí": L.tileLayer('map-docs/tiles/level_0/indoor/comercial/minacai/transparent/{z}/{x}/{y}.png', { 
        pane: "paneMinacai",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Pizzaria": L.tileLayer('map-docs/tiles/level_0/indoor/comercial/pizzaria/transparent/{z}/{x}/{y}.png', { 
        pane: "panePizzaria",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Tapiocabana": L.tileLayer('map-docs/tiles/level_0/indoor/comercial/tapiocabana/transparent/{z}/{x}/{y}.png', { 
        pane: "paneTapiocabana",
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 1, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
};

function gerarDescEstacionamento() {
    return `
        <ul class="popup-lista">
            <li><i class="bi bi-car-front-fill"></i> Vagas para carros</li>
            <li><i class="bi bi-p-square-fill"></i> Área de estacionamento coberta</li>
            <li><i class="bi bi-clock"></i> Funcionamento 06h–23h</li>
        </ul>

        <div class="popup-status aberto">
            <i class="bi bi-check-circle-fill"></i>
            Aberto agora
        </div>

        <div class="popup-acoes">
            <button class="btn-primario">
                <i class="bi bi-geo-alt-fill"></i>
                Como chegar
            </button>
            <button class="btn-secundario">
                <i class="bi bi-eye"></i>
                Ver detalhes
            </button>
        </div>
    `;
}
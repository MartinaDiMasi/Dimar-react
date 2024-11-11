const productos = [
    {
        id: 7911247,
        title: 'Pantalon Nike Solo Swoosh',
        description: 'Pantalón de Moda para Hombre',
        price: 60000,
        pictureUrl: "https://newsport.vtexassets.com/arquivos/ids/19557544-800-auto?v=638653959705500000&width=800&height=auto&aspect=true",
        category: "ropa",
        brand: "NIKE",
        availability: "Disponible"



    },
    {
        id: 7485228,
        title: 'Remera Jordan Jumpman Classic',
        description: 'Remera Jordan para Hombre',
        price: 40000,
        pictureUrl: "https://newsport.vtexassets.com/arquivos/ids/19599792-500-auto?v=638664205334630000&width=500&height=auto&aspect=true",
        category: "ropa",
        brand: "NIKE",
        availability: "Disponible"

    },
    {
        id: 7348346,
        title: 'Bermuda Oakley New Fleece',
        description: 'Bermuda de algodon Fleece Short',
        price: 50000,
        pictureUrl: "https://newsport.vtexassets.com/arquivos/ids/19604937-800-auto?v=638665913691930000&width=800&height=auto&aspect=true",
        category: "ropa",
        brand: "OAKLEY",
        availability: "Disponible"
    },
    {
        id: 7349245,
        title: 'Buzo Lacoste Estampa Cocodrile',
        description: 'Buzo Lacoste Verde Hombre',
        price: 90000,
        pictureUrl: "https://newsport.vtexassets.com/arquivos/ids/19568631-800-auto?v=638657437299000000&width=800&height=auto&aspect=true",
        category: "ropa",
        brand: "LACOSTE",
        availability: "Disponible"
    },
    {
        id: 1935723,
        title: 'Zapatillas Nike Air Force 1 ´07 Lv8',
        description: 'Zapatillas de Moda para Hombre',
        price: 240000,
        pictureUrl: "https://newsport.vtexassets.com/arquivos/ids/19601902-800-auto?v=638665054945030000&width=800&height=auto&aspect=true",
        category: "zapatillas",
        brand: "NIKE",
        availability: "Disponible"

    },
    {
        id: 1836295,
        title: 'Zapatillas Adidas Originals Samba Og',
        description: 'Zapatillas de Moda para Hombre',
        price: 190000,
        pictureUrl: "https://newsport.vtexassets.com/arquivos/ids/19576379-800-auto?v=638658862905400000&width=800&height=auto&aspect=true",
        category: "zapatillas",
        brand: "ADIDAS",
        availability: "Disponible"

    },
    {
        id: 1172683,
        title: 'Zapatillas Vans Knu Skool Unisex',
        description: 'Plataforma Negro Blanco',
        price: 180000,
        pictureUrl: "https://newsport.vtexassets.com/arquivos/ids/19022354-800-auto?v=638525072820130000&width=800&height=auto&aspect=true",
        category: "zapatillas",
        brand: "VANS",
        availability: "Disponible"
    },
    {
        id: 1428264,
        title: 'Zapatillas Puma Ca Pro Suede',
        description: 'Zapatillas Puma Ca Pro Suede Fs Blancas Unisex',
        price: 140000,
        pictureUrl: "https://newsport.vtexassets.com/arquivos/ids/19613991-800-auto?v=638667596538800000&width=800&height=auto&aspect=true",
        category: "zapatillas",
        brand: "PUMA",
        availability: "Disponible"

    },
    {
        id: 9017392,
        title: 'Gorra Puma Skate Dad Unisex',
        description: 'Gorra de Moda Unisex Negra',
        price: 35000,
        pictureUrl: "https://newsport.vtexassets.com/arquivos/ids/19576517-800-auto?v=638658877305630000&width=800&height=auto&aspect=true",
        category: "accesorios",
        brand: "PUMA",
        availability: "Disponible"

    },
    {
        id: 9841057,
        title: 'Mochila Nike Heritage Eugene',
        description: 'Mochila Nike Unisex',
        price: 50000,
        pictureUrl: "https://newsport.vtexassets.com/arquivos/ids/19573309-800-auto?v=638658189695330000&width=800&height=auto&aspect=true",
        category: "accesorios",
        brand: "NIKE",
        availability: "Disponible"

    },
    {
        id: 9250152,
        title: 'Riñonera Quiksilver Pubjug',
        description: 'Riñonera de Moda Unisex',
        price: 30000,
        pictureUrl: "https://newsport.vtexassets.com/arquivos/ids/19389172-800-auto?v=638616660102400000&width=800&height=auto&aspect=true",
        category: "accesorios",
        brand: "QUIKSILVER",
        availability: "Disponible"
    },
    {
        id: 9630571,
        title: 'Piluso Oakley Quest B1b Unisex',
        description: 'Piluso Oakley Negro de Moda',
        price: 60000,
        pictureUrl: "https://newsport.vtexassets.com/arquivos/ids/19601266-800-auto?v=638664936626700000&width=800&height=auto&aspect=true",
        category: "accesorios",
        brand: "OAKLEY",
        availability: "Disponible"
    },
];

export const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);
});

export const getProduct = (id) => {
    return productos.find ((producto) => producto.id == id);
};

export const getCategory = (category) => {
    return productos.filter((product) => product.category === category);
}

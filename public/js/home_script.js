
const products = [
    {id: '3090', name: 'Samsung S22 Ultra', description: 'Dispositivo móvil de Tienda e-commerce', price: 21, oldPrice: 200, img: '/images/s22ultra.webp'},
    {id: '3092', name: 'Samsung Galaxy A04', description: 'Dispositivo móvil de Tienda e-commerce', price: 21, oldPrice: 200, img: '/images/galaxyA04.webp'},
    {id: '3093', name: 'Samsung Galaxy A13', description: 'Dispositivo móvil de Tienda e-commerce', price: 21, oldPrice: 200, img: '/images/galaxyA13.webp'},
    {id: '3094', name: 'Samsung Galaxy M53 5G', description: 'Dispositivo móvil de Tienda e-commerce', price: 21, oldPrice: 200, img: '/images/galaxyM535G.webp'},
    {id: '3095', name: 'Samsung Z Flip', description: 'Dispositivo móvil de Tienda e-commerce', price: 21, oldPrice: 200, img: '/images/galaxyZFlip.webp'},
    {id: '3096', name: 'Samsung Z Fold 4', description: 'Dispositivo móvil de Tienda e-commerce', price: 21, oldPrice: 200, img: '/images/galaxyZFold4.webp'},
];

products.map((item) => {
    const node = document.getElementById('model-card').cloneNode(true);

    node.setAttribute('data-key', item.id);
    node.querySelector('.card img').src = item.img;
    node.querySelector('.price').innerHTML = `ahora $ ${item.price} MXN`;
    node.querySelector('.old-price').innerHTML = `Antes $ ${item.oldPrice} MXN`;
    node.querySelector('.product-name').innerHTML = item.name;
    node.querySelector('.description').innerHTML = item.description;
    node.querySelector('.btn-buy a').innerHTML = 'Agregar al carrito';
    node.querySelector('.btn-buy a').href = `/checkout?id=${item.id}&name=${item.name}&desc=${item.description}&price=${item.price}&oldprice=${item.oldPrice}&img=${item.img}`;

    document.querySelector('.product-area').append( node );
});

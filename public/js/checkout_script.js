const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");
const name = urlSearchParams.get("name");
const description = urlSearchParams.get("desc");
const price = urlSearchParams.get("price");
const oldPrice = urlSearchParams.get("oldPrice");
const img = `${window.location.origin}${urlSearchParams.get("img")}`;

const item = document.getElementById('preview-product');
item.querySelector('img').src = img;
item.querySelector('.product-name').innerHTML = name;
item.querySelector('.product-desc').innerHTML = description;

const detailCost = document.getElementById('detail-cost');
detailCost.querySelector('.subtotal').innerHTML = `Subtotal: $${price} MXN`;
detailCost.querySelector('.price').innerHTML = `Total: $${price} MXN`;

const public_key = "YOUR_PUBLIC_KEY";
const mercadopago = new MercadoPago(public_key, {
    locale: 'es-MX'
});

function createOrderPay(){

    const user_name = document.getElementById('user_name').value;
    const user_surname = document.getElementById('user_surname').value;
    const user_email = document.getElementById('user_email').value;
    const user_phone = parseInt(document.getElementById('user_phone').value);
    const addr_name = document.getElementById('addr_name').value;
    const addr_number = parseInt(document.getElementById('addr_number').value);
    const addr_zip =  document.getElementById('addr_zip').value;

    const dataOrder = {
        data_client: {
            name: user_name,
            surname: user_surname,
            email: user_email,
            phone: user_phone,
            address: {
                name: addr_name,
                number: addr_number,
                zip: addr_zip
            }
        },
        data_product: {
            id: id,
            name: name,
            description: description,
            quantity: 1,
            price: parseFloat(price),
            img: img,
        }
    }

    fetch('/create_preference', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataOrder)
    }).then(function (response){
        return response.json();
    })
    .then(function(data){
        document.getElementById('btn-order-pay').style.display = "none";
        checkout_button(data.id);        
    })
    .catch(error => console.log(error));

}

function checkout_button(preference_id){
    mercadopago.checkout({
        preference: {
            id: preference_id
        },
        render: {
            container: '.cho-container',
            label: 'Pagar la compra'
        }
    });
}
const express = require('express');
const router = express.Router();
const mercadopago = require('mercadopago');

router.post('/', function(req, res, next) {

  mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN,
    integrator_id: process.env.INTEGRATOR_ID
  });

  let preference = {
    items: [
      {
        id: req.body.data_product.id,
        title: req.body.data_product.name,
        currency_id: "MXN",
        picture_url: req.body.data_product.img,
        description: req.body.data_product.description,
        category_id: "phones",
        quantity: req.body.data_product.quantity,
        unit_price: req.body.data_product.price
      }
    ],
    payer: {
      name: req.body.data_client.name,
      surname: req.body.data_client.surname,
      email: req.body.data_client.email,
      phone: {
        area_code: "32",
        number: req.body.data_client.phone
      },
      address: {
        street_name: req.body.data_client.address.name,
        street_number: req.body.data_client.address.number,
        zip_code: req.body.data_client.address.zip
      }
    },
    back_urls: {
      success: "http://localhost:3000/status",
      failure: "http://localhost:3000/status",
      pending: "http://localhost:3000/status"
    },
    auto_return: "approved",
    payment_methods: {
      excluded_payment_methods: [
        {
          "id": "visa"
        }
      ],
      installments: 6
    },
    notification_url: "https://webhook.site/",
    statement_descriptor: "Tienda Azul",
    external_reference: "email@email.com",
  }

  mercadopago.preferences.create(preference)
  .then((preference) => {
      res.set('Content-Type', 'application/json');
      res.json({
          id: preference.body.id
      })
  }).catch(error => console.log(error));

});

module.exports = router;

const urlSearchParams = new URLSearchParams(window.location.search);
const collection_id = urlSearchParams.get('collection_id');
const collection_status = urlSearchParams.get('collection_status');
const external_reference = urlSearchParams.get('external_reference');
const payment_type = urlSearchParams.get('payment_type');
const preference_id = urlSearchParams.get('preferences_id');
const site_id = urlSearchParams.get('site_id');
const processing_mode = urlSearchParams.get('processing_mode');
const merchant_account_id = urlSearchParams.get('merchant_account_id');


switch (collection_status){
    case 'pending':
        document.getElementById('title-status').innerHTML = "Status de tu compra | Pendiente";
        break;
    case 'failure':
        document.getElementById('title-status').innerHTML = "Status de tu compra | Rechazada";
        break;
    default:
        document.getElementById('title-status').innerHTML = "Status de tu compra | Aprobada";
}

document.getElementById('collection_id').innerHTML = `Collection id: ${collection_id}`;
document.getElementById('collection_status').innerHTML = `Collection status: ${collection_status}`;
document.getElementById('external_reference').innerHTML = `External Reference: ${external_reference}`;
document.getElementById('payment_type').innerHTML = `Payment Type: ${payment_type}`;
document.getElementById('preference_id').innerHTML = `Preference id: ${preference_id}`;
document.getElementById('site_id').innerHTML = `Site id: ${site_id}`;
document.getElementById('processing_mode').innerHTML = `Processing Mode: ${processing_mode}`;
document.getElementById('merchant_account_id').innerHTML = `Merchant Account id: ${merchant_account_id}`;
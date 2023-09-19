---
external: false
title: "Cosas a tener en cuenta"
description: "You can author content using the familiar markdown syntax you already know. All basic markdown syntax is supported."
date: 2023-09-19
---
# Cosas a tener en cuenta

El token siempre se pasa en Authorization como un Bearer Token. 


# List All Merchants

Hace una lista de todos los Merchants. También se puede traer un merchant  en particular con Get Merchant Details.

# Calculate Shipping Rates

Este endpoint te hace un estimado de cuanto saldría el envió. Para eso utiliza las coordenadas. 

```http
POST /api/v1/merchants/shipping-rates HTTP/1.1
Host: server.pideuva.com
Content-Type: application/json
Content-Length: 870

{
   "origin": {
      "country": "US",
      "postal_code": "00968",
      "province": "PR",
      "city": "Guaynabo",
      "name": null,
      "address1": "San Patricio Plaza, Local D2",
      "address2": "",
      "address3": null,
      "latitude": 18.408531,
      "longitude": -66.104801,
      "phone": "+17877813110",
      "fax": null,
      "email": null,
      "address_type": null,
      "company_name": "Preciosa"
   },
   "destination": {
      "country": "US",
      "postal_code": "00979",
      "province": "PR",
      "city": "Carolina",
      "name": "Laura Tirado",
      "address1": "Villas del Mar Este",
      "address2": "10k",
      "address3": null,
      "latitude": 18.443874,
      "longitude": -66.027820,
      "phone": "+17873667229",
      "fax": null,
      "email": null,
      "address_type": null,
      "company_name": "Uva"
   }
}
```

# Create Fleet Order

Create Fleet Order pide un storeId, y en el cuerpo del request se mandan los objetos que se quieren enviar.

```http

```

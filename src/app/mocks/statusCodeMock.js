//pruebas para filtros
var intentos = 0;

module.exports = (req, res, next) => {
  intentos++;

  console.log(intentos / 2);
  if (intentos % 2 === 0) {
    return res.status(200).send(
    {
      "content": [
      {
        "establishment_id": "13150560",
        "date": "2020-07-17 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 409657.15,
        "service_cost": 10573.43,
        "taxes": 17514.29,
        "net_total": 381569.43
      },
      {
        "establishment_id": "13150560",
        "date": "2020-07-16 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 309954.52,
        "service_cost": 9256.33,
        "taxes": 13524.56,
        "net_total": 287173.63
      },
      {
        "establishment_id": "13150560",
        "date": "2020-07-15 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 2696652.27,
        "service_cost": 81620.02,
        "taxes": 115964.01,
        "net_total": 2499068.24
      },
      {
        "establishment_id": "13150560",
        "date": "2020-07-14 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 516137.72,
        "service_cost": 20349.75,
        "taxes": 22014.47,
        "net_total": 473773.5
      },
      {
        "establishment_id": "13150560",
        "date": "2020-07-13 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 440880.11,
        "service_cost": 11263.54,
        "taxes": 26335.64,
        "net_total": 403280.93
      },
      {
        "establishment_id": "13150560",
        "date": "2020-07-08 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 361797.51,
        "service_cost": 11673.89,
        "taxes": 15546.78,
        "net_total": 334576.84
      },
      {
        "establishment_id": "13150560",
        "date": "2020-07-07 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 270872.17,
        "service_cost": 8869.37,
        "taxes": 11740.67,
        "net_total": 250262.13
      },
      {
        "establishment_id": "13150560",
        "date": "2020-07-06 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 2451283.55,
        "service_cost": 64277.52,
        "taxes": 105393.18,
        "net_total": 2281612.85
      },
      {
        "establishment_id": "13150560",
        "date": "2020-07-03 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 512370.04,
        "service_cost": 21777.58,
        "taxes": 22236.89,
        "net_total": 468355.57
      },
      {
        "establishment_id": "13150560",
        "date": "2020-07-02 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 432568.1,
        "service_cost": 13267.48,
        "taxes": 28071.5,
        "net_total": 391229.12
      },
      {
        "establishment_id": "13150560",
        "date": "2020-07-01 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 508277.02,
        "service_cost": 31489.94,
        "taxes": 22399.35,
        "net_total": 454387.73
      },
      {
        "establishment_id": "13150560",
        "date": "2020-06-30 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 2702866.63,
        "service_cost": 77527.33,
        "taxes": 120219.94,
        "net_total": 2505119.36
      },
      {
        "establishment_id": "13150560",
        "date": "2020-06-29 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 385458.17,
        "service_cost": 8965.89,
        "taxes": 16385.91,
        "net_total": 360106.37
      },
      {
        "establishment_id": "13150560",
        "date": "2020-06-26 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 536350.59,
        "service_cost": 19756.04,
        "taxes": 31315.0,
        "net_total": 485279.55
      },
      {
        "establishment_id": "13150560",
        "date": "2020-06-25 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 348139.57,
        "service_cost": 12405.13,
        "taxes": 15069.95,
        "net_total": 320664.49
      },
      {
        "establishment_id": "13150560",
        "date": "2020-06-24 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 364541.32,
        "service_cost": 20515.49,
        "taxes": 16123.17,
        "net_total": 327902.66
      },
      {
        "establishment_id": "13150560",
        "date": "2020-06-23 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 1349719.58,
        "service_cost": 34772.03,
        "taxes": 58159.37,
        "net_total": 1256788.18
      },
      {
        "establishment_id": "13150560",
        "date": "2020-06-22 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 492940.11,
        "service_cost": 16097.23,
        "taxes": 21311.99,
        "net_total": 455530.89
      },
      {
        "establishment_id": "13150560",
        "date": "2020-06-24 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 364541.32,
        "service_cost": 20515.49,
        "taxes": 16123.17,
        "net_total": 327902.66
      },
      {
        "establishment_id": "13150560",
        "date": "2020-06-23 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 1349719.58,
        "service_cost": 34772.03,
        "taxes": 58159.37,
        "net_total": 1256788.18
      },
      {
        "establishment_id": "13150560",
        "date": "2020-06-22 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 492940.11,
        "service_cost": 16097.23,
        "taxes": 21311.99,
        "net_total": 455530.89
      },
      {
        "establishment_id": "13150560",
        "date": "2020-06-19 00:00:00",
        "brand_logo_uri": "Visa",
        "gross_total": 672119.22,
        "service_cost": 20502.99,
        "taxes": 29770.55,
        "net_total": 621845.68
      }
    ],
        "pageable": {
      "sort": {
        "sorted": false,
            "unsorted": true,
            "empty": true
      },
      "offset": 0,
          "pageNumber": 0,
          "pageSize": 50,
          "paged": true,
          "unpaged": false
    },
      "totalPages": 1,
        "totalElements": 19,
        "last": true,
        "sort": {
      "sorted": false,
          "unsorted": true,
          "empty": true
    },
      "size": 50,
        "number": 0,
        "numberOfElements": 19,
        "first": true,
        "empty": false
    });
  } else {
    return res.status(200).send(
        {
          "content": [
            {
              "establishment_id": "13150560",
              "date": "2020-07-06 00:00:00",
              "brand_logo_uri": "Visa",
              "gross_total": 2451283.55,
              "service_cost": 64277.52,
              "taxes": 105393.18,
              "net_total": 2281612.85
            },
            {
              "establishment_id": "13150560",
              "date": "2020-06-30 00:00:00",
              "brand_logo_uri": "Visa",
              "gross_total": 2702866.63,
              "service_cost": 77527.33,
              "taxes": 120219.94,
              "net_total": 2505119.36
            },
            {
              "establishment_id": "13150560",
              "date": "2020-06-29 00:00:00",
              "brand_logo_uri": "Visa",
              "gross_total": 385458.17,
              "service_cost": 8965.89,
              "taxes": 16385.91,
              "net_total": 360106.37
            },
            {
              "establishment_id": "13150560",
              "date": "2020-06-26 00:00:00",
              "brand_logo_uri": "Visa",
              "gross_total": 536350.59,
              "service_cost": 19756.04,
              "taxes": 31315.0,
              "net_total": 485279.55
            },
            {
              "establishment_id": "13150560",
              "date": "2020-06-25 00:00:00",
              "brand_logo_uri": "Visa",
              "gross_total": 348139.57,
              "service_cost": 12405.13,
              "taxes": 15069.95,
              "net_total": 320664.49
            },
            {
              "establishment_id": "13150560",
              "date": "2020-06-24 00:00:00",
              "brand_logo_uri": "Visa",
              "gross_total": 364541.32,
              "service_cost": 20515.49,
              "taxes": 16123.17,
              "net_total": 327902.66
            },
            {
              "establishment_id": "13150560",
              "date": "2020-06-23 00:00:00",
              "brand_logo_uri": "Visa",
              "gross_total": 1349719.58,
              "service_cost": 34772.03,
              "taxes": 58159.37,
              "net_total": 1256788.18
            },
            {
              "establishment_id": "13150560",
              "date": "2020-06-22 00:00:00",
              "brand_logo_uri": "Visa",
              "gross_total": 492940.11,
              "service_cost": 16097.23,
              "taxes": 21311.99,
              "net_total": 455530.89
            },
            {
              "establishment_id": "13150560",
              "date": "2020-06-24 00:00:00",
              "brand_logo_uri": "Visa",
              "gross_total": 364541.32,
              "service_cost": 20515.49,
              "taxes": 16123.17,
              "net_total": 327902.66
            },
            {
              "establishment_id": "13150560",
              "date": "2020-06-23 00:00:00",
              "brand_logo_uri": "Visa",
              "gross_total": 1349719.58,
              "service_cost": 34772.03,
              "taxes": 58159.37,
              "net_total": 1256788.18
            }
          ],
          "pageable": {
            "sort": {
              "sorted": false,
              "unsorted": true,
              "empty": true
            },
            "offset": 0,
            "pageNumber": 0,
            "pageSize": 50,
            "paged": true,
            "unpaged": false
          },
          "totalPages": 1,
          "totalElements": 19,
          "last": true,
          "sort": {
            "sorted": false,
            "unsorted": true,
            "empty": true
          },
          "size": 50,
          "number": 0,
          "numberOfElements": 19,
          "first": true,
          "empty": false
        });
  }

  /*return res.status(200).send(
      {
        'content': [],
      },
  );*/

  next();

};
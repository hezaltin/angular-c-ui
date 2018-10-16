export const bulkCodeResponse=[{
  "uri": "http://www.dupont.com/ontology/ontoPSR-product/T00006_FRED",
  "bulkCode": "T00006",
  "internalProductName": "FRED",
  "externalProductName": "DISTILLASE CS",
  "productionStrains": [
      {
          "uri": "http://www.dupont.com/ontology/ontoPSR-product/GICCTEST6_in_T00006_FRED",
          "gicc": "GICCTEST6",
          "geneticallyEngineered": true
      }
  ],
  "enzymeActivity": [
      {
          "uri": "http://www.dupont.com/ontology/ontoPSR-product/EC_1.1.1.1_in_T00006_FRED",
          "ec": "1.1.1.1",
          "name": "Amylase"
      }
  ],
  "rawMaterials": [
      {
          "uri": "http://www.dupont.com/ontology/ontoPSR-product/CAS_110-44-1_for_T00006_FRED",
          "name": "Sorbic Acid",
          "cas": "110-44-1",
          "producer": {
              "uri": "http://www.dupont.com/ontology/ontoPSR-product/DUNS_591348714",
              "duns": 591348714,
              "name": "Evonik DE 01",
              "address": "Essen, North Rhine–Westphalia Land",
              "country": "DE"
          }
      },
      {
          "uri": "http://www.dupont.com/ontology/ontoPSR-product/CAS_1310-58-3_for_T00006_FRED",
          "name": "Potassium Hydroxide",
          "cas": "1310-58-3",
          "producer": {
              "uri": "http://www.dupont.com/ontology/ontoPSR-product/DUNS_713492354",
              "duns": 713492354,
              "name": "Air Product US 01",
              "address": "Allentown, Pennsylvania",
              "country": "US"
          }
      },
      {
          "uri": "http://www.dupont.com/ontology/ontoPSR-product/CAS_1310-73-2_for_T00006_FRED",
          "name": "Sodum Hydroxide",
          "cas": "1310-73-2",
          "producer": {
              "uri": "http://www.dupont.com/ontology/ontoPSR-product/DUNS_962340023",
              "duns": 962340023,
              "name": "BASF DE 01",
              "address": "Ludwigshafen, Rhineland-Palatinate",
              "country": "DE"
          }
      },
      {
          "uri": "http://www.dupont.com/ontology/ontoPSR-product/CAS_57-50-1_for_T00006_FRED",
          "name": "Sucrose",
          "cas": "57-50-1",
          "producer": {
              "uri": "http://www.dupont.com/ontology/ontoPSR-product/DUNS_410515671",
              "duns": 410515671,
              "name": "Chemours US 01",
              "address": "Salem County, New Jersey",
              "country": "US"
          }
      },
      {
          "uri": "http://www.dupont.com/ontology/ontoPSR-product/CAS_65-85-0_for_T00006_FRED",
          "name": "Benzoic Acid",
          "cas": "65-85-0",
          "producer": {
              "uri": "http://www.dupont.com/ontology/ontoPSR-product/DUNS_132413598",
              "duns": 132413598,
              "name": "Dow Chemical US 01",
              "address": "Midland, Michigan",
              "country": "US"
          }
      },
      {
          "uri": "http://www.dupont.com/ontology/ontoPSR-product/CAS_7732-18-5_for_T00006_FRED",
          "name": "Water",
          "cas": "7732-18-5",
          "producer": {
              "uri": "http://www.dupont.com/ontology/ontoPSR-product/DUNS_591348714",
              "duns": 591348714,
              "name": "Evonik DE 01",
              "address": "Essen, North Rhine–Westphalia Land",
              "country": "DE"
          }
      }
  ],
  "ingredients": [
      {
          "uri": "http://www.dupont.com/ontology/ontoPSR-product/CAS_7732-18-5_in_T00006_FRED",
          "name": "Water",
          "cas": "7732-18-5",
          "concentration": 0.1,
          "ingredientFunction": "Solvent"
      },
      {
          "uri": "http://www.dupont.com/ontology/ontoPSR-product/CAS_50-99-7_in_T00006_FRED",
          "name": "Glucose",
          "cas": "50-99-7",
          "concentration": 0.2,
          "ingredientFunction": "Stabilizer"
      },
      {
          "uri": "http://www.dupont.com/ontology/ontoPSR-product/CAS_24634-61-5_in_T00006_FRED",
          "name": "Potassium Sorbate",
          "cas": "24634-61-5",
          "concentration": 0.1,
          "ingredientFunction": "Preservative"
      },
      {
          "uri": "http://www.dupont.com/ontology/ontoPSR-product/CAS_532-32-1_in_T00006_FRED",
          "name": "Sodium Benzoate",
          "cas": "532-32-1",
          "concentration": 0.2,
          "ingredientFunction": "Preservative"
      }
  ],
  "manufacturingSites": [
      {
          "uri": "http://www.dupont.com/ontology/ontoPSR-product/Site_Beloit",
          "name": "Beloit",
          "country": "US",
          "process": "Fermentation"
      }
  ],
  "endUses": [
      {
          "uri": "http://www.dupont.com/ontology/ontoPSR-product/EndUse_Grain_Processing_Product",
          "name": "Grain_Processing_Product",
          "jurisdiction": "Tech"
      }
  ],
  "country": {
      "uri": "http://www.dupont.com/ontology/ontoPSR-product/Country_US",
      "code": "us",
      "name": "United States",
      "region": "NA"
  }
}]


export const productBulkSearchResponse =  {
  "type": "Product Bulk Code",
  "terms": [
      {
          "fragment": "T00001",
          "term": "T00001",
          "bulkCode": "T00001",
          "internalProductName": "SLAPQ",
          "externalProductName": "Clearflow AA (PF)"
      },
      {
          "fragment": "T00002",
          "term": "T00002",
          "bulkCode": "T00002",
          "internalProductName": "FRED",
          "externalProductName": "OPTIMAX 4060 VHP"
      },
      {
          "fragment": "T00003",
          "term": "T00003",
          "bulkCode": "T00003",
          "internalProductName": "GI",
          "externalProductName": "OPTIDEX L-400"
      },
      {
          "fragment": "T00004",
          "term": "T00004",
          "bulkCode": "T00004",
          "internalProductName": "FAA",
          "externalProductName": "GENSWEET IGI-SA"
      },
      {
          "fragment": "T00005",
          "term": "T00005",
          "bulkCode": "T00005",
          "internalProductName": "SLAPQ",
          "externalProductName": "SPEZYME ALPHA PF (PF)"
      },
      {
          "fragment": "T00006",
          "term": "T00006",
          "bulkCode": "T00006",
          "internalProductName": "FRED",
          "externalProductName": "DISTILLASE CS"
      },
      {
          "fragment": "T00007",
          "term": "T00007",
          "bulkCode": "T00007",
          "internalProductName": "GI",
          "externalProductName": "GC 007"
      },
      {
          "fragment": "T00008",
          "term": "T00008",
          "bulkCode": "T00008",
          "internalProductName": "FAA",
          "externalProductName": "ZDEL GC 980 FG"
      }
  ]
}


export const responseRawmaterialsIngeridents    =   {
    "type": "Chemical Name",
    "terms": [
        {
            "fragment": "Benzoate",
            "term": "Sodium Benzoate",
            "prefLabel": "Sodium Benzoate",
            "cas": "532-32-1"
        },
        {
            "fragment": "Benzoic Acid",
            "term": "Benzoic Acid",
            "prefLabel": "Benzoic Acid",
            "cas": "65-85-0"
        },
        {
            "fragment": "Benzotron",
            "term": "Benzotron",
            "prefLabel": "Sodium Benzoate",
            "cas": "532-32-1"
        }
    ]
}
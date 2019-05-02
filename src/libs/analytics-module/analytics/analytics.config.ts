export const AssessmentData = {
    "product": {
      "uri": "http://www.dupont.com/ontology/ontoPSR-product/T00006_FRED",
      "types": [],
      "compliance": "undetermined"
    },
    "productionStrains": [
      {
        "uri": "http://www.dupont.com/ontologies/ontoPSR-data/ProductionStrain_GICC00004_in_T00001_SLAPQ",
        "types": [
          "http://www.dupont.com/ontologies/ontoPSR-ext-us-tech/A02_Eligible_____For_GILSP_Production_Strain",
          "http://www.dupont.com/ontologies/ontoPSR-assessment/A_Compliant_Production_Strain",
          "http://www.dupont.com/ontologies/ontoPSR-ext-us-tech/A03_Genetically_Not_Engineered_Production_Strain",
          "http://www.dupont.com/ontologies/ontoPSR-ext-us-tech/A01_Used_____In_Country_Production_Strain"
        ],
        "compliance": "compliant"
      },
      {
        "uri": "http://www.dupont.com/ontologies/ontoPSR-data/PRCH10008_in_7703",
        "types": [
          "http://www.dupont.com/ontologies/ontoPSR-ext-us-tech/A02_Eligible_____For_GILSP_Production_Strain",
          "http://www.dupont.com/ontologies/ontoPSR-ext-us-tech/A04_GE_Not_Self-cloned_Production_Strain",
          "http://www.dupont.com/ontologies/ontoPSR-ext-us-tech/A01_Used_____In_Country_Production_Strain",
          "http://www.dupont.com/ontologies/ontoPSR-ext-us-tech/A05_Dossier_____Available_Production_Strain",
          "http://www.dupont.com/ontologies/ontoPSR-ext-us-tech/A03_Genetically_____Engineered_Production_Strain"
        ],
        "compliance": "undetermined"
      },
      {
        "uri": "http://www.dupont.com/ontologies/ontoPSR-data/PRCH10009_in_53a3",
        "types": [
          "http://www.dupont.com/ontologies/ontoPSR-ext-us-tech/A02_Eligible_____For_GILSP_Production_Strain",
          "http://www.dupont.com/ontologies/ontoPSR-ext-us-tech/A04_GE_Not_Self-cloned_Production_Strain",
          "http://www.dupont.com/ontologies/ontoPSR-ext-us-tech/A01_Used_____In_Country_Production_Strain",
          "http://www.dupont.com/ontologies/ontoPSR-ext-us-tech/A05_Dossier_____Available_Production_Strain",
          "http://www.dupont.com/ontologies/ontoPSR-ext-us-tech/A03_Genetically_____Engineered_Production_Strain"
        ],
        "compliance": "undetermined"
      }
    ]
  }
    
  
  export const ProductData = {
    "uri": "http://www.dupont.com/ontology/ontoPSR-product/T00006_FRED",
    "bulkCode": "Clearflow AA (PF)",
    "productionStrains": [
      {
        "uri": "http://www.dupont.com/ontologies/ontoPSR-data/ProductionStrain_GICC00004_in_T00001_SLAPQ",
        "gicc": "GICC00004",
        "geneticallyEngineered": true
      },
      {
        "uri": "http://www.dupont.com/ontologies/ontoPSR-data/PRCH10008_in_7703",
        "gicc": "PRCH10008",
        "geneticallyEngineered": "true",
        "organism": "Aspergillus oryzae"
      },
      {
        "uri": "http://www.dupont.com/ontologies/ontoPSR-data/PRCH10009_in_53a3",
        "gicc": "PRCH10009",
        "geneticallyEngineered": "true",
        "organism": "Aspergillus oryzae"
      }
    ],
    "enzymeActivity": [
      {
        "uri": "http://www.dupont.com/ontologies/ontoPSR-data/EnzymeActivity_EC_1.1.1.1_in_T00001_SLAPQ",
        "ec": "1.1.1.1",
        "name": "Amylase"
      },
      {
        "uri": "http://www.dupont.com/ontologies/ontoPSR-data/EnzymeActivity_EC_2.1.1.1_in_T00001_SLAPQ",
        "ec": "2.1.1.1",
        "name": "Proteinase"
      }
    ],
    "rawMaterials": [
      {
        "uri": "http://www.dupont.com/ontologies/ontoPSR-data/RawMaterial_CAS_64-19-7_for_T00001_SLAPQ",
        "name": "Acetic Acid",
        "cas": "64-19-7",
        "producer": {
          "uri": "http://www.dupont.com/ontologies/ontoPSR-data/RawMaterialProducer_DUNS_713492354",
          "duns": 713492354,
          "name": "Air Product US 01",
          "address": "Allentown, Pennsylvania",
          "country": "US"
        }
      },
      {
        "uri": "http://www.dupont.com/ontologies/ontoPSR-data/RawMaterial_CAS_9001-77-8_for_T00001_SLAPQ",
        "name": "Acid Phosphatase",
        "cas": "9001-77-8",
        "producer": {
          "uri": "http://www.dupont.com/ontologies/ontoPSR-data/RawMaterialProducer_DUNS_962340023",
          "duns": 962340023,
          "name": "BASF DE 01",
          "address": "Ludwigshafen, Rhineland-Palatinate",
          "country": "DE"
        }
      },
      {
        "uri": "http://www.dupont.com/ontologies/ontoPSR-data/RawMaterial_CAS_1336-21-6_for_T00001_SLAPQ",
        "name": "Ammonium Hydroxide",
        "cas": "1336-21-6",
        "producer": {
          "uri": "http://www.dupont.com/ontologies/ontoPSR-data/RawMaterialProducer_DUNS_410515671",
          "duns": 410515671,
          "name": "Chemours US 01",
          "address": "Salem County, New Jersey",
          "country": "US"
        }
      },
      {
        "uri": "http://www.dupont.com/ontologies/ontoPSR-data/RawMaterial_CAS_1302-78-9_for_T00001_SLAPQ",
        "name": "Bentonite Clay",
        "cas": "1302-78-9",
        "producer": {
          "uri": "http://www.dupont.com/ontologies/ontoPSR-data/RawMaterialProducer_DUNS_132413598",
          "duns": 132413598,
          "name": "Dow Chemical US 01",
          "address": "Midland, Michigan",
          "country": "US"
        }
      }
    ],
    "ingredients": [
      {
        "uri": "http://www.dupont.com/ontologies/ontoPSR-data/Ingredient_CAS_64-19-7_in_T00001_SLAPQ",
        "name": "Acetic Acid",
        "cas": "64-19-7",
        "concentration": 0.1,
        "ingredientFunction": "Solvent"
      },
      {
        "uri": "http://www.dupont.com/ontologies/ontoPSR-data/Ingredient_CAS_9001-77-8_in_T00001_SLAPQ",
        "name": "Acid Phosphatase",
        "cas": "9001-77-8",
        "concentration": 0.2,
        "ingredientFunction": "Stabilizer"
      },
      {
        "uri": "http://www.dupont.com/ontologies/ontoPSR-data/Ingredient_CAS_1336-21-6_in_T00001_SLAPQ",
        "name": "Ammonium Hydroxide",
        "cas": "1336-21-6",
        "concentration": 0.1,
        "ingredientFunction": "Preservative"
      }
    ],
    "manufacturingSites": [
      {
        "uri": "http://www.dupont.com/ontologies/ontoPSR-data/ProductionSite_Beloit",
        "name": "Beloit",
        "country": "US",
        "process": "Fermentation"
      }
    ],
    "endUses": [
      {
        "uri": "http://www.dupont.com/ontologies/ontoPSR-data/EndUse_Fuel_Ethanol_Product",
        "name": "Fuel_Ethanol_Product",
        "jurisdiction": "Tech"
      }
    ],
    "country": {
      "uri": "http://www.dupont.com/ontologies/ontoPSR-data/Country_US",
      "code": "us",
      "name": "United States",
      "region": "NA"
    }
  }
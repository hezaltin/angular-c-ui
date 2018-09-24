export const SubmitResponse={
    "product": {
        "bulkCode": "T1234",
        "productionStrains": [
            {
                "productBulkCode": "T1234",
                "gicc": "GICCTEST1",
                "geneticallyEngineered": false,
                "uri": "http://www.dupont.com/ontology/ontoPSR-product/GICCTEST1_in_T1234"
            }
        ],
        "enzymeActivity": null,
        "rawMaterials": [
            {
                "name": "Sorbic Acid",
                "productBulkCode": null,
                "cas": "110-44-1",
                "producer": {
                    "duns": 1234567,
                    "name": "BASF DE-01",
                    "address": "Ludwigshafen",
                    "country": "DE",
                    "uri": "http://www.dupont.com/ontology/ontoPSR-product/DUNS_1234567"
                },
                "uri": "http://www.dupont.com/ontology/ontoPSR-product/CAS_110-44-1_for_T1234"
            },
            {
                "name": "Sucrose",
                "productBulkCode": null,
                "cas": "57-50-1",
                "producer": {
                    "duns": 7654321,
                    "name": "DOW US-01",
                    "address": "Missouri",
                    "country": "US",
                    "uri": "http://www.dupont.com/ontology/ontoPSR-product/DUNS_7654321"
                },
                "uri": "http://www.dupont.com/ontology/ontoPSR-product/CAS_57-50-1_for_T1234"
            }
        ],
        "ingredients": [
            {
                "name": "Sodium Acetate",
                "productBulkCode": null,
                "cas": "127-09-3",
                "concentration": 0.1,
                "ingredientFunction": null,
                "uri": "http://www.dupont.com/ontology/ontoPSR-product/CAS_127-09-3_in_T1234"
            },
            {
                "name": "Glucose",
                "productBulkCode": null,
                "cas": "50-99-7",
                "concentration": 0.05,
                "ingredientFunction": null,
                "uri": "http://www.dupont.com/ontology/ontoPSR-product/CAS_50-99-7_in_T1234"
            }
        ],
        "manufacturingSites": [
            {
                "name": "Cedar Rapid",
                "country": "US",
                "process": "Fermentation",
                "uri": "http://www.dupont.com/ontology/ontoPSR-product/Site_Cedar_Rapid"
            },
            {
                "name": "Wilmington",
                "country": "US",
                "process": "Final Product Packing",
                "uri": "http://www.dupont.com/ontology/ontoPSR-product/Site_Wilmington"
            }
        ],
        "endUses": [
            {
                "name": "Advanced Biofuels",
                "jurisdiction": "Tech",
                "uri": "http://www.dupont.com/ontology/ontoPSR-product/Advanced_Biofuels"
            }
        ],
        "country": {
            "code": "us",
            "name": "United States",
            "region": "NA",
            "uri": "http://www.dupont.com/ontology/ontoPSR-product/Country_US"
        },
        "enzyemActivity": null,
        "uri": "http://www.dupont.com/ontology/ontoPSR-product/BulkCode_T1234"
    },
    "assessment": "digraph G\r\n{\r\n    compound=true;\r\n    graph [rankdir=LR;]\r\n\r\n    node [shape=box,color=black,style=filled,fillcolor=white]\r\n    tech [label=\"Tech Compliant\"]\r\n    \r\n\r\n\tsubgraph cluster_determinants {\r\n\t\tstyle=filled;\r\n\t\tcolor=gray95;\r\n\t\tlabel = \"Determinants\";\r\n\t\t\r\n        // Nodes\t\t\r\n        production_strain [label=\"Production Strain\",style=filled,fillcolor=white]\r\n        raw_material_supplier [label=\"Raw Material Suppliers\",style=filled]\r\n        manufacturing_site [label=\"Manufacturing Sites\",style=filled]\r\n        end_use_restrictions [label=\"End-use Restrictions\",style=filled]\r\n        product_registrtion [label=\"Product Registration\",style=filled]\r\n        actives [label=\"Actives (enzymes)\",style=filled]\r\n        ingredients [label=\"Ingredients\",style=filled]\r\n        ;\r\n\t}\r\n\r\n    subgraph cluster_production_strain {\r\n        style=filled;\r\n        color=gray95;\r\n        \r\n        // Nodes\r\n        is_genetic_engineered [label=\"Is the production strain \\lgenetically engineered?\"]\r\n        ge_t [label=\"Yes\"]\r\n        ge_f [label=\"No\",fillcolor=\"chartreuse\"]\r\n        \r\n        will_use_in_country [label=\"Will the production strain \\lbe used in country?\"]\r\n        uic_t [label=\"Yes\"]\r\n        uic_f [label=\"No\",fillcolor=\"chartreuse\"]\r\n        \r\n        is_self_cloned [label=\"Is the production strain \\lself-cloned?\"]\r\n        sc_t [label=\"Yes\",fillcolor=\"chartreuse\"]\r\n        sc_f [label=\"No\"]\r\n        \r\n        is_compliant [label=\"Is production \\lstrain compliant?\"]\r\n        c_t [label=\"Yes\",fillcolor=\"chartreuse\"]\r\n        c_f [label=\"No\"]\r\n        \r\n        is_exempt [label=\"Is the production \\lstrain exempt?\"]\r\n        e_t [label=\"Yes\",fillcolor=\"gold\"]\r\n        e_f [label=\"No\",fillcolor=\"tomato\"]\r\n        ;\r\n        // Edges\r\n        is_genetic_engineered -> ge_t\r\n        is_genetic_engineered -> ge_f\r\n        ge_t -> will_use_in_country\r\n        will_use_in_country -> uic_t\r\n        will_use_in_country -> uic_f\r\n        uic_t -> is_self_cloned\r\n        is_self_cloned -> sc_t\r\n        is_self_cloned -> sc_f\r\n        sc_f -> is_compliant\r\n        is_compliant -> c_t\r\n        is_compliant -> c_f\r\n        c_f -> is_exempt\r\n        is_exempt -> e_t\r\n        is_exempt -> e_f\r\n        ;\r\n        \r\n    }\r\n    \r\n    subgraph cluster_raw_material_suppliers {\r\n        style=filled;\r\n        color=gray95;\r\n        \r\n        // Subgraphs\r\n        subgraph cluster_supplier_requirements {\r\n            label = \"Raw Material Supplier Requirements\";\r\n            color=black;\r\n            style=filled;\r\n            fillcolor=ivory;\r\n            \r\n            tsca_inventory [label=\"TSCA Inventory\"]\r\n            \r\n        }\r\n        \r\n        // Nodes\r\n        has_rms_requirements [label=\"Are there raw material \\lsupplier requirements?\"]\r\n        rms_f [label=\"No requirement\",fillcolor=\"chartreuse\"]\r\n        ti_t [label=\"Yes\",fillcolor=\"chartreuse\"]\r\n        ti_f [label=\"No\",fillcolor=\"tomato\"]\r\n        \r\n        // Edges\r\n        has_rms_requirements -> rms_f\r\n        has_rms_requirements -> tsca_inventory [lhead=cluster_supplier_requirements]\r\n        tsca_inventory -> ti_t\r\n        tsca_inventory -> ti_f\r\n        \r\n    }\r\n    \r\n    subgraph cluster_manufacturing_site {\r\n        style=filled;\r\n        color=gray95;\r\n        \r\n        // Subgraphs\r\n        subgraph cluster_manufacturing_site_requirements {\r\n            label = \"Manufacturing Site Requirements\";\r\n            color=black;\r\n            style=filled;\r\n            fillcolor=ivory;\r\n            \r\n            null_cms_requirements [label=\"null template\"]\r\n            \r\n        }\r\n        \r\n        // Nodes\r\n        has_cms_requirements [label=\"Are there manufacturing \\lsite requirements?\"]\r\n        cms_f [label=\"No requirement\",fillcolor=\"chartreuse\"]\r\n        cms_null_t [label=\"Yes\",fillcolor=\"chartreuse\"]\r\n        cms_null_f [label=\"No\",fillcolor=\"tomato\"]\r\n        \r\n        // Edges\r\n        has_cms_requirements -> cms_f\r\n        has_cms_requirements -> null_cms_requirements [lhead=cluster_manufacturing_site_requirements]\r\n        null_cms_requirements -> cms_null_t\r\n        null_cms_requirements -> cms_null_f\r\n        \r\n    }\r\n    \r\n    subgraph cluster_end_use_restrictions {\r\n        style=filled;\r\n        color=gray95;\r\n        \r\n        // Subgraphs\r\n        subgraph cluster_end_use_list {\r\n            label = \"Approved Uses\";\r\n            color=black;\r\n            style=filled;\r\n            fillcolor=ivory;\r\n            \r\n            internal_grass [label=\"Internal GRAS List\"]\r\n            \r\n        }\r\n        \r\n        // Nodes\r\n        has_approved_use_requirements [label=\"What are the approved uses?\"]\r\n        au_f [label=\"No Requirements\",fillcolor=\"chartreuse\"]\r\n        ig_t [label=\"Yes\"]\r\n        ig_f [label=\"No\",fillcolor=\"tomato\"]\r\n        has_max_level [label=\"Are there maximum use \\llevel restrictions?\"]\r\n        hml_t [label=\"Yes\",fillcolor=\"gold\"]\r\n        hml_f [label=\"No\",fillcolor=\"chartreuse\"]\r\n        \r\n        // Edges\r\n        has_approved_use_requirements -> au_f\r\n        has_approved_use_requirements -> internal_grass [lhead=cluster_end_use_list]\r\n        internal_grass -> ig_t\r\n        internal_grass -> ig_f\r\n        ig_t -> has_max_level\r\n        has_max_level -> hml_t\r\n        has_max_level -> hml_f\r\n    }\r\n    \r\n    subgraph cluster_product_registration {\r\n        style=filled;\r\n        color=gray95;\r\n        \r\n        // Subgraphs\r\n        subgraph cluster_product_registration_requirements {\r\n            label = \"Product Registration Requirements\";\r\n            color=black;\r\n            style=filled;\r\n            fillcolor=ivory;\r\n            \r\n            null_prod_reg_requirements [label=\"null template\"]\r\n        }\r\n        \r\n        // Nodes\r\n        has_prod_reg_requirements [label=\"Are there product registration \\lrequirements\"]\r\n        prr_f [label=\"No Requirements\",fillcolor=\"chartreuse\"]\r\n        prr_null_t [label=\"Yes\",fillcolor=\"chartreuse\"]\r\n        prr_null_f [label=\"No\",fillcolor=\"tomato\"]\r\n        \r\n        \r\n        // Edges\r\n        has_prod_reg_requirements -> prr_f\r\n        has_prod_reg_requirements -> null_prod_reg_requirements [lhead=cluster_product_registration_requirements]\r\n        null_prod_reg_requirements -> prr_null_t\r\n        null_prod_reg_requirements -> prr_null_f\r\n        \r\n    }\r\n    \r\n    subgraph cluster_actives {\r\n        style=filled;\r\n        color=gray95;\r\n        \r\n        // Subgraphs\r\n        subgraph cluster_active_requirements {\r\n            label = \"Active Requirements\";\r\n            color=black;\r\n            style=filled;\r\n            fillcolor=ivory;\r\n            \r\n            is_protein_genetic_engineered [label=\"Is the enzyme protein engineered?\"]\r\n        }\r\n        \r\n        subgraph cluster_active_positive_list_requirements {\r\n            label = \"Active Positive List Requirements\";\r\n            color=black;\r\n            style=filled;\r\n            fillcolor=ivory;\r\n            \r\n            is_active_tsca_listed [label=\"Is the enzyme in TSCA inventory?\"]\r\n        }\r\n        \r\n        // Nodes\r\n        has_active_reqirements [label=\"Are there any active ingredient \\l(enzyme) requirements?\"]\r\n        ar_f [label=\"No Requirements\",fillcolor=\"chartreuse\"]\r\n        pge_t [label=\"Yes\"]\r\n        pge_f [label=\"No\",fillcolor=\"chartreuse\"]\r\n        atl_t [label=\"Yes\",fillcolor=\"chartreuse\"]\r\n        atl_f [label=\"No\",fillcolor=\"tomato\"]\r\n        \r\n        // Edges\r\n        has_active_reqirements -> ar_f\r\n        has_active_reqirements -> is_protein_genetic_engineered [lhead=cluster_active_requirements]\r\n        is_protein_genetic_engineered -> pge_t\r\n        is_protein_genetic_engineered -> pge_f\r\n        pge_t -> is_active_tsca_listed [lhead=\"cluster_active_positive_list_requirements\"]\r\n        is_active_tsca_listed -> atl_t\r\n        is_active_tsca_listed -> atl_f\r\n            \r\n    }\r\n    \r\n    subgraph cluster_ingredients {\r\n        style=filled;\r\n        color=gray95;\r\n        \r\n        // Subgraphs\r\n        subgraph cluster_ingredient_requirements {\r\n            label = \"Ingredient Requirements\";\r\n            color=black;\r\n            style=filled;\r\n            fillcolor=ivory;\r\n            \r\n            are_ingredients_tsca_listed [label=\"Are all the ingredients in TSCA inventory?\"]\r\n        }\r\n        \r\n        // Nodes\r\n        has_ingredient_requirements [label=\"Are other ingredients \\lsubject to requirements?\"]\r\n        ir_f [label=\"No Requirements\",fillcolor=\"chartreuse\"]\r\n        itl_t [label=\"Yes\",fillcolor=\"chartreuse\"]\r\n        itl_f [label=\"No\",fillcolor=\"Tomato\"]\r\n        \r\n        \r\n        // Edges\r\n        has_ingredient_requirements -> ir_f\r\n        has_ingredient_requirements -> are_ingredients_tsca_listed [lhead=cluster_ingredient_requirements]\r\n        are_ingredients_tsca_listed -> itl_t\r\n        are_ingredients_tsca_listed -> itl_f\r\n    }\r\n\r\n    tech -> production_strain\r\n    tech -> raw_material_supplier\r\n    tech -> manufacturing_site\r\n    tech -> end_use_restrictions\r\n    tech -> product_registrtion\r\n    tech -> actives\r\n    tech -> ingredients\r\n    \r\n    production_strain -> is_genetic_engineered\r\n    raw_material_supplier -> has_rms_requirements\r\n    manufacturing_site -> has_cms_requirements\r\n    end_use_restrictions -> has_approved_use_requirements\r\n    product_registrtion -> has_prod_reg_requirements\r\n    actives -> has_active_reqirements\r\n    ingredients -> has_ingredient_requirements\r\n}"
}

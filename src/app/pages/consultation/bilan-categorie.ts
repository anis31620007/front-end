export interface TestCategory {
    [key: string]: string[];  // Each category will have keys as strings and array of strings as tests
  }
  
  export interface TestCategories {
    [category: string]: TestCategory;  // Main categories like "Radiologie", "Bilan sanguin", etc.
  }
  
  // Define your test categories as before
  export const TestCategories: TestCategories = {
    "Radiologie": {
      "Radiographie (X-ray)": [
        "Thoracique", "Abdominale", "Dentaire", "Osseuse", "Crânienne"
      ],
      "Scanner (CT Scan)": [
        "Abdominal", "Cérébral", "Thoracique", "Pelvien", "Osseux"
      ],
      "Imagerie par résonance magnétique (IRM)": [
        "Cérébrale", "Abdominale", "Spinale", "Articulaire", "Cardiaque"
      ],
      "Échographie (Ultrasonographie)": [
        "Abdominale", "Pelvienne", "Obstétricale", "Cardiaque", "Musculo-squelettique", 
        "Thyroïdienne", "Doppler"
      ],
      "Angiographie": [
        "Cérébrale", "Coronaires", "Périphérique", "Pulmonaire"
      ]
    },
    "Bilan sanguin": {
      "Ionogramme sanguin": [
        "Sodium", "Potassium", "Calcium", "Chlorures", "Magnésium"
      ],
      "Bilan inflammatoire": [
        "Protéine C-réactive (CRP)", "Vitesse de sédimentation des érythrocytes (VS)", 
        "Fibrinogène", "Ferritine", "Interleukines"
      ],
      "Bilan thyroïdien": [
        "TSH", "T3", "T4", "Anticorps anti-thyroperoxydase", "Anticorps anti-thyroglobuline"
      ],
      "Glycémie": [
        "Glycémie à jeun", "Test de tolérance au glucose", "Hémoglobine glyquée (HbA1c)"
      ],
      "Bilan lipidique": [
        "Cholestérol total", "Cholestérol HDL", "Cholestérol LDL", "Triglycérides"
      ],
      "Bilan rénal": [
        "Créatinine", "Urée", "Filtration glomérulaire estimée", "Protéinurie"
      ],
      "Bilan hépatique": [
        "Alanine Aminotransférase (ALT)", "Aspartate Aminotransférase (AST)", "Bilirubine totale",
        "Bilirubine conjuguée", "Phosphatases alcalines", "Albumine", "Gamma-glutamyl transférase (GGT)"
      ],
      "Numération formule sanguine": [
        "Globules rouges", "Hémoglobine", "Hématocrite", "Leucocytes", "Plaquettes", "VGM",
        "CCMH", "Taux de réticulocytes"
      ]
    }
  };
  
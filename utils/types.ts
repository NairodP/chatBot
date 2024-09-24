// Définition du type pour les villes
export type City = string;

// Définition du type pour le cadastre
export type Cadastre = {
  // Ajoute ici les propriétés spécifiques du cadastre
  // Exemple :
  // id: string;
  // name: string;
  // ... (ajoute d'autres propriétés nécessaires)
}

// Définition du type pour l'état du hook useCadastre
export type CadastreState = {
  city: City;
  cadastre: Cadastre | null;
  loading: boolean;
  error: string | null;
  showSuggestions: boolean;
}

// Définition des types d'actions pour le réducteur
export type CadastreAction =
  | { type: "SET_CITY"; payload: City }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_CADASTRE"; payload: Cadastre | null }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "SET_SHOW_SUGGESTIONS"; payload: boolean };

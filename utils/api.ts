export const fetchCadastreData = async (city: string) => {
  if (!city.trim()) {
    throw new Error("Veuillez entrer le nom d'une ville.");
  }

  const API_KEY = process.env.NEXT_PUBLIC_GEO_API_KEY;
  const url = `https://wxs.ign.fr/${API_KEY}/geoportail/your_endpoint?city=${city}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Ville non trouvée ou erreur lors de l'appel à l'API.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue.");
  }
};
/* ============================================================
   CONTENIDO EDITABLE DE LA WEB
   ------------------------------------------------------------
   Aqui puedes agregar, cambiar o eliminar:
   - projects: tarjetas del portafolio (categoria: Ejecutados,
     En desarrollo o Por iniciar). La imagen va en assets/projects/.
   - upcoming: lista de proximos proyectos (texto simple).
   - familia: fotos del equipo. Ponlas en assets/familia/ con el
     mismo nombre. El contador (1 | 4) se actualiza solo.
   ============================================================ */
const SITE_CONTENT = {
  "projects": [
    {
      "title": "Conjunto Residencial San Ignacio",
      "category": "Ejecutados",
      "type": "Vivienda unifamiliar · Townhouses",
      "meta": "52 viviendas · 103 m² por unidad · San Diego, Edo. Carabobo",
      "status": "100% ejecutado",
      "year": "2015 - 2018",
      "image": "proyecto-02.jpg"
    },
    {
      "title": "Conjunto Residencial Las Brisas",
      "category": "Ejecutados",
      "type": "Vivienda bifamiliar · Casas",
      "meta": "222 viviendas · 86 m² por unidad · Guacara, Edo. Carabobo",
      "status": "100% ejecutado",
      "year": "2018 - 2022",
      "image": "proyecto-03.jpg"
    },
    {
      "title": "Lomas del Country Conjunto 9-A Casa 18",
      "category": "En desarrollo",
      "type": "Casa quinta",
      "meta": "1 vivienda · 1.100 m² · Lomas del Country, Edo. Carabobo",
      "status": "60% ejecutado",
      "year": "2024",
      "image": "proyecto-04.jpg"
    },
    {
      "title": "Hotel y Casino Baywatch",
      "category": "Ejecutados",
      "type": "Edificio casino",
      "meta": "2 niveles · 1.000 m² · Tucacas, Edo. Falcón",
      "status": "100% ejecutado",
      "year": "2022 - 2023",
      "image": "proyecto-05.jpg"
    },
    {
      "title": "Conjunto Residencial Kapadare",
      "category": "En desarrollo",
      "type": "Vivienda unifamiliar · Apartamentos",
      "meta": "76 viviendas · 75 m² y 85 m² · Naguanagua, Edo. Carabobo",
      "status": "50% ejecutado",
      "year": "En desarrollo",
      "image": "proyecto-06.jpg"
    },
    {
      "title": "Conjunto Residencial El Oasis",
      "category": "En desarrollo",
      "type": "Vivienda unifamiliar · Casas",
      "meta": "560 viviendas · 65 m² por unidad · Tocuyito, Edo. Carabobo",
      "status": "5% ejecutado",
      "year": "En desarrollo",
      "image": "proyecto-07.jpg"
    },
    {
      "title": "Centro Comercial Kapadare",
      "category": "En desarrollo",
      "type": "Locales comerciales",
      "meta": "30 locales · 1.800 m² vendibles · Naguanagua, Edo. Carabobo",
      "status": "20% ejecutado",
      "year": "En desarrollo",
      "image": "proyecto-08.jpg"
    },
    {
      "title": "Centro C.P. Las Chimeneas",
      "category": "En desarrollo",
      "type": "Centro comercial y oficinas",
      "meta": "44 locales / 108 oficinas · 15.841 m² vendibles · Valencia, Edo. Carabobo",
      "status": "5% ejecutado",
      "year": "En desarrollo",
      "image": "proyecto-09.jpg"
    },
    {
      "title": "Centro Empresarial Norte",
      "category": "Por iniciar",
      "type": "Centro comercial, oficinas y galpones",
      "meta": "12 locales, 36 oficinas, 22 galpones · 16.000 m² vendibles · San Diego, Edo. Carabobo",
      "status": "0% ejecutado",
      "year": "Por iniciar",
      "image": "proyecto-10.jpg"
    },
    {
      "title": "Conjunto Residencial Los Frailes",
      "category": "Ejecutados",
      "type": "Vivienda unifamiliar · Townhouses",
      "meta": "181 viviendas · 130 m² por unidad · San Diego, Edo. Carabobo",
      "status": "100% ejecutado",
      "year": "2005",
      "image": "proyecto-12.jpg"
    },
    {
      "title": "Conjunto Residencial Valparaíso",
      "category": "Ejecutados",
      "type": "Vivienda unifamiliar · Apartamentos",
      "meta": "128 viviendas · 96 m² por unidad · San Diego, Edo. Carabobo",
      "status": "100% ejecutado",
      "year": "2006",
      "image": "proyecto-13.jpg"
    },
    {
      "title": "Residencias San Francisco",
      "category": "Ejecutados",
      "type": "Vivienda unifamiliar · Apartamentos",
      "meta": "330 viviendas · 75 m² y 85 m² · San Diego, Edo. Carabobo",
      "status": "100% ejecutado",
      "year": "2007 - 2010",
      "image": "proyecto-14.jpg"
    },
    {
      "title": "Residencias Sibaris",
      "category": "Ejecutados",
      "type": "Vivienda unifamiliar · Apartamentos",
      "meta": "25 viviendas · 375 m² por unidad · Valencia, Edo. Carabobo",
      "status": "100% ejecutado",
      "year": "2010 - 2014",
      "image": "proyecto-15.jpg"
    },
    {
      "title": "Complejo Turístico Internacional",
      "category": "Ejecutados",
      "type": "Edificio de servicios generales",
      "meta": "Dependencias Federales",
      "status": "100% ejecutado",
      "year": "2023 - 2024",
      "image": "proyecto-16.jpg"
    }
  ],
  "upcoming": [
    "Villas del Prado · 49 viviendas de 300 m² · Guataparo, Valencia",
    "C.C Teatro La Granja · Centro comercial, oficinas y hotel · La Granja, Naguanagua",
    "Villas El Colonial · 150 viviendas de 130 m² · San Diego",
    "Centro Comercial y Profesional San Ignacio · Centro comercial, oficinas y hotel · San Diego",
    "Centro Médico San Ignacio · Clínica y consultorios · San Diego",
    "Residencias 1111 · 80 apartamentos de 107 m² · El Parral, Valencia",
    "Residencias El Parque 4 · 40 apartamentos de 165 m² · Los Mangos, Valencia"
  ],
  "familia": [
    "familia-2.jpg",
    "familia-3.jpg",
    "familia-4.jpg",
    "familia-5.jpg"
  ]
};

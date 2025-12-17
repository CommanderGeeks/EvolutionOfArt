const { useState } = React;

const artGenres = {
  // 1820s-1850s
  romanticism: { name: "Romanticism", year: 1820, x: 50, y: 80, main: true, color: "#8B4513", desc: "Emphasized emotion, individualism, and the glorification of nature and the past, often featuring dramatic landscapes and intense feelings." },
  neoclassicism: { name: "Neoclassicism", year: 1820, x: 50, y: 160, main: false, color: "#4A5568", desc: "Drew inspiration from classical Greek and Roman art, emphasizing order, symmetry, and rational thought." },
  biedermeier: { name: "Biedermeier", year: 1825, x: 50, y: 240, main: false, color: "#6B7280", desc: "A German and Austrian style focusing on domestic comfort, simplicity, and middle-class values in the home." },
  hudsonRiver: { name: "Hudson River School", year: 1825, x: 50, y: 320, main: false, color: "#2D5A27", desc: "American landscape painting movement celebrating the natural beauty of the Hudson River Valley and American wilderness." },
  
  // 1850s-1870s
  realism: { name: "Realism", year: 1850, x: 200, y: 80, main: true, color: "#5D4E37", desc: "Rejected romanticized idealism to depict everyday life and ordinary people with accuracy and social awareness." },
  preRaphaelite: { name: "Pre-Raphaelite", year: 1848, x: 200, y: 160, main: false, color: "#8B0000", desc: "English movement rejecting industrial-age painting for medieval-inspired detail, vibrant colors, and literary themes." },
  orientalism: { name: "Orientalism", year: 1850, x: 200, y: 240, main: false, color: "#B8860B", desc: "Western artists' romanticized depictions of Middle Eastern and Asian cultures, often emphasizing exoticism." },
  barbizon: { name: "Barbizon School", year: 1850, x: 200, y: 320, main: false, color: "#556B2F", desc: "French painters who worked outdoors in Barbizon forest, pioneering naturalistic landscape painting." },
  luminism: { name: "Luminism", year: 1855, x: 200, y: 400, main: false, color: "#DEB887", desc: "American style emphasizing light effects, horizontal compositions, and serene atmospheric landscapes." },
  
  // 1860s-1880s
  impressionism: { name: "Impressionism", year: 1870, x: 350, y: 80, main: true, color: "#6B98C4", desc: "Revolutionary movement capturing fleeting moments and light effects through visible brushstrokes and vibrant colors." },
  academicism: { name: "Academic Art", year: 1865, x: 350, y: 160, main: false, color: "#4A4A4A", desc: "Traditional European art following strict rules of composition, technique, and classical subjects taught in academies." },
  aestheticism: { name: "Aestheticism", year: 1870, x: 350, y: 240, main: false, color: "#9370DB", desc: "Promoted 'art for art's sake,' valuing beauty and sensory experience over moral or narrative content." },
  japonisme: { name: "Japonisme", year: 1872, x: 350, y: 320, main: false, color: "#DC143C", desc: "Western fascination with Japanese art and design, influencing composition, color, and decorative elements." },
  
  // 1880s-1900s
  postImpressionism: { name: "Post-Impressionism", year: 1885, x: 500, y: 80, main: true, color: "#FF6B35", desc: "Extended Impressionism with symbolic content, geometric forms, and emotional expression through color and structure." },
  neoImpressionism: { name: "Neo-Impressionism", year: 1886, x: 500, y: 160, main: false, color: "#4169E1", desc: "Systematic approach using color theory and optical mixing with small dots of pure color (Pointillism)." },
  pointillism: { name: "Pointillism", year: 1886, x: 500, y: 240, main: false, color: "#20B2AA", desc: "Technique of painting using tiny dots of pure color that blend optically when viewed from a distance." },
  symbolism: { name: "Symbolism", year: 1885, x: 500, y: 320, main: false, color: "#483D8B", desc: "Emphasized dreams, emotions, and ideas through symbolic imagery rather than realistic representation." },
  artNouveau: { name: "Art Nouveau", year: 1890, x: 500, y: 400, main: false, color: "#228B22", desc: "Decorative style featuring organic forms, flowing lines, and nature-inspired motifs across art and architecture." },
  nabis: { name: "Les Nabis", year: 1888, x: 500, y: 480, main: false, color: "#CD853F", desc: "French group using flat colors and simplified forms to create decorative, spiritually-inspired compositions." },
  
  // 1900s-1920s
  fauvism: { name: "Fauvism", year: 1905, x: 650, y: 80, main: true, color: "#FF4500", desc: "Used wild, non-naturalistic colors and bold brushwork to express emotion over realistic representation." },
  expressionism: { name: "Expressionism", year: 1905, x: 650, y: 160, main: true, color: "#8B0000", desc: "Distorted forms and exaggerated colors to convey intense emotions, anxiety, and subjective experiences." },
  cubism: { name: "Cubism", year: 1907, x: 650, y: 240, main: true, color: "#2F4F4F", desc: "Revolutionary style fragmenting objects into geometric shapes shown from multiple viewpoints simultaneously." },
  futurism: { name: "Futurism", year: 1909, x: 650, y: 320, main: false, color: "#FF8C00", desc: "Italian movement celebrating speed, technology, and dynamic movement of modern industrial life." },
  orphism: { name: "Orphism", year: 1912, x: 650, y: 400, main: false, color: "#9932CC", desc: "Colorful, abstract offshoot of Cubism emphasizing pure color and light with lyrical, musical qualities." },
  syntheticCubism: { name: "Synthetic Cubism", year: 1912, x: 650, y: 480, main: false, color: "#696969", desc: "Later Cubist phase using simplified shapes, brighter colors, and collage techniques with mixed media." },
  vorticism: { name: "Vorticism", year: 1914, x: 650, y: 560, main: false, color: "#1C1C1C", desc: "British movement combining Cubist fragmentation with Futurist dynamism in angular, machine-age forms." },
  
  // 1910s-1930s
  abstractArt: { name: "Abstract Art", year: 1912, x: 800, y: 80, main: true, color: "#4B0082", desc: "Abandoned realistic representation for pure forms, colors, and lines to express ideas and emotions." },
  suprematism: { name: "Suprematism", year: 1915, x: 800, y: 160, main: false, color: "#000000", desc: "Russian movement using basic geometric shapes and limited colors to achieve pure artistic feeling." },
  dada: { name: "Dadaism", year: 1916, x: 800, y: 240, main: true, color: "#8B4513", desc: "Anti-art movement mocking established aesthetics through absurdity, chance, and readymade objects." },
  constructivism: { name: "Constructivism", year: 1917, x: 800, y: 320, main: false, color: "#B22222", desc: "Russian movement emphasizing art as social purpose using industrial materials and geometric abstraction." },
  deStijl: { name: "De Stijl", year: 1917, x: 800, y: 400, main: false, color: "#0000CD", desc: "Dutch movement seeking universal harmony through primary colors, straight lines, and rectangular forms." },
  bauhaus: { name: "Bauhaus", year: 1919, x: 800, y: 480, main: false, color: "#DC143C", desc: "German school unifying art, craft, and technology with functional design and geometric simplicity." },
  precisionism: { name: "Precisionism", year: 1920, x: 800, y: 560, main: false, color: "#708090", desc: "American style depicting industrial landscapes with sharp edges, geometric forms, and smooth surfaces." },
  artDeco: { name: "Art Deco", year: 1920, x: 800, y: 640, main: false, color: "#DAA520", desc: "Glamorous decorative style combining modern materials with geometric patterns and luxurious ornamentation." },
  
  // 1920s-1940s
  surrealism: { name: "Surrealism", year: 1924, x: 950, y: 80, main: true, color: "#800080", desc: "Explored the unconscious mind through dreamlike imagery, automatism, and unexpected juxtapositions." },
  magicRealism: { name: "Magic Realism", year: 1925, x: 950, y: 160, main: false, color: "#006400", desc: "Combined realistic technique with fantastical elements, presenting magical occurrences as everyday reality." },
  socialRealism: { name: "Social Realism", year: 1930, x: 950, y: 240, main: false, color: "#8B4513", desc: "Depicted working-class life and social issues to raise awareness and promote political change." },
  harlemRenaissance: { name: "Harlem Renaissance", year: 1925, x: 950, y: 320, main: false, color: "#8B4513", desc: "African American cultural movement celebrating Black identity, heritage, and artistic expression." },
  newObjectivity: { name: "New Objectivity", year: 1925, x: 950, y: 400, main: false, color: "#556B2F", desc: "German post-WWI movement using sharp focus and unsentimental realism to critique society." },
  regionalism: { name: "Regionalism", year: 1930, x: 950, y: 480, main: false, color: "#8B7355", desc: "American art depicting rural and small-town life with realistic detail and nostalgic patriotism." },
  
  // 1940s-1960s
  abstractExpressionism: { name: "Abstract Expressionism", year: 1945, x: 1100, y: 80, main: true, color: "#191970", desc: "American movement emphasizing spontaneous, gestural painting to express inner emotional and spiritual states." },
  colorField: { name: "Color Field", year: 1950, x: 1100, y: 160, main: false, color: "#FF1493", desc: "Large areas of flat, solid color creating contemplative, immersive experiences through chromatic relationships." },
  actionPainting: { name: "Action Painting", year: 1950, x: 1100, y: 240, main: false, color: "#000000", desc: "Energetic, physical approach to painting emphasizing the spontaneous act of creation itself." },
  cobra: { name: "CoBrA", year: 1948, x: 1100, y: 320, main: false, color: "#FF4500", desc: "European group embracing spontaneity, primitive art, and childlike expression in colorful, energetic works." },
  artBrut: { name: "Art Brut", year: 1945, x: 1100, y: 400, main: false, color: "#8B4513", desc: "Raw, untrained art by self-taught creators, valued for its authenticity and freedom from artistic convention." },
  
  // 1950s-1970s
  popArt: { name: "Pop Art", year: 1958, x: 1250, y: 80, main: true, color: "#FF0000", desc: "Embraced mass culture, consumerism, and advertising imagery with bold colors and commercial techniques." },
  neoExpr: { name: "Neo-Expressionism", year: 1975, x: 1250, y: 160, main: false, color: "#8B0000", desc: "Revived expressive, figurative painting with rough brushwork and emotional intensity against minimalism." },
  minimalism: { name: "Minimalism", year: 1960, x: 1250, y: 240, main: true, color: "#2F4F4F", desc: "Stripped art to essential geometric forms and pure elements, removing personal expression and symbolism." },
  opArt: { name: "Op Art", year: 1964, x: 1250, y: 320, main: false, color: "#000000", desc: "Created optical illusions and visual effects through precise patterns, contrast, and geometric arrangements." },
  hardEdge: { name: "Hard-Edge", year: 1959, x: 1250, y: 400, main: false, color: "#4169E1", desc: "Abstract painting with clean, sharp edges between areas of flat, unmodulated color." },
  newRealism: { name: "Nouveau Réalisme", year: 1960, x: 1250, y: 480, main: false, color: "#696969", desc: "French movement incorporating everyday objects and commercial materials into art as social commentary." },
  fluxus: { name: "Fluxus", year: 1962, x: 1250, y: 560, main: false, color: "#808080", desc: "International network blending art and life through performances, happenings, and experimental multimedia works." },
  
  // 1960s-1980s
  conceptualArt: { name: "Conceptual Art", year: 1967, x: 1400, y: 80, main: true, color: "#696969", desc: "Prioritized ideas and concepts over visual aesthetics, often using text, documentation, and ephemeral actions." },
  landArt: { name: "Land Art", year: 1968, x: 1400, y: 160, main: false, color: "#228B22", desc: "Created large-scale interventions in natural landscapes, often remote and documented through photography." },
  performanceArt: { name: "Performance Art", year: 1970, x: 1400, y: 240, main: false, color: "#8B008B", desc: "Used the artist's body and live actions as the medium, often exploring identity, endurance, and social issues." },
  photorealism: { name: "Photorealism", year: 1970, x: 1400, y: 320, main: false, color: "#4A4A4A", desc: "Painted from photographs with extreme detail and precision, mimicking photographic appearance exactly." },
  videoArt: { name: "Video Art", year: 1970, x: 1400, y: 400, main: false, color: "#1E90FF", desc: "Explored video technology as artistic medium for installations, performances, and time-based narratives." },
  feministArt: { name: "Feminist Art", year: 1970, x: 1400, y: 480, main: false, color: "#FF69B4", desc: "Challenged patriarchal art world structures while exploring women's experiences, bodies, and identities." },
  
  // 1980s-Present
  postmodernism: { name: "Postmodernism", year: 1980, x: 1550, y: 80, main: true, color: "#9932CC", desc: "Questioned grand narratives and embraced irony, pastiche, and the mixing of high and low culture." },
  neoGeo: { name: "Neo-Geo", year: 1985, x: 1550, y: 160, main: false, color: "#00CED1", desc: "Revived geometric abstraction with commentary on consumerism through industrial materials and forms." },
  transavantgarde: { name: "Transavantgarde", year: 1980, x: 1550, y: 240, main: false, color: "#DC143C", desc: "Italian movement returning to figurative painting with mythological and historical references." },
  graffiti: { name: "Graffiti Art", year: 1980, x: 1550, y: 320, main: false, color: "#FF4500", desc: "Brought street culture into galleries with bold lettering, urban imagery, and rebellious energy." },
  appropriation: { name: "Appropriation", year: 1982, x: 1550, y: 400, main: false, color: "#708090", desc: "Borrowed existing images and objects to critique authorship, originality, and mass media culture." },
  yba: { name: "Young British Artists", year: 1988, x: 1550, y: 480, main: false, color: "#00008B", desc: "British group known for shocking, conceptual works exploring death, identity, and celebrity culture." },
  
  // 1990s-2020s
  contemporaryArt: { name: "Contemporary Art", year: 1995, x: 1700, y: 80, main: true, color: "#2E8B57", desc: "Diverse, global art of the present moment, reflecting current social, political, and technological realities." },
  digitalArt: { name: "Digital Art", year: 1995, x: 1700, y: 160, main: false, color: "#00BFFF", desc: "Created using digital technology including computer graphics, animation, and interactive media." },
  installationArt: { name: "Installation Art", year: 1990, x: 1700, y: 240, main: false, color: "#8B4513", desc: "Transformed entire spaces into immersive, three-dimensional artistic environments and experiences." },
  bioArt: { name: "Bio Art", year: 2000, x: 1700, y: 320, main: false, color: "#32CD32", desc: "Used living organisms, biological processes, and biotechnology as artistic materials and subjects." },
  netArt: { name: "Net Art", year: 1995, x: 1700, y: 400, main: false, color: "#4169E1", desc: "Created specifically for and distributed through the internet, exploring online culture and connectivity." },
  newMediaArt: { name: "New Media Art", year: 2000, x: 1700, y: 480, main: false, color: "#9370DB", desc: "Encompassed art using emerging technologies including virtual reality, AI, and interactive systems." },
  streetArt: { name: "Street Art", year: 2000, x: 1700, y: 560, main: false, color: "#FF6347", desc: "Public visual art created in urban environments, from stencils and murals to installations and interventions." },
  
  // 2010s-Present
  postInternet: { name: "Post-Internet Art", year: 2010, x: 1850, y: 80, main: false, color: "#00CED1", desc: "Art shaped by internet culture, exploring online/offline relationships and digital aesthetics in physical space." },
  nftArt: { name: "NFT/Crypto Art", year: 2017, x: 1850, y: 160, main: false, color: "#9932CC", desc: "Digital artworks authenticated and sold using blockchain technology, creating new models of ownership and value." },
  aiArt: { name: "AI Art", year: 2020, x: 1850, y: 240, main: false, color: "#4169E1", desc: "Created using artificial intelligence and machine learning algorithms, raising questions about creativity and authorship." },
  metamodernism: { name: "Metamodernism", year: 2010, x: 1850, y: 320, main: false, color: "#FF69B4", desc: "Oscillates between sincerity and irony, seeking meaning while acknowledging postmodern skepticism." },
};

// Define connections between genres
const connections = [
  // Main flow
  { from: "romanticism", to: "realism", type: "main" },
  { from: "realism", to: "impressionism", type: "main" },
  { from: "impressionism", to: "postImpressionism", type: "main" },
  { from: "postImpressionism", to: "fauvism", type: "main" },
  { from: "postImpressionism", to: "expressionism", type: "main" },
  { from: "postImpressionism", to: "cubism", type: "main" },
  { from: "cubism", to: "abstractArt", type: "main" },
  { from: "dada", to: "surrealism", type: "main" },
  { from: "surrealism", to: "abstractExpressionism", type: "main" },
  { from: "abstractArt", to: "abstractExpressionism", type: "main" },
  { from: "abstractExpressionism", to: "popArt", type: "main" },
  { from: "abstractExpressionism", to: "minimalism", type: "main" },
  { from: "minimalism", to: "conceptualArt", type: "main" },
  { from: "conceptualArt", to: "postmodernism", type: "main" },
  { from: "postmodernism", to: "contemporaryArt", type: "main" },
  
  // Sub-genre branches
  { from: "romanticism", to: "hudsonRiver", type: "branch" },
  { from: "neoclassicism", to: "academicism", type: "branch" },
  { from: "realism", to: "barbizon", type: "branch" },
  { from: "barbizon", to: "impressionism", type: "influence" },
  { from: "hudsonRiver", to: "luminism", type: "branch" },
  { from: "impressionism", to: "neoImpressionism", type: "branch" },
  { from: "neoImpressionism", to: "pointillism", type: "branch" },
  { from: "postImpressionism", to: "symbolism", type: "branch" },
  { from: "symbolism", to: "artNouveau", type: "branch" },
  { from: "postImpressionism", to: "nabis", type: "branch" },
  { from: "impressionism", to: "japonisme", type: "influence" },
  { from: "japonisme", to: "artNouveau", type: "influence" },
  { from: "preRaphaelite", to: "symbolism", type: "influence" },
  { from: "preRaphaelite", to: "aestheticism", type: "branch" },
  
  // Early 20th century
  { from: "fauvism", to: "expressionism", type: "influence" },
  { from: "cubism", to: "futurism", type: "influence" },
  { from: "cubism", to: "orphism", type: "branch" },
  { from: "cubism", to: "syntheticCubism", type: "branch" },
  { from: "futurism", to: "vorticism", type: "branch" },
  { from: "cubism", to: "constructivism", type: "influence" },
  { from: "abstractArt", to: "suprematism", type: "branch" },
  { from: "constructivism", to: "bauhaus", type: "influence" },
  { from: "deStijl", to: "bauhaus", type: "influence" },
  { from: "abstractArt", to: "deStijl", type: "branch" },
  { from: "cubism", to: "precisionism", type: "influence" },
  { from: "artNouveau", to: "artDeco", type: "evolution" },
  { from: "bauhaus", to: "artDeco", type: "influence" },
  
  // Mid 20th century
  { from: "dada", to: "fluxus", type: "influence" },
  { from: "surrealism", to: "magicRealism", type: "branch" },
  { from: "expressionism", to: "newObjectivity", type: "reaction" },
  { from: "realism", to: "socialRealism", type: "branch" },
  { from: "socialRealism", to: "regionalism", type: "parallel" },
  { from: "abstractExpressionism", to: "colorField", type: "branch" },
  { from: "abstractExpressionism", to: "actionPainting", type: "branch" },
  { from: "surrealism", to: "cobra", type: "influence" },
  { from: "surrealism", to: "artBrut", type: "branch" },
  
  // Late 20th century
  { from: "dada", to: "popArt", type: "influence" },
  { from: "popArt", to: "neoExpr", type: "reaction" },
  { from: "minimalism", to: "opArt", type: "parallel" },
  { from: "colorField", to: "hardEdge", type: "branch" },
  { from: "dada", to: "newRealism", type: "influence" },
  { from: "conceptualArt", to: "landArt", type: "branch" },
  { from: "conceptualArt", to: "performanceArt", type: "branch" },
  { from: "popArt", to: "photorealism", type: "branch" },
  { from: "conceptualArt", to: "videoArt", type: "branch" },
  { from: "conceptualArt", to: "feministArt", type: "branch" },
  
  // Postmodern era
  { from: "neoExpr", to: "transavantgarde", type: "parallel" },
  { from: "minimalism", to: "neoGeo", type: "influence" },
  { from: "popArt", to: "graffiti", type: "influence" },
  { from: "conceptualArt", to: "appropriation", type: "branch" },
  { from: "postmodernism", to: "yba", type: "branch" },
  
  // Contemporary
  { from: "videoArt", to: "digitalArt", type: "evolution" },
  { from: "conceptualArt", to: "installationArt", type: "branch" },
  { from: "digitalArt", to: "netArt", type: "branch" },
  { from: "netArt", to: "newMediaArt", type: "evolution" },
  { from: "graffiti", to: "streetArt", type: "evolution" },
  { from: "digitalArt", to: "bioArt", type: "parallel" },
  
  // 21st century
  { from: "netArt", to: "postInternet", type: "evolution" },
  { from: "digitalArt", to: "nftArt", type: "evolution" },
  { from: "digitalArt", to: "aiArt", type: "evolution" },
  { from: "postmodernism", to: "metamodernism", type: "evolution" },
];

const eras = [
  { start: 0, end: 150, label: "Romanticism & Realism", year: "1820-1860", color: "#8B451320" },
  { start: 150, end: 425, label: "Impressionism Era", year: "1860-1900", color: "#6B98C420" },
  { start: 425, end: 575, label: "Birth of Modernism", year: "1900-1920", color: "#FF450020" },
  { start: 575, end: 875, label: "Early Modern", year: "1910-1940", color: "#4B008220" },
  { start: 875, end: 1025, label: "Surrealism & Social Art", year: "1920-1950", color: "#80008020" },
  { start: 1025, end: 1175, label: "Abstract Expressionism", year: "1940-1960", color: "#19197020" },
  { start: 1175, end: 1325, label: "Pop & Minimalism", year: "1955-1975", color: "#FF000020" },
  { start: 1325, end: 1475, label: "Conceptual Era", year: "1965-1985", color: "#69696920" },
  { start: 1475, end: 1625, label: "Postmodernism", year: "1980-2000", color: "#9932CC20" },
  { start: 1625, end: 1775, label: "Contemporary", year: "1990-2015", color: "#2E8B5720" },
  { start: 1775, end: 1950, label: "Digital Age", year: "2010-Present", color: "#4169E120" },
];

function ArtGenreFlowDiagram() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [hoveredGenre, setHoveredGenre] = useState(null);
  
  const getPath = (from, to, type) => {
    const fromGenre = artGenres[from];
    const toGenre = artGenres[to];
    if (!fromGenre || !toGenre) return null;
    
    const x1 = fromGenre.x + 70;
    const y1 = fromGenre.y + 15;
    const x2 = toGenre.x;
    const y2 = toGenre.y + 15;
    
    const midX = (x1 + x2) / 2;
    
    if (type === "main") {
      return `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;
    } else {
      const curve = type === "branch" ? 30 : type === "influence" ? 50 : 20;
      return `M ${x1} ${y1} Q ${midX} ${(y1 + y2) / 2 + curve}, ${x2} ${y2}`;
    }
  };
  
  const getLineStyle = (type) => {
    switch (type) {
      case "main":
        return { stroke: "#1a1a1a", strokeWidth: 3, opacity: 0.8 };
      case "branch":
        return { stroke: "#666", strokeWidth: 1.5, opacity: 0.6, strokeDasharray: "none" };
      case "influence":
        return { stroke: "#888", strokeWidth: 1, opacity: 0.5, strokeDasharray: "5,5" };
      case "evolution":
        return { stroke: "#4a9", strokeWidth: 1.5, opacity: 0.6 };
      case "reaction":
        return { stroke: "#c55", strokeWidth: 1.5, opacity: 0.5, strokeDasharray: "8,4" };
      case "parallel":
        return { stroke: "#77a", strokeWidth: 1, opacity: 0.4, strokeDasharray: "3,3" };
      default:
        return { stroke: "#999", strokeWidth: 1, opacity: 0.4 };
    }
  };

  const isConnected = (genreKey) => {
    if (!hoveredGenre) return false;
    return connections.some(
      c => (c.from === hoveredGenre && c.to === genreKey) || 
           (c.to === hoveredGenre && c.from === genreKey)
    );
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 50%, #16213e 100%)',
      fontFamily: "'Playfair Display', Georgia, serif",
      padding: '20px',
      overflow: 'auto'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+Pro:wght@300;400;600&display=swap');
        
        .genre-node {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .genre-node:hover {
          transform: scale(1.08);
          filter: brightness(1.2);
        }
        .main-node {
          filter: drop-shadow(0 0 12px rgba(255,255,255,0.3));
        }
        .connection-path {
          transition: all 0.3s ease;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          color: #aaa;
        }
        .scroll-container::-webkit-scrollbar {
          height: 8px;
        }
        .scroll-container::-webkit-scrollbar-track {
          background: #1a1a2e;
        }
        .scroll-container::-webkit-scrollbar-thumb {
          background: #4a4a6a;
          border-radius: 4px;
        }
      `}</style>
      
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '30px',
        position: 'relative'
      }}>
        <h1 style={{
          fontSize: '42px',
          fontWeight: 700,
          color: '#f5f5f5',
          margin: 0,
          letterSpacing: '2px',
          textShadow: '0 0 40px rgba(147, 112, 219, 0.5)'
        }}>
          The Flow of Art
        </h1>
        <p style={{
          fontFamily: "'Source Sans Pro', sans-serif",
          fontSize: '16px',
          color: '#888',
          marginTop: '10px',
          fontWeight: 300,
          letterSpacing: '4px',
          textTransform: 'uppercase'
        }}>
          200 Years of Artistic Evolution • 50+ Genres
        </p>
        
        {/* Legend */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          marginTop: '20px',
          flexWrap: 'wrap'
        }}>
          <div className="legend-item">
            <svg width="30" height="10"><line x1="0" y1="5" x2="30" y2="5" stroke="#1a1a1a" strokeWidth="3"/></svg>
            <span>Main Evolution</span>
          </div>
          <div className="legend-item">
            <svg width="30" height="10"><line x1="0" y1="5" x2="30" y2="5" stroke="#666" strokeWidth="1.5"/></svg>
            <span>Branch/Sub-genre</span>
          </div>
          <div className="legend-item">
            <svg width="30" height="10"><line x1="0" y1="5" x2="30" y2="5" stroke="#888" strokeWidth="1" strokeDasharray="5,5"/></svg>
            <span>Influence</span>
          </div>
          <div className="legend-item">
            <svg width="30" height="10"><line x1="0" y1="5" x2="30" y2="5" stroke="#4a9" strokeWidth="1.5"/></svg>
            <span>Evolution</span>
          </div>
          <div className="legend-item">
            <svg width="30" height="10"><line x1="0" y1="5" x2="30" y2="5" stroke="#c55" strokeWidth="1.5" strokeDasharray="8,4"/></svg>
            <span>Reaction Against</span>
          </div>
        </div>
      </div>
      
      {/* Main Diagram */}
      <div className="scroll-container" style={{
        overflowX: 'auto',
        overflowY: 'visible',
        paddingBottom: '20px'
      }}>
        <svg 
          width="1950" 
          height="720" 
          style={{
            display: 'block',
            margin: '0 auto'
          }}
        >
          {/* Era backgrounds */}
          {eras.map((era, i) => (
            <g key={i}>
              <rect
                x={era.start}
                y={0}
                width={era.end - era.start}
                height={720}
                fill={era.color}
              />
              <text
                x={era.start + (era.end - era.start) / 2}
                y={700}
                textAnchor="middle"
                fill="#666"
                fontSize="11"
                fontFamily="'Source Sans Pro', sans-serif"
                fontWeight="600"
              >
                {era.label}
              </text>
              <text
                x={era.start + (era.end - era.start) / 2}
                y={715}
                textAnchor="middle"
                fill="#555"
                fontSize="10"
                fontFamily="'Source Sans Pro', sans-serif"
              >
                {era.year}
              </text>
            </g>
          ))}
          
          {/* Timeline axis */}
          <line x1="30" y1="50" x2="1920" y2="50" stroke="#333" strokeWidth="2"/>
          {[1820, 1850, 1870, 1890, 1910, 1930, 1950, 1970, 1990, 2010, 2025].map((year, i) => (
            <g key={year}>
              <line 
                x1={30 + (i * 189)} 
                y1="45" 
                x2={30 + (i * 189)} 
                y2="55" 
                stroke="#555" 
                strokeWidth="2"
              />
              <text
                x={30 + (i * 189)}
                y="38"
                textAnchor="middle"
                fill="#777"
                fontSize="12"
                fontFamily="'Source Sans Pro', sans-serif"
                fontWeight="600"
              >
                {year}
              </text>
            </g>
          ))}
          
          {/* Connections */}
          <g>
            {connections.map((conn, i) => {
              const path = getPath(conn.from, conn.to, conn.type);
              const style = getLineStyle(conn.type);
              if (!path) return null;
              
              const isHighlighted = hoveredGenre && 
                (conn.from === hoveredGenre || conn.to === hoveredGenre);
              
              return (
                <path
                  key={i}
                  d={path}
                  fill="none"
                  {...style}
                  opacity={hoveredGenre ? (isHighlighted ? 1 : 0.15) : style.opacity}
                  strokeWidth={isHighlighted ? style.strokeWidth * 1.5 : style.strokeWidth}
                  className="connection-path"
                  markerEnd={conn.type === "main" ? "url(#arrowhead)" : undefined}
                />
              );
            })}
          </g>
          
          {/* Arrow marker */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="6"
              markerHeight="6"
              refX="5"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 6 3, 0 6" fill="#1a1a1a" opacity="0.6"/>
            </marker>
          </defs>
          
          {/* Genre nodes */}
          {Object.entries(artGenres).map(([key, genre]) => {
            const isHovered = hoveredGenre === key;
            const isRelated = isConnected(key);
            const dimmed = hoveredGenre && !isHovered && !isRelated;
            
            return (
              <g
                key={key}
                className={`genre-node ${genre.main ? 'main-node' : ''}`}
                transform={`translate(${genre.x}, ${genre.y})`}
                onMouseEnter={() => setHoveredGenre(key)}
                onMouseLeave={() => setHoveredGenre(null)}
                onClick={() => setSelectedGenre(selectedGenre === key ? null : key)}
                style={{ opacity: dimmed ? 0.25 : 1, cursor: 'pointer' }}
              >
                <rect
                  x="0"
                  y="0"
                  width={genre.main ? 140 : 120}
                  height={genre.main ? 32 : 28}
                  rx="4"
                  fill={genre.color}
                  stroke={genre.main ? "#fff" : "transparent"}
                  strokeWidth={genre.main ? 2 : 0}
                  style={{
                    filter: isHovered ? 'brightness(1.3)' : 'none',
                    cursor: 'pointer'
                  }}
                />
                <text
                  x={genre.main ? 70 : 60}
                  y={genre.main ? 20 : 18}
                  textAnchor="middle"
                  fill="#fff"
                  fontSize={genre.main ? 12 : 10}
                  fontFamily="'Source Sans Pro', sans-serif"
                  fontWeight={genre.main ? 600 : 400}
                  style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)', pointerEvents: 'none' }}
                >
                  {genre.name}
                </text>
                {genre.main && (
                  <circle
                    cx="8"
                    cy="16"
                    r="4"
                    fill="#fff"
                    opacity="0.3"
                    style={{ pointerEvents: 'none' }}
                  />
                )}
              </g>
            );
          })}
        </svg>
        
        {/* Hover Tooltip */}
        {hoveredGenre && artGenres[hoveredGenre] && (
          <div style={{
            position: 'fixed',
            bottom: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(26, 26, 46, 0.98)',
            border: '1px solid #4a4a6a',
            borderRadius: '8px',
            padding: '12px 16px',
            maxWidth: '400px',
            pointerEvents: 'none',
            zIndex: 999,
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
            backdropFilter: 'blur(10px)'
          }}>
            <p style={{
              margin: 0,
              color: artGenres[hoveredGenre].color,
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '6px',
              fontFamily: "'Source Sans Pro', sans-serif"
            }}>
              {artGenres[hoveredGenre].name}
            </p>
            <p style={{
              margin: 0,
              color: '#f5f5f5',
              fontSize: '13px',
              lineHeight: '1.5',
              fontFamily: "'Source Sans Pro', sans-serif"
            }}>
              {artGenres[hoveredGenre].desc}
            </p>
          </div>
        )}
      </div>
      
      {/* Info Panel */}
      {selectedGenre && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(26, 26, 46, 0.95)',
          border: '1px solid #4a4a6a',
          borderRadius: '12px',
          padding: '20px 30px',
          maxWidth: '500px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h3 style={{
                margin: 0,
                color: artGenres[selectedGenre].color,
                fontSize: '24px',
                fontWeight: 600
              }}>
                {artGenres[selectedGenre].name}
              </h3>
              <p style={{
                margin: '8px 0 0',
                color: '#888',
                fontFamily: "'Source Sans Pro', sans-serif",
                fontSize: '14px'
              }}>
                Emerged c. {artGenres[selectedGenre].year}
                {artGenres[selectedGenre].main && (
                  <span style={{
                    marginLeft: '12px',
                    padding: '2px 8px',
                    background: '#4a4a6a',
                    borderRadius: '4px',
                    fontSize: '11px',
                    color: '#ccc'
                  }}>
                    Major Movement
                  </span>
                )}
              </p>
              <p style={{
                margin: '12px 0 0',
                color: '#ccc',
                fontFamily: "'Source Sans Pro', sans-serif",
                fontSize: '14px',
                lineHeight: '1.6'
              }}>
                {artGenres[selectedGenre].desc}
              </p>
            </div>
            <button
              onClick={() => setSelectedGenre(null)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#666',
                fontSize: '24px',
                cursor: 'pointer',
                padding: '0',
                lineHeight: 1
              }}
            >
              ×
            </button>
          </div>
          <div style={{
            marginTop: '12px',
            paddingTop: '12px',
            borderTop: '1px solid #333'
          }}>
            <p style={{
              margin: 0,
              color: '#aaa',
              fontFamily: "'Source Sans Pro', sans-serif",
              fontSize: '13px'
            }}>
              <strong style={{ color: '#ccc' }}>Connected to: </strong>
              {connections
                .filter(c => c.from === selectedGenre || c.to === selectedGenre)
                .map(c => c.from === selectedGenre ? artGenres[c.to]?.name : artGenres[c.from]?.name)
                .filter(Boolean)
                .join(' • ')}
            </p>
          </div>
        </div>
      )}
      
      {/* Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: '30px',
        color: '#555',
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: '12px'
      }}>
        <p>Scroll horizontally to explore • Hover to highlight connections • Click for details</p>
      </div>
    </div>
  );
}
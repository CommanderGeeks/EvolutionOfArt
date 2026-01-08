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
  
  // 2020s-Future
  memeArt: { name: "Meme Art", year: 2023, x: 2000, y: 80, main: true, color: "#00FF00", desc: "Internet-native art form using humor, remixing, and viral cultural references to create participatory, rapidly-evolving visual communication." },
};

// Comprehensive movement data for accordion
const movements = [
  {
    name: "Romanticism",
    years: "c. 1780–1850",
    color: "#8B4513",
    overview: `Romanticism emerged as a direct rebellion against the rationalism of the Enlightenment and the rigid formality of Neoclassicism. Where the preceding era celebrated reason, order, and classical restraint, the Romantics championed emotion, imagination, and the untamed power of nature.

The movement arose during a period of profound upheaval. The French Revolution had shattered assumptions about social order. The Industrial Revolution was transforming landscapes and uprooting traditional ways of life. In response, Romantic artists turned inward, seeking authenticity in individual emotion, and outward, toward the sublime terror and beauty of the natural world.`,
    principles: [
      "Elevation of emotion and intuition over reason and logic",
      "Celebration of the sublime in nature—its power to inspire awe and terror",
      "Emphasis on individualism, genius, and the artist as visionary",
      "Interest in the exotic, medieval, and supernatural"
    ],
    artists: [
      { name: "Caspar David Friedrich", contribution: "Master of the sublime landscape; solitary figures facing vast natural expanses" },
      { name: "J.M.W. Turner", contribution: "Revolutionary treatment of light and atmosphere" },
      { name: "Eugène Delacroix", contribution: "Brought Romantic passion to history painting with dynamic compositions" }
    ],
    impact: "Romanticism fundamentally altered the purpose of art, elevating the artist from skilled craftsman to visionary genius. It expanded what counted as worthy subject matter, democratizing content that would eventually encompass commercial imagery and digital culture.",
    connection: "By the mid-nineteenth century, Romanticism's emotional intensity began to feel excessive. The Industrial Revolution demanded artistic engagement with contemporary reality. Realism emerged as the necessary correction—artists who would look unflinchingly at the world as it actually was."
  },
  {
    name: "Realism",
    years: "c. 1840–1880",
    color: "#5D4E37",
    overview: `Realism represented a decisive turn toward the contemporary world. Where Romantics sought transcendence in nature and emotion, the Realists insisted on depicting life as it was actually lived—particularly the lives of ordinary people that academic art had ignored.

The movement emerged in France during a period of revolutionary ferment. Gustave Courbet declared that painting could only depict what the eye could see, rejecting idealization and mythological subjects. His monumental canvases of stone breakers and provincial funerals scandalized the establishment by according dignity to subjects considered beneath serious attention.`,
    principles: [
      "Depiction of contemporary life without idealization",
      "Focus on ordinary people, particularly the working class",
      "Rejection of historical, mythological, and religious subjects",
      "Scientific observation and attention to accurate detail"
    ],
    artists: [
      { name: "Gustave Courbet", contribution: "Founding figure who scandalized Paris with unflinching depictions of provincial life" },
      { name: "Jean-François Millet", contribution: "Immortalized the dignity of peasant labor" },
      { name: "Édouard Manet", contribution: "Bridged Realism and Impressionism with modern subjects and flat paint handling" }
    ],
    impact: "Realism shattered the hierarchy of subjects that had governed Western art. By insisting that a stone breaker deserved the same scale as a Roman emperor, it democratized art's content in ways that continue to resonate.",
    connection: "Realism's commitment to observation opened a door. If the goal was to capture contemporary reality, then the studio—with its controlled lighting—was inadequate. The next generation would take their canvases outdoors. Impressionism was born from Realism's premises, pushed to their logical conclusion."
  },
  {
    name: "Impressionism",
    years: "c. 1860–1886",
    color: "#6B98C4",
    overview: `Impressionism marked the decisive break with academic tradition that launched modern art. The movement took its name from a critic's dismissive description of Monet's "Impression, Sunrise"—a term intended as insult that the artists adopted with defiant pride.

The Impressionists worked en plein air, painting outdoors to capture the actual effects of natural light. Their loose brushwork and bright palettes initially scandalized audiences accustomed to the smooth surfaces and dark tones of academic painting.`,
    principles: [
      "Capture of fleeting moments and transient effects of light",
      "Visible brushstrokes rejecting smooth academic finish",
      "Painting en plein air from direct observation",
      "Bright, pure colors mixing optically",
      "Modern urban and suburban life as subject matter"
    ],
    artists: [
      { name: "Claude Monet", contribution: "Serial paintings of haystacks, cathedrals, and water lilies" },
      { name: "Pierre-Auguste Renoir", contribution: "Brought Impressionist light to Parisian social life" },
      { name: "Edgar Degas", contribution: "Combined Impressionist observation with classical draftsmanship" }
    ],
    impact: "Impressionism established the model for avant-garde practice: artists defining their own terms of success rather than seeking institutional approval. This organizational innovation proved as influential as their aesthetic one.",
    connection: "By the mid-1880s, the Impressionist moment had passed. Its commitment to surface appearance left little room for the symbolic or deeply personal. Post-Impressionism emerged as artists pushed beyond these boundaries in different directions."
  },
  {
    name: "Post-Impressionism",
    years: "c. 1886–1910",
    color: "#FF6B35",
    overview: `Post-Impressionism is less a unified movement than a constellation of individual responses to Impressionism's limitations. The key figures—Cézanne, Van Gogh, Gauguin, Seurat—shared little beyond their emergence from Impressionism and dissatisfaction with it.

Cézanne sought to "make of Impressionism something solid," restructuring nature into geometric forms. Van Gogh charged color with emotional intensity. Gauguin pursued symbolic meaning in non-naturalistic color. Together, they opened every path that twentieth-century art would explore.`,
    principles: [
      "Rejection of Impressionism's exclusive focus on visual appearance",
      "Emphasis on structure, symbolic meaning, or emotional expression",
      "Bold, non-naturalistic use of color",
      "Geometric simplification of natural forms",
      "Individual vision over collective movement style"
    ],
    artists: [
      { name: "Paul Cézanne", contribution: "Geometric restructuring laid groundwork for Cubism and abstraction" },
      { name: "Vincent van Gogh", contribution: "Transformed color and brushwork into vehicles of emotional expression" },
      { name: "Paul Gauguin", contribution: "Pursued symbolic meaning through flat, non-naturalistic color" }
    ],
    impact: "Post-Impressionism established the pluralism that would define modern art. Multiple valid responses to the same artistic problem could coexist. Individual artists could pursue radically different paths, each legitimate on its own terms.",
    connection: "The paths opened by Post-Impressionism led in multiple directions. Cézanne's geometric analysis pointed toward Cubism. Van Gogh's intensity presaged Expressionism. Gauguin's color influenced the Fauves. The early twentieth century would see these possibilities explode."
  },
  {
    name: "Fauvism",
    years: "c. 1904–1908",
    color: "#FF4500",
    overview: `Fauvism announced itself with explosive color. At the 1905 Salon d'Automne, a group of young painters exhibited works of such chromatic intensity that they were called "les fauves"—the wild beasts.

Henri Matisse, André Derain, and their associates had pushed non-naturalistic color to unprecedented extremes. The movement was brief but transformative, demonstrating that color need not describe—it could simply be.`,
    principles: [
      "Pure, intense color without reference to natural appearance",
      "Spontaneous, energetic brushwork",
      "Simplified forms and flattened pictorial space",
      "Emotional expression through color",
      "Rejection of academic technique"
    ],
    artists: [
      { name: "Henri Matisse", contribution: "The movement's leader explored color's expressive possibilities across seven decades" },
      { name: "André Derain", contribution: "Created radical landscapes replacing natural color with pure chromatic intensity" },
      { name: "Maurice de Vlaminck", contribution: "Approached color with visceral, almost violent energy" }
    ],
    impact: "By demonstrating that color could operate autonomously, the Fauves completed the liberation from naturalism. This freedom proved essential for Expressionism's emotional intensity and ultimately the arbitrary color of digital imagery.",
    connection: "Even as Fauvism peaked, its successor germinated. Georges Braque encountered Cézanne's work in 1907 and began restructuring his paintings geometrically. Picasso completed Les Demoiselles d'Avignon. Cubism emerged, and Fauvism's moment passed."
  },
  {
    name: "Expressionism",
    years: "c. 1905–1925",
    color: "#8B0000",
    overview: `Expressionism emerged simultaneously with Fauvism but from different soil. Where the French Fauves celebrated color, the German Expressionists deployed distortion in service of psychological and social truth.

The movement arose in a culture wrestling with industrialization, urban alienation, and the approaching catastrophe of World War I. Its distortions—angular figures, jarring colors, claustrophobic spaces—externalized anxiety, isolation, and spiritual crisis.`,
    principles: [
      "Distortion of form to express emotional states",
      "Intense color for emotional effect",
      "Rejection of academic technique for raw execution",
      "Focus on alienation, anxiety, and spiritual crisis",
      "Art as direct expression of inner experience"
    ],
    artists: [
      { name: "Ernst Ludwig Kirchner", contribution: "Angular urban scenes captured modern alienation" },
      { name: "Edvard Munch", contribution: "'The Scream' became the iconic image of modern anxiety" },
      { name: "Wassily Kandinsky", contribution: "Pushed Expressionism toward pure abstraction" }
    ],
    impact: "Expressionism established that art's purpose could be the externalization of internal experience. Subjective psychological truth was as valid as external reality. This principle would prove foundational for Abstract Expressionism and Neo-Expressionism.",
    connection: "Expressionism's emphasis on subjective experience pointed toward increasing abstraction, as Kandinsky pursued pure expression freed from representation. It also led toward Dada and Surrealism, which would explore different territories of irrational and unconscious experience."
  },
  {
    name: "Cubism",
    years: "c. 1907–1925",
    color: "#2F4F4F",
    overview: `Cubism shattered the single viewpoint that had governed Western painting since the Renaissance. Picasso and Braque developed a revolutionary approach depicting objects from multiple angles simultaneously.

The movement evolved through distinct phases. Analytic Cubism pushed fragmentation toward near-abstraction. Synthetic Cubism reversed direction, building images from flat shapes and introducing collage—actual newspaper and wallpaper pasted onto canvas.`,
    principles: [
      "Simultaneous representation of multiple viewpoints",
      "Fragmentation of forms into geometric planes",
      "Rejection of single-point perspective",
      "Collage and mixed media as legitimate techniques",
      "Conceptual understanding over visual appearance"
    ],
    artists: [
      { name: "Pablo Picasso", contribution: "'Les Demoiselles d'Avignon' launched the revolution" },
      { name: "Georges Braque", contribution: "Methodical experimentation developed Cubism's technical vocabulary" },
      { name: "Juan Gris", contribution: "Brought systematic clarity to Synthetic Cubism" }
    ],
    impact: "Cubism demonstrated that representation could be conceptual rather than perceptual. Art could show what we know rather than what we see. The introduction of collage collapsed the boundary between art and everyday life.",
    connection: "Cubism's innovations spread rapidly, spawning Futurism in Italy, Constructivism in Russia, and De Stijl in the Netherlands. Its conceptual turn would reach logical conclusion in Dada's anti-art provocations and Duchamp's readymades."
  },
  {
    name: "Abstract Art",
    years: "c. 1910–Present",
    color: "#4B0082",
    overview: `Abstraction—creation of images without reference to the visible world—represents the most radical departure in Western art history. For millennia, art had been defined by representation. The abstract pioneers abandoned it entirely.

Several artists arrived at abstraction independently around 1910–1912: Kandinsky, Malevich, Mondrian. Each followed different paths but all concluded that representation was unnecessary. Art could address the viewer directly through visual relationships alone.`,
    principles: [
      "Complete abandonment of representation",
      "Pure visual relationships as content",
      "Direct emotional or spiritual address",
      "Emphasis on formal properties of the medium",
      "Art as autonomous object"
    ],
    artists: [
      { name: "Wassily Kandinsky", contribution: "Justified abstraction through spiritual philosophy" },
      { name: "Piet Mondrian", contribution: "Reduced painting to primary colors and straight lines" },
      { name: "Kazimir Malevich", contribution: "'Black Square' represented pure artistic feeling without content" }
    ],
    impact: "Abstraction changed what art could be. Visual experience could be meaningful without representation. Any combination of colors, shapes, and marks could potentially constitute art.",
    connection: "By the 1950s, abstract painting had become so refined it seemed to leave nowhere to go. Abstract Expressionism injected personal drama. Meanwhile, Dada and Surrealism explored content that formal abstraction had excluded."
  },
  {
    name: "Dadaism",
    years: "c. 1916–1924",
    color: "#8B4513",
    overview: `Dada was born in Zurich in 1916, as Europe consumed itself in World War I. The movement was less an artistic style than total revolt against the civilization that produced the war.

If rational European culture led to mechanized mass death, the Dadaists would embrace irrationality, chance, and nonsense. Duchamp submitted a urinal to an exhibition. Schwitters made collages from garbage. Every gesture attacked assumptions about what art was.`,
    principles: [
      "Anti-art stance rejecting established aesthetic values",
      "Embrace of chance, irrationality, and nonsense",
      "Use of readymades—ordinary objects as art",
      "Provocation and scandal as strategies",
      "Collective, collaborative, performative approaches"
    ],
    artists: [
      { name: "Marcel Duchamp", contribution: "Readymades forever changed what could count as art" },
      { name: "Hugo Ball", contribution: "Sound poetry and absurdist performances launched the movement" },
      { name: "Hannah Höch", contribution: "Pioneer of photomontage critiquing gender and politics" }
    ],
    impact: "Dada's legacy is conceptual. By questioning art's definition, they opened territories artists continue to explore. The readymade established that art could be primarily about ideas rather than skill.",
    connection: "Dada burned bright and brief. Many participants moved into Surrealism, which shared interest in the irrational but channeled it toward systematic exploration of the unconscious."
  },
  {
    name: "Surrealism",
    years: "c. 1924–1966",
    color: "#800080",
    overview: `Surrealism transformed Dada's anarchic negation into a sustained program for exploring the unconscious mind. Founded by André Breton in 1924, the movement drew on Freudian psychoanalysis to access repressed contents of the psyche.

The Surrealists developed techniques to bypass conscious censorship: automatic writing, dream recording, collaborative games. Their images combined familiar elements in impossible configurations—melting watches, burning giraffes—creating what Breton called "the marvelous."`,
    principles: [
      "Exploration of the unconscious and dream imagery",
      "Automatism and chance to access deeper truths",
      "Juxtaposition of unrelated objects",
      "Rejection of rationalism",
      "Art as tool for psychological liberation"
    ],
    artists: [
      { name: "Salvador Dalí", contribution: "'Paranoiac-critical method' produced iconic images like 'The Persistence of Memory'" },
      { name: "René Magritte", contribution: "Precisely rendered impossibilities questioned reality" },
      { name: "Max Ernst", contribution: "Developed frottage and grattage techniques" }
    ],
    impact: "Surrealism transformed visual culture beyond fine art. Its techniques of unexpected juxtaposition and dream logic were adopted by advertising, film, and fashion. The strange became familiar; Surrealist imagery permeates commercial culture from perfume ads to memes.",
    connection: "Surrealism remained vital into the 1960s, but its center shifted. New York had become the avant-garde capital. Surrealists who fled Europe influenced Americans who would transform automatism into Abstract Expressionism."
  },
  {
    name: "Abstract Expressionism",
    years: "c. 1943–1965",
    color: "#191970",
    overview: `Abstract Expressionism was the first major movement to emerge from the United States, announcing American dominance of the postwar art world. The movement combined history painting's scale with Surrealist automatism and European abstraction's innovations.

Its massive canvases demanded physical encounter. "Action painters" emphasized the physical act of painting. "Color field" painters created vast expanses for contemplative experience. Both understood painting as existential act of self-revelation.`,
    principles: [
      "Monumental scale demanding physical encounter",
      "Spontaneous, gestural painting",
      "Direct expression of the artist's psyche",
      "Rejection of traditional composition",
      "Art as existential act"
    ],
    artists: [
      { name: "Jackson Pollock", contribution: "Revolutionary 'drip' technique made the act of painting visible" },
      { name: "Willem de Kooning", contribution: "Maintained connection to the figure with Abstract Expressionist intensity" },
      { name: "Mark Rothko", contribution: "Luminous color fields intended to produce spiritual response" }
    ],
    impact: "Abstract Expressionism established New York as the art world center, demonstrating American culture could produce art of highest ambition. The tortured, devoted artist became a cultural archetype.",
    connection: "By the late 1950s, younger artists found its existential drama exhausting. Pop Art would puncture pretension with advertising imagery. Minimalism would strip away personal expression. Both defined themselves against Abstract Expressionism."
  },
  {
    name: "Pop Art",
    years: "c. 1955–1970",
    color: "#FF0000",
    overview: `Pop Art collapsed the boundary between high art and mass culture. Where Abstract Expressionists positioned themselves against commercial society, Pop artists embraced it—reproducing advertisements, comics, packaging, and celebrity images.

The soup can, the comic panel, the movie star's face: these became legitimate artistic subjects, rendered with care that Renaissance painters lavished on madonnas. The movement emerged simultaneously in Britain and America but took different forms.`,
    principles: [
      "Elevation of commercial and popular imagery",
      "Techniques borrowed from advertising",
      "Flat, bold colors from commercial design",
      "Ironic or ambiguous stance toward consumer culture",
      "Rejection of Abstract Expressionist subjectivity"
    ],
    artists: [
      { name: "Andy Warhol", contribution: "Silkscreens of soup cans, celebrities, and disasters defined Pop's ambiguous relationship to mass culture" },
      { name: "Roy Lichtenstein", contribution: "Transformed comic strips into monumental paintings" },
      { name: "Jasper Johns", contribution: "Paintings of flags and targets established everyday objects as legitimate subjects" }
    ],
    impact: "Pop Art's impact is almost impossible to overstate. By legitimizing commercial imagery, it dissolved boundaries that seemed essential to art's identity. Warhol's Factory model anticipated the artist's contemporary role as brand and content creator. If Warhol could paint soup cans, then the visual language of internet culture deserves artistic attention.",
    connection: "Pop Art's irony offered one response to Abstract Expressionist excess. Minimalism offered another: elimination of all imagery, all expression, all content beyond the physical object itself."
  },
  {
    name: "Minimalism",
    years: "c. 1960–1975",
    color: "#2F4F4F",
    overview: `Minimalism pursued reduction to absolute essentials. Sculptors working in 1960s New York stripped art of everything except fundamental properties: shape, scale, material, space.

No metaphor, no symbol, no expression. A steel cube was simply a steel cube—though that "nothing more" proved philosophically rich. Donald Judd insisted his works represented and expressed nothing beyond their own physical presence.`,
    principles: [
      "Reduction to fundamental geometric forms",
      "Rejection of metaphor and representation",
      "Emphasis on literal physical properties",
      "Industrial fabrication replacing the artist's hand",
      "Viewer's physical experience as content"
    ],
    artists: [
      { name: "Donald Judd", contribution: "Wall-mounted boxes and stacks defined Minimalist aesthetics" },
      { name: "Carl Andre", contribution: "Laid materials directly on the floor, eliminating the pedestal" },
      { name: "Dan Flavin", contribution: "Transformed fluorescent fixtures into luminous spatial experiences" }
    ],
    impact: "Minimalism clarified questions about what art was and how it functioned. By stripping art to essentials, it forced examination of implicit assumptions. This self-reflexive questioning would accelerate into Conceptual Art's radical interrogations.",
    connection: "Minimalism's austere objects seemed to leave nowhere to go. The answer was to eliminate the object entirely, replacing it with the idea of art. Conceptual Art emerged as artists argued that the idea itself was the work."
  },
  {
    name: "Conceptual Art",
    years: "c. 1965–1980",
    color: "#696969",
    overview: `Conceptual Art completed the dematerialization of the art object. If Minimalism reduced the object to essentials, Conceptual Art questioned whether an object was necessary at all.

The work of art, these artists proposed, was the idea—communicated through text, documentation, instruction, or any means. Physical realization was optional. Sol LeWitt's statement became foundational: "The idea becomes a machine that makes the art."`,
    principles: [
      "The idea is the work; execution is secondary",
      "Language as primary artistic medium",
      "Critique of art institutions and market",
      "Process and system over finished product",
      "Art as inquiry into art's nature"
    ],
    artists: [
      { name: "Sol LeWitt", contribution: "Wall drawings demonstrated that instructions could be the work" },
      { name: "Joseph Kosuth", contribution: "Investigated relationships between objects, language, and meaning" },
      { name: "Lawrence Weiner", contribution: "Stated that works need not be built; the statement was sufficient" }
    ],
    impact: "Conceptual Art's influence proved so pervasive its innovations became invisible. The contemporary expectation that artists should have ideas, that works require interpretation—all derive from Conceptual practice.",
    connection: "Conceptual Art's interrogation of boundaries opened multiple paths. Performance and video emerged from its dematerialization. Postmodernism would extend its skepticism about truth claims across all cultural production."
  },
  {
    name: "Postmodernism",
    years: "c. 1970–Present",
    color: "#9932CC",
    overview: `Postmodernism marked the end of faith in grand narratives—including artistic progress. Where modern movements claimed to advance toward truth, Postmodernism rejected the idea of such progress.

History was not advancement but a reservoir of materials to be recycled, quoted, and ironically juxtaposed. In architecture, it meant ornament against Modernist purity. In painting, the return of figuration and appropriation. Across all: rejection of originality, authenticity, and progress as guiding values.`,
    principles: [
      "Rejection of grand narratives and universal truth",
      "Appropriation, quotation, and pastiche",
      "Irony, skepticism, and deconstruction",
      "Collapse of high/low culture boundaries",
      "Recognition that meaning is constructed"
    ],
    artists: [
      { name: "Cindy Sherman", contribution: "Explored identity as performance and media construction" },
      { name: "Jean-Michel Basquiat", contribution: "Combined street art, text, and gesture critiquing race and art history" },
      { name: "Barbara Kruger", contribution: "Appropriated advertising's language to critique consumer capitalism" }
    ],
    impact: "Postmodernism's skepticism about originality fundamentally changed how art could function. If no image was truly original, then appropriation became legitimate. This opened territory that digital culture would colonize—the meme as endless recombination.",
    connection: "Postmodernism was less a bounded movement than a condition—assumptions that remain operative in contemporary practice. Its embrace of appropriation and collapse of cultural hierarchies find complete expression in internet culture."
  },
  {
    name: "Contemporary Art",
    years: "c. 1990–Present",
    color: "#2E8B57",
    overview: `Contemporary art resists definition because it encompasses everything made now. The term implies not a style but art of the present moment—made in conditions of unprecedented technological change, globalization, and collapse of consensus.

Contemporary practice includes painting, sculpture, video, performance, installation, digital, and biological media. No medium is privileged; no approach is excluded. What characterizes it is pluralism—the absence of dominant style, the global expansion beyond Western centers.`,
    principles: [
      "Radical pluralism—no dominant style",
      "Globalization beyond Western centers",
      "Blurring of boundaries with entertainment and activism",
      "Market and institutions as primary validators",
      "Technology as tool and subject"
    ],
    artists: [
      { name: "Ai Weiwei", contribution: "Work addresses human rights and political repression" },
      { name: "Kara Walker", contribution: "Silhouettes confront American racial violence" },
      { name: "Banksy", contribution: "Anonymous street artist critiquing consumerism and art market" }
    ],
    impact: "Contemporary art's impact is less stylistic innovation than institutional expansion. Art has become a global industry. The audience through museums and social media has grown exponentially.",
    connection: "Contemporary art's pluralism and openness create space for emerging practices that might have been excluded. The same conditions that allowed street art and digital art to enter galleries permit attention to visual forms circulating online."
  },
  {
    name: "Meme Art",
    years: "c. 2020–Present/Future",
    color: "#00FF00",
    overview: `Meme Art represents the translation of digital visual culture into permanent physical form. The movement recognizes that memes—images created and shared by billions daily—constitute the visual language of the 21st century.

They encode complex emotional, cultural, and social meaning in instantly transmissible formats. Artists working in this form select from the vast digital repository and render subjects in traditional media: bronze sculpture, oil on canvas. The logic is preservation.`,
    principles: [
      "Translation of digital vernacular into permanent physical media",
      "Recognition of memes as dominant 21st century visual language",
      "Physical scarcity as solution to digital abundance",
      "Cultural preservation through material transformation",
      "Traditional techniques serving contemporary content"
    ],
    artists: [
      { name: "Peyote", contribution: "Founding artist; master bronze sculptor whose 6-foot Pepe in Giacometti style exemplifies the form's ambition" }
    ],
    impact: "Meme Art's emergence follows patterns visible throughout art history. When cultural meaning reaches critical mass, artists emerge to give it permanent form. Cave painters documented their communities. Impressionists recorded modern leisure. Meme artists preserve the spirit of their time in materials that outlast the moment. The movement resolves digital art's tension between infinite reproducibility and the scarcity art markets require.",
    connection: "Meme Art extends Pop Art's legitimization of vernacular imagery, Appropriation art's embrace of existing images, Post-Internet art's engagement with digital culture, and contemporary pluralism's openness. It represents not rupture but culmination—the logical extension of art historical development into the visual culture that defines our age."
  }
];

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
  
  // Meme Art connections
  { from: "postInternet", to: "memeArt", type: "main" },
  { from: "popArt", to: "memeArt", type: "influence" },
  { from: "appropriation", to: "memeArt", type: "influence" },
  { from: "digitalArt", to: "memeArt", type: "branch" },
  { from: "metamodernism", to: "memeArt", type: "influence" },
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
  { start: 1950, end: 2150, label: "Meme Era", year: "2020-Future", color: "#00FF0020" },
];

function ArtGenreFlowDiagram() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [expandedMovement, setExpandedMovement] = useState(null);
  
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
    if (!selectedGenre) return false;
    return connections.some(
      c => (c.from === selectedGenre && c.to === genreKey) || 
           (c.to === selectedGenre && c.from === genreKey)
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
          cursor: pointer;
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
          The Evolution Of Art
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
          width="2150" 
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
              
              const isHighlighted = selectedGenre && 
                (conn.from === selectedGenre || conn.to === selectedGenre);
              
              return (
                <path
                  key={i}
                  d={path}
                  fill="none"
                  {...style}
                  opacity={selectedGenre ? (isHighlighted ? 1 : 0.15) : style.opacity}
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
            const isSelected = selectedGenre === key;
            const isRelated = isConnected(key);
            const dimmed = selectedGenre && !isSelected && !isRelated;
            
            return (
              <g
                key={key}
                className={`genre-node ${genre.main ? 'main-node' : ''}`}
                transform={`translate(${genre.x}, ${genre.y})`}
                onClick={() => setSelectedGenre(selectedGenre === key ? null : key)}
                opacity={dimmed ? 0.25 : 1}
                filter={isSelected ? 'brightness(1.3)' : undefined}
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
                />
                <text
                  x={genre.main ? 70 : 60}
                  y={genre.main ? 20 : 18}
                  textAnchor="middle"
                  fill="#fff"
                  fontSize={genre.main ? 12 : 10}
                  fontFamily="'Source Sans Pro', sans-serif"
                  fontWeight={genre.main ? 600 : 400}
                  pointerEvents="none"
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
                    pointerEvents="none"
                  />
                )}
              </g>
            );
          })}
        </svg>
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
      
      {/* Movement Encyclopedia - Accordion Section */}
      <div style={{
        marginTop: '80px',
        marginBottom: '60px',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: 700,
          color: '#f5f5f5',
          textAlign: 'center',
          marginBottom: '16px',
          letterSpacing: '2px',
          textShadow: '0 0 40px rgba(147, 112, 219, 0.5)'
        }}>
          Movement Encyclopedia
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#888',
          fontSize: '18px',
          marginBottom: '40px',
          fontFamily: "'Source Sans Pro', sans-serif"
        }}>
          Click each movement to explore its history, principles, artists, and impact
        </p>
        
        {movements.map((movement, index) => {
          const isExpanded = expandedMovement === movement.name;
          const isMemeArt = movement.name === "Meme Art";
          
          return (
            <div 
              key={movement.name}
              style={{
                marginBottom: '12px',
                border: isMemeArt ? `2px solid ${movement.color}` : '1px solid #4a4a6a',
                borderRadius: '8px',
                overflow: 'hidden',
                background: 'rgba(26, 26, 46, 0.6)',
                boxShadow: isMemeArt ? `0 0 20px ${movement.color}40` : '0 2px 8px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Accordion Header */}
              <div
                onClick={() => setExpandedMovement(isExpanded ? null : movement.name)}
                style={{
                  padding: isMemeArt ? '24px 32px' : '20px 28px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: isExpanded ? 'rgba(74, 74, 106, 0.3)' : 'transparent',
                  transition: 'background 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
                  <div 
                    style={{
                      width: isMemeArt ? '8px' : '6px',
                      height: isMemeArt ? '48px' : '40px',
                      background: movement.color,
                      borderRadius: '3px',
                      boxShadow: isMemeArt ? `0 0 12px ${movement.color}` : 'none'
                    }}
                  />
                  <div>
                    <h3 style={{
                      margin: 0,
                      color: movement.color,
                      fontSize: isMemeArt ? '32px' : '28px',
                      fontWeight: 600,
                      fontFamily: "'Playfair Display', Georgia, serif",
                      textShadow: isMemeArt ? `0 0 20px ${movement.color}60` : 'none'
                    }}>
                      {movement.name}
                    </h3>
                    <p style={{
                      margin: '4px 0 0',
                      color: '#aaa',
                      fontSize: '14px',
                      fontFamily: "'Source Sans Pro', sans-serif"
                    }}>
                      {movement.years}
                    </p>
                  </div>
                </div>
                
                {/* Chevron Icon */}
                <div style={{
                  fontSize: '24px',
                  color: '#888',
                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}>
                  ▼
                </div>
              </div>
              
              {/* Accordion Content */}
              <div style={{
                maxHeight: isExpanded ? '2000px' : '0',
                opacity: isExpanded ? 1 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.4s ease, opacity 0.3s ease'
              }}>
                <div style={{
                  padding: '0 32px 32px',
                  fontFamily: "'Source Sans Pro', sans-serif"
                }}>
                  {/* Overview */}
                  <div style={{ marginBottom: '28px' }}>
                    <h4 style={{
                      color: '#ccc',
                      fontSize: '18px',
                      fontWeight: 600,
                      marginBottom: '12px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}>
                      Overview
                    </h4>
                    {movement.overview.split('\n\n').map((paragraph, i) => (
                      <p key={i} style={{
                        color: '#f5f5f5',
                        fontSize: '16px',
                        lineHeight: '1.8',
                        marginBottom: '16px'
                      }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  {/* Core Principles */}
                  <div style={{ marginBottom: '28px' }}>
                    <h4 style={{
                      color: '#ccc',
                      fontSize: '18px',
                      fontWeight: 600,
                      marginBottom: '12px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}>
                      Core Principles
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {movement.principles.map((principle, i) => (
                        <li key={i} style={{
                          color: '#f5f5f5',
                          fontSize: '15px',
                          lineHeight: '1.6',
                          marginBottom: '10px',
                          paddingLeft: '24px',
                          position: 'relative'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            color: movement.color,
                            fontSize: '18px'
                          }}>•</span>
                          {principle}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Notable Artists */}
                  <div style={{ marginBottom: '28px' }}>
                    <h4 style={{
                      color: '#ccc',
                      fontSize: '18px',
                      fontWeight: 600,
                      marginBottom: '12px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}>
                      Notable Artists
                    </h4>
                    {movement.artists.map((artist, i) => (
                      <div key={i} style={{ marginBottom: '14px' }}>
                        <p style={{
                          color: movement.color,
                          fontSize: '16px',
                          fontWeight: 600,
                          margin: '0 0 4px 0'
                        }}>
                          {artist.name}
                        </p>
                        <p style={{
                          color: '#ddd',
                          fontSize: '15px',
                          lineHeight: '1.6',
                          margin: 0,
                          paddingLeft: '16px'
                        }}>
                          {artist.contribution}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Societal Impact */}
                  <div style={{ marginBottom: '28px' }}>
                    <h4 style={{
                      color: '#ccc',
                      fontSize: '18px',
                      fontWeight: 600,
                      marginBottom: '12px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}>
                      Societal Impact
                    </h4>
                    <p style={{
                      color: '#f5f5f5',
                      fontSize: '16px',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      {movement.impact}
                    </p>
                  </div>
                  
                  {/* Connection to Next Movement */}
                  <div>
                    <h4 style={{
                      color: '#ccc',
                      fontSize: '18px',
                      fontWeight: 600,
                      marginBottom: '12px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}>
                      Historical Connection
                    </h4>
                    <p style={{
                      color: '#f5f5f5',
                      fontSize: '16px',
                      lineHeight: '1.8',
                      margin: 0,
                      paddingLeft: '16px',
                      borderLeft: `3px solid ${movement.color}`,
                      fontStyle: 'italic'
                    }}>
                      {movement.connection}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: '30px',
        color: '#555',
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: '12px'
      }}>
        <p>Scroll horizontally to explore • Click genres to highlight connections and view details</p>
      </div>
    </div>
  );
}
// Art movement content - comprehensive entries for each major movement
const movements = [
  {
    name: "Romanticism",
    years: "c. 1780–1850",
    color: "#8B4513",
    overview: `Romanticism emerged as a direct rebellion against the rationalism of the Enlightenment and the rigid formality of Neoclassicism. Where the preceding era celebrated reason, order, and classical restraint, the Romantics championed emotion, imagination, and the untamed power of nature. This was not merely an aesthetic preference but a philosophical stance: the belief that truth resided not in empirical observation but in subjective experience, intuition, and the depths of human feeling.

The movement arose during a period of profound upheaval. The French Revolution had shattered assumptions about social order. The Industrial Revolution was transforming landscapes and uprooting traditional ways of life. In response, Romantic artists turned inward, seeking authenticity in individual emotion, and outward, toward the sublime terror and beauty of the natural world. Mountains, storms, ruins, and wilderness became subjects worthy of serious artistic attention for the first time.`,
    principles: [
      "Elevation of emotion and intuition over reason and logic",
      "Celebration of the sublime in nature—its power to inspire awe and terror",
      "Emphasis on individualism, genius, and the artist as visionary",
      "Interest in the exotic, medieval, and supernatural",
      "Nationalism and folk traditions as sources of authentic expression"
    ],
    artists: [
      { name: "Caspar David Friedrich", contribution: "Master of the sublime landscape; his solitary figures facing vast natural expanses became icons of Romantic introspection" },
      { name: "J.M.W. Turner", contribution: "Pushed landscape painting toward abstraction through his revolutionary treatment of light and atmosphere" },
      { name: "Eugène Delacroix", contribution: "Brought Romantic passion to history painting with dynamic compositions and expressive color" },
      { name: "Francisco Goya", contribution: "Bridged Romanticism and modern art through his unflinching depictions of human darkness and political violence" },
      { name: "John Constable", contribution: "Elevated the English countryside to serious artistic subject matter through careful observation of weather and light" }
    ],
    impact: `Romanticism fundamentally altered the purpose of art. No longer was the artist a skilled craftsman executing commissions within established conventions; the artist became a prophet, a genius whose personal vision demanded expression regardless of academic rules or popular taste. This elevation of individual expression over institutional standards would echo through every subsequent movement.

The Romantics also expanded what counted as worthy subject matter. Landscape, previously a minor genre, became a vehicle for profound philosophical and spiritual contemplation. The ordinary and local—folk tales, national histories, vernacular landscapes—gained legitimacy as artistic subjects. This democratization of content would continue to expand, eventually encompassing the commercial imagery of Pop Art and the vernacular digital culture of Meme Art.`,
    connection: "By the mid-nineteenth century, Romanticism's emotional intensity began to feel excessive to a new generation. The Industrial Revolution's rapid transformation of society demanded artistic engagement with contemporary reality rather than escape into nature or the past. Realism emerged as the necessary correction—artists who would look unflinchingly at the world as it actually was."
  },
  {
    name: "Realism",
    years: "c. 1840–1880",
    color: "#5D4E37",
    overview: `Realism represented a decisive turn toward the contemporary world. Where Romantics sought transcendence in nature and emotion, the Realists insisted on depicting life as it was actually lived—particularly the lives of ordinary people that academic art had ignored. This was a political as much as aesthetic choice. To paint peasants and laborers with the same seriousness previously reserved for gods and kings was a radical democratic statement.

The movement emerged in France during a period of revolutionary ferment. The 1848 uprisings across Europe had failed, but the questions they raised about social justice, labor, and political representation remained urgent. Gustave Courbet, the movement's central figure, declared that painting could only depict what the eye could see, rejecting the idealization and mythological subjects that dominated official art. His monumental canvases of stone breakers and provincial funerals scandalized the establishment precisely because they accorded dignity to subjects the art world considered beneath serious attention.`,
    principles: [
      "Depiction of contemporary life without idealization or sentimentality",
      "Focus on ordinary people, particularly the working class and rural poor",
      "Rejection of historical, mythological, and religious subjects",
      "Scientific observation and attention to accurate detail",
      "Art as social commentary and democratic expression"
    ],
    artists: [
      { name: "Gustave Courbet", contribution: "Founding figure who scandalized Paris with unflinching depictions of provincial life and working-class subjects" },
      { name: "Jean-François Millet", contribution: "Immortalized the dignity of peasant labor in paintings that influenced both social reform and subsequent generations of artists" },
      { name: "Honoré Daumier", contribution: "Combined Realist observation with biting political satire in lithographs and paintings" },
      { name: "Édouard Manet", contribution: "Bridged Realism and Impressionism; his modern subjects and flat paint handling scandalized and transformed Parisian art" },
      { name: "Winslow Homer", contribution: "Brought Realist principles to American subjects, particularly the sea and rural New England life" }
    ],
    impact: `Realism shattered the hierarchy of subjects that had governed Western art since the Renaissance. History painting—the depiction of noble actions from history, mythology, or scripture—had stood at the apex of academic values. By insisting that a stone breaker deserved the same scale and attention as a Roman emperor, Courbet and his followers democratized art's content in ways that continue to resonate.

The movement also established that art should engage with its own historical moment. The academy looked backward; Realism demanded that artists look around. This temporal orientation—the insistence that contemporary life provides sufficient material for serious art—would become a defining feature of modern and contemporary practice, ultimately finding its most radical expression in art forms that engage with culture in real-time.`,
    connection: "Realism's commitment to observation opened a door that its practitioners did not fully walk through. If the goal was to capture contemporary reality, then the studio—with its controlled lighting and posed models—was an inadequate tool. The next generation would take their canvases outdoors, attempting to capture the fleeting effects of actual light and atmosphere. Impressionism was born from Realism's premises, pushed to their logical conclusion."
  },
  {
    name: "Impressionism",
    years: "c. 1860–1886",
    color: "#6B98C4",
    overview: `Impressionism marked the decisive break with academic tradition that launched modern art. The movement took its name from a critic's dismissive description of Claude Monet's "Impression, Sunrise"—a term intended as insult that the artists adopted with defiant pride. What the critics saw as unfinished, the Impressionists understood as essential: the visible brushstroke, the capture of momentary perception, the rendering of light itself rather than the objects it illuminated.

The Impressionists worked en plein air, painting outdoors to capture the actual effects of natural light at specific moments. This was made possible by new technologies—portable paint tubes, collapsible easels—but driven by a philosophical commitment to direct observation over studio convention. They painted the modern city: boulevards, cafés, railway stations, leisure activities of the new middle class. Their loose brushwork and bright palettes initially scandalized audiences accustomed to the smooth surfaces and dark tones of academic painting.`,
    principles: [
      "Capture of fleeting moments and the transient effects of light",
      "Visible brushstrokes and rejection of smooth academic finish",
      "Painting en plein air (outdoors) from direct observation",
      "Bright, pure colors applied in broken strokes that mix optically",
      "Modern urban and suburban life as primary subject matter"
    ],
    artists: [
      { name: "Claude Monet", contribution: "The movement's most dedicated practitioner; his serial paintings of haystacks, cathedrals, and water lilies pushed Impressionist principles toward abstraction" },
      { name: "Pierre-Auguste Renoir", contribution: "Brought Impressionist light and color to joyful depictions of Parisian social life and the human figure" },
      { name: "Edgar Degas", contribution: "Combined Impressionist observation with classical draftsmanship in studies of ballet, racing, and modern urban entertainment" },
      { name: "Camille Pissarro", contribution: "The movement's teacher and connector; his landscapes influenced both his contemporaries and the next generation" },
      { name: "Berthe Morisot", contribution: "Pioneering female Impressionist whose intimate domestic scenes expanded the movement's range of subjects" }
    ],
    impact: `Impressionism's impact extended far beyond its technical innovations. By organizing their own exhibitions outside the official Salon system, the Impressionists established the model for avant-garde practice: artists defining their own terms of success rather than seeking institutional approval. This organizational innovation proved as influential as their aesthetic one.

The movement also completed the democratization of subject matter that Realism had begun. Where Realists elevated the working class, Impressionists painted the leisure of the emerging middle class—the cafés, parks, and pleasure gardens of modern urban life. Art became a record of how people actually spent their time, a practice that would eventually expand to encompass the digital environments where contemporary culture unfolds.`,
    connection: "By the mid-1880s, the Impressionist moment had passed. Its very success had revealed its limitations: the commitment to surface appearance, to the momentary impression, left little room for the symbolic, the structural, or the deeply personal. The artists who followed—many of them trained as Impressionists—would each push beyond these boundaries in different directions, collectively creating Post-Impressionism."
  },
  {
    name: "Post-Impressionism",
    years: "c. 1886–1910",
    color: "#FF6B35",
    overview: `Post-Impressionism is less a unified movement than a constellation of individual responses to Impressionism's limitations. The term itself was coined retrospectively by the critic Roger Fry to describe artists who accepted Impressionism's liberation from academic convention but rejected its exclusive focus on surface appearance. Where the Impressionists dissolved form in light, the Post-Impressionists sought to recover structure, meaning, and emotional depth.

The key figures—Cézanne, Van Gogh, Gauguin, Seurat—shared little beyond their emergence from Impressionism and their dissatisfaction with it. Cézanne sought to "make of Impressionism something solid, like the art of the museums," restructuring nature into geometric forms. Van Gogh charged color and brushwork with emotional intensity. Gauguin pursued symbolic and spiritual meaning in deliberately non-naturalistic color. Seurat systematized Impressionist color theory into the precise dots of Pointillism. Together, they opened every path that twentieth-century art would explore.`,
    principles: [
      "Rejection of Impressionism's exclusive focus on visual appearance",
      "Emphasis on underlying structure, symbolic meaning, or emotional expression",
      "Bold, non-naturalistic use of color for expressive rather than descriptive purposes",
      "Geometric simplification of natural forms",
      "Individual vision prioritized over collective movement style"
    ],
    artists: [
      { name: "Paul Cézanne", contribution: "Father of modern art; his geometric restructuring of nature laid the groundwork for Cubism and abstraction" },
      { name: "Vincent van Gogh", contribution: "Transformed color and brushwork into vehicles of raw emotional expression, presaging Expressionism" },
      { name: "Paul Gauguin", contribution: "Pursued symbolic meaning through flat, non-naturalistic color; his primitivism influenced Fauvism and beyond" },
      { name: "Georges Seurat", contribution: "Systematized Impressionist color theory into the scientific precision of Pointillism" },
      { name: "Henri de Toulouse-Lautrec", contribution: "Bridged fine art and commercial design; his posters anticipated Pop Art's engagement with popular culture" }
    ],
    impact: `Post-Impressionism's fragmented nature was precisely its significance. By demonstrating that multiple valid responses to the same artistic problem could coexist, these artists established the pluralism that would define modern art. There was no longer one correct direction; instead, individual artists could pursue radically different paths, each legitimate on its own terms.

The movement also established the modern artist as a figure of almost religious seriousness. Van Gogh's tortured genius, Gauguin's flight to Tahiti, Cézanne's decades of solitary labor—these biographies became templates for understanding artistic identity. The artist was no longer a craftsman or entertainer but a seeker of truth, willing to sacrifice comfort and convention for vision.`,
    connection: "The paths opened by Post-Impressionism led in multiple directions simultaneously. Cézanne's geometric analysis of form pointed toward Cubism. Van Gogh's emotional intensity presaged Expressionism. Gauguin's non-naturalistic color and primitivism influenced the Fauves. The early twentieth century would see these possibilities explode into a bewildering variety of movements, as artists pushed each Post-Impressionist innovation to its logical extreme."
  },
  {
    name: "Fauvism",
    years: "c. 1904–1908",
    color: "#FF4500",
    overview: `Fauvism announced itself with explosive color. At the 1905 Salon d'Automne in Paris, a group of young painters exhibited works of such chromatic intensity that critic Louis Vauxcelles called them "les fauves"—the wild beasts. The name stuck. Henri Matisse, André Derain, and their associates had pushed Gauguin's non-naturalistic color and Van Gogh's expressive brushwork to unprecedented extremes, creating paintings where color operated entirely independent of natural appearance.

The movement was brief but transformative. For perhaps three years, the Fauves worked with shared intensity before their paths diverged. Yet in that short span, they demonstrated conclusively that color need not describe; it could simply be—autonomous, expressive, freed from any obligation to record what the eye sees. This liberation would prove foundational for all subsequent abstract and expressionist practice.`,
    principles: [
      "Pure, intense color applied without reference to natural appearance",
      "Spontaneous, energetic brushwork emphasizing the act of painting",
      "Simplified forms and flattened pictorial space",
      "Emotional expression through color rather than subject matter",
      "Rejection of academic technique and finish"
    ],
    artists: [
      { name: "Henri Matisse", contribution: "The movement's leader whose subsequent career explored color's decorative and expressive possibilities across seven decades" },
      { name: "André Derain", contribution: "Created some of Fauvism's most radical works in landscapes that replaced natural color with pure chromatic intensity" },
      { name: "Maurice de Vlaminck", contribution: "The most spontaneous Fauve; his landscapes approached color with visceral, almost violent energy" },
      { name: "Raoul Dufy", contribution: "Extended Fauve principles into decorative art and design with characteristic lightness and joy" },
      { name: "Georges Braque", contribution: "Briefly a Fauve before his encounter with Cézanne and Picasso led him toward Cubism" }
    ],
    impact: `Fauvism's brevity belies its significance. By demonstrating that color could operate autonomously—that a tree need not be green, a face need not be flesh-toned—the Fauves completed the liberation from naturalism that Post-Impressionism had begun. This freedom would prove essential for everything from Expressionism's emotional intensity to the arbitrary color of digital imagery.

The movement also modeled a pattern that would repeat throughout the twentieth century: a small group of artists, working intensively for a few years, could fundamentally alter the possibilities of their medium. The avant-garde became defined by these concentrated moments of innovation, each one opening territories that subsequent artists would explore and develop.`,
    connection: "Even as Fauvism reached its peak, the seeds of its successor were germinating. Georges Braque, a committed Fauve, encountered the work of Cézanne at a memorial exhibition in 1907 and began restructuring his paintings along geometric lines. That same year, Pablo Picasso completed Les Demoiselles d'Avignon. Within months, the two artists were collaborating on what would become Cubism, and Fauvism's moment had passed."
  },
  {
    name: "Expressionism",
    years: "c. 1905–1925",
    color: "#8B0000",
    overview: `Expressionism emerged simultaneously with Fauvism but from different soil and with different purposes. Where the French Fauves celebrated color for its own sake, the German Expressionists deployed distortion and intensity in service of psychological and social truth. The movement arose in a culture wrestling with rapid industrialization, urban alienation, and the approaching catastrophe of World War I. Its characteristic distortions—angular figures, jarring colors, claustrophobic spaces—externalized internal states of anxiety, isolation, and spiritual crisis.

Two groups defined German Expressionism: Die Brücke (The Bridge), founded in Dresden in 1905, and Der Blaue Reiter (The Blue Rider), formed in Munich in 1911. Die Brücke sought raw, primal expression through deliberately crude technique. Der Blaue Reiter pursued spiritual transcendence through color and increasingly abstract form. Together, they established Expressionism as art's engagement with the full range of human emotional experience, including its darkest registers.`,
    principles: [
      "Distortion of form to express emotional and psychological states",
      "Intense, often jarring color used for emotional rather than descriptive effect",
      "Rejection of academic technique in favor of raw, sometimes crude execution",
      "Focus on alienation, anxiety, sexuality, and spiritual crisis",
      "Art as direct expression of the artist's inner experience"
    ],
    artists: [
      { name: "Ernst Ludwig Kirchner", contribution: "Die Brücke's leader whose angular urban scenes captured modern alienation with nervous intensity" },
      { name: "Edvard Munch", contribution: "Norwegian precursor whose 'The Scream' became the iconic image of modern anxiety" },
      { name: "Wassily Kandinsky", contribution: "Der Blaue Reiter founder who pushed Expressionism toward pure abstraction in pursuit of spiritual expression" },
      { name: "Franz Marc", contribution: "Sought spiritual truth through animal subjects rendered in symbolic color before his death in World War I" },
      { name: "Egon Schiele", contribution: "Austrian Expressionist whose raw, confrontational self-portraits and nudes explored sexuality and mortality" }
    ],
    impact: `Expressionism established that art's purpose could be the externalization of internal experience—that subjective psychological truth was as valid a subject as external visual reality. This principle would prove foundational for Abstract Expressionism, Neo-Expressionism, and every subsequent movement that privileges emotional authenticity over technical skill or conceptual rigor.

The movement also demonstrated art's capacity to engage with social crisis. Expressionist works captured the psychological damage of modern life: urban alienation, sexual anxiety, the spiritual void left by secularization. When World War I validated their darkest visions, Expressionist techniques became the visual language for processing collective trauma—a function art would continue to serve through every subsequent catastrophe.`,
    connection: "Expressionism's emphasis on subjective experience and emotional truth pointed in two directions. One led toward increasing abstraction, as Kandinsky and others pursued pure expression freed from all representational content. The other led toward Dada and Surrealism, movements that would explore different territories of irrational and unconscious experience. Meanwhile, Cubism was pursuing an entirely different response to the crisis of representation."
  },
  {
    name: "Cubism",
    years: "c. 1907–1925",
    color: "#2F4F4F",
    overview: `Cubism shattered the single viewpoint that had governed Western painting since the Renaissance. Pablo Picasso and Georges Braque, working in such close collaboration that they sometimes couldn't distinguish their canvases, developed a revolutionary approach that depicted objects from multiple angles simultaneously. A guitar or a human face could be seen from the front, side, and above in the same image, fragmented and reassembled into geometric planes.

The movement evolved through distinct phases. Analytic Cubism (roughly 1908–1912) pushed fragmentation toward near-abstraction, dissolving objects into overlapping planes of muted browns and grays. Synthetic Cubism (after 1912) reversed direction, building images up from flat, colored shapes and introducing collage—actual newspaper, wallpaper, and other materials pasted onto the canvas. Both phases challenged fundamental assumptions about pictorial representation that had seemed natural and inevitable.`,
    principles: [
      "Simultaneous representation of multiple viewpoints in a single image",
      "Fragmentation of forms into geometric planes and facets",
      "Rejection of single-point perspective and illusionistic depth",
      "Collage and mixed media as legitimate artistic techniques",
      "Conceptual understanding of objects rather than their visual appearance"
    ],
    artists: [
      { name: "Pablo Picasso", contribution: "Co-founder whose restless innovation continually pushed Cubism in new directions; 'Les Demoiselles d'Avignon' launched the revolution" },
      { name: "Georges Braque", contribution: "Co-founder whose methodical experimentation developed Cubism's technical vocabulary alongside Picasso" },
      { name: "Juan Gris", contribution: "Brought systematic clarity to Synthetic Cubism with precisely organized compositions of brilliant color" },
      { name: "Fernand Léger", contribution: "Extended Cubism toward machine aesthetics and popular culture, anticipating Pop Art" },
      { name: "Robert Delaunay", contribution: "Pushed Cubism toward pure color abstraction in the movement called Orphism" }
    ],
    impact: `Cubism's impact on visual culture extended far beyond painting. Its fragmented geometries influenced architecture, design, typography, and fashion. More fundamentally, it demonstrated that representation could be conceptual rather than perceptual—that art could show what we know rather than what we see. This shift from eye to mind would prove essential for Conceptual Art and every subsequent movement that prioritizes idea over appearance.

The introduction of collage was equally revolutionary. By incorporating "real" materials—newspaper, oilcloth, wallpaper—into paintings, Cubism collapsed the boundary between art and everyday life. This incorporation of vernacular materials anticipated Pop Art's embrace of commercial imagery and ultimately the digital appropriation and remixing that defines internet culture.`,
    connection: "Cubism's innovations spread rapidly across Europe, spawning variants like Futurism in Italy, Constructivism in Russia, and De Stijl in the Netherlands. Each pushed different aspects of the Cubist revolution in new directions. Meanwhile, the movement's conceptual turn—the prioritization of idea over appearance—would reach its logical conclusion in Dada's anti-art provocations and Duchamp's readymades."
  },
  {
    name: "Abstract Art",
    years: "c. 1910–Present",
    color: "#4B0082",
    overview: `Abstraction—the creation of images without reference to the visible world—represents the most radical departure in the history of Western art. For millennia, art had been defined by its capacity to represent: people, places, stories, ideas. The abstract pioneers abandoned representation entirely, creating works of pure color, form, and line that referred to nothing outside themselves.

Several artists arrived at abstraction independently around 1910–1912: Kandinsky in Munich, Malevich in Moscow, Mondrian in Paris. Each followed a different path—spiritual, geometric, philosophical—but all concluded that representation was unnecessary, even obstructive. Art could address the viewer directly through visual relationships alone, without the mediation of recognizable content. This liberation proved so fundamental that abstraction remains a living practice, continually renewed and reinvented across more than a century.`,
    principles: [
      "Complete abandonment of representation and recognizable subject matter",
      "Pure visual relationships—color, line, shape, texture—as the content of art",
      "Direct emotional or spiritual address without narrative mediation",
      "Emphasis on the formal properties of the medium itself",
      "Art as autonomous object rather than window onto the world"
    ],
    artists: [
      { name: "Wassily Kandinsky", contribution: "Theorist and practitioner who justified abstraction through spiritual philosophy; his paintings sought to create visual music" },
      { name: "Piet Mondrian", contribution: "Reduced painting to primary colors and straight lines in pursuit of universal harmony and spiritual balance" },
      { name: "Kazimir Malevich", contribution: "Russian Suprematist whose 'Black Square' represented the zero point of painting, pure artistic feeling without content" },
      { name: "Hilma af Klint", contribution: "Swedish mystic whose abstract paintings predated Kandinsky, recently recognized as a pioneering figure" },
      { name: "František Kupka", contribution: "Czech painter who arrived at abstraction through musical analogies and color theory" }
    ],
    impact: `Abstraction changed not just what art could look like but what art could be. By demonstrating that visual experience could be meaningful without representation, the abstract pioneers expanded art's territory infinitely. Any combination of colors, shapes, and marks could potentially constitute art—a freedom that would prove both liberating and problematic for everything that followed.

The movement also established formal analysis as a primary mode of art criticism. If abstraction succeeded through pure visual relationships, then understanding those relationships required attention to how works were constructed rather than what they depicted. This focus on formal properties—balance, rhythm, tension, harmony—would dominate art discourse for decades and remains influential today.`,
    connection: "Abstraction's triumph was also its limitation. By the 1950s, the most advanced abstract painting had become so refined, so focused on purely optical effects, that it seemed to leave nowhere further to go. One response was Abstract Expressionism's injection of personal drama and psychological depth into abstract form. Another was Dada's and Surrealism's exploration of content that formal abstraction had deliberately excluded."
  },
  {
    name: "Dadaism",
    years: "c. 1916–1924",
    color: "#8B4513",
    overview: `Dada was born in Zurich in 1916, in the Cabaret Voltaire, as Europe consumed itself in the unprecedented slaughter of World War I. The movement was less an artistic style than a stance of total revolt against the civilization that had produced the war. If rational European culture led to mechanized mass death, the Dadaists would embrace irrationality, chance, and nonsense as protests against a world gone mad.

The movement spread rapidly to Berlin, Paris, New York, and beyond, adapting to local conditions while maintaining its core commitment to provocation and anti-art. Marcel Duchamp submitted a urinal to an art exhibition. Kurt Schwitters made collages from garbage. Hugo Ball recited nonsense poetry in a cardboard costume. Hans Arp created works by dropping torn paper and gluing it where it fell. Every gesture attacked the assumptions of what art was, what it was for, and who had authority to define it.`,
    principles: [
      "Anti-art stance rejecting all established aesthetic values and institutions",
      "Embrace of chance, irrationality, and nonsense as creative methods",
      "Use of readymades—ordinary objects designated as art by artist's choice",
      "Provocation and scandal as artistic strategies",
      "Collective, collaborative, and performative approaches to creation"
    ],
    artists: [
      { name: "Marcel Duchamp", contribution: "Most influential Dadaist whose readymades—the urinal, the bottle rack—forever changed what could count as art" },
      { name: "Hugo Ball", contribution: "Founder of Cabaret Voltaire whose sound poetry and absurdist performances launched the movement" },
      { name: "Hannah Höch", contribution: "Pioneer of photomontage whose cut-and-paste compositions critiqued gender and politics in Weimar Germany" },
      { name: "Kurt Schwitters", contribution: "Created 'Merz' collages from urban detritus, transforming garbage into lyrical compositions" },
      { name: "Man Ray", contribution: "American Dadaist whose photographs, rayographs, and objects bridged Dada and Surrealism" }
    ],
    impact: `Dada's legacy is conceptual rather than formal. By questioning the very definition of art, the Dadaists opened territories that artists continue to explore. The readymade—an ordinary object declared art by artistic decision—established that art could be primarily about ideas rather than skill, materials, or appearance. This insight would prove foundational for Conceptual Art, performance, installation, and every subsequent practice that prioritizes concept over craft.

The movement also pioneered the tactics of cultural disruption that remain vital today. Dada's provocations, pranks, and scandals established that challenging audiences and institutions could itself be an artistic practice. This adversarial relationship between avant-garde art and mainstream culture would define artistic practice throughout the twentieth century, ultimately finding new expression in the transgressive humor and institutional critique embedded in internet meme culture.`,
    connection: "Dada burned bright and brief, dissolving by the mid-1920s as its participants scattered or evolved. Many moved directly into Surrealism, which shared Dada's interest in the irrational but channeled it toward systematic exploration of the unconscious rather than anarchic negation. Others, like Duchamp, largely withdrew from art production, their work done."
  },
  {
    name: "Surrealism",
    years: "c. 1924–1966",
    color: "#800080",
    overview: `Surrealism emerged from Dada's ashes, transforming its predecessor's anarchic negation into a sustained program for exploring the unconscious mind. Founded by the poet André Breton in Paris in 1924, the movement drew on Freudian psychoanalysis to access the repressed contents of the psyche. Where Dada sought destruction, Surrealism sought revelation—the marvelous truths hidden beneath the surface of rational consciousness.

The Surrealists developed various techniques to bypass the censorship of the conscious mind: automatic writing, dream recording, collaborative games, and the cultivation of chance encounters. Their images combined familiar elements in impossible configurations—melting watches, burning giraffes, locomotive emerging from fireplace—creating what Breton called "the marvelous" from the collision of distant realities. The movement attracted major talents across multiple media and remained a vital force for four decades.`,
    principles: [
      "Exploration of the unconscious mind and dream imagery",
      "Automatism and chance as methods to access deeper truths",
      "Juxtaposition of unrelated objects to create uncanny or marvelous effects",
      "Rejection of rationalism and conventional logic",
      "Art as a tool for psychological liberation and social revolution"
    ],
    artists: [
      { name: "Salvador Dalí", contribution: "The movement's most famous figure whose 'paranoiac-critical method' produced iconic images like 'The Persistence of Memory'" },
      { name: "René Magritte", contribution: "Belgian painter whose precisely rendered impossibilities questioned the relationship between images, words, and reality" },
      { name: "Max Ernst", contribution: "Technical innovator who developed frottage and grattage; his collage novels remain landmarks of Surrealist narrative" },
      { name: "Joan Miró", contribution: "Developed a personal vocabulary of biomorphic forms that bridged Surrealism and abstraction" },
      { name: "Frida Kahlo", contribution: "Mexican painter whose unflinching self-portraits explored identity, pain, and the body with Surrealist intensity" }
    ],
    impact: `Surrealism transformed visual culture far beyond fine art. Its techniques of unexpected juxtaposition, dream logic, and psychological provocation were adopted by advertising, film, fashion, and design throughout the twentieth century. The strange has become familiar; Surrealist imagery permeates commercial culture from perfume ads to music videos to memes.

The movement's exploration of the irrational and unconscious also legitimized entire territories of human experience as artistic subject matter. Desire, anxiety, memory, dream—the internal landscape of the psyche became as valid a subject as external reality. This expansion of content would ultimately extend to the full range of emotional expression that memes capture and transmit.`,
    connection: "Surrealism remained vital into the 1960s, but its center of gravity had shifted. New York, not Paris, had become the capital of the avant-garde. The Surrealists who fled Nazi Europe influenced a new generation of American painters who would transform Surrealist automatism into the basis for Abstract Expressionism—retaining the commitment to unconscious expression while abandoning representational content."
  },
  {
    name: "Abstract Expressionism",
    years: "c. 1943–1965",
    color: "#191970",
    overview: `Abstract Expressionism was the first major art movement to emerge from the United States, and it announced American dominance of the postwar art world with unmistakable force. The movement combined the scale and ambition of traditional history painting with the spontaneity of Surrealist automatism and the formal innovations of European abstraction. Its massive canvases—many larger than any easel painting in history—demanded physical encounter, surrounding viewers in fields of color and gestural energy.

The movement encompassed distinct approaches. The "action painters"—Pollock, de Kooning—emphasized the physical act of painting, dripping, pouring, or attacking the canvas with visible energy. The "color field" painters—Rothko, Newman, Still—created vast expanses of color intended to produce contemplative or sublime experience. Both groups shared a commitment to large scale, abstract imagery, and direct emotional expression, and both understood painting as an existential act of self-revelation.`,
    principles: [
      "Monumental scale demanding physical encounter and environmental immersion",
      "Spontaneous, gestural painting emphasizing the act of creation",
      "Direct expression of the artist's psyche without representational mediation",
      "Rejection of traditional composition in favor of all-over or color field approaches",
      "Art as existential act and record of the artist's authentic being"
    ],
    artists: [
      { name: "Jackson Pollock", contribution: "Revolutionary 'drip' technique made the act of painting visible; his all-over compositions eliminated traditional hierarchy" },
      { name: "Willem de Kooning", contribution: "Maintained connection to the figure while achieving Abstract Expressionist intensity; his 'Woman' series remains controversial and influential" },
      { name: "Mark Rothko", contribution: "Created luminous color field paintings intended to produce profound emotional and spiritual response" },
      { name: "Franz Kline", contribution: "Monumental black-and-white paintings that captured gestural energy with architectural force" },
      { name: "Helen Frankenthaler", contribution: "Developed 'soak-stain' technique that influenced Color Field painting and pointed toward Minimalism" }
    ],
    impact: `Abstract Expressionism established New York as the center of the art world, a position it would maintain for decades. More fundamentally, the movement demonstrated that American culture could produce art of the highest ambition and seriousness—a claim that had seemed dubious before the war. This cultural confidence would enable subsequent American movements from Pop Art to contemporary practice.

The emphasis on authentic self-expression also proved influential beyond painting. The Abstract Expressionist artist—tortured, alcoholic, devoted entirely to creative vision—became a cultural archetype that shaped understanding of creativity itself. This model of the artist as authentic self-expresser would be both extended and critiqued by subsequent movements.`,
    connection: "Abstract Expressionism's heroic self-seriousness invited reaction. By the late 1950s, younger artists found its existential drama exhausting and its claims to authentic expression dubious. Pop Art would puncture Abstract Expressionist pretension with imagery from advertising and mass media. Minimalism would strip away all traces of personal expression. Both movements defined themselves against the Abstract Expressionist model."
  },
  {
    name: "Pop Art",
    years: "c. 1955–1970",
    color: "#FF0000",
    overview: `Pop Art collapsed the boundary between high art and mass culture that modernism had maintained. Where Abstract Expressionists positioned themselves against commercial society, Pop artists embraced it—reproducing advertisements, comic strips, product packaging, and celebrity images with techniques borrowed from commercial design. The soup can, the comic panel, the movie star's face: these became legitimate artistic subjects, rendered with the same care that Renaissance painters lavished on madonnas.

The movement emerged simultaneously in Britain and America but took different forms. British Pop (Richard Hamilton, Eduardo Paolozzi) was more analytical, treating mass media imagery as anthropological evidence of consumer society. American Pop (Warhol, Lichtenstein, Rosenquist) was more celebratory or at least more ambiguous, reproducing commercial imagery at monumental scale with emotional detachment that could read as critique, celebration, or both.`,
    principles: [
      "Elevation of commercial and popular imagery to fine art status",
      "Techniques borrowed from advertising and mechanical reproduction",
      "Flat, bold colors and hard edges derived from commercial design",
      "Ironic or ambiguous stance toward consumer culture",
      "Rejection of Abstract Expressionist subjectivity and gesture"
    ],
    artists: [
      { name: "Andy Warhol", contribution: "The movement's central figure whose silkscreens of soup cans, celebrities, and disasters defined Pop's ambiguous relationship to mass culture" },
      { name: "Roy Lichtenstein", contribution: "Transformed comic strip panels into monumental paintings with Ben-Day dots, questioning the boundary between high and low culture" },
      { name: "Jasper Johns", contribution: "Predecessor whose paintings of flags and targets established everyday objects as legitimate subjects" },
      { name: "James Rosenquist", contribution: "Former billboard painter whose fragmented commercial imagery achieved mural scale" },
      { name: "Claes Oldenburg", contribution: "Sculptor who monumentalized ordinary objects—hamburgers, clothespins, typewriters—in soft or gigantic form" }
    ],
    impact: `Pop Art's impact on visual culture is almost impossible to overstate. By legitimizing commercial imagery as artistic subject matter, the movement dissolved boundaries that had seemed essential to art's identity. The distinction between advertising and art, between mass culture and high culture, between reproduction and original—all became negotiable rather than absolute.

Warhol's Factory model—collaborative, celebrity-adjacent, comfortable with commerce—offered an alternative to the isolated genius of Abstract Expressionism. Art could be produced like consumer goods; artists could be celebrities; commercial success need not compromise artistic integrity. This model anticipated the artist's contemporary role as brand, content creator, and cultural entrepreneur.

The movement's engagement with vernacular visual culture established a precedent that Meme Art extends to its logical conclusion. If Warhol could paint soup cans and Brillo boxes, if Lichtenstein could enlarge comic panels, then the visual language of internet culture—the meme—represents the contemporary vernacular that demands artistic attention.`,
    connection: "Pop Art's irony and cool surfaces offered one response to Abstract Expressionist excess. Minimalism offered another: the elimination of all imagery, all expression, all content beyond the physical facts of the object itself. Both movements rejected the previous generation's heroic subjectivity, but where Pop embraced commercial culture, Minimalism pursued its negation."
  },
  {
    name: "Minimalism",
    years: "c. 1960–1975",
    color: "#2F4F4F",
    overview: `Minimalism pursued reduction to absolute essentials. The movement's practitioners—primarily sculptors working in New York in the 1960s—stripped art of everything except its fundamental properties: shape, scale, material, space. No metaphor, no symbol, no expression, no reference to anything beyond the object itself. A steel cube was simply a steel cube, nothing more—though that "nothing more" proved philosophically rich.

The Minimalists rejected the entire tradition of art as representation or expression. Donald Judd called his works "specific objects," insisting they represented nothing and expressed nothing beyond their own physical presence. Carl Andre laid bricks on the floor. Dan Flavin installed fluorescent lights. Robert Morris made plain gray boxes. Each work demanded encounter on its own terms, as an object in space rather than a window onto meaning elsewhere.`,
    principles: [
      "Reduction to fundamental geometric forms and industrial materials",
      "Rejection of metaphor, symbolism, and representation",
      "Emphasis on literal physical properties: shape, surface, scale, material",
      "Industrial fabrication replacing the artist's hand",
      "Viewer's physical experience in space as the work's content"
    ],
    artists: [
      { name: "Donald Judd", contribution: "Theorist and practitioner whose wall-mounted boxes and stacks defined Minimalist aesthetics and philosophy" },
      { name: "Carl Andre", contribution: "Sculptor who laid materials—bricks, metal plates—directly on the floor, eliminating the pedestal and base" },
      { name: "Dan Flavin", contribution: "Transformed ordinary fluorescent fixtures into luminous spatial experiences" },
      { name: "Robert Morris", contribution: "Made plain geometric forms and theorized Minimalism's phenomenological implications" },
      { name: "Sol LeWitt", contribution: "Bridged Minimalism and Conceptual Art with wall drawings and modular structures" }
    ],
    impact: `Minimalism's impact extended beyond its own historical moment. By stripping art to its essential properties, the movement clarified questions about what art was and how it functioned. The debate it provoked—could a stack of bricks really be art?—forced examination of assumptions that had operated implicitly. This self-reflexive questioning would accelerate into Conceptual Art's even more radical interrogations.

The movement also demonstrated that reduction could produce intensity rather than impoverishment. A viewer encountering a Judd stack or a Flavin installation has an experience—of color, light, proportion, material presence—that representation might dilute. This faith in direct perceptual experience influenced installation art, Light and Space movement, and contemporary practices that prioritize immersive encounter.`,
    connection: "Minimalism's austere objects seemed to leave nowhere further to go. How could art be reduced beyond plain geometric forms? The answer was to eliminate the object entirely, replacing it with the idea of art. Conceptual Art emerged directly from Minimalist practice, as artists like Sol LeWitt began arguing that the idea itself was the work, and any physical manifestation was secondary."
  },
  {
    name: "Conceptual Art",
    years: "c. 1965–1980",
    color: "#696969",
    overview: `Conceptual Art completed the dematerialization of the art object that modernism had been pursuing for decades. If Minimalism reduced the object to its essential properties, Conceptual Art questioned whether an object was necessary at all. The work of art, these artists proposed, was the idea—and the idea could be communicated through text, documentation, instruction, or any other means. Physical realization was optional, even distracting.

Sol LeWitt's 1967 statement became foundational: "The idea becomes a machine that makes the art." A wall drawing could be executed by assistants following instructions; the work was the concept, not any particular execution. Joseph Kosuth displayed a folding chair, a photograph of the chair, and a dictionary definition of "chair," asking which was the "real" artwork. Lawrence Weiner wrote instructions for sculptures that need never be built. The dematerialization was complete.`,
    principles: [
      "The idea is the work; physical execution is secondary or optional",
      "Language as primary artistic medium—text, instruction, documentation",
      "Critique of art institutions, market, and the object's commodity status",
      "Process and system emphasized over finished product",
      "Art as inquiry into the nature and boundaries of art itself"
    ],
    artists: [
      { name: "Sol LeWitt", contribution: "Theorist of Conceptual Art whose wall drawings demonstrated that instructions could be the work" },
      { name: "Joseph Kosuth", contribution: "Investigated the relationship between objects, language, and meaning in works like 'One and Three Chairs'" },
      { name: "Lawrence Weiner", contribution: "Stated that works need not be built; the statement itself was sufficient" },
      { name: "On Kawara", contribution: "Created rigorous systems of date paintings, postcards, and telegrams documenting existence over time" },
      { name: "Yoko Ono", contribution: "Published instruction pieces that invited viewers to complete the work through imagination or action" }
    ],
    impact: `Conceptual Art's influence proved so pervasive that its innovations became invisible. The contemporary expectation that artists should have ideas, that works require interpretation, that documentation is legitimate exhibition material—all derive from Conceptual practice. The MFA-as-standard-credential and the artist's statement as required document both reflect Conceptual assumptions about art as intellectual enterprise.

The movement also modeled institutional critique that remains vital. By investigating how galleries, museums, and markets construct art's meaning, Conceptual artists opened territory that subsequent generations continue to explore. This critical self-consciousness about art's institutional context would prove essential for understanding how cultural value is created—including the emerging systems that assign value to digital artifacts.`,
    connection: "Conceptual Art's interrogation of art's boundaries opened multiple paths. Performance and video emerged from its dematerialization of the object. Installation art developed from its attention to context. And Postmodernism would extend its skepticism about truth claims and institutional authority across all cultural production."
  },
  {
    name: "Postmodernism",
    years: "c. 1970–Present",
    color: "#9932CC",
    overview: `Postmodernism marked the end of faith in grand narratives—including the narrative of artistic progress that had driven modernism. Where modern movements each claimed to advance toward some truth (pure form, authentic expression, essential meaning), Postmodernism rejected the very idea of such progress. History, the Postmodernists argued, was not a story of advancement but a reservoir of materials to be recycled, quoted, and ironically juxtaposed.

The movement—if a stance so various can be called a movement—manifested differently across media and contexts. In architecture, it meant ornament and historical quotation against Modernist purity. In painting, it meant the return of figuration and appropriation of existing images. In theory, it meant skepticism about universal claims and attention to how power shapes knowledge. Across all these manifestations ran a common thread: the rejection of originality, authenticity, and progress as guiding values.`,
    principles: [
      "Rejection of grand narratives and claims to universal truth",
      "Appropriation, quotation, and pastiche of historical styles",
      "Irony, skepticism, and deconstruction of established meanings",
      "Collapse of boundaries between high and low culture",
      "Recognition that all meaning is constructed and contextual"
    ],
    artists: [
      { name: "Cindy Sherman", contribution: "Untitled Film Stills explored identity as performance and media construction through self-portraiture in stereotypical roles" },
      { name: "Jean-Michel Basquiat", contribution: "Combined street art, text, and painterly gesture in works that critiqued race, class, and art history" },
      { name: "Barbara Kruger", contribution: "Appropriated advertising's visual language to critique consumer capitalism and gender politics" },
      { name: "Jeff Koons", contribution: "Elevated kitsch objects to fine art status with extravagant production values and deliberate ambiguity" },
      { name: "Sherrie Levine", contribution: "Re-photographed canonical images, questioning originality and authorship" }
    ],
    impact: `Postmodernism's skepticism about originality and authenticity fundamentally changed how art could function. If no image was truly original, if all creation was recombination, then appropriation and quotation became legitimate artistic strategies. This opened territory that digital culture would colonize completely—the meme as form of endless recombination and recontextualization.

The collapse of high/low boundaries also accelerated. Postmodern artists freely mixed references to art history, advertising, kitsch, and popular culture without the ironic distance that Pop Art had maintained. This flattening of cultural hierarchy anticipated the internet's promiscuous mixing of registers and the meme's capacity to juxtapose Baroque painting with reality television.`,
    connection: "Postmodernism was less a bounded movement than a condition—a set of assumptions that remain operative in contemporary practice. Its skepticism about originality, its embrace of appropriation, its collapse of cultural hierarchies all persist in contemporary art and find their most complete expression in the digital vernacular of internet culture."
  },
  {
    name: "Contemporary Art",
    years: "c. 1990–Present",
    color: "#2E8B57",
    overview: `Contemporary art resists definition because it encompasses everything made now. The term implies not a style or movement but simply art of the present moment—which is to say, art made in conditions of unprecedented technological change, globalization, and the collapse of consensus about what art should be or do. Contemporary practice includes painting and sculpture, video and performance, installation and social practice, digital and biological media. No medium is privileged; no approach is excluded.

What characterizes contemporary art is perhaps this very pluralism—the absence of a dominant style or ideology, the global expansion of the art world beyond its Western centers, the coexistence of mutually incompatible practices. The market has replaced critical consensus as the primary mechanism for establishing value. Biennials and art fairs have proliferated. Art's boundaries with entertainment, activism, design, and technology have become increasingly permeable.`,
    principles: [
      "Radical pluralism—no dominant style, medium, or ideology",
      "Globalization of the art world beyond Western centers",
      "Blurring of boundaries between art, entertainment, activism, and design",
      "Market and institutional systems as primary validators of value",
      "Technology as both tool and subject matter"
    ],
    artists: [
      { name: "Ai Weiwei", contribution: "Chinese artist-activist whose work addresses human rights, cultural heritage, and political repression" },
      { name: "Kara Walker", contribution: "Silhouette installations that confront American history's racial violence with formal elegance" },
      { name: "Olafur Eliasson", contribution: "Immersive installations exploring perception, climate, and environmental awareness" },
      { name: "Banksy", contribution: "Anonymous street artist whose works critique consumerism, politics, and the art market itself" },
      { name: "Yayoi Kusama", contribution: "Japanese artist whose infinity rooms and polka dots have achieved unprecedented popular appeal" }
    ],
    impact: `Contemporary art's impact is less about stylistic innovation than institutional expansion. Art has become a global industry, with museums, galleries, and fairs operating on every continent. The number of practicing artists has exploded. Art education has professionalized. The audience for contemporary art—through museums, social media, and popular culture—has grown exponentially.

Yet this expansion has generated its own tensions. The market's role in determining value has become dominant and controversial. The relationship between critical acclaim and commercial success has grown uncertain. The boundaries of what qualifies as art have become effectively unlimited—creating both freedom and vertigo. Into this situation of radical openness, new forms of visual culture continually emerge.`,
    connection: "Contemporary art's pluralism and openness create space for emerging practices that might have been excluded under older regimes of value. The same conditions that allowed street art and digital art to enter the gallery permit attention to visual forms that circulate primarily online. Meme Art emerges not as rupture but as logical extension of contemporary practice into the dominant visual culture of the 21st century."
  },
  {
    name: "Meme Art",
    years: "c. 2020–Present/Future",
    color: "#00FF00",
    overview: `Meme Art represents the translation of digital visual culture into permanent physical form. The movement recognizes that memes—images created and shared by billions of people daily—constitute the visual language of the 21st century. They encode complex emotional, cultural, and social meaning in formats that transmit instantly across networks and languages. Artists working in this form select from this vast digital repository and render their subjects in traditional media: bronze sculpture, oil on canvas, the materials that have preserved human expression for millennia.

The logic is preservation. Digital images proliferate infinitely but leave no singular artifact. Any meme can be copied, altered, generated on command. There is no original, no provenance, no scarcity. Physical translation solves this problem. When a meme is cast in bronze, it becomes one. It cannot be replicated without extraordinary effort. It exists in space, subject to ownership, authentication, and the passage of centuries. The artists practicing Meme Art are cultural archaeologists working in real-time, selecting which fragments of internet culture deserve to survive into the deep future.`,
    principles: [
      "Translation of digital vernacular into permanent physical media",
      "Recognition of memes as the dominant visual language of the 21st century",
      "Physical scarcity as solution to digital abundance",
      "Cultural preservation through material transformation",
      "Mastery of traditional techniques (bronze casting, oil painting) in service of contemporary content"
    ],
    artists: [
      { name: "Peyote", contribution: "Founding artist of the Meme Art movement; master bronze sculptor whose 6-foot Pepe in Giacometti style exemplifies the form's ambition and craft" }
    ],
    impact: `Meme Art's emergence follows patterns visible throughout art history. When cultural meaning reaches critical mass, artists emerge to give it permanent form. Cave painters documented what mattered to their communities. Renaissance masters captured the religious devotion of their age. The Impressionists recorded the leisure of modern urban life. Meme artists are doing what artists have always done: preserving the spirit of their time in materials that outlast the moment.

The movement also resolves a tension that plagued digital art from its inception. The infinite reproducibility that defines digital media conflicts with the scarcity that art markets require. NFTs attempted to impose artificial scarcity on digital files; Meme Art solves the problem more directly through actual physical singularity. A bronze Pepe cannot be copied with a click. It exists, weighs, occupies space, accumulates patina. The digital image that inspired it will proliferate forever, but the sculpture is one.

The academic and institutional recognition will follow, as it always does, once the cultural significance becomes undeniable. The visual language that billions use daily to express emotion, share meaning, and build community deserves the same serious attention that previous generations paid to the visual cultures of their time. Meme Art is the art movement of the 21st century. The only question is whether this is recognized now or later.`,
    connection: "Meme Art does not emerge from nowhere. It extends Pop Art's legitimization of vernacular imagery, Appropriation art's embrace of existing images, Post-Internet art's engagement with digital culture, and contemporary pluralism's openness to emerging forms. The movement represents not rupture but culmination—the logical extension of art historical development into the visual culture that defines our age."
  }
];

// Export movements array for use in the web application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = movements;
}
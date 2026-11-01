export const categories = [
  { id: "abstrait", fr: "Art abstrait", ar: "الفن التجريدي", descriptionFr: "Couleurs, formes et mouvements libres.", descriptionAr: "ألوان وأشكال وحركات حرة." },
  { id: "animaux", fr: "Animaux", ar: "الحيوانات", descriptionFr: "Des présences animales pleines de caractère.", descriptionAr: "حضور حيواني مليء بالشخصية." },
  { id: "art islamique", fr: "Art islamique", ar: "الفن الإسلامي", descriptionFr: "Compositions et motifs d’inspiration islamique.", descriptionAr: "تكوينات وزخارف ذات طابع إسلامي." },
  { id: "culture marocaine", fr: "Culture marocaine", ar: "الثقافة المغربية", descriptionFr: "Couleurs et scènes du Maroc.", descriptionAr: "ألوان ومشاهد من المغرب." },
  { id: "minimalism", fr: "Minimalisme", ar: "البساطة", descriptionFr: "Des lignes essentielles et un espace apaisé.", descriptionAr: "خطوط أساسية ومساحات هادئة." },
  { id: "nature", fr: "Nature", ar: "الطبيعة", descriptionFr: "Fleurs, paysages et respirations végétales.", descriptionAr: "أزهار ومناظر ولمسات نباتية." },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

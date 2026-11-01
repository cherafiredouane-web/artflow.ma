# Artflow artwork catalog audit

- Artwork raster image files inspected: **232**
- Brand image assets inspected: **2 SVG files**
- Exact SHA-256 duplicate groups: **31**
- Unique artwork records after exact deduplication: **199**
- Corrupt or unsupported images: **0**
- Unique artwork images copied as WebP: **199**

Category memberships come only from the six source folders. Exact byte-identical files in more than one folder share one catalog record and retain every source category. The canonical image is the first source path alphabetically; all original aliases are listed in the data. Visual near-duplicates with different file bytes have not been merged automatically.

| Source folder | French label | Arabic label | Source files |
|---|---|---|---:|
| `abstrait` | Art abstrait | الفن التجريدي | 56 |
| `animaux` | Animaux | الحيوانات | 25 |
| `art islamique` | Art islamique | الفن الإسلامي | 16 |
| `culture marocaine` | Culture marocaine | الثقافة المغربية | 32 |
| `minimalism` | Minimalisme | البساطة | 26 |
| `nature` | Nature | الطبيعة | 77 |

## Brand assets

| Original file | Actual format | SVG viewBox | Website copy |
|---|---|---|---|
| `artflow logo-01.svg` | SVG vector | `0 0 1853.3 572.3` | `public/artflow-logo.svg` |
| `favicon-01.svg` | SVG vector | `0 0 1426.3 1312.9` | `public/favicon.svg` |

## Source image inventory

| Original path | Format | Dimensions | Canonical ID | French title | Arabic title | Dominant color | Categories |
|---|---|---:|---|---|---|---|---|
| `abstrait/Abstract-side-a.jpg` | JPEG | 800 × 800 | `af-0912e5c64a` | Éclat au fil des lignes | تألق بين الخطوط | Bleu / أزرق | abstrait |
| `abstrait/African-Woman.jpg` | JPEG | 800 × 800 | `af-5db464eb74` | Visage aux couleurs vives | وجه بألوان زاهية | Multicolore / متعدد الألوان | abstrait |
| `abstrait/Artboard 1.jpg` | JPEG | 1001 × 1001 | `af-08a67ce648` | Élan chromatique | لوحة متعدد الألوان مميزة | Multicolore / متعدد الألوان | abstrait |
| `abstrait/Artboard 11.jpg` | JPEG | 1001 × 1001 | `af-b50c4e3305` | Harmonie azur | لوحة أزرق مميزة 4 | Bleu / أزرق | abstrait |
| `abstrait/Artboard 12.jpg` | JPEG | 1001 × 1001 | `af-b2a8174396` | Équilibre chromatique | لوحة متعدد الألوان مميزة 5 | Multicolore / متعدد الألوان | abstrait |
| `abstrait/Artboard 13.jpg` | JPEG | 1001 × 1001 | `af-3a2e640591` | Éclat chromatique | لوحة متعدد الألوان مميزة 6 | Multicolore / متعدد الألوان | abstrait |
| `abstrait/Artboard 2 copy 3.png` | PNG | 1001 × 1001 | `af-82995ed605` | Rêverie chromatique | لوحة متعدد الألوان مميزة 7 | Multicolore / متعدد الألوان | abstrait, nature |
| `nature/Artboard 2 copy 3.png` | PNG | 1001 × 1001 | `af-82995ed605` | Rêverie chromatique | لوحة متعدد الألوان مميزة 7 | Multicolore / متعدد الألوان | abstrait, nature |
| `abstrait/Artboard 2 copy.png` | PNG | 1001 × 1001 | `af-0e82b816da` | Reflet brume | لوحة رمادي مميزة | Gris / رمادي | abstrait |
| `abstrait/Artboard 2.jpg` | JPEG | 1001 × 1001 | `af-e2538c76d8` | Mouvement chromatique | لوحة متعدد الألوان مميزة 9 | Multicolore / متعدد الألوان | abstrait |
| `abstrait/Artboard 3 copy 13.png` | PNG | 1255 × 1255 | `af-bdfba0e00c` | Silence chromatique | لوحة متعدد الألوان مميزة 10 | Multicolore / متعدد الألوان | abstrait, animaux, minimalism |
| `animaux/Artboard 3 copy 13.png` | PNG | 1255 × 1255 | `af-bdfba0e00c` | Silence chromatique | لوحة متعدد الألوان مميزة 10 | Multicolore / متعدد الألوان | abstrait, animaux, minimalism |
| `minimalism/Artboard 3 copy 13.png` | PNG | 1255 × 1255 | `af-bdfba0e00c` | Silence chromatique | لوحة متعدد الألوان مميزة 10 | Multicolore / متعدد الألوان | abstrait, animaux, minimalism |
| `abstrait/Artboard 3 copy 16.png` | PNG | 1255 × 1255 | `af-50b6280719` | Lueur azur | لوحة أزرق مميزة 11 | Bleu / أزرق | abstrait, animaux, culture marocaine |
| `animaux/Artboard 3 copy 16.png` | PNG | 1255 × 1255 | `af-50b6280719` | Lueur azur | لوحة أزرق مميزة 11 | Bleu / أزرق | abstrait, animaux, culture marocaine |
| `culture marocaine/Artboard 3 copy 16.png` | PNG | 1255 × 1255 | `af-50b6280719` | Lueur azur | لوحة أزرق مميزة 11 | Bleu / أزرق | abstrait, animaux, culture marocaine |
| `abstrait/Artboard 3 copy 7.png` | PNG | 1255 × 1255 | `af-deab893450` | Horizons brume | لوحة رمادي مميزة 12 | Gris / رمادي | abstrait, nature |
| `nature/Artboard 3 copy 7.png` | PNG | 1255 × 1255 | `af-deab893450` | Horizons brume | لوحة رمادي مميزة 12 | Gris / رمادي | abstrait, nature |
| `abstrait/Artboard 3 copy 8.png` | PNG | 1255 × 1255 | `af-a4a1652d07` | Écho chromatique | لوحة متعدد الألوان مميزة 13 | Multicolore / متعدد الألوان | abstrait, nature |
| `nature/Artboard 3 copy 8.png` | PNG | 1255 × 1255 | `af-a4a1652d07` | Écho chromatique | لوحة متعدد الألوان مميزة 13 | Multicolore / متعدد الألوان | abstrait, nature |
| `abstrait/Artboard 3 copy.jpg` | JPEG | 801 × 801 | `af-d32db325fc` | Nuance chromatique | لوحة متعدد الألوان مميزة 14 | Multicolore / متعدد الألوان | abstrait |
| `abstrait/Artboard 3 copy.png` | PNG | 1255 × 1255 | `af-dbea9ecc6e` | Aube brume | لوحة رمادي مميزة 15 | Gris / رمادي | abstrait |
| `abstrait/Artboard 3.jpg` | JPEG | 801 × 801 | `af-d7ee461038` | Sillage chromatique | لوحة متعدد الألوان مميزة 16 | Multicolore / متعدد الألوان | abstrait, minimalism |
| `minimalism/Artboard 3.jpg` | JPEG | 801 × 801 | `af-d7ee461038` | Sillage chromatique | لوحة متعدد الألوان مميزة 16 | Multicolore / متعدد الألوان | abstrait, minimalism |
| `abstrait/Artboard 4 copy.jpg` | JPEG | 801 × 801 | `af-f51f3281e0` | Murmure chromatique | لوحة متعدد الألوان مميزة 17 | Multicolore / متعدد الألوان | abstrait |
| `abstrait/Artboard 4.jpg` | JPEG | 1001 × 1001 | `af-1c8a47b4ce` | Éclosion chromatique | لوحة متعدد الألوان مميزة 18 | Multicolore / متعدد الألوان | abstrait |
| `abstrait/Artboard 5 copy 2.png` | PNG | 1001 × 1001 | `af-12ee727a03` | Parenthèse brume | لوحة رمادي مميزة 19 | Gris / رمادي | abstrait, animaux |
| `animaux/Artboard 5 copy 2.png` | PNG | 1001 × 1001 | `af-12ee727a03` | Parenthèse brume | لوحة رمادي مميزة 19 | Gris / رمادي | abstrait, animaux |
| `abstrait/Artboard 5.jpg` | JPEG | 1001 × 1001 | `af-d624e2aa4f` | Respiration rose | لوحة وردي مميزة | Rose / وردي | abstrait |
| `abstrait/Artboard 6 copy 2.png` | PNG | 1001 × 1001 | `af-35ed965779` | Rythme azur | لوحة أزرق مميزة 21 | Bleu / أزرق | abstrait |
| `abstrait/Artboard 6 copy.png` | PNG | 1001 × 1001 | `af-f01dc0a946` | Évasion brume | لوحة رمادي مميزة 22 | Gris / رمادي | abstrait |
| `abstrait/Artboard 6.jpg` | JPEG | 1001 × 1001 | `af-739dac68db` | Contraste chromatique | لوحة متعدد الألوان مميزة 23 | Multicolore / متعدد الألوان | abstrait |
| `abstrait/Artboard 7 copy 2.png` | PNG | 1001 × 1001 | `af-cb74fa2242` | Douceur azur | لوحة أزرق مميزة 24 | Bleu / أزرق | abstrait |
| `abstrait/Artboard 7 copy.jpg` | JPEG | 801 × 801 | `af-9151a01d80` | Lumière brume | لوحة رمادي مميزة 25 | Gris / رمادي | abstrait |
| `abstrait/Artboard 8 copy 2.png` | PNG | 1001 × 1001 | `af-104ae3c4c6` | Empreinte chromatique | لوحة متعدد الألوان مميزة 26 | Multicolore / متعدد الألوان | abstrait, nature |
| `nature/Artboard 8 copy 2.png` | PNG | 1001 × 1001 | `af-104ae3c4c6` | Empreinte chromatique | لوحة متعدد الألوان مميزة 26 | Multicolore / متعدد الألوان | abstrait, nature |
| `abstrait/Artboard 8 copy 3.png` | PNG | 1001 × 1001 | `af-eb4b515ae1` | Instant chromatique | لوحة متعدد الألوان مميزة 27 | Multicolore / متعدد الألوان | abstrait |
| `abstrait/Artboard 8.jpg` | JPEG | 801 × 801 | `af-43385de37b` | Ondulation encre | لوحة أسود مميزة | Noir / أسود | abstrait |
| `abstrait/Artboard 9 copy.png` | PNG | 1001 × 1001 | `af-13d5dcac7c` | Élégance chromatique | لوحة متعدد الألوان مميزة 29 | Multicolore / متعدد الألوان | abstrait |
| `abstrait/Artboard 9.jpg` | JPEG | 1001 × 1001 | `af-e620576881` | Perspective azur | لوحة أزرق مميزة 30 | Bleu / أزرق | abstrait |
| `abstrait/Autumn-Painting.jpg` | JPEG | 800 × 800 | `af-7c7dd7dbd0` | Forêt aux couleurs d’automne | غابة بألوان الخريف | Bleu / أزرق | abstrait, nature |
| `nature/Autumn-Painting.jpg` | JPEG | 800 × 800 | `af-7c7dd7dbd0` | Forêt aux couleurs d’automne | غابة بألوان الخريف | Bleu / أزرق | abstrait, nature |
| `abstrait/Blue-&-White.jpg` | JPEG | 800 × 800 | `af-68946ad1e0` | Bleu et blanc | الأزرق والأبيض | Bleu / أزرق | abstrait |
| `abstrait/Blue-Flower.jpg` | JPEG | 1500 × 1500 | `af-782e0538c9` | Fleur bleue et dorée | زهرة زرقاء وذهبية | Multicolore / متعدد الألوان | abstrait, nature |
| `nature/Blue-Flower.jpg` | JPEG | 1500 × 1500 | `af-782e0538c9` | Fleur bleue et dorée | زهرة زرقاء وذهبية | Multicolore / متعدد الألوان | abstrait, nature |
| `abstrait/ChatGPT Image 26 juin 2026, 17_48_58.png` | PNG | 1254 × 1254 | `af-ac4036b9c8` | Couleurs en mouvement chromatique | ألوان في حركة متعدد الألوان | Multicolore / متعدد الألوان | abstrait, animaux |
| `animaux/ChatGPT Image 26 juin 2026, 17_48_58.png` | PNG | 1254 × 1254 | `af-ac4036b9c8` | Couleurs en mouvement chromatique | ألوان في حركة متعدد الألوان | Multicolore / متعدد الألوان | abstrait, animaux |
| `abstrait/Gentle-Tones.jpg` | JPEG | 748 × 748 | `af-5170cb3daa` | Nuances douces | ظلال هادئة | Multicolore / متعدد الألوان | abstrait |
| `abstrait/Gravity.jpg` | JPEG | 900 × 900 | `af-d6d06bee70` | Gravité | جاذبية | Multicolore / متعدد الألوان | abstrait, minimalism |
| `minimalism/Gravity.jpg` | JPEG | 900 × 900 | `af-d6d06bee70` | Gravité | جاذبية | Multicolore / متعدد الألوان | abstrait, minimalism |
| `abstrait/Jungle-Symphon.jpg` | JPEG | 800 × 800 | `af-e12473ca98` | Symphonie tropicale | سيمفونية استوائية | Gris / رمادي | abstrait |
| `abstrait/Lavender.jpg` | JPEG | 800 × 800 | `af-8b5bc34cdb` | Lavande en lumière | الخزامى في الضوء | Orange / برتقالي | abstrait, nature |
| `nature/Lavender.jpg` | JPEG | 800 × 800 | `af-8b5bc34cdb` | Lavande en lumière | الخزامى في الضوء | Orange / برتقالي | abstrait, nature |
| `abstrait/Minimal-Elegance.jpg` | JPEG | 800 × 801 | `af-3c9606c387` | Élégance géométrique | أناقة هندسية | Noir / أسود | abstrait, minimalism |
| `minimalism/Minimal-Elegance.jpg` | JPEG | 800 × 801 | `af-3c9606c387` | Élégance géométrique | أناقة هندسية | Noir / أسود | abstrait, minimalism |
| `abstrait/Orange-and-Cyant.jpg` | JPEG | 800 × 800 | `af-a95ea8419b` | Dialogue orange et cyan | حوار البرتقالي والسماوي | Multicolore / متعدد الألوان | abstrait |
| `abstrait/Planets.jpg` | JPEG | 900 × 900 | `af-c684f34b2f` | Planètes en mouvement | كواكب متحركة | Multicolore / متعدد الألوان | abstrait |
| `abstrait/Powerful.jpg` | JPEG | 800 × 800 | `af-a2d903163a` | Force minérale | قوة معدنية | Noir / أسود | abstrait |
| `abstrait/Purple-Flowers.jpg` | JPEG | 800 × 800 | `af-4c31527cde` | Fleurs violettes | زهور بنفسجية | Multicolore / متعدد الألوان | abstrait, nature |
| `nature/Purple-Flowers.jpg` | JPEG | 800 × 800 | `af-4c31527cde` | Fleurs violettes | زهور بنفسجية | Multicolore / متعدد الألوان | abstrait, nature |
| `abstrait/Red-Tree.jpg` | JPEG | 800 × 800 | `af-92b23886c7` | Arbre rouge au bord de l’eau | شجرة حمراء قرب الماء | Rose / وردي | abstrait, nature |
| `nature/Red-Tree.jpg` | JPEG | 800 × 800 | `af-92b23886c7` | Arbre rouge au bord de l’eau | شجرة حمراء قرب الماء | Rose / وردي | abstrait, nature |
| `abstrait/Royal-Blue-&-Flowers.jpg` | JPEG | 800 × 801 | `af-5c53056b30` | Fleurs en bleu royal | زهور بالأزرق الملكي | Bleu / أزرق | abstrait, nature |
| `nature/Royal-Blue-&-Flowers.jpg` | JPEG | 800 × 801 | `af-5c53056b30` | Fleurs en bleu royal | زهور بالأزرق الملكي | Bleu / أزرق | abstrait, nature |
| `abstrait/Two-Sides.jpg` | JPEG | 800 × 800 | `af-d7c8ec28fa` | Deux horizons | أفقان | Noir / أسود | abstrait |
| `abstrait/Warm-and-cool.jpg` | JPEG | 800 × 800 | `af-c15fb383fa` | Chaud et froid | دفء وبرودة | Multicolore / متعدد الألوان | abstrait, nature |
| `nature/Warm-and-cool.jpg` | JPEG | 800 × 800 | `af-c15fb383fa` | Chaud et froid | دفء وبرودة | Multicolore / متعدد الألوان | abstrait, nature |
| `abstrait/Waves-of-Elegance.jpg` | JPEG | 800 × 800 | `af-224f68ae03` | Vagues élégantes | أمواج أنيقة | Gris / رمادي | abstrait |
| `abstrait/White-Poppies.jpg` | JPEG | 800 × 800 | `af-78160bd895` | Coquelicots blancs | خشخاش أبيض | Multicolore / متعدد الألوان | abstrait, nature |
| `nature/White-Poppies.jpg` | JPEG | 800 × 800 | `af-78160bd895` | Coquelicots blancs | خشخاش أبيض | Multicolore / متعدد الألوان | abstrait, nature |
| `abstrait/Wonder.jpg` | JPEG | 800 × 800 | `af-dbe5ab9fcd` | Émerveillement | دهشة | Multicolore / متعدد الألوان | abstrait |
| `abstrait/fluid rose.jpg` | JPEG | 1036 × 1036 | `af-98be1ceb2d` | Mouvement floral | حركة زهرية | Multicolore / متعدد الألوان | abstrait, nature |
| `nature/fluid rose.jpg` | JPEG | 1036 × 1036 | `af-98be1ceb2d` | Mouvement floral | حركة زهرية | Multicolore / متعدد الألوان | abstrait, nature |
| `abstrait/gentle-movement.jpg` | JPEG | 800 × 800 | `af-0f3d463da8` | Mouvement doux | حركة هادئة | Noir / أسود | abstrait |
| `abstrait/golden-rose-.jpg` | JPEG | 1500 × 1500 | `af-34b42d0bb5` | Rose dorée | وردة ذهبية | Multicolore / متعدد الألوان | abstrait, nature |
| `nature/golden-rose-.jpg` | JPEG | 1500 × 1500 | `af-34b42d0bb5` | Rose dorée | وردة ذهبية | Multicolore / متعدد الألوان | abstrait, nature |
| `abstrait/space-light.jpg` | JPEG | 800 × 800 | `af-a20f38289e` | Lumière cosmique | ضوء كوني | Noir / أسود | abstrait |
| `abstrait/splash-of-colors-c.jpg` | JPEG | 800 × 800 | `af-00c2f1c577` | Éclaboussure de couleurs | رذاذ الألوان | Noir / أسود | abstrait |
| `abstrait/wildflowers.jpg` | JPEG | 800 × 800 | `af-a48eeccabd` | Fleurs des champs | زهور الحقول | Multicolore / متعدد الألوان | abstrait, nature |
| `nature/wildflowers.jpg` | JPEG | 800 × 800 | `af-a48eeccabd` | Fleurs des champs | زهور الحقول | Multicolore / متعدد الألوان | abstrait, nature |
| `animaux/Artboard 3 copy 11.png` | PNG | 1255 × 1255 | `af-0ca9f2eb47` | Poésie chromatique | لوحة متعدد الألوان مميزة 57 | Multicolore / متعدد الألوان | animaux |
| `animaux/Artboard 3 copy 15.png` | PNG | 1255 × 1255 | `af-6158a8fd71` | Envol encre | لوحة أسود مميزة 58 | Noir / أسود | animaux |
| `animaux/Artboard 3 copy 17.png` | PNG | 1255 × 1255 | `af-5d17ee6893` | Énergie chromatique | لوحة متعدد الألوان مميزة 59 | Multicolore / متعدد الألوان | animaux |
| `animaux/Artboard 3 copy 18.png` | PNG | 1255 × 1255 | `af-0e9170e25e` | Mélodie encre | لوحة أسود مميزة 60 | Noir / أسود | animaux, minimalism |
| `minimalism/Artboard 3 copy 18.png` | PNG | 1255 × 1255 | `af-0e9170e25e` | Mélodie encre | لوحة أسود مميزة 60 | Noir / أسود | animaux, minimalism |
| `animaux/Artboard 3 copy 19.png` | PNG | 1255 × 1255 | `af-1b96efb3bb` | Fluidité chromatique | لوحة متعدد الألوان مميزة 61 | Multicolore / متعدد الألوان | animaux |
| `animaux/Artboard 3 copy 20.png` | PNG | 1255 × 1255 | `af-716272db14` | Sérénité chromatique | لوحة متعدد الألوان مميزة 62 | Multicolore / متعدد الألوان | animaux |
| `animaux/Artboard 5 copy.png` | PNG | 1001 × 1001 | `af-47f5d4f264` | Vibration vermillon | لوحة أحمر مميزة | Rouge / أحمر | animaux |
| `animaux/Artboard 6 copy 3.png` | PNG | 1001 × 1001 | `af-92b271155e` | Promesse chromatique | لوحة متعدد الألوان مميزة 64 | Multicolore / متعدد الألوان | animaux |
| `animaux/Artboard 7 copy 3.png` | PNG | 1001 × 1001 | `af-b84c03981a` | Voyage sable | لوحة بيج مميزة | Beige / بيج | animaux, minimalism |
| `minimalism/Artboard 7 copy 3.png` | PNG | 1001 × 1001 | `af-b84c03981a` | Voyage sable | لوحة بيج مميزة | Beige / بيج | animaux, minimalism |
| `animaux/Artboard 8 copy.png` | PNG | 1001 × 1001 | `af-7d41189483` | Sensation ambre | لوحة برتقالي مميزة | Orange / برتقالي | animaux |
| `animaux/Black-horse.jpg` | JPEG | 800 × 800 | `af-ed872617e6` | Cheval dans la brume | حصان في الضباب | Noir / أسود | animaux |
| `animaux/Green-Eyes-Cat.jpg` | JPEG | 800 × 799 | `af-f21eb19f10` | Le chat aux yeux verts | القط ذو العينين الخضراوين | Gris / رمادي | animaux |
| `animaux/Tiger's-Face.jpg` | JPEG | 800 × 800 | `af-e9a80e4b37` | Face de tigre | وجه النمر | Noir / أسود | animaux |
| `animaux/Tiger-in-Snow.jpg` | JPEG | 1000 × 1000 | `af-6df71e9a18` | Tigre des neiges | نمر الثلوج | Multicolore / متعدد الألوان | animaux |
| `animaux/birdy-1.jpg` | JPEG | 704 × 705 | `af-7382ff2c97` | Oiseau de feu | طائر النار | Multicolore / متعدد الألوان | animaux |
| `animaux/black-bull.jpg` | JPEG | 900 × 900 | `af-94dc259f37` | Taureau noir | ثور أسود | Rouge / أحمر | animaux |
| `animaux/cheetah-portrait.jpg` | JPEG | 800 × 799 | `af-a2969f528d` | Regard du guépard | نظرة الفهد | Multicolore / متعدد الألوان | animaux |
| `animaux/elegant-horse.jpg` | JPEG | 1005 × 1005 | `af-2d40b25a56` | Cheval en mouvement | حصان في حركة | Multicolore / متعدد الألوان | animaux |
| `animaux/lion-king-1.jpg` | JPEG | 1390 × 1390 | `af-acac444cb7` | Lion au regard fier | أسد بنظرة واثقة | Noir / أسود | animaux |
| `animaux/royale-horse-.jpg` | JPEG | 994 × 994 | `af-2e34e5d843` | Cheval royal | حصان ملكي | Noir / أسود | animaux |
| `animaux/tiger painting.jpg` | JPEG | 1641 × 1641 | `af-4eab1b2669` | Tigre majestueux | نمر مهيب | Noir / أسود | animaux |
| `art islamique/Artboard 1 copy 2.jpg` | JPEG | 801 × 801 | `af-633555938b` | Symphonie azur | لوحة أزرق مميزة 78 | Bleu / أزرق | art islamique |
| `art islamique/Artboard 1 copy 3.jpg` | JPEG | 801 × 801 | `af-a890f25c9b` | Été terre | لوحة بني مميزة | Marron / بني | art islamique |
| `art islamique/Artboard 1 copy 4.jpg` | JPEG | 801 × 801 | `af-0613b86eeb` | Trame azur | لوحة أزرق مميزة 80 | Bleu / أزرق | art islamique |
| `art islamique/Artboard 1 copy.jpg` | JPEG | 801 × 801 | `af-1bd2633687` | Rencontre brume | لوحة رمادي مميزة 81 | Gris / رمادي | art islamique |
| `art islamique/Artboard 1.jpg` | JPEG | 801 × 801 | `af-892e03eba7` | Racines chromatique | لوحة متعدد الألوان مميزة 82 | Multicolore / متعدد الألوان | art islamique |
| `art islamique/Artboard 14.jpg` | JPEG | 1001 × 1001 | `af-4e622fef46` | Émergence encre | لوحة أسود مميزة 83 | Noir / أسود | art islamique |
| `art islamique/Artboard 3 copy 2.jpg` | JPEG | 801 × 801 | `af-cd3f1bb0f8` | Pulsation chromatique | لوحة متعدد الألوان مميزة 84 | Multicolore / متعدد الألوان | art islamique |
| `art islamique/Artboard 3 copy 2.png` | PNG | 1255 × 1255 | `af-52fc9bbaa3` | Clarté chromatique | لوحة متعدد الألوان مميزة 85 | Multicolore / متعدد الألوان | art islamique |
| `art islamique/Artboard 3 copy 3.png` | PNG | 1255 × 1255 | `af-8e6d874dd6` | Matière chromatique | لوحة متعدد الألوان مميزة 86 | Multicolore / متعدد الألوان | art islamique |
| `art islamique/Artboard 3 copy 4.png` | PNG | 1255 × 1255 | `af-723b7d73e8` | Mosaïque chromatique | لوحة متعدد الألوان مميزة 87 | Multicolore / متعدد الألوان | art islamique |
| `art islamique/Artboard 3 copy 5.png` | PNG | 1255 × 1255 | `af-c5bf9d77d3` | Équateur chromatique | لوحة متعدد الألوان مميزة 88 | Multicolore / متعدد الألوان | art islamique |
| `art islamique/Artboard 3 copy 6.png` | PNG | 1255 × 1255 | `af-60affdb9f8` | Alchimie encre | لوحة أسود مميزة 89 | Noir / أسود | art islamique |
| `art islamique/Artboard 3 copy 7.png` | PNG | 1255 × 1255 | `af-0a935b49a8` | Élan chromatique 2 | لوحة متعدد الألوان مميزة 90 | Multicolore / متعدد الألوان | art islamique |
| `art islamique/Artboard 3 copy.png` | PNG | 1255 × 1255 | `af-7159fb09c2` | Harmonie chromatique 2 | لوحة متعدد الألوان مميزة 91 | Multicolore / متعدد الألوان | art islamique |
| `art islamique/Artboard 3.png` | PNG | 1255 × 1255 | `af-f5fc7facb0` | Équilibre chromatique 2 | لوحة متعدد الألوان مميزة 92 | Multicolore / متعدد الألوان | art islamique |
| `art islamique/Untitled-1-[Recovered].jpg` | JPEG | 800 × 800 | `af-37ef3d6373` | Empreinte dorée | أثر ذهبي | Rouge / أحمر | art islamique |
| `culture marocaine/Artboard 1.jpg` | JPEG | 801 × 801 | `af-695133ea6c` | Éclat encre 2 | لوحة أسود مميزة 94 | Noir / أسود | culture marocaine |
| `culture marocaine/Artboard 10 copy.jpg` | JPEG | 801 × 801 | `af-d0ed2e2060` | Rêverie azur 2 | لوحة أزرق مميزة 95 | Bleu / أزرق | culture marocaine |
| `culture marocaine/Artboard 10.jpg` | JPEG | 801 × 801 | `af-ce02c084be` | Reflet encre 2 | لوحة أسود مميزة 96 | Noir / أسود | culture marocaine |
| `culture marocaine/Artboard 14 copy.jpg` | JPEG | 801 × 801 | `af-04a6a488f5` | Mouvement chromatique 2 | لوحة متعدد الألوان مميزة 97 | Multicolore / متعدد الألوان | culture marocaine |
| `culture marocaine/Artboard 14.jpg` | JPEG | 801 × 801 | `af-27c36a4d15` | Silence ambre 2 | لوحة برتقالي مميزة 98 | Orange / برتقالي | culture marocaine |
| `culture marocaine/Artboard 19.jpg` | JPEG | 801 × 801 | `af-a433cf9326` | Lueur chromatique 2 | لوحة متعدد الألوان مميزة 99 | Multicolore / متعدد الألوان | culture marocaine |
| `culture marocaine/Artboard 20.jpg` | JPEG | 801 × 801 | `af-04a4306795` | Horizons chromatique 2 | لوحة متعدد الألوان مميزة 100 | Multicolore / متعدد الألوان | culture marocaine |
| `culture marocaine/Artboard 21.jpg` | JPEG | 801 × 801 | `af-5beda37889` | Coucher de soleil sur la mer | غروب الشمس فوق البحر | Noir / أسود | culture marocaine, nature |
| `nature/Artboard 21.jpg` | JPEG | 801 × 801 | `af-5beda37889` | Coucher de soleil sur la mer | غروب الشمس فوق البحر | Noir / أسود | culture marocaine, nature |
| `culture marocaine/Artboard 3.jpg` | JPEG | 801 × 801 | `af-f228d4e647` | Nuance chromatique 2 | لوحة متعدد الألوان مميزة 102 | Multicolore / متعدد الألوان | culture marocaine |
| `culture marocaine/Artboard 4.jpg` | JPEG | 801 × 801 | `af-2e1856b49a` | Aube chromatique 2 | لوحة متعدد الألوان مميزة 103 | Multicolore / متعدد الألوان | culture marocaine |
| `culture marocaine/Artboard 5 copy.jpg` | JPEG | 801 × 801 | `af-7afaf39c7f` | Sillage vermillon 2 | لوحة أحمر مميزة 104 | Rouge / أحمر | culture marocaine |
| `culture marocaine/Artboard 5.jpg` | JPEG | 801 × 801 | `af-d16cc4789b` | Murmure chromatique 2 | لوحة متعدد الألوان مميزة 105 | Multicolore / متعدد الألوان | culture marocaine |
| `culture marocaine/Artboard 6 copy.jpg` | JPEG | 801 × 801 | `af-ab53f33282` | Éclosion encre 2 | لوحة أسود مميزة 106 | Noir / أسود | culture marocaine |
| `culture marocaine/Artboard 7 copy.jpg` | JPEG | 801 × 801 | `af-659864104f` | Parenthèse chromatique 2 | لوحة متعدد الألوان مميزة 107 | Multicolore / متعدد الألوان | culture marocaine |
| `culture marocaine/Artboard 7.jpg` | JPEG | 801 × 801 | `af-24c74da96d` | Respiration azur 2 | لوحة أزرق مميزة 108 | Bleu / أزرق | culture marocaine |
| `culture marocaine/Chafchaouen.jpg` | JPEG | 800 × 800 | `af-2b2b10a129` | Chefchaouen en bleu | شفشاون الزرقاء | Bleu / أزرق | culture marocaine |
| `culture marocaine/ChatGPT Image 27 juin 2026, 12_22_31.png` | PNG | 1254 × 1254 | `af-bf6c4f140a` | Échappée marocaine d’ambre | مشهد من المغرب برتقالي | Orange / برتقالي | culture marocaine |
| `culture marocaine/ChatGPT Image 27 juin 2026, 12_24_23.png` | PNG | 1254 × 1254 | `af-ca84779417` | Échappée marocaine chromatique | مشهد من المغرب متعدد الألوان | Multicolore / متعدد الألوان | culture marocaine |
| `culture marocaine/ChatGPT Image 27 juin 2026, 12_54_09.png` | PNG | 1254 × 1254 | `af-483ccaa244` | Échappée marocaine chromatique 2 | مشهد من المغرب متعدد الألوان 3 | Multicolore / متعدد الألوان | culture marocaine |
| `culture marocaine/ChatGPT Image 27 juin 2026, 13_01_25.png` | PNG | 1254 × 1254 | `af-dda955e8df` | Échappée marocaine chromatique 3 | مشهد من المغرب متعدد الألوان 3 4 | Multicolore / متعدد الألوان | culture marocaine |
| `culture marocaine/ChatGPT Image 29 juin 2026, 12_43_26.png` | PNG | 1254 × 1254 | `af-202b1a6fe0` | Échappée marocaine d’encre | مشهد من المغرب أسود | Noir / أسود | culture marocaine |
| `culture marocaine/ChatGPT Image 29 juin 2026, 12_43_38.png` | PNG | 1402 × 1122 | `af-4e4e1daef3` | Échappée marocaine chromatique 4 | مشهد من المغرب متعدد الألوان 3 4 5 | Multicolore / متعدد الألوان | culture marocaine |
| `culture marocaine/ChatGPT Image 29 juin 2026, 12_43_52.png` | PNG | 1254 × 1254 | `af-05dd594fd8` | Échappée marocaine chromatique 5 | مشهد من المغرب متعدد الألوان 3 4 5 6 | Multicolore / متعدد الألوان | culture marocaine |
| `culture marocaine/ChatGPT Image 29 juin 2026, 12_44_03.png` | PNG | 1254 × 1254 | `af-a85ed38af9` | Échappée marocaine chromatique 6 | مشهد من المغرب متعدد الألوان 3 4 5 6 7 | Multicolore / متعدد الألوان | culture marocaine |
| `culture marocaine/ChatGPT Image 29 juin 2026, 12_45_15.png` | PNG | 1254 × 1254 | `af-78f9dc57ff` | Échappée marocaine chromatique 7 | مشهد من المغرب متعدد الألوان 3 4 5 6 7 8 | Multicolore / متعدد الألوان | culture marocaine |
| `culture marocaine/ChatGPT Image 29 juin 2026, 12_46_33.png` | PNG | 1254 × 1254 | `af-9390f34154` | Échappée marocaine de vermillon | مشهد من المغرب أحمر | Rouge / أحمر | culture marocaine |
| `culture marocaine/ChatGPT Image 29 juin 2026, 12_52_55.png` | PNG | 1254 × 1254 | `af-2c6cc38251` | Échappée marocaine chromatique 8 | مشهد من المغرب متعدد الألوان 3 4 5 6 7 8 9 | Multicolore / متعدد الألوان | culture marocaine |
| `culture marocaine/ChatGPT Image 29 juin 2026, 12_55_35.png` | PNG | 1254 × 1254 | `af-009f6ffd64` | Échappée marocaine chromatique 9 | مشهد من المغرب متعدد الألوان 3 4 5 6 7 8 9 10 | Multicolore / متعدد الألوان | culture marocaine |
| `culture marocaine/ChatGPT Image 29 juin 2026, 13_40_39.png` | PNG | 1254 × 1254 | `af-fcfc6ed0ac` | Échappée marocaine d’ambre 2 | مشهد من المغرب برتقالي 3 | Orange / برتقالي | culture marocaine |
| `culture marocaine/Zellij.jpg` | JPEG | 800 × 800 | `af-c9c36b8345` | Mosaïque zellige | فسيفساء الزليج | Bleu / أزرق | culture marocaine |
| `culture marocaine/chefchaouen-1.jpg` | JPEG | 1000 × 1000 | `af-03af9cd692` | Chefchaouen, lumière bleue | شفشاون والضوء الأزرق | Multicolore / متعدد الألوان | culture marocaine |
| `minimalism/Artboard 4.jpg` | JPEG | 801 × 801 | `af-66da985165` | Rythme chromatique 2 | لوحة متعدد الألوان مميزة 125 | Multicolore / متعدد الألوان | minimalism |
| `minimalism/Artboard 5 copy 3.png` | PNG | 1001 × 1001 | `af-441744abef` | Évasion vermillon 2 | لوحة أحمر مميزة 126 | Rouge / أحمر | minimalism, nature |
| `nature/Artboard 5 copy 3.png` | PNG | 1001 × 1001 | `af-441744abef` | Évasion vermillon 2 | لوحة أحمر مميزة 126 | Rouge / أحمر | minimalism, nature |
| `minimalism/Artboard 5.png` | PNG | 1001 × 1001 | `af-680c02616d` | Contraste chromatique 2 | لوحة متعدد الألوان مميزة 127 | Multicolore / متعدد الألوان | minimalism |
| `minimalism/Artboard 6.png` | PNG | 1001 × 1001 | `af-8b0554f14b` | Douceur chromatique 2 | لوحة متعدد الألوان مميزة 128 | Multicolore / متعدد الألوان | minimalism |
| `minimalism/Artboard 7.png` | PNG | 1001 × 1001 | `af-dbc597c56a` | Lumière chromatique 2 | لوحة متعدد الألوان مميزة 129 | Multicolore / متعدد الألوان | minimalism, nature |
| `nature/Artboard 7.png` | PNG | 1001 × 1001 | `af-dbc597c56a` | Lumière chromatique 2 | لوحة متعدد الألوان مميزة 129 | Multicolore / متعدد الألوان | minimalism, nature |
| `minimalism/Artboard 9 copy 2.png` | PNG | 1001 × 1001 | `af-c50616c779` | Empreinte chromatique 2 | لوحة متعدد الألوان مميزة 130 | Multicolore / متعدد الألوان | minimalism, nature |
| `nature/Artboard 9 copy 2.png` | PNG | 1001 × 1001 | `af-c50616c779` | Empreinte chromatique 2 | لوحة متعدد الألوان مميزة 130 | Multicolore / متعدد الألوان | minimalism, nature |
| `minimalism/Artboard 9.png` | PNG | 1001 × 1001 | `af-61e2cd0826` | Instant chromatique 2 | لوحة متعدد الألوان مميزة 131 | Multicolore / متعدد الألوان | minimalism |
| `minimalism/Minimalist-Mountains.jpg` | JPEG | 800 × 800 | `af-8f872d8a5b` | Montagnes en lignes | جبال بخطوط بسيطة | Rouge / أحمر | minimalism |
| `minimalism/Mirage.jpg` | JPEG | 800 × 800 | `af-c2c3bd04d3` | Mirage des dunes | سراب الكثبان | Marron / بني | minimalism |
| `minimalism/Revolving-Realities-b.jpg` | JPEG | 800 × 800 | `af-7edb2c561c` | Réalités en mouvement | عوالم متحركة | Noir / أسود | minimalism |
| `minimalism/Rhythm.jpg` | JPEG | 800 × 799 | `af-2ffb4fa3a7` | Rythme géométrique | إيقاع هندسي | Rouge / أحمر | minimalism |
| `minimalism/Sun-Rise-1.jpg` | JPEG | 1254 × 1254 | `af-e019b0229f` | Lever de soleil | شروق الشمس | Rose / وردي | minimalism, nature |
| `nature/Sun-Rise-1.jpg` | JPEG | 1254 × 1254 | `af-e019b0229f` | Lever de soleil | شروق الشمس | Rose / وردي | minimalism, nature |
| `minimalism/Tranquility.jpg` | JPEG | 800 × 800 | `af-f39ed2ced8` | Sérénité | سكينة | Multicolore / متعدد الألوان | minimalism |
| `minimalism/Yellow-Flowers.jpg` | JPEG | 900 × 900 | `af-393c437d5b` | Fleurs jaunes | زهور صفراء | Multicolore / متعدد الألوان | minimalism, nature |
| `nature/Yellow-Flowers.jpg` | JPEG | 900 × 900 | `af-393c437d5b` | Fleurs jaunes | زهور صفراء | Multicolore / متعدد الألوان | minimalism, nature |
| `minimalism/harmony.jpg` | JPEG | 1000 × 1000 | `af-8b248201b2` | Harmonie végétale | تناغم نباتي | Noir / أسود | minimalism |
| `minimalism/lilies-flowers.jpg` | JPEG | 1000 × 1000 | `af-a0fad66321` | Lys en esquisse | زنابق مرسومة | Multicolore / متعدد الألوان | minimalism |
| `minimalism/lineart-flowers.jpg` | JPEG | 900 × 900 | `af-c7a1c9d96a` | Fleurs au trait | أزهار بخطوط | Blanc / أبيض | minimalism |
| `minimalism/minimalist dream trio.jpg` | JPEG | 1464 × 1464 | `af-dc8fd88d16` | Trois paysages abstraits | ثلاثة مناظر تجريدية | Rouge / أحمر | minimalism |
| `minimalism/minimalist-bu-heavy.jpg` | JPEG | 647 × 647 | `af-ed5b91ae28` | Paysages bohèmes | مناظر بوهيمية | Multicolore / متعدد الألوان | minimalism |
| `minimalism/three minimaliste flowers.jpg` | JPEG | 834 × 834 | `af-a3f3c8f9a6` | Triptyque végétal | لوحة نباتية ثلاثية | Multicolore / متعدد الألوان | minimalism, nature |
| `nature/three minimaliste flowers.jpg` | JPEG | 834 × 834 | `af-a3f3c8f9a6` | Triptyque végétal | لوحة نباتية ثلاثية | Multicolore / متعدد الألوان | minimalism, nature |
| `nature/Artboard 1 copy.jpg` | JPEG | 801 × 801 | `af-62de268f75` | Ondulation chromatique 2 | لوحة متعدد الألوان مميزة 145 | Multicolore / متعدد الألوان | nature |
| `nature/Artboard 11 copy.jpg` | JPEG | 801 × 801 | `af-179977ca05` | Élégance chromatique 2 | لوحة متعدد الألوان مميزة 146 | Multicolore / متعدد الألوان | nature |
| `nature/Artboard 11.jpg` | JPEG | 801 × 801 | `af-394bc789dc` | Perspective chromatique 2 | لوحة متعدد الألوان مميزة 147 | Multicolore / متعدد الألوان | nature |
| `nature/Artboard 12 copy.jpg` | JPEG | 801 × 801 | `af-34ef5f9faa` | Poésie chromatique 2 | لوحة متعدد الألوان مميزة 148 | Multicolore / متعدد الألوان | nature |
| `nature/Artboard 12.jpg` | JPEG | 801 × 801 | `af-f44484ec57` | Envol chromatique 2 | لوحة متعدد الألوان مميزة 149 | Multicolore / متعدد الألوان | nature |
| `nature/Artboard 13 copy.jpg` | JPEG | 801 × 801 | `af-a39d279c8f` | Énergie chromatique 2 | لوحة متعدد الألوان مميزة 150 | Multicolore / متعدد الألوان | nature |
| `nature/Artboard 13.jpg` | JPEG | 801 × 801 | `af-99d8711701` | Mélodie chromatique 2 | لوحة متعدد الألوان مميزة 151 | Multicolore / متعدد الألوان | nature |
| `nature/Artboard 2 copy 2.png` | PNG | 1001 × 1001 | `af-da85f2a934` | Fluidité brume 2 | لوحة رمادي مميزة 152 | Gris / رمادي | nature |
| `nature/Artboard 3 copy 14.png` | PNG | 1255 × 1255 | `af-ed1b293e5b` | Sérénité chromatique 2 | لوحة متعدد الألوان مميزة 153 | Multicolore / متعدد الألوان | nature |
| `nature/Artboard 3 copy 2.png` | PNG | 1255 × 1255 | `af-62d80faad8` | Vibration ambre 2 | لوحة برتقالي مميزة 154 | Orange / برتقالي | nature |
| `nature/Artboard 3 copy 3.png` | PNG | 1255 × 1255 | `af-c4be94df06` | Promesse chromatique 2 | لوحة متعدد الألوان مميزة 155 | Multicolore / متعدد الألوان | nature |
| `nature/Artboard 3 copy 5.png` | PNG | 1255 × 1255 | `af-df10756785` | Voyage chromatique 2 | لوحة متعدد الألوان مميزة 156 | Multicolore / متعدد الألوان | nature |
| `nature/Artboard 3 copy 9.png` | PNG | 1255 × 1255 | `af-189ae7093b` | Sensation chromatique 2 | لوحة متعدد الألوان مميزة 157 | Multicolore / متعدد الألوان | nature |
| `nature/Artboard 3 copy.jpg` | JPEG | 801 × 801 | `af-7764a58f3c` | Symphonie chromatique 2 | لوحة متعدد الألوان مميزة 158 | Multicolore / متعدد الألوان | nature |
| `nature/Artboard 3.png` | PNG | 1255 × 1255 | `af-e5ba3cb01a` | Été ambre 2 | لوحة برتقالي مميزة 159 | Orange / برتقالي | nature |
| `nature/Artboard 4 copy.jpg` | JPEG | 801 × 801 | `af-4d5aef1f64` | Trame ambre 2 | لوحة برتقالي مميزة 160 | Orange / برتقالي | nature |
| `nature/Artboard 6.jpg` | JPEG | 801 × 801 | `af-aae9b90123` | Rencontre chromatique 2 | لوحة متعدد الألوان مميزة 161 | Multicolore / متعدد الألوان | nature |
| `nature/Artboard 7 copy.png` | PNG | 1001 × 1001 | `af-73ea81c313` | Racines chromatique 2 | لوحة متعدد الألوان مميزة 162 | Multicolore / متعدد الألوان | nature |
| `nature/Artboard 7.jpg` | JPEG | 801 × 801 | `af-047620abed` | Émergence chromatique 2 | لوحة متعدد الألوان مميزة 163 | Multicolore / متعدد الألوان | nature |
| `nature/Artboard-8-copy.jpg` | JPEG | 800 × 800 | `af-3d2915dca6` | Pulsation chromatique 2 | لوحة متعدد الألوان مميزة 164 | Multicolore / متعدد الألوان | nature |
| `nature/B&W-Tree.jpg` | JPEG | 800 × 800 | `af-37d201b7a3` | Arbre en noir et blanc | شجرة بالأبيض والأسود | Multicolore / متعدد الألوان | nature |
| `nature/Beautiful-Place.jpg` | JPEG | 900 × 900 | `af-d8429822ea` | Un lieu paisible | مكان هادئ | Bleu / أزرق | nature |
| `nature/Blue-Wave.jpg` | JPEG | 800 × 800 | `af-8abc7c0d77` | Vague bleue | موجة زرقاء | Gris / رمادي | nature |
| `nature/Carnation-Flowers.jpg` | JPEG | 900 × 900 | `af-696205ae08` | Œillets en bouquet | باقة قرنفل | Noir / أسود | nature |
| `nature/Chinese-Fields.jpg` | JPEG | 800 × 800 | `af-add7b18996` | Champs en mouvement | حقول متحركة | Multicolore / متعدد الألوان | nature |
| `nature/Clean-Beach.jpg` | JPEG | 800 × 800 | `af-a057244e05` | Rivage clair | شاطئ صافٍ | Gris / رمادي | nature |
| `nature/Crane-at-Lake.jpg` | JPEG | 800 × 800 | `af-c6dcf5589c` | La grue au lac | طائر الكركي عند البحيرة | Orange / برتقالي | nature |
| `nature/Crescent.jpg` | JPEG | 800 × 800 | `af-a786329f8f` | Croissant de lune | هلال القمر | Noir / أسود | nature |
| `nature/Dreamer-Girl.jpg` | JPEG | 800 × 800 | `af-976f09a729` | Rêverie florale | حلم زهري | Multicolore / متعدد الألوان | nature |
| `nature/Excellency.jpg` | JPEG | 799 × 800 | `af-005ae594aa` | Fleur d’excellence | زهرة التميز | Multicolore / متعدد الألوان | nature |
| `nature/Faraway.jpg` | JPEG | 800 × 800 | `af-9353fd3f4f` | Soleil lointain | شمس بعيدة | Bleu / أزرق | nature |
| `nature/Golden-Mountain.jpg` | JPEG | 800 × 800 | `af-787c769112` | Montagne dorée | جبل ذهبي | Gris / رمادي | nature |
| `nature/Green-field.jpg` | JPEG | 800 × 800 | `af-1fc2ecabd1` | Prairie lumineuse | مرج مضيء | Vert / أخضر | nature |
| `nature/Hummingbird.jpg` | JPEG | 900 × 900 | `af-bfb0e07b55` | Colibri dans les fleurs | طائر الطنان بين الزهور | Bleu / أزرق | nature |
| `nature/Jungle.jpg` | JPEG | 900 × 900 | `af-e7afd9db36` | Jardin tropical | حديقة استوائية | Bleu / أزرق | nature |
| `nature/Lady-Rosa.jpg` | JPEG | 1500 × 1500 | `af-08b59e6bfa` | Portrait aux roses | صورة بين الورود | Multicolore / متعدد الألوان | nature |
| `nature/Meditaion.jpg` | JPEG | 900 × 900 | `af-ff7f35b8a5` | Méditation au bord de l’eau | تأمل قرب الماء | Multicolore / متعدد الألوان | nature |
| `nature/Minimal-Poppies.jpg` | JPEG | 800 × 800 | `af-b17c387595` | Coquelicots épurés | خشخاش بسيط | Multicolore / متعدد الألوان | nature |
| `nature/Peaceful-spot.jpg` | JPEG | 800 × 800 | `af-d77972151b` | Un paysage serein | منظر هادئ | Bleu / أزرق | nature |
| `nature/Purple-flower.jpg` | JPEG | 1500 × 1500 | `af-6f4d0113b0` | Fleur violette | زهرة بنفسجية | Multicolore / متعدد الألوان | nature |
| `nature/Romantic-lake-view.jpg` | JPEG | 800 × 800 | `af-66bc5c1862` | Lac au crépuscule | بحيرة عند الغروب | Gris / رمادي | nature |
| `nature/Royal-Poppies-2.jpg` | JPEG | 800 × 800 | `af-5e7290eac1` | Coquelicots royaux | خشخاش ملكي | Orange / برتقالي | nature |
| `nature/Sakura-tree-painting.jpg` | JPEG | 800 × 800 | `af-4de370a3b8` | Sakura rouge | ساكورا حمراء | Multicolore / متعدد الألوان | nature |
| `nature/Spring-Bird.jpg` | JPEG | 1800 × 1800 | `af-e659efdf9d` | Oiseau du printemps | طائر الربيع | Bleu / أزرق | nature |
| `nature/Trees-Branches.jpg` | JPEG | 800 × 800 | `af-deaa421f25` | Branches en lumière | أغصان مضيئة | Multicolore / متعدد الألوان | nature |
| `nature/Two-flowers-.jpg` | JPEG | 800 × 800 | `af-bcdf144df8` | Deux tulipes | زهرتا توليب | Multicolore / متعدد الألوان | nature |
| `nature/White-butterflies.jpg` | JPEG | 800 × 800 | `af-df7c3e3eba` | Papillons blancs | فراشات بيضاء | Orange / برتقالي | nature |
| `nature/butterflie-and-flower.jpg` | JPEG | 800 × 799 | `af-b5a76fd2f1` | Papillon et fleur | فراشة وزهرة | Multicolore / متعدد الألوان | nature |
| `nature/country-side.jpg` | JPEG | 1000 × 1000 | `af-c50431c5e1` | Paysage de campagne | ريف هادئ | Noir / أسود | nature |
| `nature/flourish.jpg` | JPEG | 800 × 800 | `af-c750fa2991` | Éclosion bleue | تفتح أزرق | Bleu / أزرق | nature |
| `nature/lineart-flowers-side.jpg` | JPEG | 800 × 800 | `af-b454e2051d` | Fleurs en diptyque | لوحتان للأزهار | Gris / رمادي | nature |
| `nature/pink-flowers.jpg` | JPEG | 800 × 800 | `af-86f5589ea3` | Bouquet de roses | باقة ورود | Orange / برتقالي | nature |
| `nature/roses-painting.jpg` | JPEG | 800 × 799 | `af-b0b4fabffc` | Bouquet en fleurs | باقة مزهرة | Noir / أسود | nature |
| `nature/sakura-tree.jpg` | JPEG | 1000 × 1000 | `af-fbe9f45a23` | Branches de sakura | أغصان الساكورا | Multicolore / متعدد الألوان | nature |
| `nature/sakura.jpg` | JPEG | 800 × 800 | `af-9bed720771` | Fleurs de cerisier | أزهار الكرز | Multicolore / متعدد الألوان | nature |

## Notes

Dominant colors are assigned automatically from a central crop of each mockup image, reducing the influence of room edges and margins. A small number of staged images may still include wall color; review is recommended. The source storefront showed multiple prices, so a single shared price and product dimensions are not confirmed. Both remain unset in `src/config/store.ts`.

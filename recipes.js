// ============================================================
// RECIPE DATABASE
// Add your own recipes by copying an object below and editing it.
// ingredients: use simple lowercase names (matches ingredient search)
// mealTypes: any of "breakfast", "lunch", "snacks", "dinner"
// cuisine: freeform, but keep consistent spelling for filters to work well
// veg: true / false
// mood: any of "spicy","sweet","sour","chocolate","comfort","quick","light","heavy","tangy","festive"
// time: minutes, rough estimate
// ============================================================

const RECIPES = [
  {
    id: "aloo-paratha",
    name: "Aloo Paratha",
    cuisine: "North Indian",
    mealTypes: ["breakfast", "dinner"],
    veg: true,
    mood: ["comfort", "heavy"],
    time: 35,
    ingredients: ["wheat flour", "potato", "onion", "green chilli", "coriander leaves", "ghee", "cumin", "salt"],
    steps: [
      "Boil and mash potatoes. Mix with chopped onion, green chilli, coriander, cumin and salt.",
      "Make a soft dough with wheat flour and water. Rest 15 minutes.",
      "Stuff dough balls with the potato mix, roll gently into flat parathas.",
      "Cook on a hot tawa with ghee till golden spots appear on both sides.",
      "Serve hot with curd or pickle."
    ]
  },
  {
    id: "poha",
    name: "Kanda Poha",
    cuisine: "Maharashtrian",
    mealTypes: ["breakfast", "snacks"],
    veg: true,
    mood: ["quick", "light"],
    time: 20,
    ingredients: ["poha", "onion", "peanuts", "mustard seeds", "curry leaves", "turmeric", "green chilli", "lemon", "coriander leaves"],
    steps: [
      "Rinse flattened rice (poha) in water till soft, drain and set aside.",
      "Heat oil, crackle mustard seeds, add curry leaves, chopped onion and green chilli, sauté till onion softens.",
      "Add peanuts and turmeric, then the poha. Mix gently, add salt.",
      "Cook 3-4 minutes covered, finish with lemon juice and coriander."
    ]
  },
  {
    id: "masala-dosa",
    name: "Masala Dosa",
    cuisine: "South Indian",
    mealTypes: ["breakfast", "dinner"],
    veg: true,
    mood: ["comfort", "heavy"],
    time: 40,
    ingredients: ["dosa batter", "potato", "onion", "mustard seeds", "curry leaves", "turmeric", "ghee"],
    steps: [
      "Boil and mash potatoes coarsely for the filling.",
      "Crackle mustard seeds and curry leaves in oil, add onion, sauté till soft, add turmeric and potato, mix and cook 5 minutes.",
      "Spread dosa batter thin on a hot tawa in a circular motion, drizzle ghee around the edges.",
      "Once crisp, place potato filling in the centre, fold and serve with coconut chutney and sambar."
    ]
  },
  {
    id: "idli-sambar",
    name: "Idli with Sambar",
    cuisine: "South Indian",
    mealTypes: ["breakfast", "dinner"],
    veg: true,
    mood: ["light", "comfort"],
    time: 25,
    ingredients: ["idli batter", "toor dal", "tamarind", "sambar powder", "drumstick", "tomato", "mustard seeds", "curry leaves"],
    steps: [
      "Steam idli batter in greased moulds for 10-12 minutes till a knife comes out clean.",
      "Cook toor dal till soft, mash lightly.",
      "In a pot, add tamarind water, vegetables, sambar powder and cooked dal, simmer 10 minutes.",
      "Temper with mustard seeds and curry leaves in oil, pour over the sambar.",
      "Serve idli hot with sambar and coconut chutney."
    ]
  },
  {
    id: "shorshe-ilish",
    name: "Shorshe Ilish (Hilsa in Mustard Gravy)",
    cuisine: "Bengali",
    mealTypes: ["lunch", "dinner"],
    veg: false,
    mood: ["spicy", "tangy", "festive"],
    time: 30,
    ingredients: ["hilsa fish", "mustard seeds", "green chilli", "turmeric", "mustard oil", "nigella seeds"],
    steps: [
      "Soak mustard seeds and green chilli in water 20 minutes, grind to a smooth paste.",
      "Marinate fish pieces with turmeric and salt.",
      "Heat mustard oil, temper with nigella seeds, add mustard paste and a little water, bring to a simmer.",
      "Slide in the fish pieces, cover and cook 8-10 minutes without over-stirring.",
      "Finish with a drizzle of raw mustard oil and green chilli slit on top."
    ]
  },
  {
    id: "aloo-posto",
    name: "Aloo Posto",
    cuisine: "Bengali",
    mealTypes: ["lunch", "dinner"],
    veg: true,
    mood: ["comfort", "light"],
    time: 25,
    ingredients: ["potato", "poppy seeds", "green chilli", "mustard oil", "nigella seeds", "turmeric"],
    steps: [
      "Soak poppy seeds 20 minutes, grind to a paste with one green chilli.",
      "Heat mustard oil, temper with nigella seeds, add diced potatoes and turmeric, sauté 5 minutes.",
      "Add poppy seed paste and a splash of water, cover and cook till potatoes are soft.",
      "Adjust salt, finish with a raw green chilli on top."
    ]
  },
  {
    id: "cholar-dal",
    name: "Cholar Dal",
    cuisine: "Bengali",
    mealTypes: ["lunch", "dinner"],
    veg: true,
    mood: ["sweet", "comfort", "festive"],
    time: 40,
    ingredients: ["chana dal", "coconut", "bay leaf", "cumin", "ghee", "raisins", "sugar"],
    steps: [
      "Pressure cook chana dal with turmeric and salt till soft but holding shape.",
      "Heat ghee, fry sliced coconut pieces and raisins till golden, set aside.",
      "In the same ghee, temper bay leaf and cumin, add the cooked dal, a little sugar, simmer 10 minutes.",
      "Top with the fried coconut and raisins before serving."
    ]
  },
  {
    id: "chicken-chowmein",
    name: "Chicken Chowmein (Indo-Chinese)",
    cuisine: "Indo-Chinese",
    mealTypes: ["dinner", "snacks"],
    veg: false,
    mood: ["spicy", "quick", "comfort"],
    time: 25,
    ingredients: ["noodles", "chicken", "cabbage", "carrot", "capsicum", "soy sauce", "garlic", "spring onion", "vinegar"],
    steps: [
      "Boil noodles al dente, toss with a little oil so they don't stick.",
      "Stir-fry sliced chicken on high heat till cooked, set aside.",
      "In the same wok, stir-fry garlic, then julienned cabbage, carrot and capsicum on high flame.",
      "Add chicken back, then noodles, soy sauce and vinegar, toss everything together for 2 minutes.",
      "Garnish with spring onion greens."
    ]
  },
  {
    id: "veg-manchurian",
    name: "Veg Manchurian (Dry)",
    cuisine: "Indo-Chinese",
    mealTypes: ["snacks", "dinner"],
    veg: true,
    mood: ["spicy", "chilli", "comfort"],
    time: 35,
    ingredients: ["cabbage", "carrot", "cornflour", "garlic", "ginger", "soy sauce", "green chilli", "spring onion"],
    steps: [
      "Mix grated cabbage and carrot with cornflour, salt and a little water, shape into small balls, deep fry till golden.",
      "Heat oil, sauté chopped garlic, ginger and green chilli, add soy sauce and a splash of water with a pinch of cornflour to thicken slightly.",
      "Toss the fried balls in this sauce till coated.",
      "Garnish with spring onion, serve hot."
    ]
  },
  {
    id: "momo",
    name: "Steamed Chicken Momo",
    cuisine: "Nepali",
    mealTypes: ["snacks", "dinner"],
    veg: false,
    mood: ["comfort", "spicy"],
    time: 50,
    ingredients: ["maida", "chicken mince", "onion", "garlic", "ginger", "soy sauce", "coriander leaves"],
    steps: [
      "Make a stiff dough with maida and water, rest 20 minutes.",
      "Mix minced chicken with finely chopped onion, garlic, ginger, soy sauce, coriander and salt.",
      "Roll dough into small circles, place filling in the centre and pleat into momo shapes.",
      "Steam for 12-15 minutes till the wrapper turns glossy.",
      "Serve with spicy tomato-sesame chutney."
    ]
  },
  {
    id: "dal-bhat-tarkari",
    name: "Dal Bhat Tarkari",
    cuisine: "Nepali",
    mealTypes: ["lunch", "dinner"],
    veg: true,
    mood: ["comfort", "light"],
    time: 40,
    ingredients: ["rice", "lentils", "potato", "cauliflower", "cumin", "turmeric", "garlic"],
    steps: [
      "Cook rice separately till fluffy.",
      "Boil lentils with turmeric till soft, temper with cumin and garlic in ghee.",
      "Sauté potato and cauliflower with turmeric, cumin and salt till tender for the tarkari.",
      "Serve rice with dal, tarkari, and a side pickle."
    ]
  },
  {
    id: "chole-bhature",
    name: "Chole Bhature",
    cuisine: "North Indian",
    mealTypes: ["breakfast", "lunch"],
    veg: true,
    mood: ["spicy", "heavy", "festive"],
    time: 50,
    ingredients: ["chickpeas", "maida", "curd", "onion", "tomato", "chole masala", "ginger", "garlic"],
    steps: [
      "Soak chickpeas overnight, pressure cook till soft.",
      "Make a masala with onion, tomato, ginger-garlic and chole masala, add chickpeas and simmer till thick.",
      "For bhature, knead maida with curd and a little oil, rest 3-4 hours, roll and deep fry till puffed.",
      "Serve hot chole with bhature, sliced onion and pickle."
    ]
  },
  {
    id: "rajma-chawal",
    name: "Rajma Chawal",
    cuisine: "North Indian",
    mealTypes: ["lunch", "dinner"],
    veg: true,
    mood: ["comfort", "heavy"],
    time: 45,
    ingredients: ["kidney beans", "rice", "onion", "tomato", "ginger", "garlic", "garam masala"],
    steps: [
      "Soak rajma overnight, pressure cook till soft.",
      "Make a base of sautéed onion, ginger-garlic and tomato, add garam masala.",
      "Add cooked rajma with its water, simmer 15-20 minutes till gravy thickens.",
      "Serve hot over steamed rice."
    ]
  },
  {
    id: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    cuisine: "North Indian",
    mealTypes: ["lunch", "dinner"],
    veg: true,
    mood: ["comfort", "heavy", "festive"],
    time: 35,
    ingredients: ["paneer", "tomato", "cashew", "butter", "cream", "ginger", "garlic", "garam masala"],
    steps: [
      "Simmer tomato, cashew, ginger and garlic together, cool and blend to a smooth paste.",
      "Cook the paste in butter till it thickens and the raw smell goes.",
      "Add garam masala, a little sugar, and paneer cubes, simmer 5 minutes.",
      "Finish with a swirl of cream."
    ]
  },
  {
    id: "egg-curry",
    name: "Egg Curry",
    cuisine: "North Indian",
    mealTypes: ["lunch", "dinner"],
    veg: false,
    mood: ["spicy", "comfort", "quick"],
    time: 30,
    ingredients: ["egg", "onion", "tomato", "ginger", "garlic", "turmeric", "red chilli powder"],
    steps: [
      "Boil eggs, peel and lightly slit or fry them till golden.",
      "Make a gravy base with onion, tomato, ginger-garlic, turmeric and red chilli powder.",
      "Add water to desired consistency, simmer 10 minutes.",
      "Add the eggs, simmer 5 more minutes so they soak up the gravy."
    ]
  },
  {
    id: "luchi-alur-dom",
    name: "Luchi with Alur Dom",
    cuisine: "Bengali",
    mealTypes: ["breakfast", "lunch"],
    veg: true,
    mood: ["comfort", "heavy", "festive"],
    time: 40,
    ingredients: ["maida", "baby potato", "tomato", "ginger", "cumin", "bay leaf", "ghee"],
    steps: [
      "Knead a stiff maida dough with ghee, rest 20 minutes, roll into small discs.",
      "Deep fry the discs on high heat till puffed for luchi.",
      "For alur dom, fry small boiled potatoes till golden, set aside.",
      "Make a gravy with tomato, ginger, cumin and bay leaf, add potatoes back, simmer till coated in a thick sauce.",
      "Serve luchi hot with alur dom."
    ]
  },
  {
    id: "bhindi-masala",
    name: "Bhindi Masala",
    cuisine: "North Indian",
    mealTypes: ["lunch", "dinner"],
    veg: true,
    mood: ["light", "quick"],
    time: 25,
    ingredients: ["okra", "onion", "tomato", "turmeric", "cumin", "coriander powder"],
    steps: [
      "Wash and thoroughly dry okra, slice into rounds.",
      "Sauté okra alone on medium-high heat till it stops being sticky, set aside.",
      "In the same pan, sauté onion and tomato with turmeric, cumin and coriander powder.",
      "Add okra back, toss together for 3-4 minutes, finish with salt."
    ]
  },
  {
    id: "gobi-manchurian",
    name: "Gobi Manchurian",
    cuisine: "Indo-Chinese",
    mealTypes: ["snacks"],
    veg: true,
    mood: ["spicy", "chilli", "quick"],
    time: 30,
    ingredients: ["cauliflower", "cornflour", "maida", "garlic", "soy sauce", "green chilli", "spring onion"],
    steps: [
      "Dip cauliflower florets in a batter of maida, cornflour and water, deep fry till crisp.",
      "Sauté garlic and green chilli, add soy sauce and a little water with cornflour slurry to thicken.",
      "Toss the fried florets in the sauce.",
      "Garnish with spring onion, serve immediately while crisp."
    ]
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    cuisine: "North Indian",
    mealTypes: ["snacks", "dinner"],
    veg: true,
    mood: ["sweet", "festive"],
    time: 40,
    ingredients: ["khoya", "maida", "sugar", "cardamom", "ghee"],
    steps: [
      "Make a sugar syrup with sugar, water and crushed cardamom, keep warm.",
      "Knead khoya with a little maida into a smooth, crack-free dough.",
      "Shape into smooth balls, deep fry on low-medium heat till evenly dark golden.",
      "Drop hot jamuns into warm syrup, soak at least 30 minutes before serving."
    ]
  },
  {
    id: "mishti-doi",
    name: "Mishti Doi",
    cuisine: "Bengali",
    mealTypes: ["snacks", "dinner"],
    veg: true,
    mood: ["sweet", "festive", "light"],
    time: 20,
    ingredients: ["milk", "sugar", "curd starter"],
    steps: [
      "Simmer milk till reduced by a third, stirring occasionally.",
      "Caramelise sugar separately to a deep brown, mix into the reduced milk, cool to lukewarm.",
      "Whisk in a spoon of curd as starter, pour into earthen pots.",
      "Set in a warm place for 6-8 hours until set."
    ]
  },
  {
    id: "chocolate-mug-cake",
    name: "5-Minute Chocolate Mug Cake",
    cuisine: "Fusion",
    mealTypes: ["snacks"],
    veg: true,
    mood: ["chocolate", "sweet", "quick", "comfort"],
    time: 8,
    ingredients: ["wheat flour", "cocoa powder", "sugar", "milk", "oil", "baking powder"],
    steps: [
      "In a mug, whisk flour, cocoa powder, sugar and baking powder together.",
      "Add milk and oil, mix till smooth with no lumps.",
      "Microwave on high for 90 seconds to 2 minutes till risen and set.",
      "Let it cool slightly before eating straight from the mug."
    ]
  },
  {
    id: "bread-pakora",
    name: "Bread Pakora",
    cuisine: "North Indian",
    mealTypes: ["snacks"],
    veg: true,
    mood: ["spicy", "comfort", "quick"],
    time: 20,
    ingredients: ["bread", "besan", "potato", "green chilli", "turmeric", "chaat masala"],
    steps: [
      "Mash boiled potato with green chilli and chaat masala, spread between two bread slices, cut diagonally.",
      "Make a batter with besan, turmeric, salt and water.",
      "Dip the bread triangles in batter and deep fry till golden and crisp.",
      "Serve hot with green chutney."
    ]
  },
  {
    id: "chilli-chicken",
    name: "Chilli Chicken (Dry)",
    cuisine: "Indo-Chinese",
    mealTypes: ["snacks", "dinner"],
    veg: false,
    mood: ["spicy", "chilli", "comfort"],
    time: 35,
    ingredients: ["chicken", "cornflour", "capsicum", "onion", "garlic", "soy sauce", "green chilli", "vinegar"],
    steps: [
      "Marinate chicken pieces in soy sauce, a little cornflour and salt, deep fry till golden and crisp.",
      "Sauté garlic, cubed onion and capsicum on high heat, add soy sauce, vinegar and green chilli.",
      "Toss the fried chicken through, cook 2 minutes on high flame so the sauce clings.",
      "Serve immediately while crisp."
    ]
  },
  {
    id: "misti-alu-chaat",
    name: "Aloo Chaat",
    cuisine: "North Indian",
    mealTypes: ["snacks"],
    veg: true,
    mood: ["tangy", "spicy", "quick"],
    time: 20,
    ingredients: ["potato", "chaat masala", "tamarind", "curd", "sev", "coriander leaves"],
    steps: [
      "Boil and cube potatoes, shallow fry till edges turn crisp.",
      "Toss with chaat masala and a little salt.",
      "Plate and top with curd, tamarind chutney, sev and coriander.",
      "Serve immediately while the potatoes are still warm."
    ]
  },
  {
    id: "sabudana-khichdi",
    name: "Sabudana Khichdi",
    cuisine: "Maharashtrian",
    mealTypes: ["breakfast", "snacks"],
    veg: true,
    mood: ["light", "comfort", "quick"],
    time: 25,
    ingredients: ["sabudana", "peanuts", "potato", "green chilli", "cumin", "lemon"],
    steps: [
      "Soak sabudana in just enough water overnight till pearls turn soft and separate.",
      "Heat oil, crackle cumin, add diced potato and green chilli, cook till potato is soft.",
      "Add soaked sabudana and crushed peanuts, mix gently on low heat till translucent.",
      "Finish with lemon juice and salt."
    ]
  },
  {
    id: "besan-chilla",
    name: "Besan Chilla",
    cuisine: "North Indian",
    mealTypes: ["breakfast"],
    veg: true,
    mood: ["light", "quick"],
    time: 15,
    ingredients: ["besan", "onion", "tomato", "green chilli", "coriander leaves", "turmeric"],
    steps: [
      "Whisk besan with water into a smooth, pourable batter, season with turmeric and salt.",
      "Mix in finely chopped onion, tomato, green chilli and coriander.",
      "Pour a ladle onto a hot greased tawa, spread thin, cook both sides till golden.",
      "Serve hot with chutney or ketchup."
    ]
  },
  {
    id: "chicken-biryani",
    name: "Chicken Biryani",
    cuisine: "North Indian",
    mealTypes: ["lunch", "dinner"],
    veg: false,
    mood: ["heavy", "spicy", "festive"],
    time: 70,
    ingredients: ["chicken", "basmati rice", "onion", "curd", "biryani masala", "mint", "saffron", "ghee"],
    steps: [
      "Marinate chicken in curd, biryani masala and ginger-garlic paste for at least an hour.",
      "Fry sliced onions till deep golden and crisp, set aside as birista.",
      "Par-boil rice with whole spices till 70% done, drain.",
      "Layer marinated chicken, then rice, then birista, mint and a little saffron milk.",
      "Cover tightly and cook on low heat (dum) for 25-30 minutes before mixing gently and serving."
    ]
  },
  {
    id: "veg-fried-rice",
    name: "Veg Fried Rice",
    cuisine: "Indo-Chinese",
    mealTypes: ["lunch", "dinner"],
    veg: true,
    mood: ["quick", "comfort", "light"],
    time: 20,
    ingredients: ["rice", "carrot", "beans", "capsicum", "spring onion", "soy sauce", "garlic"],
    steps: [
      "Use a day-old cold rice so grains stay separate.",
      "Sauté garlic, then finely diced carrot, beans and capsicum on high heat.",
      "Add rice and soy sauce, toss continuously on high flame for 3-4 minutes.",
      "Finish with spring onion greens."
    ]
  },
  {
    id: "dhokla",
    name: "Khaman Dhokla",
    cuisine: "Gujarati",
    mealTypes: ["breakfast", "snacks"],
    veg: true,
    mood: ["light", "tangy", "quick"],
    time: 30,
    ingredients: ["besan", "curd", "eno", "mustard seeds", "green chilli", "sugar", "lemon"],
    steps: [
      "Whisk besan with curd, water, a little sugar and salt into a smooth batter.",
      "Just before steaming, add eno and a splash of water, mix gently till frothy.",
      "Pour into a greased tin, steam for 15-18 minutes till a knife comes out clean.",
      "Temper mustard seeds and green chilli in oil with a little water and sugar, pour over the cooled dhokla, cut into squares."
    ]
  },
  {
    id: "matar-paneer",
    name: "Matar Paneer",
    cuisine: "North Indian",
    mealTypes: ["lunch", "dinner"],
    veg: true,
    mood: ["comfort", "light"],
    time: 30,
    ingredients: ["paneer", "green peas", "tomato", "onion", "ginger", "garam masala"],
    steps: [
      "Sauté onion, ginger-garlic till golden, add tomato puree and cook till oil separates.",
      "Add garam masala, green peas and a little water, simmer till peas are tender.",
      "Add paneer cubes, simmer 5 minutes, adjust salt.",
      "Serve hot with roti or rice."
    ]
  },
  {
    id: "fish-curry-bengali",
    name: "Bengali Machher Jhol",
    cuisine: "Bengali",
    mealTypes: ["lunch", "dinner"],
    veg: false,
    mood: ["light", "comfort"],
    time: 35,
    ingredients: ["fish", "potato", "tomato", "turmeric", "cumin", "mustard oil", "green chilli"],
    steps: [
      "Marinate fish pieces with turmeric and salt, shallow fry lightly, set aside.",
      "In the same mustard oil, temper cumin seeds, add potato and tomato, sauté with turmeric and cumin powder.",
      "Add water to make a thin gravy, simmer till potato is nearly done.",
      "Slide in the fried fish and slit green chillies, simmer 5-6 minutes."
    ]
  },
  {
    id: "veg-hakka-noodles",
    name: "Veg Hakka Noodles",
    cuisine: "Indo-Chinese",
    mealTypes: ["dinner", "snacks"],
    veg: true,
    mood: ["quick", "comfort"],
    time: 20,
    ingredients: ["noodles", "cabbage", "carrot", "capsicum", "soy sauce", "garlic", "vinegar", "spring onion"],
    steps: [
      "Boil noodles al dente, rinse in cold water and toss with a little oil.",
      "Stir-fry garlic, then julienned vegetables on high heat for 2 minutes so they stay crunchy.",
      "Add noodles, soy sauce and vinegar, toss everything on high flame for 2 minutes.",
      "Garnish with spring onion."
    ]
  },
  {
    id: "curd-rice",
    name: "Curd Rice",
    cuisine: "South Indian",
    mealTypes: ["lunch", "dinner"],
    veg: true,
    mood: ["light", "quick", "comfort"],
    time: 15,
    ingredients: ["rice", "curd", "mustard seeds", "curry leaves", "green chilli", "ginger"],
    steps: [
      "Mash cooked rice slightly while warm, mix in curd and a splash of milk to loosen.",
      "Temper mustard seeds, curry leaves, green chilli and grated ginger in oil.",
      "Pour tempering over the curd rice, mix well, season with salt.",
      "Chill slightly before serving, especially good in summer."
    ]
  },
  {
    id: "sev-tamatar",
    name: "Sev Tamatar Nu Shaak",
    cuisine: "Gujarati",
    mealTypes: ["lunch", "dinner"],
    veg: true,
    mood: ["tangy", "spicy", "quick"],
    time: 20,
    ingredients: ["tomato", "sev", "green chilli", "turmeric", "coriander leaves"],
    steps: [
      "Sauté chopped tomatoes with turmeric and salt till pulpy and slightly saucy.",
      "Add a little sugar and green chilli, simmer 5 minutes.",
      "Just before serving, mix in sev so it stays crunchy.",
      "Garnish with coriander, eat immediately while sev is crisp."
    ]
  }
];
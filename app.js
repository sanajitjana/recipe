// ============================================================
// APP LOGIC
// ============================================================

const COMMON_INGREDIENTS = [
  "potato", "onion", "tomato", "paneer", "rice", "wheat flour",
  "besan", "chicken", "egg", "curd", "green chilli"
];

const MEAL_OPTIONS = ["breakfast", "lunch", "snacks", "dinner"];
const MOOD_OPTIONS = ["spicy", "sweet", "sour", "tangy", "chocolate", "comfort", "quick", "light", "heavy", "festive"];

let state = {
  ingredients: [],       // strings the user has
  meal: new Set(),
  veg: null,             // null | "veg" | "nonveg"
  mood: new Set(),
  cuisine: new Set()
};

// ---------- Mode switching ----------

function switchMode(mode) {
  document.getElementById("panel-ingredients").classList.toggle("active", mode === "ingredients");
  document.getElementById("panel-browse").classList.toggle("active", mode === "browse");
  document.getElementById("tab-ingredients").classList.toggle("active", mode === "ingredients");
  document.getElementById("tab-browse").classList.toggle("active", mode === "browse");
}

// ---------- Ingredient panel ----------

function renderQuickAdd() {
  const el = document.getElementById("quick-add");
  el.innerHTML = "";
  COMMON_INGREDIENTS.forEach(ing => {
    const btn = document.createElement("button");
    btn.textContent = "+ " + ing;
    btn.onclick = () => addIngredient(ing);
    el.appendChild(btn);
  });
}

function addIngredientFromInput() {
  const input = document.getElementById("ingredient-text");
  const val = input.value.trim().toLowerCase();
  if (val) {
    addIngredient(val);
    input.value = "";
  }
  input.focus();
}

function addIngredient(name) {
  name = name.toLowerCase().trim();
  if (!name || state.ingredients.includes(name)) return;
  state.ingredients.push(name);
  renderSelectedIngredients();
  renderIngredientResults();
}

function removeIngredient(name) {
  state.ingredients = state.ingredients.filter(i => i !== name);
  renderSelectedIngredients();
  renderIngredientResults();
}

function renderSelectedIngredients() {
  const el = document.getElementById("selected-ingredients");
  el.innerHTML = "";
  state.ingredients.forEach(ing => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.innerHTML = `${ing} <button aria-label="remove">&times;</button>`;
    chip.querySelector("button").onclick = () => removeIngredient(ing);
    el.appendChild(chip);
  });
}

function renderIngredientResults() {
  const container = document.getElementById("ingredient-results");
  container.innerHTML = "";

  if (state.ingredients.length === 0) {
    container.innerHTML = `<div class="empty-state"><span class="display">Nothing added yet</span>Add a few things from your kitchen above and I'll find matching recipes.</div>`;
    return;
  }

  // score every recipe by how many of its ingredients we have
  const scored = RECIPES.map(r => {
    const have = r.ingredients.filter(ri => state.ingredients.some(mine => ri.includes(mine) || mine.includes(ri)));
    return { recipe: r, haveCount: have.length, haveList: have, total: r.ingredients.length };
  }).filter(s => s.haveCount > 0)
    .sort((a, b) => (b.haveCount / b.total) - (a.haveCount / a.total) || b.haveCount - a.haveCount);

  const meta = document.createElement("div");
  meta.className = "results-meta";
  meta.textContent = scored.length
    ? `${scored.length} recipe${scored.length === 1 ? "" : "s"} you can make, best match first`
    : "";
  container.appendChild(meta);

  if (scored.length === 0) {
    container.innerHTML += `<div class="empty-state"><span class="display">No matches yet</span>Try adding a core ingredient like rice, potato, or wheat flour.</div>`;
    return;
  }

  const grid = document.createElement("div");
  grid.className = "recipe-grid";
  scored.forEach(s => grid.appendChild(buildRecipeCard(s.recipe, s.haveList)));
  container.appendChild(grid);
}

// ---------- Browse panel ----------

function renderFilterOptions() {
  buildToggleGroup("filter-meal", MEAL_OPTIONS, state.meal, renderBrowseResults);
  buildToggleGroup("filter-mood", MOOD_OPTIONS, state.mood, renderBrowseResults);

  const cuisines = [...new Set(RECIPES.map(r => r.cuisine))].sort();
  buildToggleGroup("filter-cuisine", cuisines, state.cuisine, renderBrowseResults);

  const vegEl = document.getElementById("filter-veg");
  vegEl.innerHTML = "";
  [["veg", "Veg"], ["nonveg", "Non-veg"], [null, "Either"]].forEach(([val, label]) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.dataset.veg = val || "either";
    if (state.veg === val) btn.classList.add("active");
    btn.onclick = () => {
      state.veg = val;
      renderFilterOptions();
      renderBrowseResults();
    };
    vegEl.appendChild(btn);
  });
}

function buildToggleGroup(elId, options, stateSet, onChange) {
  const el = document.getElementById(elId);
  el.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    if (stateSet.has(opt)) btn.classList.add("active");
    btn.onclick = () => {
      if (stateSet.has(opt)) stateSet.delete(opt); else stateSet.add(opt);
      btn.classList.toggle("active");
      onChange();
    };
    el.appendChild(btn);
  });
}

function renderBrowseResults() {
  const container = document.getElementById("browse-results");
  container.innerHTML = "";

  let results = RECIPES.filter(r => {
    if (state.meal.size && !r.mealTypes.some(m => state.meal.has(m))) return false;
    if (state.mood.size && !r.mood.some(m => state.mood.has(m))) return false;
    if (state.cuisine.size && !state.cuisine.has(r.cuisine)) return false;
    if (state.veg === "veg" && !r.veg) return false;
    if (state.veg === "nonveg" && r.veg) return false;
    return true;
  });

  const anyFilter = state.meal.size || state.mood.size || state.cuisine.size || state.veg;

  const meta = document.createElement("div");
  meta.className = "results-meta";
  meta.textContent = anyFilter
    ? `${results.length} recipe${results.length === 1 ? "" : "s"} match`
    : `Showing all ${results.length} recipes — pick a filter above to narrow it down`;
  container.appendChild(meta);

  if (results.length === 0) {
    container.innerHTML += `<div class="empty-state"><span class="display">Nothing fits that combination</span>Try loosening one of the filters.</div>`;
    return;
  }

  const grid = document.createElement("div");
  grid.className = "recipe-grid";
  results.forEach(r => grid.appendChild(buildRecipeCard(r)));
  container.appendChild(grid);
}

// ---------- Shared: recipe card ----------

function buildRecipeCard(recipe, haveList) {
  const card = document.createElement("div");
  card.className = "recipe-card";
  card.onclick = () => openDetail(recipe.id);

  const dotClass = recipe.veg ? "veg-dot" : "veg-dot nonveg";

  const tagsHtml = recipe.ingredients.map(ing => {
    const matched = haveList && haveList.includes(ing);
    return `<span class="tag${matched ? " match" : ""}">${ing}</span>`;
  }).join("");

  card.innerHTML = `
    <div class="top-row">
      <h3>${recipe.name}</h3>
      <span class="${dotClass}" title="${recipe.veg ? "Veg" : "Non-veg"}"></span>
    </div>
    <div class="meta-line">${recipe.cuisine} · ${recipe.mealTypes.join(", ")} · ${recipe.time} min${haveList ? ` · ${haveList.length}/${recipe.ingredients.length} ingredients you have` : ""}</div>
    <div class="tag-row">${tagsHtml}</div>
  `;
  return card;
}

// ---------- Detail modal ----------

function openDetail(id) {
  const recipe = RECIPES.find(r => r.id === id);
  if (!recipe) return;

  const ingredientsHtml = recipe.ingredients.map(ing => {
    const have = state.ingredients.some(mine => ing.includes(mine) || mine.includes(ing));
    return `<li class="${have ? "have" : ""}">${ing}${have ? " ✓ have it" : ""}</li>`;
  }).join("");

  const stepsHtml = recipe.steps.map(s => `<li>${s}</li>`).join("");
  const tagsHtml = [...recipe.mood, ...recipe.mealTypes].map(t => `<span class="tag">${t}</span>`).join("");

  document.getElementById("detail-card").innerHTML = `
    <button class="close-btn" onclick="closeDetail()">&times;</button>
    <h2>${recipe.name}</h2>
    <div class="meta-line">${recipe.cuisine} · ${recipe.veg ? "Veg" : "Non-veg"} · ${recipe.time} min</div>
    <div class="tag-row">${tagsHtml}</div>
    <h4>Ingredients</h4>
    <ul class="ingredient-list">${ingredientsHtml}</ul>
    <h4>Method</h4>
    <ol>${stepsHtml}</ol>
  `;
  document.getElementById("detail-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDetail() {
  document.getElementById("detail-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

function closeDetailOnOverlay(e) {
  if (e.target.id === "detail-overlay") closeDetail();
}

// ---------- Init ----------

document.getElementById("ingredient-text").addEventListener("keydown", e => {
  if (e.key === "Enter") addIngredientFromInput();
});

renderQuickAdd();
renderSelectedIngredients();
renderIngredientResults();
renderFilterOptions();
renderBrowseResults();

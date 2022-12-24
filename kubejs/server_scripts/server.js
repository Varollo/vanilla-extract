// priority: 0
const PACK_NAME = "Varollo's Vanilla Extract"

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

onEvent('recipes', event => {
	const ctrl = recipeController.init_event(event);
	fixRecipes(ctrl)	
	customRecipes(ctrl)
	shortcutRecipes(ctrl)
	duplicateRecipes(ctrl)	
})
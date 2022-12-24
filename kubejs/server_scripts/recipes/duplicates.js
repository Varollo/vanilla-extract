function duplicateRecipes(controller) {
	/* === DUPLICATE REMOVAL === */
	console.info(`Resolving duplicate recipes for ${PACK_NAME}...`)

	// Fried egg
	controller.removeMany([
		controller.craft_types.SMELTING,
		controller.craft_types.CAMPFIRE,
		controller.craft_types.SMOKING
	], {
		input: ITEMS.egg,
	}).removeMany([
		controller.craft_types.SMELTING,
		controller.craft_types.CAMPFIRE,
		controller.craft_types.SMOKING
	], {
		input: TAGS.egg_forge
	}).addMany([
			controller.craft_types.SMELTING,
			controller.craft_types.CAMPFIRE,
			controller.craft_types.SMOKING
		],
		ITEMS.fried_egg,
		ITEMS.egg
	);
}

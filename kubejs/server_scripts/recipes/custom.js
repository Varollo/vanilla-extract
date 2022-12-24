function customRecipes(controller) {
	/* ==== CUSTOM RECIPES === */
	console.info(`Loading custom recipes for ${PACK_NAME}...`)

	// Steel recipe change to cooking on the blast furnace
	controller.remove({
		output: TAGS.steel_ingot
	}).add(
		controller.craft_types.BLASTING,
		ITEMS.steel_ingot, ITEMS.iron_ingot,
	).add(
		controller.craft_types.SHAPELESS,
		ITEMS.many(9, ITEMS.steel_ingot), ITEMS.steel_block,
	);

	// Rotten Flesh cooks into leather
	controller.addMany([
			controller.craft_types.SMELTING,
			controller.craft_types.CAMPFIRE,
			controller.craft_types.SMOKING
		],
		ITEMS.leather,
		ITEMS.rotten_flesh
	);

	// Name Tag recipe
	controller.add(
		controller.craft_types.SHAPELESS,
		ITEMS.name_tag, [
			TAGS.paper,
			TAGS.string
		]
	);

	// Glass panes back to glass
	controller.addShaped(
		ITEMS.many(3, ITEMS.glass), [
			'PPP',
			'P P',
			'PPP'
		], {
			P: ITEMS.glass_pane
		}
	);
}

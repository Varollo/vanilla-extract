function fixRecipes(controller) {
	/* === FIX RECIPES === */
	console.info(`Fixing broken recipes for ${PACK_NAME}...`)

	// gobber shield fix
	controller.remove({
		output: ITEMS.gobber_shield
	}).addShaped(
		ITEMS.gobber_shield, [
		'PGP',
		'PPP',
		' P '
	], {
		P: TAGS.plank,
		G: ITEMS.gobber_ingot
	}
	);
}

function shortcutRecipes(controller) {
	/* ==== SHORTCUT RECIPES === */
	console.info(`Adding shortcut recipes for ${PACK_NAME}...`)

	// Logs into sticks
	controller.addShaped(
		ITEMS.many(16, ITEMS.stick), [
		' L ',
		' L ',
		'   '
	], {
		L: TAGS.log
	}
	);

	// Logs into chests
	controller.addShaped(
		ITEMS.many(4, ITEMS.chest), [
		'LLL',
		'L L',
		'LLL'
	], {
		L: TAGS.log
	}
	);

	// Chestless hopper
	controller.addShaped(
		ITEMS.hopper, [
		'ILI',
		'ILI',
		' I '
	], {
		I: ITEMS.iron_ingot,
		L: TAGS.log
	}
	);

	// Bowless dispenser
	controller.addShaped(
		ITEMS.dispenser, [
		' TS',
		'TDS',
		' TS'
	], {
		D: ITEMS.dropper,
		S: ITEMS.string,
		T: ITEMS.stick
	}
	);
}

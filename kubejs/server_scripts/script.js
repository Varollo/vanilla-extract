// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

const craftingTypes = {
	blasting: 'minecraft:blasting'
}

const tags = {
	coal:  		 '#minecraft:coals',
	log: 	  	 '#minecraft:logs',
	plank: 	     '#minecraft:planks',
	steel_ingot: '#c:steel_ingot'
}

const items = {
	chest: 	 	 'minecraft:chest',
	dispenser: 	 'minecraft:dispenser',
	dropper: 	 'minecraft:dropper',
	hopper: 	 'minecraft:hopper',
	iron_ingot:  'minecraft:iron_ingot',
	stick: 		 'minecraft:stick',
	string:      'minecraft:string',
	steel_ingot: 'emerald_tools:steel_ingot',

	many: (amt, item) => `${amt}x ${item}`
}

console.info('Starting kubejs server script.')

onEvent('recipes', event => {
	/* ==== CUSTOM RECIPES */	
	console.info("Loading custom recipes for Varollo's Vanilla Extract...")

	// Steel recipe change to cooking on the blast furnace
	event.remove({output: tags.steel_ingot, type: craftingTypes.blasting})
	event.blasting(items.iron_ingot, items.steel_ingot)

	/* ==== SHORTCUT RECIPES */	
	console.info("Loading shortcut recipes for Varollo's Vanilla Extract...")

	// Logs into sticks
	event.shaped(items.many(16, items.stick), [
		' L ',
		' L ',
		'   '
	], {
		L: tags.log
	})

	// Logs into chests
	event.shaped(items.many(4, items.chest), [
		'LLL',
		'L L',
		'LLL'
	], {
		L: tags.log
	})

	// Chestless hopper
	event.shaped(items.hopper, [
		'ILI',
		'ILI',
		' I '
	], {
		I: tags.iron_ingot,
		L: tags.log
	})

	// Bowless dispenser
	event.shaped(items.dispenser, [
		' TS',
		'TDS',
		' TS'
	], {
		D: items.dropper,
		S: items.string,
		T: items.stick
	})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
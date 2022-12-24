// priority: 0
const recipeController = {
    /**
     *  Creates an instance of RecipeController.
     * @param {ServerEvents.recipes} recipeEvent 
    */
    init_event: function(recipeEvent) {
      this.register = recipeEvent;
      console.info('Server Recipe Controller Initialized.');
      return this;
    },
  
    /**
     * Controller's reference to the recipe event
     * @type {ServerEvents.recipes}
    */
    register: undefined,

    /**
     * Type of crafting
     * @enum {string}
    */    
    craft_types: {
      BLASTING:  "minecraft:blasting",
      CAMPFIRE:  "minecraft:campfire_cooking",
      SHAPED:    "minecraft:crafting_shaped",
      SHAPELESS: "minecraft:crafting_shapeless",
      SMELTING:  "minecraft:smelting",
      SMOKING:   "minecraft:smoking"
    },
  
    /**
     * Adds a new recipe to specified type.
     * 
     * **WARNING!:** This does not include **shaped** or **custom** crafting.
     * 
     * @see addShaped to add a shaped recipe
     * @param {string} craft_type Type of crafting
     * @param {string | string[]} items_out resulting items
     * @param {string | string[]} items_in required items
     * @returns itself for method chaining
    */
    add: function(craft_type, items_out, items_in) {
      this.register.recipes[craft_type.replace(':','_')](items_out, items_in);
      return this;
    },
  
    /**
     * @param {string | string[]} items_out resulting items
     * @param {string | string[]} items_in required items
     * @param {object} items_in_keys object with the key to required items
     * @example addShaped('64x minecraft.stick', [
     *       'LLL',
     *       'L L',
     *       'LLL'
     * ],{ L: '#minecraft:logs' })
     * @returns itself for method chaining
     */
    addShaped: function(items_out, items_in, items_in_keys) {
      this.register.shaped(items_out, items_in, items_in_keys);
      return this;
    },
  
    /**
     * Adds a new recipe to every specified type.
     * 
     * **WARNING!:** This does not include **shaped** or **custom** crafting.
     * 
     * @see addShaped to add a shaped recipe
     * @param {string[]} craft_types types of crafting
     * @param {string} items_out resulting items
     * @param {string} items_in required items
     * @returns itself for method chaining
    */
    addMany: function(craft_types, items_out, items_in) {
      craft_types.forEach(craft => this.add(craft, items_out, items_in));
      return this;
    },
  
    /**
     * 
     * @param {{output?: string, input?: string, mod?: string, recipe?: string, type?: string}} filters 
     * @returns itself for method chaining
    */
    remove: function(filters) { 
      this.register.remove(filters);
      return this;
    },

    /**
     * 
     * @param {string[]} craft_types types of crafting
     * @param {{output?: string, input?: string, mod?: string, recipe?: string}} filters 
     * @returns itself for method chaining
    */
    removeMany: function(craft_types, filters) {
        craft_types.forEach(t => {
            filters.type = t;
            this.remove(filters);
        })
        return this;
    }
}
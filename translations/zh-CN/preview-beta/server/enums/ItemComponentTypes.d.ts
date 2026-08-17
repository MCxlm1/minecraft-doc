/**
 * 可通过 ItemStack.getComponent 函数访问的
 * 物品组件类型。
 */
export enum ItemComponentTypes {
    /**
     * @beta
     */
    BlockDynamicProperties = 'minecraft:block_actor_dynamic_properties',
    /**
     * @remarks
     * minecraft:book 组件。
     *
     */
    Book = 'minecraft:book',
    Compostable = 'minecraft:compostable',
    /**
     * @remarks
     * minecraft:cooldown 组件。
     *
     */
    Cooldown = 'minecraft:cooldown',
    /**
     * @remarks
     * minecraft:durability 组件。
     *
     */
    Durability = 'minecraft:durability',
    Dyeable = 'minecraft:dyeable',
    /**
     * @remarks
     * minecraft:enchantable 组件。
     *
     */
    Enchantable = 'minecraft:enchantable',
    /**
     * @remarks
     * minecraft:food 组件。
     *
     */
    Food = 'minecraft:food',
    Inventory = 'minecraft:inventory',
    Potion = 'minecraft:potion',
}
/**
 * If added onto the entity, this indicates that the entity
 * represents a free-floating item in the world. Lets you
 * retrieve the actual item stack contents via the itemStack
 * property.
 * @example testThatEntityIsFeatherItem.ts
 * ```typescript
 * import { EntityItemComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
 *
 * function testThatEntityIsFeatherItem(
 *   log: (message: string, status?: number) => void,
 *   targetLocation: DimensionLocation
 * ) {
 *   const items = targetLocation.dimension.getEntities({
 *     location: targetLocation,
 *     maxDistance: 20,
 *   });
 *
 *   for (const item of items) {
 *     const itemComp = item.getComponent(EntityComponentTypes.Item) as EntityItemComponent;
 *
 *     if (itemComp) {
 *       if (itemComp.itemStack.typeId.endsWith('feather')) {
 *         log('Success! Found a feather', 1);
 *       }
 *     }
 *   }
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityItemComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Item stack represented by this entity in the world.
     *
     * @throws This property can throw when used.
     */
    readonly itemStack: ItemStack;
    static readonly componentId = 'minecraft:item';
}

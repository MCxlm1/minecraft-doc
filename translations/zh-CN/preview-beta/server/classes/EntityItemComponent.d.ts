/**
 * 如果添加到实体上，这表示该实体代表世界中一个自由漂浮的物品。允许你通过itemStack属性检索实际的物品实例内容。
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
     * 该实体在世界中所代表的物品实例。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly itemStack: ItemStack;
    static readonly componentId = 'minecraft:item';
}
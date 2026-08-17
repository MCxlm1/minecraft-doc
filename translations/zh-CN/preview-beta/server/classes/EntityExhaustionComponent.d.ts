/**
 * 定义与实体在消耗方面的交互。
 * 包装了 `minecraft.player.exhaustion` 属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityExhaustionComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:player.exhaustion';
}
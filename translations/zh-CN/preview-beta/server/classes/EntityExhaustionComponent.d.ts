/**
 * 定义与实体在疲劳度方面的交互。
 * 封装了 `minecraft.player.exhaustion` 属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityExhaustionComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:player.exhaustion';
}
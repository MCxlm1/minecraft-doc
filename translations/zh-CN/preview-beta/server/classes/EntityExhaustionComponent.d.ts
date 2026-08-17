/**
 * 定义此实体与消耗度的交互。
 * 包装 `minecraft.player.exhaustion` 属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityExhaustionComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:player.exhaustion';
}
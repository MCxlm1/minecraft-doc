/**
 * 定义此实体与饥饿的交互。包装了 `minecraft.player.hunger` 属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHungerComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:player.hunger';
}
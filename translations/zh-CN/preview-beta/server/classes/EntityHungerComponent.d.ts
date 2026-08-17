/**
 * 定义与此实体的饥饿值交互。包装
 * `minecraft.player.hunger` 属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHungerComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:player.hunger';
}
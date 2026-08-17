/**
 * 定义该实体与饱和度（Saturation）的交互。
 * 封装了 `minecraft.player.saturation` 属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySaturationComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:player.saturation';
}
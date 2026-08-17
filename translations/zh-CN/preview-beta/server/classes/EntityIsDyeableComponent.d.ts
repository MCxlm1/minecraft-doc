/**
 * 当添加此组件时，表示染料可用于该实体
 * 以改变其颜色。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsDyeableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_dyeable';
}
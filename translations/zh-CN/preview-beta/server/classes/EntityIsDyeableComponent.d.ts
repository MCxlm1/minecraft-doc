/**
 * 添加此组件后，表示可以使用染料来改变此实体的颜色。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsDyeableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_dyeable';
}
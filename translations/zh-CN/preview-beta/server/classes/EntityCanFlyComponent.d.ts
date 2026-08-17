/**
 * 添加此组件后，表示该实体可以
 * 飞行，且寻路器不会限制路径下方
 * 必须有固体方块位于其下方。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanFlyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_fly';
}
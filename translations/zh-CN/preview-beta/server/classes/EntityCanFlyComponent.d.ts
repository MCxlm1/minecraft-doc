/**
 * 当添加此组件时，表示实体可以飞行，且寻路器不会限制路径必须下方有实体方块。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanFlyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_fly';
}
/**
 * 当添加此组件时，表示该实体可以飞行，并且寻路器不会限制在下方需要实心方块的路径上。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanFlyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_fly';
}
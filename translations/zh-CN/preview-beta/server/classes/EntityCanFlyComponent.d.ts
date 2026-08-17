/**
 * 添加此组件后，表示该实体可以飞行，
 * 并且寻路器将不会受到需要下方有固体方块的路线的限制。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanFlyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_fly';
}
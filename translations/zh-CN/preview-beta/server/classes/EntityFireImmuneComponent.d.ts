/**
 * 当添加此组件时，表示该实体不会受到火焰伤害。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFireImmuneComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:fire_immune';
}
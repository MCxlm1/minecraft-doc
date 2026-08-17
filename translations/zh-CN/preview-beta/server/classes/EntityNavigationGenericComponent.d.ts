/**
 * 允许此实体通过行走、游泳、
 * 飞行和/或攀爬以及上下跳跃
 * 方块来生成路径。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationGenericComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.generic';
}
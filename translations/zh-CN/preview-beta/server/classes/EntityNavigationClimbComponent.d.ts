/**
 * 允许该实体生成包含垂直墙壁的路径
 * （例如，像 Minecraft 蜘蛛那样。）
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationClimbComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.climb';
}
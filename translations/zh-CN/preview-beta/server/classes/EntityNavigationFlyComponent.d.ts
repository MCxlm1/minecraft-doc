/**
 * 允许此实体在空气中生成路径（例如，像 Minecraft 的鹦鹉那样）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFlyComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.fly';
}
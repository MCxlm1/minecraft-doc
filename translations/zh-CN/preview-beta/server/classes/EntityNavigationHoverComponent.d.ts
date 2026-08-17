/**
 * 允许此实体在空中生成路径（例如，像 Minecraft 中的蜜蜂那样）。
 * 防止其从天空中掉落，并进行预测性移动。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationHoverComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.hover';
}
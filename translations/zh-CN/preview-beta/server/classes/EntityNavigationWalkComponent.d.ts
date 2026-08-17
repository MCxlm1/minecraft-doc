/**
 * 允许此实体像普通生物一样通过行走和跳跃方块来生成路径。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationWalkComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.walk';
}
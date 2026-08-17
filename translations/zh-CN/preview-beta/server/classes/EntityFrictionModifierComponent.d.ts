/**
 * 定义摩擦力对该实体的影响程度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFrictionModifierComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 关联实体的摩擦力修改器的当前值。
     *
     * @throws 当使用此属性时可能抛出错误。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:friction_modifier';
}
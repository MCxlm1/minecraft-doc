/**
 * 定义摩擦力对此实体的影响程度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFrictionModifierComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 关联实体的摩擦力修正值的当前值。
     *
     * @throws
     * 此属性在使用时可能抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:friction_modifier';
}
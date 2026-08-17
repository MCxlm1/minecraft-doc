/**
 * 定义摩擦力影响该实体的程度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFrictionModifierComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 当前关联实体的摩擦修正值。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:friction_modifier';
}
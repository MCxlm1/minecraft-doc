/**
 * 设置实体的视觉尺寸。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityScaleComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 实体上设置的缩放属性的当前值。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:scale';
}
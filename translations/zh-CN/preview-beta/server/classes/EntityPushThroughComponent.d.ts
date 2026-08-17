/**
 * 设置实体可推动穿过的距离。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityPushThroughComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此实体的推动穿过距离值。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:push_through';
}
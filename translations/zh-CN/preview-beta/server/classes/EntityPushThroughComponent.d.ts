/**
 * 设置实体可以推动通过的距离。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityPushThroughComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此实体的推动通过距离值。
     *
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:push_through';
}
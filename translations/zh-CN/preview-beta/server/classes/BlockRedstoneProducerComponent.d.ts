/**
 * 表示一个能够输出红石信号的方块。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRedstoneProducerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 获取该方块输出到电路系统的功率。如果方块不再有效或方块没有'minecraft:redstone_producer'组件，则会抛出错误。
     *
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link InvalidBlockComponentError}
     */
    readonly power: number;
    static readonly componentId = 'minecraft:redstone_producer';
    /**
     * @remarks
     * 获取该方块能够连接到电路并输出功率的面。如果方块不再有效或方块没有'minecraft:redstone_producer'组件，则会抛出错误。
     *
     * @returns 返回一个 Direction 数组，表示该方块可以连接电路并输出功率的面。
     * @throws 如果方块不再有效或方块没有'minecraft:redstone_producer'组件，则抛出错误。
     *
     * {@link InvalidBlockComponentError}
     */
    getConnectedFaces(): Direction[];
    /**
     * @remarks
     * 获取该方块强充能其接触方块的方块面。如果'minecraft:redstone_producer'方块组件没有定义'strongly_powered_face'，则此方法返回'undefined'。如果方块不再有效或方块没有'minecraft:redstone_producer'组件，则会抛出错误。
     *
     * @returns 返回强充能的面，如果未定义则返回 undefined。
     * @throws 如果方块不再有效或方块没有'minecraft:redstone_producer'组件，则抛出错误。
     *
     * {@link InvalidBlockComponentError}
     */
    getStronglyPoweredFace(): Direction | undefined;
}
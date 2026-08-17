/**
 * 表示一个能够输出红石信号的方块。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRedstoneProducerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 获取此方块向电路系统输出的功率。
     * 如果方块不再有效或方块没有'minecraft:redstone_producer'组件，则返回错误。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidBlockComponentError}
     */
    readonly power: number;
    static readonly componentId = 'minecraft:redstone_producer';
    /**
     * @remarks
     * 获取此方块能够连接电路并输出功率的面。如果方块不再有效或方块没有'minecraft:redstone_producer'组件，则返回错误。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidBlockComponentError}
     */
    getConnectedFaces(): Direction[];
    /**
     * @remarks
     * 获取强功率输出到相邻方块的面。如果'minecraft:redstone_producer'方块组件未定义'strongly_powered_face'，则此方法返回'undefined'。如果方块不再有效或方块没有'minecraft:redstone_producer'组件，则返回错误。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidBlockComponentError}
     */
    getStronglyPoweredFace(): Direction | undefined;
}
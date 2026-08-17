/**
 * 表示一个可以输出红石信号的方块。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRedstoneProducerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 获取该方块输出到电路系统的功率。
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
     * 获取该方块可以连接电路并输出功率的面。
     * 如果方块不再有效或方块没有'minecraft:redstone_producer'组件，则返回错误。
     *
     * @returns 返回一个方向数组，表示该方块可连接的面。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidBlockComponentError}
     */
    getConnectedFaces(): Direction[];
    /**
     * @remarks
     * 获取能够强充能接触它的方块的方块面。
     * 如果'minecraft:redstone_producer'方块组件没有定义'strongly_powered_face'，则此方法返回'undefined'。
     * 如果方块不再有效或方块没有'minecraft:redstone_producer'组件，则返回错误。
     *
     * @returns 返回一个方向，表示强充能的面，如果未定义则返回undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidBlockComponentError}
     */
    getStronglyPoweredFace(): Direction | undefined;
}
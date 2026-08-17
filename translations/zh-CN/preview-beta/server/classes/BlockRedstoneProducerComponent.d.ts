/**
 * 表示一个可以输出红石信号的方块。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRedstoneProducerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 获取此方块输出到电路系统的电力。
     * 如果方块不再有效，或者方块没有'minecraft:redstone_producer'组件，则会抛出错误。
     *
     * @throws 当方块不再有效或不包含'minecraft:redstone_producer'组件时，此属性可能抛出错误。
     *
     * {@link InvalidBlockComponentError}
     */
    readonly power: number;
    static readonly componentId = 'minecraft:redstone_producer';
    /**
     * @remarks
     * 获取此方块可以连接电路并输出电力的面。
     * 如果方块不再有效，或者方块没有'minecraft:redstone_producer'组件，则会抛出错误。
     *
     * @returns 此方块可以连接电路并输出电力的面数组。
     *
     * @throws 当方块不再有效或不包含'minecraft:redstone_producer'组件时，此函数可能抛出错误。
     *
     * {@link InvalidBlockComponentError}
     */
    getConnectedFaces(): Direction[];
    /**
     * @remarks
     * 获取强充能与其接触方块的方块面。
     * 如果'minecraft:redstone_producer'方块组件没有定义'strongly_powered_face'，则此方法返回'undefined'。
     * 如果方块不再有效，或者方块没有'minecraft:redstone_producer'组件，则会抛出错误。
     *
     * @returns 强充能与其接触方块的方块面；若未定义'strongly_powered_face'，则返回'undefined'。
     *
     * @throws 当方块不再有效或不包含'minecraft:redstone_producer'组件时，此函数可能抛出错误。
     *
     * {@link InvalidBlockComponentError}
     */
    getStronglyPoweredFace(): Direction | undefined;
}
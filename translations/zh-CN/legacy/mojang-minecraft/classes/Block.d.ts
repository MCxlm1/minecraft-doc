/**
 * @symbol Block
 * @description 表示维度中的一个方块。方块表示维度中唯一的 X、Y、Z 坐标，并可获取/设置该位置的方块状态。
 */
export class Block {
    /**
     * 返回方块所在的维度。
     */
    readonly "dimension": Dimension;
    /**
     * 此方块的方块类型标识符。
     * @throws 使用此属性时可能抛出错误。
     */
    readonly "id": string;
    /**
     * 获取或设置此方块上是否有液体。
     */
    "isWaterlogged": boolean;
    /**
     * 指定方块的坐标。
     */
    readonly "location": BlockLocation;
    /**
     * 描述方块的附加配置数据。
     * @throws 使用此属性时可能抛出错误。
     */
    readonly "permutation": BlockPermutation;
    /**
     * 获取方块类型。
     * @throws 使用此属性时可能抛出错误。
     */
    readonly "type": BlockType;
    /**
     * 方块的 X 坐标。
     */
    readonly "x": number;
    /**
     * 方块的 Y 坐标。
     */
    readonly "y": number;
    /**
     * 方块的 Z 坐标。
     */
    readonly "z": number;

    /**
     * @remarks
     * 获取特定方块能力的附加配置属性（组件）。
     * @param componentName 组件的标识符。
     * @returns 如果特定方块上存在该组件则返回组件对象。
     * @throws 此函数可能抛出错误。
     */
    getComponent(componentName: string): any;

    /**
     * @remarks
     * 返回方块拥有的标签列表。
     * @throws 此函数可能抛出错误。
     */
    getTags(): string[];

    /**
     * @remarks
     * 检查此方块的排列是否具有特定标签。
     * @param tag 要检查的标签。
     * @returns 如果此方块的排列具有该标签则返回 true，否则返回 false。
     * @throws 此函数可能抛出错误。
     */
    hasTag(tag: string): boolean;

    /**
     * @remarks
     * 将维度中的方块设置为排列的状态。
     * @param permutation 包含方块属性状态的排列。
     * @throws 此函数可能抛出错误。
     */
    setPermutation(permutation: BlockPermutation): void;

    /**
     * @remarks
     * 设置方块类型。
     * @param blockType 要应用的方块类型标识符。
     * @throws 此函数可能抛出错误。
     */
    setType(blockType: BlockType): void;

    protected constructor();
}

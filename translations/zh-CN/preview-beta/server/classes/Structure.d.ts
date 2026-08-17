/**
 * 表示一个已加载的结构模板（.mcstructure 文件）。
 * 可以使用 /structure 命令或 {@link StructureManager} API
 * 将结构放置到世界中。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class Structure extends ISerializable {
    private constructor();
    /**
     * @remarks
     * 结构的名称。标识符必须包含命名空间。
     * 对于通过 /structure 命令或结构方块创建的结构，
     * 此命名空间默认为 "mystructure"。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 返回结构是否有效。如果结构被删除，
     * 则可能变为无效。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 结构的尺寸。例如，单个方块结构的尺寸为
     * {x:1, y:1, z:1}
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidStructureError}
     */
    readonly size: Vector3;
    /**
     * @remarks
     * 返回一个 BlockPermutation，表示 Structure 中
     * 指定位置所包含的方块。
     *
     * @param location
     * 相对于 Structure 原点的方块位置。
     * @returns
     * 返回一个 BlockPermutation。如果指定位置不存在方块，
     * 则返回 undefined。
     * @throws
     * 如果位置超出结构边界则抛出异常。
     * 如果 Structure 已被删除则抛出异常。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getBlockPermutation(location: Vector3): BlockPermutation | undefined;
    /**
     * @remarks
     * 返回指定位置的方块是否含水。
     *
     * @param location
     * 相对于 Structure 原点的方块位置。
     * @returns
     * 返回指定位置的方块是否含水。
     * 如果指定位置不存在方块，则返回 false。
     * @throws
     * 如果位置超出结构边界则抛出异常。
     * 如果 Structure 已被删除则抛出异常。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getIsWaterlogged(location: Vector3): boolean;
    /**
     * @remarks
     * 创建一个 Structure 的副本，并使用新名称保存。
     *
     * 此函数无法在受限执行模式中调用。
     *
     * @param identifier
     * 新创建 Structure 的名称。
     * @param saveMode
     * 决定如何保存 Structure。默认为保存到世界。
     * 默认值：1
     * @returns
     * 返回新创建的结构。
     * @throws
     * 如果标识符无效则抛出异常。有效标识符必须
     * 包含命名空间且必须唯一。
     * 如果 Structure 已被删除则抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    saveAs(identifier: string, saveMode?: StructureSaveMode): Structure;
    /**
     * @remarks
     * 将修改后的 Structure 保存到世界文件。
     *
     * 此函数无法在受限执行模式中调用。
     *
     * @throws
     * 如果 Structure 已被删除则抛出异常。
     *
     * {@link InvalidStructureError}
     */
    saveToWorld(): void;
    /**
     * @remarks
     * 在 Structure 中设置 BlockPermutation。
     *
     * 此函数无法在受限执行模式中调用。
     *
     * @param location
     * 相对于 Structure 原点的方块位置。
     * @param blockPermutation
     * 要设置的 BlockPermutation。
     * 默认值：null
     * @param waterlogged
     * 指定方块是否应含水。空气和未定义的方块
     * 不能为含水状态。
     * 默认值：false
     * @throws
     * 如果方块类型为 StructureVoid 则抛出异常。
     * 如果方块为 undefined 且 waterlogged 设置为 true 则抛出异常。
     * 如果方块为空气且 waterlogged 设置为 true 则抛出异常。
     * 如果位置超出结构边界则抛出异常。
     * 如果 Structure 已被删除则抛出异常。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation, waterlogged?: boolean): void;
}
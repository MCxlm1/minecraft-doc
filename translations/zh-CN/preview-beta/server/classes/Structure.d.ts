/**
 * 表示已加载的结构模板（.mcstructure 文件）。结构可以使用 /structure
 * 命令或 {@link StructureManager} API 放置到世界中。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class Structure extends ISerializable {
    private constructor();
    /**
     * @remarks
     * 结构的名称。标识符必须包含命名空间。对于通过 /structure 命令
     * 或结构方块创建的结构，该命名空间默认为
     * "mystructure"。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 返回该结构是否有效。如果结构被删除，它可能会变得无效。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 结构的尺寸。例如，单个方块结构的尺寸为 {x:1, y:1, z:1}。
     *
     * @throws
     * 此属性在使用时可能抛出异常。
     *
     * {@link InvalidStructureError}
     */
    readonly size: Vector3;
    /**
     * @remarks
     * 返回一个 BlockPermutation，表示结构内给定位置的方块。
     *
     * @param location
     * 相对于结构原点的方块位置。
     * @returns
     * 返回一个 BlockPermutation。如果给定位置不存在方块，则返回 undefined。
     * @throws
     * 如果位置超出结构边界，则抛出异常。
     * 如果结构已被删除，则抛出异常。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getBlockPermutation(location: Vector3): BlockPermutation | undefined;
    /**
     * @remarks
     * 返回给定位置的方块是否含水。
     *
     * @param location
     * 相对于结构原点的方块位置。
     * @returns
     * 返回给定位置的方块是否含水。如果给定位置不存在方块，则返回 false。
     * @throws
     * 如果位置超出结构边界，则抛出异常。
     * 如果结构已被删除，则抛出异常。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getIsWaterlogged(location: Vector3): boolean;
    /**
     * @remarks
     * 创建结构的副本并以新名称保存。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier
     * 新创建结构的名称。
     * @param saveMode
     * 决定结构的保存方式。默认为保存到世界。
     * 默认值：1。
     * @returns
     * 返回新创建的结构。
     * @throws
     * 如果标识符无效，则抛出异常。有效的标识符必须包含命名空间且必须唯一。
     * 如果结构已被删除，则抛出异常。
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
     * 将修改后的结构保存到世界文件中。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws
     * 如果结构已被删除，则抛出异常。
     *
     * {@link InvalidStructureError}
     */
    saveToWorld(): void;
    /**
     * @remarks
     * 在结构内设置一个 BlockPermutation。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param location
     * 相对于结构原点的方块位置。
     * @param blockPermutation
     * 要设置的 BlockPermutation。
     * 默认值：null。
     * @param waterlogged
     * 指定方块是否应含水。空气和未定义的方块不能含水。
     * 默认值：false。
     * @throws
     * 如果方块类型为 StructureVoid，则抛出异常。
     * 如果方块未定义且 waterlogged 设置为 true，则抛出异常。
     * 如果方块为空气且 waterlogged 设置为 true，则抛出异常。
     * 如果位置超出结构边界，则抛出异常。
     * 如果结构已被删除，则抛出异常。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation, waterlogged?: boolean): void;
}
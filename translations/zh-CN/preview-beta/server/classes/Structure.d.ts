/**
 * 表示已加载的结构模板（.mcstructure 文件）。
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
     * 此命名空间默认为
     * "mystructure"。
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
     * 结构的尺寸。例如，单个方块结构的大小为 {x:1, y:1, z:1}
     *
     * @throws
     * 此属性在使用时可能抛出异常。
     *
     * {@link InvalidStructureError}
     */
    readonly size: Vector3;
    /**
     * @remarks
     * 返回一个 BlockPermutation，表示给定位置处
     * 结构内含有的方块。
     *
     * @param location
     * 相对于结构原点的方块位置。
     * @returns
     * 返回一个 BlockPermutation。如果给定位置不存在方块，
     * 则返回 undefined。
     * @throws
     * 如果位置超出结构边界则抛出异常。
     * 如果结构已被删除则抛出异常。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getBlockPermutation(location: Vector3): BlockPermutation | undefined;
    /**
     * @remarks
     * 返回给定位置的方块是否为
     * 含水方块。
     *
     * @param location
     * 相对于结构原点的方块位置。
     * @returns
     * 返回给定位置的方块是否为
     * 含水方块。如果该位置不存在方块，则
     * 返回 false。
     * @throws
     * 如果位置超出结构边界则抛出异常。
     * 如果结构已被删除则抛出异常。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getIsWaterlogged(location: Vector3): boolean;
    /**
     * @remarks
     * 创建 Structure 的副本并使用新名称保存。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier
     * 新创建的 Structure 的名称。
     * @param saveMode
     * 确定 Structure 的保存方式。默认为
     * 保存到世界。
     * 默认为：1
     * @returns
     * 返回新创建的结构。
     * @throws
     * 如果标识符无效则抛出异常。有效标识符必须
     * 包含命名空间且必须唯一。
     * 如果结构已被删除则抛出异常。
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
     * 将修改后的 Structure 保存到世界文件中。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws
     * 如果结构已被删除则抛出异常。
     *
     * {@link InvalidStructureError}
     */
    saveToWorld(): void;
    /**
     * @remarks
     * 在 Structure 内设置 BlockPermutation。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param location
     * 相对于结构原点的方块位置。
     * @param blockPermutation
     * 要设置的 BlockPermutation。
     * 默认为：null
     * @param waterlogged
     * 指定方块是否应为含水方块。空气和
     * undefined 方块不能为含水方块。
     * 默认为：false
     * @throws
     * 如果方块类型为 StructureVoid，则抛出异常。
     * 如果方块为 undefined 且 waterlogged 设置为
     * true，则抛出异常。
     * 如果方块为空气且 waterlogged 设置为 true，则抛出异常。
     * 如果位置超出结构边界则抛出异常。
     * 如果结构已被删除则抛出异常。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation, waterlogged?: boolean): void;
}
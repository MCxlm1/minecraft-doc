/**
 * 结构相关API的管理器。包含创建、获取、放置和删除结构体的API。
 */
export class StructureManager {
    private constructor();
    /**
     * @remarks
     * 在内存中创建一个空的结构体。使用 {@link Structure.setBlockPermutation} 填充方块，并使用 {@link Structure.saveAs} 保存更改。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier
     * 结构体的名称。有效标识符必须包含命名空间且唯一。
     * @param size
     * 结构体的大小。例如，要创建一个单方块结构，大小应为 {x:1, y:1, z:1}。
     * @param saveMode
     * 创建时结构体的保存方式。默认为 StructureSaveMode.Memory。
     * 默认值：0
     * @returns
     * 返回新创建的结构体。
     * @throws
     * 如果标识符无效则抛出。有效标识符必须包含命名空间且唯一。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): Structure;
    /**
     * @remarks
     * 从世界中的方块创建一个新的结构体。功能上等同于 /structure save 命令。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier
     * 结构体的名称。有效标识符必须包含命名空间且唯一。
     * @param dimension
     * 读取方块所在的维度。
     * @param from
     * 起始位置。
     * @param to
     * 结束位置。
     * @param options
     * 从世界创建结构体的附加选项。
     * @returns
     * 返回新创建的结构体。
     * @throws
     * 如果标识符无效则抛出。有效标识符必须包含命名空间且唯一。
     * 如果结构体边界超出最大尺寸则抛出。
     * 如果结构体边界包含世界边界外的方块则抛出。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    createFromWorld(
        identifier: string,
        dimension: Dimension,
        from: Vector3,
        to: Vector3,
        options?: StructureCreateOptions,
    ): Structure;
    /**
     * @remarks
     * 从内存和世界中删除一个结构体（如果存在）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param structure
     * 要删除的结构体标识符或 Structure 对象。注意，删除后 Structure 对象将失效。
     * @returns
     * 返回结构体是否被移除。
     * @throws
     * 如果结构体无法被移除则抛出。例如，从行为包加载的结构体。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    delete(structure: string | Structure): boolean;
    /**
     * @remarks
     * 获取保存到内存或世界中的结构体。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier
     * 要获取的结构体名称。
     * @returns
     * 返回结构体（如果存在），否则返回 undefined。
     */
    get(identifier: string): Structure | undefined;
    /**
     * @remarks
     * 返回所有行为包中包含的结构体列表。不包括保存到世界或内存中的结构体。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 结构体标识符列表。
     */
    getPackStructureIds(): string[];
    /**
     * @remarks
     * 返回所有保存到世界和内存中的结构体列表。不包括行为包中包含的结构体。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 结构体标识符列表。
     */
    getWorldStructureIds(): string[];
    /**
     * @remarks
     * 在世界中放置一个结构体。放置在未加载区块中的结构体将排队等待加载。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param structure
     * 结构体的标识符或 Structure 对象。
     * @param dimension
     * 放置结构体的维度。
     * @param location
     * 维度内放置结构体的位置。
     * @param options
     * 结构体放置的附加选项。
     * @throws
     * 如果完整性值超出范围 [0,1] 则抛出。
     * 如果完整性种子无效则抛出。
     * 如果放置位置包含世界边界外的方块则抛出。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    place(
        structure: string | Structure,
        dimension: Dimension,
        location: Vector3,
        options?: StructurePlaceOptions,
    ): void;
    /**
     * @remarks
     * 在世界中放置部分拼图结构。用于调试拼图方块之间的连接。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param pool
     * 起始模板池的标识符。
     * @param targetJigsaw
     * 起始拼图方块的名称。该方块必须至少包含在起始池结构模板中。
     * @param maxDepth
     * 拼图结构的最大递归深度。范围：[1, 20]
     * @param dimension
     * 放置拼图结构的维度。
     * @param location
     * 拼图结构开始生成的位置，相对于 targetJigsaw 方块。
     * @param options
     * 生成拼图结构时使用的可选设置。
     * @returns
     * 返回一个 {@link BlockBoundingBox} 对象，表示拼图结构的最大边界。
     * @throws
     * 如果 maxDepth 超出范围 [1,20] 则抛出。
     * 如果生成因无效参数或拼图配置失败则抛出。
     * 如果放置位置包含世界边界外的方块则抛出。
     *
     * {@link PlaceJigsawError}
     */
    placeJigsaw(
        pool: string,
        targetJigsaw: string,
        maxDepth: number,
        dimension: Dimension,
        location: Vector3,
        options?: JigsawPlaceOptions,
    ): BlockBoundingBox;
    /**
     * @remarks
     * 在世界中放置一个拼图结构。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier
     * 拼图结构的标识符。
     * @param dimension
     * 放置拼图结构的维度。
     * @param location
     * 拼图结构开始生成的位置。注意，除非设置了 ignoreStarJigsawStructurePlaceOptions 的 ignoreStartHeight 选项，否则 y 值将被结构的起始高度覆盖。
     * @param options
     * 生成拼图结构时使用的可选设置。
     * @returns
     * 返回一个 {@link BlockBoundingBox} 对象，表示拼图结构的最大边界。
     * @throws
     * 如果生成因无效参数或拼图配置失败则抛出。
     * 如果放置位置包含世界边界外的方块则抛出。
     *
     * {@link PlaceJigsawError}
     */
    placeJigsawStructure(
        identifier: string,
        dimension: Dimension,
        location: Vector3,
        options?: JigsawStructurePlaceOptions,
    ): BlockBoundingBox;
}
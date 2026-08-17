/**
 * 结构相关 API 的管理器。包含用于创建、获取、放置和删除结构的 API。
 */
export class StructureManager {
    private constructor();
    /**
     * @remarks
     * 在内存中创建一个空结构。使用 {@link
     * Structure.setBlockPermutation} 用方块填充结构，并使用 {@link
     * Structure.saveAs} 保存更改。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param identifier
     * 结构的名称。有效标识符必须包含命名空间且必须唯一。
     * @param size
     * 结构的大小。例如，要创建单方块结构，大小应为 {x:1, y:1, z:1}。
     * @param saveMode
     * 创建结构时应如何保存。默认为 StructureSaveMode.Memory。
     * 默认值：0
     * @returns
     * 返回新创建的 Structure。
     * @throws
     * 如果标识符无效则抛出。有效标识符必须包含命名空间且必须唯一。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): Structure;
    /**
     * @remarks
     * 从世界中的方块创建一个新结构。这在功能上等同于 /structure save 命令。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param identifier
     * 结构的名称。有效标识符必须包含命名空间且必须唯一。
     * @param dimension
     * 应从中读取方块的维度。
     * @param from
     * 结构边界框起始角的坐标。
     * @param to
     * 结构边界框结束角的坐标。
     * @param options
     * 从世界创建结构时的附加选项。
     * @returns
     * 返回新创建的 Structure。
     * @throws
     * 如果标识符无效则抛出。有效标识符必须包含命名空间且必须唯一。
     * 如果结构边界超过最大尺寸则抛出。
     * 如果结构边界包含世界边界之外的方块则抛出。
     *
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
     * 从内存中删除结构，如果结构存在于世界中，也会从世界中删除。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param structure
     * 要删除的结构标识符或 Structure 对象。请注意，Structure 对象在删除后将变为无效。
     * @returns
     * 返回结构是否已被移除。
     * @throws
     * 如果无法移除结构则抛出。例如，从行为包加载的结构。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    delete(structure: string | Structure): boolean;
    /**
     * @remarks
     * 获取已保存到内存或世界中的结构。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param identifier
     * 要获取的结构的名称。
     * @returns
     * 如果结构存在则返回 Structure，否则返回 undefined。
     */
    get(identifier: string): Structure | undefined;
    /**
     * @remarks
     * 返回行为包中包含的所有结构的列表。不包括保存到世界或内存中的结构。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @returns
     * 结构标识符列表。
     */
    getPackStructureIds(): string[];
    /**
     * @remarks
     * 返回保存到世界和内存中的所有结构的列表。不包括行为包中包含的结构。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @returns
     * 结构标识符列表。
     */
    getWorldStructureIds(): string[];
    /**
     * @remarks
     * 在世界中放置一个结构。放置在未加载区块中的结构将排队等待加载。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param structure
     * 结构的标识符或 Structure 对象。
     * @param dimension
     * 应放置结构的维度。
     * @param location
     * 维度内应放置结构的位置。
     * @param options
     * 结构放置的附加选项。
     * @throws
     * 如果完整性（integrity）值超出范围 [0,1] 则抛出。
     * 如果完整性种子无效则抛出。
     * 如果放置位置包含世界边界之外的方块则抛出。
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
     * 在世界中放置部分拼图（jigsaw）结构。这对于调试拼图方块之间的连接非常有用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param pool
     * 起始模板池（template pool）的标识符。
     * @param targetJigsaw
     * 起始拼图方块的名称。此方块必须至少包含在起始池的结构模板之一中。
     * @param maxDepth
     * 拼图结构的最大递归深度。范围：[1, 20]
     * @param dimension
     * 放置拼图结构的维度。
     * @param location
     * 拼图结构相对于 targetJigsaw 方块开始生成的位置。
     * @param options
     * 生成拼图结构时使用的可选设置。
     * @returns
     * 返回一个 {@link BlockBoundingBox} 对象，表示拼图结构的最大边界。
     * @throws
     * 如果 maxDepth 超出范围 [1,20] 则抛出。
     * 如果由于参数无效或拼图配置导致生成失败则抛出。
     * 如果放置位置包含世界边界之外的方块则抛出。
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
     * 此函数无法在受限执行模式下调用。
     *
     * @param identifier
     * 拼图结构的标识符。
     * @param dimension
     * 放置拼图结构的维度。
     * @param location
     * 拼图结构开始生成的位置。请注意，除非设置了 ignoreStartHeight 选项，否则 y 值将被结构的起始高度覆盖。
     * @param options
     * 生成拼图结构时使用的可选设置。
     * @returns
     * 返回一个 {@link BlockBoundingBox} 对象，表示拼图结构的最大边界。
     * @throws
     * 如果由于参数无效或拼图配置导致生成失败则抛出。
     * 如果放置位置包含世界边界之外的方块则抛出。
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
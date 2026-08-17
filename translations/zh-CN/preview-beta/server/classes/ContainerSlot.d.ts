/**
 * 表示更大容器（例如实体物品栏）中的一个槽位。
 */
export class ContainerSlot {
    private constructor();
    /**
     * @remarks
     * 物品堆叠中的物品数量。有效值范围为 1-255。提供的值将限制到该物品的最大堆叠数量。
     *
     * This property can't be edited in restricted-execution mode.
     *
     * 范围：[1, 255]
     * @throws
     * 如果值超出 1-255 的范围，则抛出异常。
     */
    amount: number;
    /**
     * @remarks
     * 返回该物品是否可堆叠。如果物品的最大堆叠数量大于 1，且不包含任何自定义数据或属性，则该物品可堆叠。
     *
     * @throws
     * 如果该槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    readonly isStackable: boolean;
    /**
     * @remarks
     * 返回该 ContainerSlot 是否有效。如果容器存在且已加载，且槽位索引有效，则容器槽位有效。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 获取或设置该物品死亡后是否保留。
     *
     * This property can't be edited in restricted-execution mode.
     *
     * @throws
     * 如果该槽位的容器无效，则抛出异常。
     */
    keepOnDeath: boolean;
    /**
     * @remarks
     * 获取或设置该物品的锁定模式。默认值为 `ItemLockMode.none`。
     *
     * This property can't be edited in restricted-execution mode.
     *
     * @throws
     * 如果该槽位的容器无效，则抛出异常。
     */
    lockMode: ItemLockMode;
    /**
     * @remarks
     * 最大堆叠数量。该值因物品类型而异。例如，火把的最大堆叠数量为 64，而鸡蛋的最大堆叠数量为 16。
     *
     * @throws
     * 如果该槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    readonly maxAmount: number;
    /**
     * @remarks
     * 此物品堆叠的给定名称。悬停在物品上时会显示名称标签。将名称标签设置为空字符串或 `undefined` 将移除名称标签。
     *
     * This property can't be edited in restricted-execution mode.
     *
     * @throws
     * 如果该槽位的容器无效，则抛出异常。如果长度超过 255 个字符，也会抛出异常。
     */
    nameTag?: string;
    /**
     * @remarks
     * 该物品的类型。
     *
     * @throws
     * 如果该槽位的容器无效，则抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidContainerSlotError}
     */
    readonly 'type': ItemType;
    /**
     * @remarks
     * 物品堆叠的类型标识符。如果未指定命名空间，则假定为 'minecraft:'。示例包括 'wheat' 或 'apple'。
     *
     * @throws
     * 如果该槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    readonly typeId: string;
    /**
     * @remarks
     * 清除在此物品堆叠上设置的所有动态属性。
     *
     * @throws
     * 如果该槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    clearDynamicProperties(): void;
    /**
     * @remarks
     * 返回此容器槽位内的物品是否可以被破坏。
     *
     * @returns
     * 返回此物品可以破坏的方块标识符列表。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link InvalidContainerSlotError}
     */
    getCanDestroy(): string[];
    /**
     * @remarks
     * 返回此容器槽位内的物品可以被放置在其上的方块列表。
     *
     * @returns
     * 返回此物品可以放置在上面的方块标识符列表。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link InvalidContainerSlotError}
     */
    getCanPlaceOn(): string[];
    /**
     * @remarks
     * 返回属性值。
     *
     * @param identifier
     * 属性标识符。
     * @returns
     * 返回该属性的值；如果属性尚未设置，则返回 undefined。
     * @throws
     * 如果该槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * 返回此物品堆叠上已使用的可用动态属性标识符集合。
     *
     * @returns
     * 一个字符串数组，包含此实体上设置的动态属性。
     * @throws
     * 如果该槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicPropertyIds(): string[];
    /**
     * @remarks
     * 返回当前为此实体存储的所有动态属性的总大小（以字节为单位）。这包括键和值的大小。这可用于诊断性能警告信号——例如，如果某个实体关联了数兆字节的动态属性，则可能在不同设备上加载缓慢。
     *
     * @returns
     * 返回动态属性所占的总字节数。
     * @throws
     * 如果该槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * 创建物品堆叠的精确副本，包括任何自定义数据或属性。
     *
     * @returns
     * 返回槽位中物品的副本。如果槽位为空，则返回 undefined。
     * @throws
     * 如果该槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    getItem(): ItemStack | undefined;
    /**
     * @remarks
     * 返回 ItemStack 的 lore 值（次要显示字符串）。
     *
     * @returns
     * lore 字符串数组。如果物品没有 lore，则返回空数组。
     * @throws
     * 如果该槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    getLore(): string[];
    /**
     * @remarks
     * 返回 ItemStack 的 lore 值（次要显示字符串）。字符串形式的 lore 行将被转换为 {@link RawMessage}，并放在 {@link RawMessage.text} 下。
     *
     * @returns
     * lore 行数组。如果物品没有 lore，则返回空数组。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link InvalidContainerSlotError}
     */
    getRawLore(): RawMessage[];
    /**
     * @remarks
     * 返回槽位中物品的所有标签。
     *
     * @returns
     * 返回槽位中物品的所有标签。如果槽位为空，则返回空数组。
     * @throws
     * 如果该槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    getTags(): string[];
    /**
     * @remarks
     * 如果此槽位有物品，则返回 true。
     *
     * @returns
     * 如果槽位中有物品，则返回 true；否则返回 false。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link InvalidContainerSlotError}
     */
    hasItem(): boolean;
    /**
     * @remarks
     * 返回槽位中的物品是否具有给定标签。
     *
     * @param tag
     * 物品标签。
     * @returns
     * 当槽位为空或槽位中的物品不具有给定标签时，返回 false。
     * @throws
     * 如果该槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * 返回此物品堆叠是否可与给定的 `itemStack` 堆叠。此判定通过比较物品类型以及与物品堆叠关联的任何自定义数据和属性来确定。每个物品堆叠的数量不纳入考虑。
     *
     * @param itemStack
     * 要比较的 ItemStack。
     * @returns
     * 返回此物品堆叠是否可与给定的 `itemStack` 堆叠。
     * @throws
     * 如果该槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * 此物品在冒险模式下可破坏的方块类型列表。方块名称会显示在物品的工具提示中。将该值设置为 undefined 将清除此列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param blockIdentifiers
     * 方块列表，由其标识符指定。
     * @throws
     * 如果该槽位的容器无效，则抛出异常。如果提供的任何方块标识符无效，也会抛出异常。
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * 此物品在冒险模式下可放置在其上的方块类型列表。此功能仅适用于方块物品。方块名称会显示在物品的工具提示中。将该值设置为 undefined 将清除此列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param blockIdentifiers
     * 方块列表，由其标识符指定。
     * @throws
     * 如果该槽位的容器无效，则抛出异常。如果提供的任何方块标识符无效，也会抛出异常。
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * 使用特定值设置多个动态属性。
     *
     * @param values
     * 要设置的动态属性的键值对记录。如果某个数据值为 null，则改为移除该属性。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidContainerSlotError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3 | undefined>): void;
    /**
     * @remarks
     * 将指定属性设置为一个值。
     *
     * @param identifier
     * 属性标识符。
     * @param value
     * 要设置的属性数据值。如果值为 null，则改为移除该属性。
     * @throws
     * 如果该槽位的容器无效，则抛出异常。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidContainerSlotError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * 将给定的 ItemStack 放入该槽位，替换任何现有物品。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param itemStack
     * 要放入槽位的 ItemStack。
     * @throws
     * 如果该槽位的容器无效，则抛出异常。
     *
     * {@link ContainerRulesError}
     *
     * {@link InvalidContainerSlotError}
     */
    setItem(itemStack?: ItemStack): void;
    /**
     * @remarks
     * 设置 ItemStack 的 lore 值（次要显示字符串）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param loreList
     * lore 字符串列表。将此参数设置为 undefined 将清除 lore。
     * @throws
     * 如果该槽位的容器无效，则抛出异常。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setLore(loreList?: (RawMessage | string)[]): void;
}
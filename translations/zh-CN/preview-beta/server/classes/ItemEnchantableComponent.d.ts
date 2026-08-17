/**
 * 当此组件存在于物品上时，该物品可以附加附魔。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemEnchantableComponent extends ItemComponent {
    private constructor();
    /**
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly slots: EnchantmentSlot[];
    static readonly componentId = 'minecraft:enchantable';
    /**
     * @remarks
     * 向物品堆叠添加一个附魔。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param enchantment
     * 要添加的附魔对象。
     * @throws
     * 如果附魔类型不存在，抛出 ScriptItemEnchantmentUnknownIdError。
     *
     * 如果附魔等级超出给定附魔类型的允许范围，抛出 ScriptItemEnchantmentLevelOutOfBoundsError。
     *
     * 如果附魔与物品堆叠不兼容，抛出 ScriptItemEnchantmentTypeNotCompatibleError。
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeNotCompatibleError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    addEnchantment(enchantment: Enchantment): void;
    /**
     * @remarks
     * 向物品堆叠添加一系列附魔。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param enchantments
     * 要添加的附魔列表。
     * @throws
     * 如果任意附魔类型不存在，抛出 ScriptItemEnchantmentUnknownIdError。
     *
     * 如果任意附魔等级超出给定附魔类型的允许范围，抛出 ScriptItemEnchantmentLevelOutOfBoundsError。
     *
     * 如果任意附魔与物品堆叠不兼容，抛出 ScriptItemEnchantmentTypeNotCompatibleError。
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeNotCompatibleError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    addEnchantments(enchantments: Enchantment[]): void;
    /**
     * @remarks
     * 检查附魔是否可以添加到物品堆叠中。
     *
     * @param enchantment
     * 要添加的附魔对象。
     * @returns
     * 如果附魔可以添加到物品堆叠中，则返回 true。
     * @throws
     * 如果附魔类型不存在，抛出 ScriptItemEnchantmentUnknownIdError。
     *
     * 如果附魔等级超出给定附魔类型的允许范围，抛出 ScriptItemEnchantmentLevelOutOfBoundsError。
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * 从物品堆叠中获取指定类型的附魔。
     *
     * @param enchantmentType
     * 要获取的附魔类型。
     * @returns
     * 如果物品堆叠上存在该附魔，则返回附魔对象。
     * @throws
     * 如果附魔类型不存在，抛出 ScriptItemEnchantmentUnknownIdError。
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    getEnchantment(enchantmentType: EnchantmentType | string): Enchantment | undefined;
    /**
     * @remarks
     * 获取物品堆叠上的所有附魔。
     *
     * @returns
     * 返回物品堆叠上的附魔列表。
     * @throws 此函数可能抛出错误。
     */
    getEnchantments(): Enchantment[];
    /**
     * @remarks
     * 检查物品堆叠是否具有给定的附魔类型。
     *
     * @param enchantmentType
     * 要检查的附魔类型。
     * @returns
     * 如果物品堆叠具有该附魔类型，则返回 true。
     * @throws
     * 如果附魔类型不存在，抛出 ScriptItemEnchantmentUnknownIdError。
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    hasEnchantment(enchantmentType: EnchantmentType | string): boolean;
    /**
     * @remarks
     * 移除物品堆叠上的所有附魔。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    removeAllEnchantments(): void;
    /**
     * @remarks
     * 移除指定类型的附魔。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param enchantmentType
     * 要移除的附魔类型。
     * @throws
     * 如果附魔类型不存在，抛出 ScriptItemEnchantmentUnknownIdError。
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    removeEnchantment(enchantmentType: EnchantmentType | string): void;
}
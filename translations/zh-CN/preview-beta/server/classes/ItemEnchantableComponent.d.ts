/**
 * 当存在于物品上时，此物品可被附加附魔。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemEnchantableComponent extends ItemComponent {
    private constructor();
    /**
     * @throws 使用此属性时可能抛出错误。
     */
    readonly slots: EnchantmentSlot[];
    static readonly componentId = 'minecraft:enchantable';
    /**
     * @remarks
     * 向物品实例添加一个附魔。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param enchantment
     * 要添加的附魔接口。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 若附魔类型不存在则抛出异常。
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: 若附魔等级超出给定附魔类型的允许范围则抛出异常。
     *
     * ScriptItemEnchantmentTypeNotCompatibleError: 若附魔与物品实例不兼容则抛出异常。
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
     * 向物品实例添加一个附魔列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param enchantments
     * 要添加的附魔列表。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 若任意附魔类型不存在则抛出异常。
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: 若任意附魔等级超出给定附魔类型的允许范围则抛出异常。
     *
     * ScriptItemEnchantmentTypeNotCompatibleError: 若任意附魔与物品实例不兼容则抛出异常。
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
     * 检查附魔是否可以添加到物品实例。
     *
     * @param enchantment
     * 要添加的附魔接口。
     * @returns
     * 若附魔可添加到物品实例，则返回 true。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 若附魔类型不存在则抛出异常。
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: 若附魔等级超出给定附魔类型的允许范围则抛出异常。
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * 从物品实例中获取指定类型的附魔。
     *
     * @param enchantmentType
     * 要获取的附魔类型。
     * @returns
     * 若物品实例上存在该附魔，则返回该附魔。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 若附魔类型不存在则抛出异常。
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    getEnchantment(enchantmentType: EnchantmentType | string): Enchantment | undefined;
    /**
     * @remarks
     * 获取物品实例上的所有附魔。
     *
     * @returns
     * 返回物品实例上的附魔列表。
     * @throws 此函数可能抛出错误。
     */
    getEnchantments(): Enchantment[];
    /**
     * @remarks
     * 检查物品实例是否拥有给定的附魔类型。
     *
     * @param enchantmentType
     * 要检查的附魔类型。
     * @returns
     * 若物品实例拥有该附魔类型，则返回 true。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 若附魔类型不存在则抛出异常。
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    hasEnchantment(enchantmentType: EnchantmentType | string): boolean;
    /**
     * @remarks
     * 移除应用于此物品实例的所有附魔。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    removeAllEnchantments(): void;
    /**
     * @remarks
     * 移除给定类型的附魔。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param enchantmentType
     * 要移除的附魔类型。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 若附魔类型不存在则抛出异常。
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    removeEnchantment(enchantmentType: EnchantmentType | string): void;
}
/**
 * 当物品上存在此组件时，该物品可以附加附魔。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemEnchantableComponent extends ItemComponent {
    private constructor();
    /**
     * @throws 此属性在被使用时可能抛出错误。
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
     * ScriptItemEnchantmentUnknownIdError: 当附魔类型不存在时抛出。
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: 当附魔等级超出给定附魔类型的允许范围时抛出。
     *
     * ScriptItemEnchantmentTypeNotCompatibleError: 当附魔与物品实例不兼容时抛出。
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
     * 向物品实例添加一组附魔。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param enchantments
     * 要添加的附魔列表。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 如果任一附魔类型不存在则抛出。
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: 如果任一附魔等级超出给定附魔类型的允许范围则抛出。
     *
     * ScriptItemEnchantmentTypeNotCompatibleError: 如果任一附魔与物品实例不兼容则抛出。
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
     * 如果附魔可以添加到物品实例，则返回 true。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 当附魔类型不存在时抛出。
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: 当附魔等级超出给定附魔类型的允许范围时抛出。
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * 从物品实例获取指定类型的附魔。
     *
     * @param enchantmentType
     * 要获取的附魔类型。
     * @returns
     * 如果物品实例上存在该附魔，则返回该附魔。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 当附魔类型不存在时抛出。
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
     * 如果物品实例拥有该附魔类型，则返回 true。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 当附魔类型不存在时抛出。
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    hasEnchantment(enchantmentType: EnchantmentType | string): boolean;
    /**
     * @remarks
     * 移除该物品实例上的所有附魔。
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
     * ScriptItemEnchantmentUnknownIdError: 当附魔类型不存在时抛出。
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    removeEnchantment(enchantmentType: EnchantmentType | string): void;
}
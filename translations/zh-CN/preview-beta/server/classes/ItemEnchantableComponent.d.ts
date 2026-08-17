/**
 * 当物品上存在该组件时，
 * 此物品可被附加魔咒。
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
     * 向物品实例添加一个魔咒。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param enchantment
     * 要添加的魔咒接口。
     * @throws
     * ScriptItemEnchantmentUnknownIdError：当魔咒类型不存在时抛出。
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError：当魔咒等级超出给定魔咒类型的允许范围时抛出。
     *
     * ScriptItemEnchantmentTypeNotCompatibleError：当魔咒与物品实例不兼容时抛出。
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
     * 向物品实例添加一组魔咒。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param enchantments
     * 要添加的魔咒列表。
     * @throws
     * ScriptItemEnchantmentUnknownIdError：当任一魔咒类型不存在时抛出。
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError：当任一魔咒等级超出给定魔咒类型的允许范围时抛出。
     *
     * ScriptItemEnchantmentTypeNotCompatibleError：当任一魔咒与物品实例不兼容时抛出。
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
     * 检查是否可向物品实例添加魔咒。
     *
     * @param enchantment
     * 要添加的魔咒接口。
     * @returns
     * 如果魔咒可添加到物品实例，则返回 true。
     * @throws
     * ScriptItemEnchantmentUnknownIdError：当魔咒类型不存在时抛出。
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError：当魔咒等级超出给定魔咒类型的允许范围时抛出。
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * 从物品实例获取指定类型的魔咒。
     *
     * @param enchantmentType
     * 要获取的魔咒类型。
     * @returns
     * 如果物品实例上存在该魔咒，则返回该魔咒。
     * @throws
     * ScriptItemEnchantmentUnknownIdError：当魔咒类型不存在时抛出。
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    getEnchantment(enchantmentType: EnchantmentType | string): Enchantment | undefined;
    /**
     * @remarks
     * 获取物品实例上的所有魔咒。
     *
     * @returns
     * 返回物品实例上的魔咒列表。
     * @throws 此函数可能抛出错误。
     */
    getEnchantments(): Enchantment[];
    /**
     * @remarks
     * 检查物品实例是否具有指定魔咒类型。
     *
     * @param enchantmentType
     * 要检查的魔咒类型。
     * @returns
     * 如果物品实例具有该魔咒类型，则返回 true。
     * @throws
     * ScriptItemEnchantmentUnknownIdError：当魔咒类型不存在时抛出。
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    hasEnchantment(enchantmentType: EnchantmentType | string): boolean;
    /**
     * @remarks
     * 移除该物品实例上的所有魔咒。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    removeAllEnchantments(): void;
    /**
     * @remarks
     * 移除指定类型的魔咒。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param enchantmentType
     * 要移除的魔咒类型。
     * @throws
     * ScriptItemEnchantmentUnknownIdError：当魔咒类型不存在时抛出。
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    removeEnchantment(enchantmentType: EnchantmentType | string): void;
}
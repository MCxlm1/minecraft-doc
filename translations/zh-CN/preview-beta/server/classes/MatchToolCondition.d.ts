/**
 * 战利品物品条件，用于检查是否使用了合适的工具来触发战利品事件。
 * 可以描述物品类型、数量、耐久度、附魔，或用于比较的物品标签数组。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class MatchToolCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 此条件通过所需的堆叠数量（即数量）。
     *
     */
    readonly count: minecraftcommon.NumberRange;
    /**
     * @remarks
     * 此条件通过所需的耐久度值。
     *
     */
    readonly durability: minecraftcommon.NumberRange;
    /**
     * @remarks
     * 此条件通过所需的附魔数组。
     *
     */
    readonly enchantments: EnchantInfo[];
    /**
     * @remarks
     * 此条件通过所需的工具物品名称。
     *
     */
    readonly itemName: string;
    /**
     * @remarks
     * 此条件通过所需的所有必须匹配的物品标签数组。
     *
     */
    readonly itemTagsAll: string[];
    /**
     * @remarks
     * 此条件通过所需的至少匹配一个的物品标签数组。
     *
     */
    readonly itemTagsAny: string[];
    /**
     * @remarks
     * 此条件通过所需的一个也不匹配的物品标签数组。
     *
     */
    readonly itemTagsNone: string[];
}
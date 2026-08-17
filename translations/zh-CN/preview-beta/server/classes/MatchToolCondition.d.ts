/**
 * 检查是否使用了合适的工具触发战利品事件的条件。可以描述物品类型、数量、耐久度、附魔或要比较的物品标签数组。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class MatchToolCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 此条件通过所需的堆叠大小或数量。
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
     * 必须全部匹配此条件才能通过的物品标签数组。
     *
     */
    readonly itemTagsAll: string[];
    /**
     * @remarks
     * 至少匹配其中一个即可通过此条件的物品标签数组。
     *
     */
    readonly itemTagsAny: string[];
    /**
     * @remarks
     * 零个匹配即可通过此条件的物品标签数组。
     *
     */
    readonly itemTagsNone: string[];
}
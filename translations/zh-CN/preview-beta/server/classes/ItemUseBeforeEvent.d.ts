/**
 * 包含与正在使用的物品相关的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemUseBeforeEvent extends ItemUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，将取消物品使用行为。
     *
     */
    cancel: boolean;
}
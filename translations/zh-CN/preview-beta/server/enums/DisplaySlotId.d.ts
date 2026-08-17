/**
 * 指定在计分板上显示分数的机制。
 */
export enum DisplaySlotId {
    /**
     * @remarks
     * 在玩家名称下方显示分数。
     *
     */
    BelowName = 'BelowName',
    /**
     * @remarks
     * 在暂停屏幕上以列表形式显示分数。
     *
     */
    List = 'List',
    /**
     * @remarks
     * 在玩家屏幕侧面显示分数。
     *
     */
    Sidebar = 'Sidebar',
}
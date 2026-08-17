/**
 * @beta
 * 包含与玩家成功使用命名名称标签物品命名实体时相关的信息。
 */
export class PlayerUseNameTagAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被玩家命名的实体。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    entityNamed: Entity;
    /**
     * @remarks
     * 玩家给予实体的新名称。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    newName: string;
    /**
     * @remarks
     * 使用名称标签的玩家的句柄。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    player: Player;
    /**
     * @remarks
     * 玩家使用名称标签之前实体的先前名称。
     * 如果实体之前没有命名，该值将为 undefined。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    previousName?: string;
}
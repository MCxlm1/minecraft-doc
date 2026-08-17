/**
 * @beta
 * 包含与玩家成功使用已命名的命名牌物品命名实体相关的信息。
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
     * 玩家赋予实体的新名称。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    newName: string;
    /**
     * @remarks
     * 使用命名牌的玩家的句柄。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    player: Player;
    /**
     * @remarks
     * 玩家使用命名牌之前实体的旧名称。如果实体之前未被命名，则该值为undefined。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    previousName?: string;
}
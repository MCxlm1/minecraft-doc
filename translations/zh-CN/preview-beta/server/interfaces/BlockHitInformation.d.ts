/**
 * 包含方块被击中事件的更多信息。
 */
export interface BlockHitInformation {
    /**
     * @remarks
     * 被击中的方块。
     *
     */
    block: Block;
    /**
     * @remarks
     * 被击中的方块面。
     *
     */
    face: Direction;
    /**
     * @remarks
     * 相对于方块底部西北角的位置。
     *
     */
    faceLocation: Vector3;
}
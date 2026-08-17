/**
 * 包含方块射线投射命中结果的信息。
 */
export interface BlockRaycastHit {
    /**
     * @remarks
     * 被击中的方块。
     */
    block: Block;
    /**
     * @remarks
     * 被击中的方块面。
     */
    face: Direction;
    /**
     * @remarks
     * 相对于方块底部西北角的命中位置。
     */
    faceLocation: Vector3;
}
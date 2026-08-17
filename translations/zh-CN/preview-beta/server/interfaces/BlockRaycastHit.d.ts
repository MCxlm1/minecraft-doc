/**
 * 包含关于方块射线投射命中结果的信息。
 */
export interface BlockRaycastHit {
    /**
     * @remarks
     * 被击中的方块。
     *
     */
    block: Block;
    /**
     * @remarks
     * 被击中的方块的面。
     *
     */
    face: Direction;
    /**
     * @remarks
     * 相对于方块底部西北角的击中位置。
     *
     */
    faceLocation: Vector3;
}
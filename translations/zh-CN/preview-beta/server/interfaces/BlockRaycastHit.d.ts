/**
 * 包含方块射线检测命中结果的信息。
 */
export interface BlockRaycastHit {
    /**
     * @remarks
     * 被命中的方块。
     *
     */
    block: Block;
    /**
     * @remarks
     * 被命中方块的面。
     *
     */
    face: Direction;
    /**
     * @remarks
     * 相对于方块底部西北角的
     * 命中位置。
     *
     */
    faceLocation: Vector3;
}
/**
 * 用于使用自由摄像机瞄准一个实体。
 */
export interface CameraTargetOptions {
    /**
     * @remarks
     * 设置一个相对于目标实体中心的<x, y, z>偏移量。
     *
     */
    offsetFromTargetCenter?: Vector3;
    /**
     * @remarks
     * 你想要瞄准的单个实体。
     *
     */
    targetEntity: Entity;
}
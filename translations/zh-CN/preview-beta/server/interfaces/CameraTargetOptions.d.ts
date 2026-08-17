/**
 * 用于以自由摄像机为目标锁定一个实体。
 */
export interface CameraTargetOptions {
    /**
     * @remarks
     * 设置相对于目标实体中心的 <x, y, z> 偏移量。
     *
     */
    offsetFromTargetCenter?: Vector3;
    /**
     * @remarks
     * 你想要锁定的单个实体。
     *
     */
    targetEntity: Entity;
}
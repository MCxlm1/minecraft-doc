/**
 * 用于以自由摄像机瞄准一个实体。
 */
export interface CameraTargetOptions {
    /**
     * @remarks
     * 设置从目标实体中心出发的 <x, y, z> 偏移量。
     *
     */
    offsetFromTargetCenter?: Vector3;
    /**
     * @remarks
     * 你想瞄准的单个实体。
     *
     */
    targetEntity: Entity;
}
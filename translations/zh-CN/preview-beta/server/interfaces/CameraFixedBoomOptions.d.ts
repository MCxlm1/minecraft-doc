/**
 * 控制第三人称视角预设的枢轴点和偏移的选项。
 */
export interface CameraFixedBoomOptions {
    /**
     * @remarks
     * 将枢轴点更改为距离玩家 <x, y, z> 的位置。
     *
     */
    entityOffset?: Vector3;
    /**
     * @remarks
     * 将相机从中心偏移 <x, y>。
     *
     */
    viewOffset?: Vector2;
}
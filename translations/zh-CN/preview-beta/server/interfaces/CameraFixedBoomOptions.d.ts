/**
 * 控制第三人称视角吊杆预设的枢轴点与偏移
 * 的选项。
 */
export interface CameraFixedBoomOptions {
    /**
     * @remarks
     * 将枢轴点更改为与玩家相距 <x, y, z>
     * 的位置。
     *
     */
    entityOffset?: Vector3;
    /**
     * @remarks
     * 将摄像机从中心偏移 <x, y>。
     *
     */
    viewOffset?: Vector2;
}
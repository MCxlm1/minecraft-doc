/**
 * 包含与指定玩家的活动摄像机相关的方法。
 */
export class Camera {
    private constructor();
    /**
     * @remarks
     * 返回摄像机是否可访问和使用。当摄像机的拥有者玩家已加载且有效时，摄像机被视为有效。
     *
     */
    readonly isValid: boolean;
    /**
     * @beta
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @param shakeCameraOptions
     * 摄像机抖动选项。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    addShake(shakeCameraOptions: CameraShakeOptions): void;
    /**
     * @remarks
     * 将摄像机附加到非玩家实体。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param attachCameraOptions
     * 摄像机要附加到的实体的选项。包含实体标识符和可选的实体位置。
     * @throws 此函数可能抛出错误。
     */
    attachToEntity(attachCameraOptions?: CameraAttachOptions): void;
    /**
     * @remarks
     * 清除指定玩家的活动摄像机。使指定玩家结束任何进行中的摄像机视角，包括任何缓动摄像机运动，并返回其正常视角。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    clear(): void;
    /**
     * @remarks
     * 开始摄像机淡变过渡。淡变过渡是在全屏颜色上淡入、保持、再淡出的过程。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param fadeCameraOptions
     * 摄像机淡变操作的附加选项。
     * @throws 此函数可能抛出错误。
     */
    fade(fadeCameraOptions?: CameraFadeOptions): void;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @param splineType
     * 动画使用的样条类型。
     * @param cameraAnimationOptions
     * 摄像机动画的选项。
     * @throws 此函数可能抛出错误。
     */
    playAnimation(splineType: CatmullRomSpline | LinearSpline, cameraAnimationOptions: AnimationOptions): void;
    /**
     * @remarks
     * 为指定玩家设置当前活动摄像机。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param cameraPreset
     * JSON 中定义的摄像机预设文件的标识符。
     * @param setOptions
     * 摄像机的附加选项。
     * @throws 此函数可能抛出错误。
     */
    setCamera(
        cameraPreset: string,
        setOptions?:
            | CameraFixedBoomOptions
            | CameraSetFacingOptions
            | CameraSetLocationOptions
            | CameraSetPosOptions
            | CameraSetRotOptions
            | CameraTargetOptions,
    ): void;
    /**
     * @beta
     * @remarks
     * 设置当前活动摄像机并带有缓动效果。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param cameraPreset
     * JSON 中定义的摄像机预设文件的标识符。
     * @param easeOptions
     * 用于将摄像机从上一个摄像机缓动到当前摄像机的选项。
     * @throws
     * 当未启用实验性摄像机开关而缓动到 minecraft:first_person 预设时抛出。
     */
    setCameraWithEase(cameraPreset: string, easeOptions: EaseOptions): void;
    /**
     * @remarks
     * 为指定玩家设置当前活动摄像机，并将位置和旋转重置为 JSON 中定义的值。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param cameraPreset
     * JSON 中定义的摄像机预设文件的标识符。
     * @param easeOptions
     * 用于将摄像机缓动回其原始位置和旋转的选项。
     * @throws 此函数可能抛出错误。
     */
    setDefaultCamera(cameraPreset: string, easeOptions?: EaseOptions): void;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @param fovCameraOptions
     * 摄像机视场角选项。
     * @throws 此函数可能抛出错误。
     */
    setFov(fovCameraOptions?: CameraFovOptions): void;
    /**
     * @beta
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    stopShaking(): void;
}
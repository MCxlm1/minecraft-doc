/**
 * 包含与指定玩家活跃相机相关的
 * 方法。
 */
export class Camera {
    private constructor();
    /**
     * @remarks
     * 返回相机是否有效可访问和使用。当
     * 相机被视为有效，当拥有玩家
     * 已加载且自身有效。
     *
     */
    readonly isValid: boolean;
    /**
     * @beta
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    addShake(shakeCameraOptions: CameraShakeOptions): void;
    /**
     * @remarks
     * 将相机附加到非玩家实体。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param attachCameraOptions
     * 相机附加到的实体的选项。包含实体标识符和可选的实体位置。
     * @throws 此函数可能抛出错误。
     */
    attachToEntity(attachCameraOptions?: CameraAttachOptions): void;
    /**
     * @remarks
     * 清除指定玩家的活跃相机。导致
     * 指定玩家结束任何进行中的相机
     * 视角，包括任何平滑相机运动，并返回
     * 到正常视角。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    clear(): void;
    /**
     * @remarks
     * 开始相机淡入淡出过渡。淡入淡出过渡是一种
     * 全屏颜色，先淡入，保持，然后淡出。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param fadeCameraOptions
     * 关于相机淡入淡出操作的额外选项。
     * @throws 此函数可能抛出错误。
     */
    fade(fadeCameraOptions?: CameraFadeOptions): void;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @param splineType 样条类型。
     * @param cameraAnimationOptions 相机动画选项。
     * @throws 此函数可能抛出错误。
     */
    playAnimation(splineType: CatmullRomSpline | LinearSpline, cameraAnimationOptions: AnimationOptions): void;
    /**
     * @remarks
     * 设置指定玩家的当前活跃相机。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param cameraPreset
     * 在 JSON 中定义的相机预设文件标识符。
     * @param setOptions
     * 相机的额外选项。
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
     * 设置当前活跃相机并带有平滑过渡。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param cameraPreset
     * 在 JSON 中定义的相机预设文件标识符。
     * @param easeOptions
     * 将相机从上一个相机平滑过渡到当前相机的选项。
     * @throws
     * 当平滑过渡到 minecraft:first_person 预设时，当前未启用实验性相机切换开关时会抛出错误。
     */
    setCameraWithEase(cameraPreset: string, easeOptions: EaseOptions): void;
    /**
     * @remarks
     * 设置指定玩家的当前活跃相机，并
     * 将位置和旋转重置为 JSON 中定义的
     * 值。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param cameraPreset
     * 在 JSON 中定义的相机预设文件标识符。
     * @param easeOptions
     * 将相机平滑过渡回其原始位置和旋转的选项。
     * @throws 此函数可能抛出错误。
     */
    setDefaultCamera(cameraPreset: string, easeOptions?: EaseOptions): void;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @param fovCameraOptions 视野选项。
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
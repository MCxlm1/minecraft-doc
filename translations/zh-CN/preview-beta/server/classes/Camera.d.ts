/**
 * 包含与特定玩家活动相机相关的方法。
 */
export class Camera {
    private constructor();
    /**
     * @remarks
     * 返回相机是否可访问和使用。当相机的拥有玩家本身已加载且有效时，相机被视为有效。
     *
     */
    readonly isValid: boolean;
    /**
     * @beta
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能会抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    addShake(shakeCameraOptions: CameraShakeOptions): void;
    /**
     * @remarks
     * 将相机附加到非玩家实体上。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param attachCameraOptions
     * 相机附加到的实体的选项。包含实体标识符和可选的实体位置。
     * @throws 此函数可能会抛出错误。
     */
    attachToEntity(attachCameraOptions?: CameraAttachOptions): void;
    /**
     * @remarks
     * 清除指定玩家的活动相机。使指定玩家结束任何进行中的相机视角，包括任何缓动相机运动，并返回其正常视角。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能会抛出错误。
     */
    clear(): void;
    /**
     * @remarks
     * 开始相机淡入淡出过渡。淡入淡出过渡是一种全屏颜色，先淡入，保持，然后淡出。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param fadeCameraOptions
     * 关于相机淡入淡出操作的附加选项。
     * @throws 此函数可能会抛出错误。
     */
    fade(fadeCameraOptions?: CameraFadeOptions): void;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能会抛出错误。
     */
    playAnimation(splineType: CatmullRomSpline | LinearSpline, cameraAnimationOptions: AnimationOptions): void;
    /**
     * @remarks
     * 设置指定玩家的当前活动相机。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param cameraPreset
     * 在 JSON 中定义的相机预设文件的标识符。
     * @param setOptions
     * 相机的附加选项。
     * @throws 此函数可能会抛出错误。
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
     * 设置带有缓动的当前活动相机。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param cameraPreset
     * 在 JSON 中定义的相机预设文件的标识符。
     * @param easeOptions
     * 用于将相机从上一个相机缓动到当前相机的选项。
     * @throws
     * 当缓动到 minecraft:first_person 预设但当前未启用实验性相机切换时抛出。
     */
    setCameraWithEase(cameraPreset: string, easeOptions: EaseOptions): void;
    /**
     * @remarks
     * 设置指定玩家的当前活动相机，并将位置和旋转重置为 JSON 中定义的值。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param cameraPreset
     * 在 JSON 中定义的相机预设文件的标识符。
     * @param easeOptions
     * 用于将相机缓动回其原始位置和旋转的选项。
     * @throws 此函数可能会抛出错误。
     */
    setDefaultCamera(cameraPreset: string, easeOptions?: EaseOptions): void;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能会抛出错误。
     */
    setFov(fovCameraOptions?: CameraFovOptions): void;
    /**
     * @beta
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能会抛出错误。
     *
     * {@link InvalidEntityError}
     */
    stopShaking(): void;
}
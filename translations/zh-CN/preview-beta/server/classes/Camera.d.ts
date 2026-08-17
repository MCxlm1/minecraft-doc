/**
 * 包含与指定玩家的活动相机相关的方法。
 */
export class Camera {
    private constructor();
    /**
     * @remarks
     * 返回此相机是否可访问和使用。当相机的所属玩家已加载且本身有效时，该相机被视为有效。
     *
     * @returns 如果相机有效则为 true，否则为 false。
     */
    readonly isValid: boolean;
    /**
     * @beta
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * @param shakeCameraOptions
     * 相机抖动的配置选项。
     * @throws
     * 若相机无效，抛出 {@link InvalidEntityError}；若抖动选项超出有效范围，抛出 {@link minecraftcommon.ArgumentOutOfBoundsError}。
     */
    addShake(shakeCameraOptions: CameraShakeOptions): void;
    /**
     * @remarks
     * 将相机附加到一个非玩家实体。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param attachCameraOptions
     * 相机将要附加到的实体的选项。包含实体标识符和可选实体位置。
     * @throws
     * 若相机无效或操作失败，则抛出错误。
     */
    attachToEntity(attachCameraOptions?: CameraAttachOptions): void;
    /**
     * @remarks
     * 清除指定玩家的活动相机。使指定玩家结束任何进行中的相机视角（包括任何缓动相机运动），并返回其正常视角。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @throws
     * 若相机无效或操作失败，则抛出错误。
     */
    clear(): void;
    /**
     * @remarks
     * 开始相机的淡入淡出过渡。淡入淡出过渡是一种全屏颜色，先淡入、保持，再淡出。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param fadeCameraOptions
     * 相机淡入淡出操作的附加选项。
     * @throws
     * 若相机无效或操作失败，则抛出错误。
     */
    fade(fadeCameraOptions?: CameraFadeOptions): void;
    /**
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * @param splineType
     * 样条类型，用于定义相机动画的运动路径。
     * @param cameraAnimationOptions
     * 相机动画的选项。
     * @throws
     * 若相机无效或动画参数无效，则抛出错误。
     */
    playAnimation(splineType: CatmullRomSpline | LinearSpline, cameraAnimationOptions: AnimationOptions): void;
    /**
     * @remarks
     * 设置指定玩家的当前活动相机。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param cameraPreset
     * JSON 中定义的相机预设文件的标识符。
     * @param setOptions
     * 相机的附加选项。
     * @throws
     * 若相机预设无效或相机无效，则抛出错误。
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
     * 使用缓动设置当前活动相机。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param cameraPreset
     * JSON 中定义的相机预设文件的标识符。
     * @param easeOptions
     * 用于将相机从上一相机缓动到当前相机的选项。
     * @throws
     * 当前未启用实验性相机切换时，缓动到 minecraft:first_person 预设会抛出错误。
     */
    setCameraWithEase(cameraPreset: string, easeOptions: EaseOptions): void;
    /**
     * @remarks
     * 设置指定玩家的当前活动相机，并将位置和旋转重置为 JSON 中定义的值。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param cameraPreset
     * JSON 中定义的相机预设文件的标识符。
     * @param easeOptions
     * 用于将相机缓动回其原始位置和旋转的选项。
     * @throws
     * 若相机无效或操作失败，则抛出错误。
     */
    setDefaultCamera(cameraPreset: string, easeOptions?: EaseOptions): void;
    /**
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * @param fovCameraOptions
     * 相机视场角设置的选项。
     * @throws
     * 若相机无效或操作失败，则抛出错误。
     */
    setFov(fovCameraOptions?: CameraFovOptions): void;
    /**
     * @beta
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * @throws
     * 若相机无效，抛出 {@link InvalidEntityError}。
     */
    stopShaking(): void;
}
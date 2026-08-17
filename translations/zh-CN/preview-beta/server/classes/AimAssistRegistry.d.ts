/**
 * 一个容器，包含与世界的瞄准辅助设置相关的 API。
 */
export class AimAssistRegistry {
    private constructor();
    /**
     * @remarks
     * 未另行指定时使用的默认瞄准辅助类别 ID。
     *
     */
    static readonly DefaultCategoryId = 'minecraft:default';
    /**
     * @remarks
     * 未另行指定时使用的默认瞄准辅助预设 ID。
     *
     */
    static readonly DefaultPresetId = 'minecraft:aim_assist_default';
    /**
     * @remarks
     * 向注册表添加一个瞄准辅助类别。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param category
     * 用于创建新类别的类别设置。
     * @returns
     * 创建的类别句柄。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    addCategory(category: AimAssistCategorySettings): AimAssistCategory;
    /**
     * @remarks
     * 向注册表添加一个瞄准辅助预设。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param preset
     * 用于创建新预设的预设设置。
     * @returns
     * 创建的预设句柄。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    addPreset(preset: AimAssistPresetSettings): AimAssistPreset;
    /**
     * @remarks
     * 获取注册表中所有可用的类别。
     *
     * @returns
     * 包含所有可用类别对象的数组。
     */
    getCategories(): AimAssistCategory[];
    /**
     * @remarks
     * 获取与所提供 ID 关联的类别。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param categoryId
     * 要获取的类别的 ID。
     * @returns
     * 如果存在，则为类别对象；否则返回 undefined。
     */
    getCategory(categoryId: string): AimAssistCategory | undefined;
    /**
     * @remarks
     * 获取与所提供 ID 关联的预设。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param presetId
     * 要获取的预设的 ID。必须包含命名空间。
     * @returns
     * 如果存在，则为预设对象；否则返回 undefined。
     */
    getPreset(presetId: string): AimAssistPreset | undefined;
    /**
     * @remarks
     * 获取注册表中所有可用的预设。
     *
     * @returns
     * 包含所有可用预设对象的数组。
     */
    getPresets(): AimAssistPreset[];
}
/**
 * 一个容器，用于管理与世界的瞄准辅助设置
 * 相关的 API。
 */
export class AimAssistRegistry {
    private constructor();
    /**
     * @remarks
     * 默认的瞄准辅助类别 Id，在未另行指定时
     * 使用。
     *
     */
    static readonly DefaultCategoryId = 'minecraft:default';
    /**
     * @remarks
     * 默认的瞄准辅助预设 Id，在未另行指定时
     * 使用。
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
     * 已创建的类别句柄。
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
     * 已创建的预设句柄。
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
     * 获取注册表中的所有可用类别。
     *
     * @returns
     * 包含所有可用类别对象的数组。
     */
    getCategories(): AimAssistCategory[];
    /**
     * @remarks
     * 获取与所提供的 Id 关联的类别。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param categoryId
     * 要检索的类别的 Id。必须包含命名空间。
     * @returns
     * 如果存在则返回类别对象，否则返回
     * undefined。
     */
    getCategory(categoryId: string): AimAssistCategory | undefined;
    /**
     * @remarks
     * 获取与所提供的 Id 关联的预设。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param presetId
     * 要检索的预设的 Id。必须包含命名空间。
     * @returns
     * 如果存在则返回预设对象，否则返回 undefined。
     */
    getPreset(presetId: string): AimAssistPreset | undefined;
    /**
     * @remarks
     * 获取注册表中的所有可用预设。
     *
     * @returns
     * 包含所有可用预设对象的数组。
     */
    getPresets(): AimAssistPreset[];
}
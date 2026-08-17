/**
 * 显示在玩家定位栏上的路标点的基类。
 * 路标点可以追踪位置或实体，并使用可自定义的纹理和颜色进行渲染。
 *
 * 路标点是共享句柄，可以被添加到多个玩家的定位栏中。
 * 当你修改某个路标点的属性（如颜色、纹理或启用状态）时，
 * 所有在定位栏中拥有该路标点的玩家都会看到这些更改。
 * 这允许你跨多个玩家高效地管理路标点，而无需为每个玩家创建单独的实例。
 */
export class Waypoint {
    private constructor();
    /**
     * @remarks
     * 应用于路标点图标的可选 {@link RGB} 颜色着色。
     * 如果未指定，路标点将使用其默认颜色。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    color?: RGB;
    /**
     * @remarks
     * 控制路标点当前是否显示在玩家屏幕上。禁用时，路标点会隐藏但仍保持有效。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    isEnabled: boolean;
    /**
     * @remarks
     * 返回路标点当前是否有效。当其追踪的实体不再有效时，路标点将变为无效。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 决定路标点根据距离或其他条件显示哪种图标纹理的 {@link WaypointTextureSelector}。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    textureSelector: WaypointTextureSelector;
    /**
     * @remarks
     * 获取路标点当前的 {@link DimensionLocation}。
     * 对于实体路标点，返回实体的当前位置。对于位置路标点，返回存储的位置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns 返回当前路标点的维度位置。
     *
     * @throws 当路标点无效时抛出 {@link InvalidWaypointError}。
     * @throws 当路标点纹理选择器无效时抛出 {@link InvalidWaypointTextureSelectorError}。
     */
    getDimensionLocation(): DimensionLocation;
    /**
     * @remarks
     * 从所有已添加的定位栏中移除路标点。这会影响所有在定位栏中拥有此路标点的玩家。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    remove(): void;
}
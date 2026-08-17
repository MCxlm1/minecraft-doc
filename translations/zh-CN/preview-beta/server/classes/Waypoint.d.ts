/**
 * 显示在玩家定位栏上的路标点的基类。路标点可以追踪位置或实体，并使用可自定义的纹理和颜色进行渲染。
 *
 * 路标点作为共享句柄，可添加到多个玩家的定位栏中。当你修改路标点的属性（如颜色、纹理或启用状态）时，对于所有在其定位栏中包含该路标点的玩家，这些更改都会生效。这使你可以高效地管理多个玩家的路标点，而无需为每个玩家创建单独的实例。
 */
export class Waypoint {
    private constructor();
    /**
     * @remarks
     * 可选的 {@link RGB} 颜色色调，应用于路标点图标。若未指定，路标点将使用其默认颜色。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    color?: RGB;
    /**
     * @remarks
     * 控制路标点当前是否显示在玩家的屏幕上。禁用时，路标点会被隐藏，但仍保持有效。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    isEnabled: boolean;
    /**
     * @remarks
     * 返回路标点当前是否有效。当所追踪的实体不再有效时，路标点将变为无效。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 用于根据距离或其他条件决定路标点显示哪种图标纹理的 {@link WaypointTextureSelector}。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    textureSelector: WaypointTextureSelector;
    /**
     * @remarks
     * 获取路标点当前的 {@link DimensionLocation}。对于实体路标点，返回实体的当前位置；对于位置路标点，返回存储的位置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns 该路标点当前的维度位置。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    getDimensionLocation(): DimensionLocation;
    /**
     * @remarks
     * 从所有已添加该路标点的定位栏中移除它。这会影响所有在其定位栏中包含该路标点的玩家。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    remove(): void;
}
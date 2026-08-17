/**
 * 显示在玩家定位栏上的路径点的基类。路径点可以跟踪位置或实体，并使用可自定义的纹理和颜色进行渲染。
 *
 * 路径点作为共享句柄，可以添加到多个玩家的定位栏中。当你修改路径点的属性（如颜色、纹理或启用状态）时，
 * 所有在定位栏中拥有该路径点的玩家都会看到更改。这使你可以跨多个玩家高效管理路径点，而无需为每个玩家创建单独的实例。
 */
export class Waypoint {
    private constructor();
    /**
     * @remarks
     * 可选的 {@link RGB} 颜色色调，应用于路径点图标。如果未指定，路径点使用默认颜色。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    color?: RGB;
    /**
     * @remarks
     * 控制路径点当前是否显示在玩家屏幕上。禁用时，路径点隐藏但保持有效。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    isEnabled: boolean;
    /**
     * @remarks
     * 返回路径点当前是否有效。当路径点跟踪的实体不再有效时，路径点变为无效。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 决定路径点显示哪个图标纹理的 {@link WaypointTextureSelector}，基于距离或其他条件。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    textureSelector: WaypointTextureSelector;
    /**
     * @remarks
     * 获取路径点的当前 {@link DimensionLocation}。对于实体路径点，返回实体的当前位置；对于位置路径点，返回存储的位置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns 当前路径点的位置（{@link DimensionLocation}）。
     * @throws 若路径点无效，抛出 {@link InvalidWaypointError}；若路径点的纹理选择器无效，抛出 {@link InvalidWaypointTextureSelectorError}。
     */
    getDimensionLocation(): DimensionLocation;
    /**
     * @remarks
     * 从所有已添加的定位栏中移除该路径点。这会影响所有在定位栏中拥有该路径点的玩家。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    remove(): void;
}
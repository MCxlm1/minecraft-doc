/**
 * 显示在玩家定位器栏上的导航点的基类。
 * 导航点可以追踪位置或实体，并使用可自定义的纹理和颜色进行渲染。
 *
 * 导航点充当共享句柄，可以添加到多个玩家的定位器栏中。
 * 当你修改导航点的属性（例如颜色、纹理或启用状态）时，
 * 所有在其定位器栏中拥有该导航点的玩家都将看到更改。
 * 这允许你高效地管理多个玩家之间的导航点，而无需为每个玩家创建单独的实例。
 */
export class Waypoint {
    private constructor();
    /**
     * @remarks
     * 应用于导航点图标的可选 {@link RGB} 颜色色调。如果未指定，导航点将使用其默认颜色。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    color?: RGB;
    /**
     * @remarks
     * 控制导航点是否当前显示在玩家屏幕上。禁用时，导航点隐藏但仍然有效。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    isEnabled: boolean;
    /**
     * @remarks
     * 返回导航点当前是否有效。当导航点追踪的实体不再有效时，导航点变为无效。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 决定导航点根据距离或其他条件显示哪个图标纹理的 {@link WaypointTextureSelector}。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    textureSelector: WaypointTextureSelector;
    /**
     * @remarks
     * 获取导航点当前的 {@link DimensionLocation}。
     * 对于实体导航点，返回实体的当前位置。
     * 对于位置导航点，返回存储的位置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能会抛出错误。
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    getDimensionLocation(): DimensionLocation;
    /**
     * @remarks
     * 从所有已添加的定位器栏中移除该导航点。这会影响到所有在其定位器栏中拥有此导航点的玩家。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    remove(): void;
}
/**
 * 玩家定位栏上显示的航点（waypoint）的基类。
 * 航点可追踪位置或实体，并可使用可自定义的
 * 纹理与颜色进行渲染。
 *
 * 航点充当可添加到多个玩家定位栏的共享句柄。
 * 当你修改航点属性（如颜色、纹理或启用状态）时，
 * 所有在其定位栏中拥有该航点的玩家都会看到变化。
 * 这样你就能高效地跨多个玩家管理航点，
 * 而无需为每个玩家创建单独的实例。
 */
export class Waypoint {
    private constructor();
    /**
     * @remarks
     * 可选的颜色色调 {@link RGB}，应用于航点图标。
     * 如果未指定，航点将使用其默认颜色。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    color?: RGB;
    /**
     * @remarks
     * 控制航点当前是否显示在玩家屏幕上。
     * 禁用时，航点会被隐藏但仍然有效。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    isEnabled: boolean;
    /**
     * @remarks
     * 返回航点当前是否有效。当航点追踪的实体不再有效时，
     * 航点将变为无效。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 用于确定航点显示哪个图标纹理的 {@link WaypointTextureSelector}，
     * 基于距离或其他条件。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    textureSelector: WaypointTextureSelector;
    /**
     * @remarks
     * 获取航点当前的 {@link DimensionLocation}。
     * 对于实体航点，返回实体的当前位置；
     * 对于位置航点，返回存储的位置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 当航点不再有效时抛出 {@link InvalidWaypointError}。
     * 当航点的纹理选择器无效时抛出 {@link InvalidWaypointTextureSelectorError}。
     */
    getDimensionLocation(): DimensionLocation;
    /**
     * @remarks
     * 将航点从所有已添加的定位栏中移除。
     * 这会影响所有定位栏中包含该航点的玩家。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    remove(): void;
}
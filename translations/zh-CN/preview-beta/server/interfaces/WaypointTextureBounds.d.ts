/**
 * 定义一个纹理及其显示的距离范围。
 * 在 {@link WaypointTextureSelector} 中使用，以实现基于距离的纹理切换。
 */
export interface WaypointTextureBounds {
    /**
     * @remarks
     * 该纹理的下距离边界。当与航点的距离大于此值时显示该纹理。
     * 值必须大于或等于 0。
     *
     * 最小值：0
     */
    lowerBound: number;
    /**
     * @remarks
     * 在此距离范围内显示的 {@link WaypointTexture} 或 {@link CustomTexture}。
     *
     */
    texture: CustomTexture | WaypointTexture;
    /**
     * @remarks
     * 该纹理的上距离边界。当与航点的距离小于或等于此值时显示该纹理。
     * 如果未定义，则没有上限。值必须大于或等于 0。
     *
     * 最小值：0
     */
    upperBound?: number;
}
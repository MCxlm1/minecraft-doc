/**
 * 定义一个纹理及其应显示的距离范围。在 {@link WaypointTextureSelector} 中使用，以创建基于距离的纹理切换。
 */
export interface WaypointTextureBounds {
    /**
     * @remarks
     * 此纹理的下界距离。当到航点的距离大于此值时显示该纹理。值必须大于或等于0。
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
     * 此纹理的上界距离。当到航点的距离小于或等于此值时显示该纹理。如果未定义，则无上限。值必须大于或等于0。
     *
     * 最小值：0
     */
    upperBound?: number;
}
/**
 * 文本基元基类。表示世界中的一个对象及其基本属性。
 */
export class PrimitiveShape {
    private constructor();
    /**
     * @remarks
     * 此形状所附加的实体。设置后，此形状将复制附加实体的根位置，而形状的位置将用作偏移量。
     *
     */
    attachedTo?: Entity;
    /**
     * @remarks
     * 形状的颜色。
     *
     */
    color: RGBA;
    /**
     * @remarks
     * 形状可见的维度。如果维度未定义，则将在所有维度中显示。
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 如果形状在移除前具有有限的时间跨度，则返回 true。
     *
     */
    readonly hasDuration: boolean;
    /**
     * @remarks
     * 形状的位置。
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * 如果定义了，此距离将用于确定每个客户端渲染此基元的距离。默认情况下，距离将与客户端的渲染距离设置匹配。
     *
     * 最小值：0
     */
    maximumRenderDistance?: number;
    /**
     * @remarks
     * 形状的旋转（欧拉角 - [俯仰, 偏航, 翻滚]）。
     *
     */
    rotation: Vector3;
    /**
     * @remarks
     * 形状的缩放。
     *
     * 范围：[-1000, 1000]
     */
    scale: number;
    /**
     * @remarks
     * 到此形状自动移除的剩余时间（秒）。如果形状没有有限的生命周期，则返回 undefined。
     *
     */
    timeLeft?: number;
    /**
     * @remarks
     * 到此形状自动移除的初始总时间跨度（秒）。如果形状没有有限的生命周期，则返回 undefined。
     *
     */
    readonly totalTimeLeft?: number;
    /**
     * @remarks
     * 此形状可见的玩家列表。如果留空，则形状对所有玩家可见。
     *
     */
    visibleTo: Player[];
    /**
     * @remarks
     * 从世界中移除该形状。可以通过 PrimitiveShapesManager 的 addText 方法重新添加该形状。
     *
     */
    remove(): void;
    /**
     * @remarks
     * 设置形状的位置和维度。如果维度未定义，则将在所有维度中显示。
     *
     * @param location 形状的位置和维度。
     */
    setLocation(location: DimensionLocation | Vector3): void;
}
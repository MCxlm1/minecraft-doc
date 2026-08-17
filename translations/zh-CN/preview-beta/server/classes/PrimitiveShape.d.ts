/**
 * 文本基元的基础类。表示世界中的一个对象及其基本属性。
 */
export class PrimitiveShape {
    private constructor();
    /**
     * @remarks
     * 此形状附加到的实体。设置后，该形状将复制附加实体的根位置，其位置将用作偏移量。
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
     * 形状可见的维度。如果维度未定义，则在所有维度中显示。
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 如果形状在移除前存在有限时间跨度，则返回 true。
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
     * 如果定义，该距离将用于确定每个客户端渲染此基元的距离。默认情况下，距离将匹配客户端的渲染距离设置。
     *
     * 最小值：0
     */
    maximumRenderDistance?: number;
    /**
     * @remarks
     * 形状的旋转（欧拉角 - [俯仰角，偏航角，翻滚角]）。
     *
     */
    rotation: Vector3;
    /**
     * @remarks
     * 形状的比例。
     *
     * 范围：[-1000, 1000]
     */
    scale: number;
    /**
     * @remarks
     * 此形状自动移除前的剩余时间（秒）。如果形状没有有限生命周期，则返回 undefined。
     *
     */
    timeLeft?: number;
    /**
     * @remarks
     * 此形状自动移除前的总初始时间跨度（秒）。如果形状没有有限生命周期，则返回 undefined。
     *
     */
    readonly totalTimeLeft?: number;
    /**
     * @remarks
     * 此形状可见的玩家列表。如果留空，则所有玩家可见。
     *
     */
    visibleTo: Player[];
    /**
     * @remarks
     * 从世界中移除该形状。可以通过 PrimitiveShapesManager 的 addText 方法重新添加。
     *
     */
    remove(): void;
    /**
     * @remarks
     * 设置形状的位置和维度。如果维度未定义，则在所有维度中显示。
     *
     */
    setLocation(location: DimensionLocation | Vector3): void;
}
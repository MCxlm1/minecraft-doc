/**
 * 由唯一方块位置的无序容器组成的体积。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ListBlockVolume extends BlockVolumeBase {
    /**
     * @remarks
     * 创建 ListBlockVolume 的新实例。
     *
     * @param locations
     * 构造 ListBlockVolume 时将使用的初始方块位置数组。
     */
    constructor(locations: Vector3[]);
    /**
     * @remarks
     * 将方块位置插入到容器中。
     *
     * @param locations
     * 要插入到容器中的方块位置数组。
     */
    add(locations: Vector3[]): void;
    /**
     * @remarks
     * 从容器中移除方块位置。
     *
     * @param locations
     * 要从容器中移除的方块位置数组。
     */
    remove(locations: Vector3[]): void;
}
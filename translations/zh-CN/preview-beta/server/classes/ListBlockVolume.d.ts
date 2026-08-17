/**
 * 由独特方块位置的无序容器组成的体积。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ListBlockVolume extends BlockVolumeBase {
    /**
     * @remarks
     * 创建一个新的 ListBlockVolume 实例。
     *
     * @param locations
     * ListBlockVolume 将使用的初始方块位置数组。
     */
    constructor(locations: Vector3[]);
    /**
     * @remarks
     * 将方块位置插入容器中。
     *
     * @param locations
     * 要插入容器的方块位置数组。
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
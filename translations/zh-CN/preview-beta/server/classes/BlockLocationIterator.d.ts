/**
 * BlockLocationIterator 返回其所遍历的方块体积的下一个方块位置。
 * BlockLocationIterator 用于抽象其获取来源的方块体积形状（因此可以表示构成矩形、立方体、球体、线条和复杂形状的所有方块位置）。
 * 每次迭代都会返回父形状中的下一个有效方块位置。
 * 除非父形状另有指定，否则 BlockLocationIterator 将按 X 递增、Z 递增、Y 递增的顺序遍历 3D 空间。
 * （实际上是跨 XZ 平面步进，当该平面中的所有位置用尽后，将 Y 坐标增加到下一个 XZ 切片。）
 */
export class BlockLocationIterator implements Iterable<Vector3> {
    private constructor();
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @returns 返回一个迭代器，用于遍历方块位置。
     */
    [Symbol.iterator](): Iterator<Vector3>;
    /**
     * @beta
     * @remarks
     * 检查底层方块体积是否已失效。
     * 如果在创建迭代器和迭代它之间修改了方块体积，则返回 false，否则返回 true。
     *
     * @returns 若底层方块体积在创建迭代器后被修改，则返回 false；否则返回 true。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    isValid(): boolean;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @returns 返回下一个方块位置；若迭代完成，则返回 { done: true }。
     */
    next(): IteratorResult<Vector3>;
}
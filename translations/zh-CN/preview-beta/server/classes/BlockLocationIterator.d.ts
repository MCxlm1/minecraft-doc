/**
 * BlockLocationIterator 返回其迭代的方块体积的下一个方块位置。
 * BlockLocationIterator 用于抽象其来源的方块体积的形状（因此它可以表示组成矩形、立方体、球体、线条和复杂形状的所有方块位置）。
 * 每次迭代传递返回父形状中的下一个有效方块位置。
 * 除非父形状另有指定，否则 BlockLocationIterator 将按 X 增加、Z 增加、Y 增加的顺序遍历 3D 空间。
 * （实际上是在 XZ 平面上逐步移动，当该平面中的所有位置都耗尽时，将 Y 坐标增加到下一个 XZ 切片。）
 */
export class BlockLocationIterator implements Iterable<Vector3> {
    private constructor();
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     */
    [Symbol.iterator](): Iterator<Vector3>;
    /**
     * @beta
     * @remarks
     * 检查底层方块体积是否已失效。
     * 如果在创建迭代器与迭代之间修改了方块体积，则返回 false，否则返回 true。
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
     */
    next(): IteratorResult<Vector3>;
}
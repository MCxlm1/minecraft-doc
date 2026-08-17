/**
 * BlockLocationIterator 返回下一个方块位置，
 * 即其所迭代的方块体积中的方块位置。
 * BlockLocationIterator 用于抽象其获取自的方块体积的形状，
 * 因此它可以表示构成矩形、立方体、球体、线条和复杂形状的所有方块位置。
 * 每次迭代都会返回父形状中的下一个有效方块位置。
 * 除非父形状另有指定，否则 BlockLocationIterator
 * 将按 X 递增、Z 递增、Y 递增的顺序遍历 3D 空间。
 * （实际上是在 XZ 平面上逐步移动，当该平面中的所有位置耗尽后，
 * 将 Y 坐标增加到下一个 XZ 切片）
 */
export class BlockLocationIterator implements Iterable<Vector3> {
    private constructor();
    /**
     * @remarks
     * 此函数无法在受限执行模式中调用。
     *
     * @returns 返回一个迭代器，用于遍历方块位置。
     */
    [Symbol.iterator](): Iterator<Vector3>;
    /**
     * @beta
     * @remarks
     * 检查底层方块体积是否已失效。
     * 如果在创建迭代器与进行迭代之间修改了方块体积，则返回 false；否则返回 true。
     *
     * @returns 若方块体积已被修改（即已失效），返回 false；否则返回 true。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    isValid(): boolean;
    /**
     * @remarks
     * 此函数无法在受限执行模式中调用。
     *
     * @returns 返回下一个迭代结果，包含方块位置及完成状态。
     */
    next(): IteratorResult<Vector3>;
}
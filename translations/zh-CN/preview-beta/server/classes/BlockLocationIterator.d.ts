/**
 * BlockLocationIterator 返回其所迭代的方块体积中的下一个方块位置。
 * BlockLocationIterator 用于抽象其来源方块体积的形状（因此它可以表示构成矩形、立方体、球体、线条和复杂形状的所有方块位置）。
 * 每次迭代都会返回父形状中的下一个有效方块位置。
 * 除非父形状另有指定，否则 BlockLocationIterator 将按 X 递增、随后 Z 递增、最后 Y 递增的顺序遍历三维空间。
 * （实际上是先遍历 XZ 平面，当该平面内所有位置遍历完毕后，将 Y 坐标递增到下一个 XZ 切片。）
 */
export class BlockLocationIterator implements Iterable<Vector3> {
    private constructor();
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @returns 返回一个迭代器，用于遍历该方块体积中的方块位置序列。
     */
    [Symbol.iterator](): Iterator<Vector3>;
    /**
     * @beta
     * @remarks
     * 检查底层方块体积是否已失效。
     * 如果在创建迭代器与迭代过程中方块体积被修改，则返回 false；否则返回 true。
     *
     * @returns 如果方块体积未被修改则为 true，否则为 false。
     *
     * @throws 此函数可能抛出错误。{@link minecraftcommon.EngineError}
     */
    isValid(): boolean;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @returns 返回一个 IteratorResult 对象，包含下一个方块位置（如果存在）或指示迭代完成的 done 状态。
     */
    next(): IteratorResult<Vector3>;
}
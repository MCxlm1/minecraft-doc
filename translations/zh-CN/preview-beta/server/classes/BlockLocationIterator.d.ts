/**
 * BlockLocationIterator 返回其迭代的方块体积中的下一个方块位置。
 * BlockLocationIterator 用于抽象其获取自的方块体积的形状（因此它可以表示构成矩形、立方体、球体、线条和复杂形状的所有方块位置）。
 * 每次迭代都会返回父形状中的下一个有效方块位置。
 * 除非父形状另有指定，否则 BlockLocationIterator 将按 X 递增、Z 递增、Y 递增的顺序遍历 3D 空间。
 * （实际上是在 XZ 平面上逐步移动，当该平面中的所有位置耗尽时，将 Y 坐标增加到下一个 XZ 切片。）
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
     * 如果在创建迭代器到迭代期间方块体积被修改，则返回 false；否则返回 true。
     *
     * @returns 若底层方块体积未被修改，则返回 true；否则返回 false。
     * @throws 此函数可能抛出 {@link minecraftcommon.EngineError} 错误。
     */
    isValid(): boolean;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @returns 返回迭代结果，包含下一个方块位置或迭代完成状态。
     */
    next(): IteratorResult<Vector3>;
}
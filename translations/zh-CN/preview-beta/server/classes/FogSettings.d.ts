/**
 * @beta
 * 提供对玩家实体雾定义栈的访问，允许脚本推入、弹出、移除和查询活动的雾定义。
 */
export class FogSettings {
    private constructor();
    /**
     * @remarks
     * 返回当前玩家雾栈中的雾定义标识符列表，按从底部到顶部的顺序排列。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 当前栈中雾定义标识符的数组。
     * @throws
     * 如果实体无效，则抛出异常。
     *
     * {@link InvalidEntityError}
     */
    getStack(): string[];
    /**
     * @remarks
     * 返回当前玩家雾栈上存在的标签列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 与雾栈上的雾设置关联的标签字符串数组。
     * @throws
     * 如果实体无效，则抛出异常。
     *
     * {@link InvalidEntityError}
     */
    getTags(): string[];
    /**
     * @remarks
     * 从玩家雾栈中移除最近推入的雾定义。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param tag
     * 可选参数，用于标识要弹出的条目。如果提供，则从栈顶向下搜索并移除最近推入的具有该标签的条目。如果省略，则移除最近推入的条目（无论标签如何）。
     * @returns
     * 返回被弹出的雾定义的标识符，如果栈未发生更改则返回 undefined。
     * @throws
     * 如果实体无效，则抛出异常。
     *
     * {@link InvalidEntityError}
     */
    pop(tag?: string): string | undefined;
    /**
     * @remarks
     * 将一个新的雾定义推入玩家雾栈。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param fogId
     * 要推入栈的雾定义的标识符（例如 'minecraft:fog_bamboo_jungle'）。
     * @param tag
     * 可选参数，用于标记此雾定义在栈中的标签，以便通过 pop 或 remove 来定位。如果省略，则条目以标签 'untagged' 存储。
     * @returns
     * 返回雾定义插入栈的零基索引位置。
     * @throws
     * 如果实体无效、雾定义标识符无效，或栈的上限（16个）已超出，则抛出异常。
     *
     * {@link FogSettingsError}
     *
     * {@link InvalidEntityError}
     */
    push(fogId: string, tag?: string): number;
    /**
     * @remarks
     * 从玩家雾栈中移除所有具有给定标签的雾定义。如果未提供标签，则清除所有雾定义。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param tag
     * 可选参数，用于标识要移除的条目。如果省略，则清除所有雾定义（无论标签如何）。
     * @returns
     * 如果至少移除一个条目则返回 true，如果栈未发生更改则返回 false。
     * @throws
     * 如果实体无效，则抛出异常。
     *
     * {@link InvalidEntityError}
     */
    remove(tag?: string): boolean;
    /**
     * @remarks
     * 将玩家的雾栈设置为给定的雾标识符列表，替换任何现有条目。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param fogIds
     * 要设置到玩家雾栈的雾定义标识符栈（例如 ['minecraft:fog_bamboo_jungle']）。最多16个条目。
     * @param tag
     * 可选参数，用于与新条目关联的标签，以便通过 pop 或 remove 来定位它们。
     * @throws
     * 如果实体无效、提供的雾标识符超过16个，或任何雾标识符无效，则抛出异常。
     *
     * {@link FogSettingsError}
     *
     * {@link InvalidEntityError}
     */
    setStack(fogIds: string[], tag?: string): void;
}
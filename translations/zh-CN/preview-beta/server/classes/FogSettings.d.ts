/**
 * @beta
 * 提供对玩家实体迷雾定义堆栈的访问，允许脚本进行推入、弹出、移除和查询活跃的迷雾定义。
 */
export class FogSettings {
    private constructor();
    /**
     * @remarks
     * 返回当前在玩家迷雾堆栈上的迷雾标识符列表，顺序从底部到顶部。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 当前在堆栈上的迷雾定义标识符数组。
     * @throws
     * 如果实体无效则抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getStack(): string[];
    /**
     * @remarks
     * 返回当前存在于玩家迷雾堆栈上的标签列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 与堆栈上迷雾设置关联的标签字符串数组。
     * @throws
     * 如果实体无效则抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getTags(): string[];
    /**
     * @remarks
     * 从玩家迷雾堆栈中移除最近推入的迷雾定义。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param tag
     * 可选的标签，用于标识要弹出的条目。若提供，则从堆栈顶部向底部搜索，并移除具有该标签的最近推入的条目。若省略，则无论标签如何，移除最近推入的条目。
     * @returns
     * 返回被弹出的迷雾定义的标识符；如果堆栈未改变则返回 undefined。
     * @throws
     * 如果实体无效则抛出错误。
     *
     * {@link InvalidEntityError}
     */
    pop(tag?: string): string | undefined;
    /**
     * @remarks
     * 将新的迷雾定义推入玩家迷雾堆栈。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param fogId
     * 要推入堆栈的迷雾定义的标识符（例如 'minecraft:fog_bamboo_jungle'）。
     * @param tag
     * 可选的标签，用于在堆栈上标记此迷雾定义，使其可由 pop 或 remove 定位。若省略，该条目将以标签 'untagged' 存储。
     * @returns
     * 返回迷雾定义在堆栈中插入位置的从零开始的索引。
     * @throws
     * 如果实体无效、迷雾标识符无效，或已超过 16 个堆栈上限，则抛出错误。
     *
     * {@link FogSettingsError}
     *
     * {@link InvalidEntityError}
     */
    push(fogId: string, tag?: string): number;
    /**
     * @remarks
     * 从玩家迷雾堆栈中移除所有带有给定标签的迷雾定义。如果未提供标签，则清除所有迷雾定义。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param tag
     * 可选的标签，用于标识要移除的条目。若省略，则清除所有迷雾定义，不论标签如何。
     * @returns
     * 如果至少移除一个条目则返回 true；如果堆栈未改变则返回 false。
     * @throws
     * 如果实体无效则抛出错误。
     *
     * {@link InvalidEntityError}
     */
    remove(tag?: string): boolean;
    /**
     * @remarks
     * 将玩家的迷雾堆栈设置为给定的迷雾标识符列表，替换任何现有条目。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param fogIds
     * 要在玩家迷雾堆栈上设置的迷雾定义标识符堆栈（例如 ['minecraft:fog_bamboo_jungle']）。最多 16 个条目。
     * @param tag
     * 可选的标签，用于关联新条目，以便通过 pop 或 remove 定位它们。
     * @throws
     * 如果实体无效、提供的迷雾标识符超过 16 个，或任何迷雾标识符无效，则抛出错误。
     *
     * {@link FogSettingsError}
     *
     * {@link InvalidEntityError}
     */
    setStack(fogIds: string[], tag?: string): void;
}
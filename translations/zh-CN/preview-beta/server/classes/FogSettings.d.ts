/**
 * @beta
 * 提供对玩家实体迷雾定义堆栈的访问，允许脚本对活动迷雾定义进行推入、弹出、移除和查询操作。
 */
export class FogSettings {
    private constructor();
    /**
     * @remarks
     * 返回当前玩家迷雾堆栈中的迷雾标识符列表，顺序为从底部到顶部。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @returns
     * 当前堆栈上的迷雾定义标识符数组。
     * @throws
     * 如果实体无效则抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getStack(): string[];
    /**
     * @remarks
     * 返回当前玩家迷雾堆栈上存在的标签列表。
     *
     * 此函数不能在受限执行模式下调用。
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
     * 此函数不能在受限执行模式下调用。
     *
     * @param tag
     * 可选标签，用于标识要弹出的条目。若提供，则从堆栈顶部向下搜索并移除具有该标签的最近推入条目；若省略，则无论标签如何都移除最近推入的条目。
     * @returns
     * 返回被弹出的迷雾定义的标识符；如果堆栈未发生更改，则返回 undefined。
     * @throws
     * 如果实体无效则抛出错误。
     *
     * {@link InvalidEntityError}
     */
    pop(tag?: string): string | undefined;
    /**
     * @remarks
     * 将一个迷雾定义推入玩家迷雾堆栈。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param fogId
     * 要推入堆栈的迷雾定义的标识符（例如 'minecraft:fog_bamboo_jungle'）。
     * @param tag
     * 可选标签，用于在堆栈上标记此迷雾定义，使其可通过 pop 或 remove 操作定位。若省略，则该条目以 'untagged' 标签存储。
     * @returns
     * 返回迷雾定义插入堆栈时的从零开始的索引。
     * @throws
     * 如果实体无效、迷雾标识符无效，或堆栈上限 16 已超限，则抛出错误。
     *
     * {@link FogSettingsError}
     *
     * {@link InvalidEntityError}
     */
    push(fogId: string, tag?: string): number;
    /**
     * @remarks
     * 从玩家迷雾堆栈中移除所有带有指定标签的迷雾定义。若未提供标签，则清除所有迷雾定义。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param tag
     * 可选标签，用于标识要移除的条目。若省略，则清除所有迷雾定义，无论标签如何。
     * @returns
     * 如果至少移除了一个条目则返回 true；如果堆栈未发生更改则返回 false。
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
     * 此函数不能在受限执行模式下调用。
     *
     * @param fogIds
     * 要设置在玩家迷雾堆栈上的迷雾定义标识符堆栈（例如 ['minecraft:fog_bamboo_jungle']），最多 16 个条目。
     * @param tag
     * 可选标签，用于关联新条目，可通过 pop 或 remove 操作定位它们。
     * @throws
     * 如果实体无效、提供的迷雾标识符超过 16 个，或任一迷雾标识符无效，则抛出错误。
     *
     * {@link FogSettingsError}
     *
     * {@link InvalidEntityError}
     */
    setStack(fogIds: string[], tag?: string): void;
}
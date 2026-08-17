/**
 * @beta
 * 提供对玩家实体雾定义堆栈的访问，
 * 允许脚本推入、弹出、移除和查询活动雾定义。
 */
export class FogSettings {
    private constructor();
    /**
     * @remarks
     * 返回当前玩家雾堆栈中的雾标识符列表，顺序从底部到顶部。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @returns
     * 返回当前堆栈上的雾定义标识符数组。
     * @throws
     * 如果实体无效则抛出异常。
     *
     * {@link InvalidEntityError}
     */
    getStack(): string[];
    /**
     * @remarks
     * 返回当前玩家雾堆栈中存在的标签列表。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @returns
     * 返回与堆栈上的雾设置关联的标签字符串数组。
     * @throws
     * 如果实体无效则抛出异常。
     *
     * {@link InvalidEntityError}
     */
    getTags(): string[];
    /**
     * @remarks
     * 从玩家雾堆栈中移除最近推入的雾定义。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param tag
     * 可选标签，用于标识要弹出的条目。如果提供，则从堆栈顶部向下搜索，并移除最近推入的具有此标签的条目。如果省略，则无论标签如何，都移除最近推入的条目。
     * @returns
     * 返回被弹出的雾定义的标识符，如果堆栈未变化则返回 undefined。
     * @throws
     * 如果实体无效则抛出异常。
     *
     * {@link InvalidEntityError}
     */
    pop(tag?: string): string | undefined;
    /**
     * @remarks
     * 将新的雾定义推入玩家雾堆栈。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param fogId
     * 要推入堆栈的雾定义标识符（例如 'minecraft:fog_bamboo_jungle'）。
     * @param tag
     * 可选标签，用于在此堆栈上标记该雾定义，使其可被 pop 或 remove 定位。如果省略，该条目将以标签 'untagged' 存储。
     * @returns
     * 返回雾定义被插入堆栈的从零开始的索引。
     * @throws
     * 如果实体无效、雾标识符无效，或超过 16 个堆栈限制，则抛出异常。
     *
     * {@link FogSettingsError}
     *
     * {@link InvalidEntityError}
     */
    push(fogId: string, tag?: string): number;
    /**
     * @remarks
     * 从玩家雾堆栈中移除所有具有给定标签的雾定义。如果未提供标签，则清除所有雾定义。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param tag
     * 可选标签，用于标识要移除的条目。如果省略，则清除所有雾定义，无论标签如何。
     * @returns
     * 如果至少移除了一个条目则返回 true，如果堆栈未变化则返回 false。
     * @throws
     * 如果实体无效则抛出异常。
     *
     * {@link InvalidEntityError}
     */
    remove(tag?: string): boolean;
    /**
     * @remarks
     * 将玩家雾堆栈设置为给定的雾标识符列表，替换任何现有条目。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param fogIds
     * 要在玩家雾堆栈上设置的雾定义标识符堆栈（例如 ['minecraft:fog_bamboo_jungle']）。最多 16 个条目。
     * @param tag
     * 可选标签，用于与新条目关联，以便通过 pop 或 remove 定位。
     * @throws
     * 如果实体无效、提供的雾标识符超过 16 个，或任何雾标识符无效，则抛出异常。
     *
     * {@link FogSettingsError}
     *
     * {@link InvalidEntityError}
     */
    setStack(fogIds: string[], tag?: string): void;
}
/**
 * @beta
 * 提供对玩家实体雾定义栈的访问，允许脚本推送、弹出、移除和查询活跃的雾定义。
 */
export class FogSettings {
    private constructor();
    /**
     * @remarks
     * 返回玩家雾栈上当前雾标识符的列表，按从底部到顶部的顺序排列。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @returns
     * 当前栈上的雾定义标识符数组。
     * @throws
     * 如果实体无效则抛出。
     *
     * {@link InvalidEntityError}
     */
    getStack(): string[];
    /**
     * @remarks
     * 返回玩家雾栈上当前存在的标签列表。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @returns
     * 与栈上雾设置关联的标签字符串数组。
     * @throws
     * 如果实体无效则抛出。
     *
     * {@link InvalidEntityError}
     */
    getTags(): string[];
    /**
     * @remarks
     * 从玩家雾栈中移除最近推送的雾定义。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param tag
     * 可选标签，用于标识要弹出的条目。如果提供，则从栈顶向下搜索并移除最近推送的具有此标签的条目。如果省略，则移除最近推送的条目，无论其标签。
     * @returns
     * 返回被弹出的雾定义的标识符，如果栈未改变则返回 undefined。
     * @throws
     * 如果实体无效则抛出。
     *
     * {@link InvalidEntityError}
     */
    pop(tag?: string): string | undefined;
    /**
     * @remarks
     * 将一个新的雾定义推送到玩家雾栈上。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param fogId
     * 要推送到栈上的雾定义的标识符（例如 'minecraft:fog_bamboo_jungle'）。
     * @param tag
     * 可选标签，用于标记栈上的此雾定义，以便通过 pop 或 remove 定位。如果省略，则使用标签 'untagged' 存储该条目。
     * @returns
     * 返回雾定义插入栈的从零开始的索引。
     * @throws
     * 如果实体无效、雾标识符无效或栈限制（16 条）已超过，则抛出。
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
     * 此函数无法在受限执行模式下调用。
     *
     * @param tag
     * 可选标签，用于标识要移除的条目。如果省略，则清除所有雾定义，无论其标签。
     * @returns
     * 如果至少移除了一个条目，则返回 true；如果栈未改变，则返回 false。
     * @throws
     * 如果实体无效则抛出。
     *
     * {@link InvalidEntityError}
     */
    remove(tag?: string): boolean;
    /**
     * @remarks
     * 将玩家雾栈设置为给定的雾标识符列表，替换任何现有条目。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param fogIds
     * 要设置到玩家雾栈上的雾定义标识符栈（例如 ['minecraft:fog_bamboo_jungle']）。最多 16 条。
     * @param tag
     * 可选标签，用于关联新条目，以便通过 pop 或 remove 定位。
     * @throws
     * 如果实体无效、提供的雾标识符超过 16 个，或任何雾标识符无效，则抛出。
     *
     * {@link FogSettingsError}
     *
     * {@link InvalidEntityError}
     */
    setStack(fogIds: string[], tag?: string): void;
}
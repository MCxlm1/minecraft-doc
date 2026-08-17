/**
 * 玩家权限等级。
 */
export enum PlayerPermissionLevel {
    /**
     * @remarks
     * 访客只能观察世界，不能与之交互。
     *
     */
    Visitor = 0,
    /**
     * @remarks
     * 成员可以建造和挖掘、攻击玩家和生物，并与物品和实体交互。
     *
     */
    Member = 1,
    /**
     * @remarks
     * 操作员除了可以执行成员的所有操作外，还可以传送和使用命令。
     *
     */
    Operator = 2,
    Custom = 3,
}
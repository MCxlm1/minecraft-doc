/**
 * 包含记分板项的身份信息。
 */
export class ScoreboardIdentity {
    private constructor();
    /**
     * @remarks
     * 返回此身份对玩家可见的名称。
     *
     */
    readonly displayName: string;
    /**
     * @remarks
     * 记分板身份标识符。
     *
     */
    readonly id: number;
    /**
     * @remarks
     * 如果 ScoreboardIdentity 引用仍然有效，则返回 true。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 记分板身份类型。
     *
     */
    readonly 'type': ScoreboardIdentityType;
    /**
     * @remarks
     * 如果记分板身份是实体或玩家，则返回该记分板项对应的实体。
     *
     * @returns 对应的实体；如果身份不是实体或无法获取，则返回 undefined。
     * @throws 如果此身份已失效或对应的实体不存在，则抛出错误。
     */
    getEntity(): Entity | undefined;
}
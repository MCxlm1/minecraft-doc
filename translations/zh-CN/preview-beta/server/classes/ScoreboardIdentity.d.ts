/**
 * 包含记分板项目的身份标识。
 */
export class ScoreboardIdentity {
    private constructor();
    /**
     * @remarks
     * 返回此身份标识的玩家可见名称。
     *
     */
    readonly displayName: string;
    /**
     * @remarks
     * 记分板身份标识的标识符。
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
     * 记分板身份标识的类型。
     *
     */
    readonly 'type': ScoreboardIdentityType;
    /**
     * @remarks
     * 如果记分板身份标识是实体或玩家，则返回此记分板项对应的实体。
     *
     * @throws 此函数可能抛出错误。
     */
    getEntity(): Entity | undefined;
}
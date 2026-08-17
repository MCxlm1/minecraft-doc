/**
 * 包含计分板项的身份。
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
     * 计分板身份的标识符。
     *
     */
    readonly id: number;
    /**
     * @remarks
     * 如果ScoreboardIdentity引用仍然有效，则返回true。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 计分板身份的类型。
     *
     */
    readonly 'type': ScoreboardIdentityType;
    /**
     * @remarks
     * 如果计分板身份是实体或玩家，则返回此计分板项对应的实体。
     *
     * @throws 此函数可能会抛出错误。
     */
    getEntity(): Entity | undefined;
}
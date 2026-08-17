/**
 * 包含记分板的目标和参与者。
 */
export class ScoreboardObjective {
    private constructor();
    /**
     * @remarks
     * 返回该记分板目标的玩家可见名称。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly displayName: string;
    /**
     * @remarks
     * 记分板目标的标识符。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly id: string;
    /**
     * @remarks
     * 如果 ScoreboardObjective 引用仍然有效，则返回 true。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 为给定的参与者和目标添加分数。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param participant
     * 要应用记分板分数加法的参与者。
     * @throws 此函数可能抛出错误。
     */
    addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number;
    /**
     * @remarks
     * 返回所有目标参与者身份。
     *
     * @throws 此函数可能抛出错误。
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * 返回参与者的特定分数。
     *
     * @param participant
     * 要检索分数的参与者标识符。
     * @throws 此函数可能抛出错误。
     */
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
    /**
     * @remarks
     * 返回此目标下所有参与者的具体分数。
     *
     * @throws 此函数可能抛出错误。
     */
    getScores(): ScoreboardScoreInfo[];
    /**
     * @remarks
     * 返回指定身份是否是该记分板目标的参与者。
     *
     * @throws 此函数可能抛出错误。
     */
    hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks
     * 从该记分板目标中移除一个参与者。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param participant
     * 要从此目标跟踪中移除的参与者。
     * @throws 此函数可能抛出错误。
     */
    removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks
     * 为参与者设置分数。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param participant
     * 参与者的身份。
     * @param score
     * 分数的新值。
     * @throws 此函数可能抛出错误。
     */
    setScore(participant: Entity | ScoreboardIdentity | string, score: number): void;
}
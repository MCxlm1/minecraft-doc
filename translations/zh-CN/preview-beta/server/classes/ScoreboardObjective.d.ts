/**
 * 包含计分板的目标和参与者。
 */
export class ScoreboardObjective {
    private constructor();
    /**
     * @remarks
     * 返回此计分板目标对玩家可见的名称。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly displayName: string;
    /**
     * @remarks
     * 计分板目标的标识符。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly id: string;
    /**
     * @remarks
     * 如果计分板目标的引用仍然有效，则返回 true。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 为指定参与者和目标增加分数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param participant
     * 要应用计分板分数增加的参与者。
     * @throws 此函数可能抛出错误。
     */
    addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number;
    /**
     * @remarks
     * 返回所有目标参与者的身份。
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
     * 返回此目标下所有参与者的特定分数。
     *
     * @throws 此函数可能抛出错误。
     */
    getScores(): ScoreboardScoreInfo[];
    /**
     * @remarks
     * 返回指定身份是否为计分板目标的参与者。
     *
     * @throws 此函数可能抛出错误。
     */
    hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks
     * 从计分板目标中移除一个参与者。
     *
     * This function can't be called in restricted-execution mode.
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
     * This function can't be called in restricted-execution mode.
     *
     * @param participant
     * 参与者的身份标识。
     * @param score
     * 分数的新值。
     * @throws 此函数可能抛出错误。
     */
    setScore(participant: Entity | ScoreboardIdentity | string, score: number): void;
}
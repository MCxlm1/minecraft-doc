/**
 * 包含记分板中的目标和参与者。
 */
export class ScoreboardObjective {
    private constructor();
    /**
     * @remarks
     * 返回此记分板目标对玩家显示的名称。
     *
     * @throws
     * 当无法访问属性时抛出错误。
     */
    readonly displayName: string;
    /**
     * @remarks
     * 记分板目标的标识符。
     *
     * @throws
     * 当无法访问属性时抛出错误。
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
     * 向给定的参与者和目标添加分数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param participant
     * 要应用记分板值添加的参与者。
     * @param scoreToAdd
     * 要添加的分数数值。
     * @returns
     * 添加后的分数。
     * @throws
     * 当参与者无效或无法添加分数时抛出错误。
     */
    addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number;
    /**
     * @remarks
     * 返回该目标的所有参与者身份。
     *
     * @returns
     * 该目标的参与者身份数组。
     * @throws
     * 当无法获取参与者列表时抛出错误。
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * 返回参与者的特定分数。
     *
     * @param participant
     * 要获取分数的参与者标识符。
     * @returns
     * 参与者的分数；如果参与者不存在则返回 undefined。
     * @throws
     * 当参与者无效或无法获取分数时抛出错误。
     */
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
    /**
     * @remarks
     * 返回此目标针对所有参与者的具体分数。
     *
     * @returns
     * 所有参与者的分数信息数组。
     * @throws
     * 当无法获取分数信息时抛出错误。
     */
    getScores(): ScoreboardScoreInfo[];
    /**
     * @remarks
     * 返回指定身份是否为该记分板目标的参与者。
     *
     * @param participant
     * 要检查的参与者身份。
     * @returns
     * 如果指定身份是该目标的参与者，则返回 true。
     * @throws
     * 当无法检查参与者身份时抛出错误。
     */
    hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks
     * 从该记分板目标中移除一个参与者。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param participant
     * 要从此目标跟踪中移除的参与者。
     * @returns
     * 如果参与者已成功移除，则返回 true。
     * @throws
     * 当参与者无效或无法移除时抛出错误。
     */
    removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks
     * 为参与者设置分数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param participant
     * 参与者的身份。
     * @param score
     * 分数的新值。
     * @throws
     * 当参与者无效或无法设置分数时抛出错误。
     */
    setScore(participant: Entity | ScoreboardIdentity | string, score: number): void;
}
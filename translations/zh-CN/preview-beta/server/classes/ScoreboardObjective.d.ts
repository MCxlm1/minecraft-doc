/**
 * 包含记分板的目标和参与者。
 */
export class ScoreboardObjective {
    private constructor();
    /**
     * @remarks
     * 返回此记分板目标对玩家显示的名称。
     *
     * @throws 此属性在使用时可能抛出错误（例如目标已无效）。
     */
    readonly displayName: string;
    /**
     * @remarks
     * 记分板目标的标识符。
     *
     * @throws 此属性在使用时可能抛出错误（例如目标已无效）。
     */
    readonly id: string;
    /**
     * @remarks
     * 如果该 ScoreboardObjective 引用仍然有效，则返回 true。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 向给定的参与者和目标添加分数。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param participant
     * 要对其应用记分板分数增加的参与者。
     * @returns 增加后的新分数。
     * @throws 如果该目标无效、参与者无效或分数超出范围，则抛出错误。
     */
    addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number;
    /**
     * @remarks
     * 返回该目标的所有参与者身份。
     *
     * @returns 该目标的所有参与者身份数组。
     * @throws 如果该目标无效，则抛出错误。
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * 返回某个参与者的特定分数。
     *
     * @param participant
     * 要获取分数的参与者标识符。
     * @returns 该参与者的分数；如果参与者没有分数，则返回 undefined。
     * @throws 如果该目标无效或参与者无效，则抛出错误。
     */
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
    /**
     * @remarks
     * 返回该目标所有参与者的特定分数。
     *
     * @returns 该目标所有参与者的分数信息数组。
     * @throws 如果该目标无效，则抛出错误。
     */
    getScores(): ScoreboardScoreInfo[];
    /**
     * @remarks
     * 返回指定身份是否为该记分板目标的参与者。
     *
     * @param participant
     * 要检查的参与者身份。
     * @returns 如果指定身份是该目标的参与者，则返回 true。
     * @throws 如果该目标无效或参与者无效，则抛出错误。
     */
    hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks
     * 从该记分板目标中移除一个参与者。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param participant
     * 要从该目标跟踪中移除的参与者。
     * @returns 如果参与者成功移除，则返回 true。
     * @throws 如果该目标无效或参与者无效，则抛出错误。
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
     * @throws 如果该目标无效或参与者无效，则抛出错误。
     */
    setScore(participant: Entity | ScoreboardIdentity | string, score: number): void;
}
/**
 * 包含计分板的目标和参与者。
 */
export enum ScoreboardIdentityType {
    /**
     * @remarks
     * 此计分板参与者与一个实体绑定。
     *
     */
    Entity = 'Entity',
    /**
     * @remarks
     * 此计分板参与者与一个伪玩家实体绑定——通常用于将分数存储为数据或抽象进度。
     *
     */
    FakePlayer = 'FakePlayer',
    /**
     * @remarks
     * 此计分板参与者与一个玩家绑定。
     *
     */
    Player = 'Player',
}
/**
 * 描述实体治疗（healing）的来源。
 */
export enum EntityHealCause {
    /**
     * @remarks
     * 由物品（如药水）造成的治疗。
     *
     */
    Heal = 'Heal',
    /**
     * @remarks
     * 由再生效果造成的治疗。
     *
     */
    Regeneration = 'Regeneration',
    /**
     * @remarks
     * 当饥饿值满时造成的治疗。
     *
     */
    SelfHeal = 'SelfHeal',
    /**
     * @remarks
     * 当不死图腾被激活时造成的治疗。
     *
     */
    TotemOfUndying = 'TotemOfUndying',
}
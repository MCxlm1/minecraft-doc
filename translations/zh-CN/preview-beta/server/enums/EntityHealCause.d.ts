```typescript
/**
 * 描述实体的治疗来源。
 */
export enum EntityHealCause {
    /**
     * @remarks
     * 由药水等物品引起的治疗。
     *
     */
    Heal = 'Heal',
    /**
     * @remarks
     * 由再生效果引起的治疗。
     *
     */
    Regeneration = 'Regeneration',
    /**
     * @remarks
     * 饥饿值满时引起的治疗。
     *
     */
    SelfHeal = 'SelfHeal',
    /**
     * @remarks
     * 激活不死图腾时引起的治疗。
     *
     */
    TotemOfUndying = 'TotemOfUndying',
}
```
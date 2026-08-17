/**
 * @beta
 * 已更改的包设置名称和值。
 */
export class PackSettingChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 设置的名称。
     *
     */
    readonly settingName: string;
    /**
     * @remarks
     * 设置的值。
     *
     */
    readonly settingValue: boolean | number | string;
}
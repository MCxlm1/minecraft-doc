/**
 * Contains APIs to enable/disable player input permissions.
 */
export class PlayerInputPermissions {
    private constructor();
    /**
     * @remarks
     * Returns true if an input permission is enabled.
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    isPermissionCategoryEnabled(permissionCategory: InputPermissionCategory): boolean;
    /**
     * @remarks
     * Enable or disable an input permission. When enabled the
     * input will work, when disabled will not work.
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setPermissionCategory(permissionCategory: InputPermissionCategory, isEnabled: boolean): void;
}

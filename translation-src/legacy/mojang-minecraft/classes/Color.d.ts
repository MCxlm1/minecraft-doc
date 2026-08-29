/**
 * Represents a fully customizable color within Minecraft.
 */
export class Color {
    /**
     * Determines a color's alpha (opacity) component. Valid values
     * are between 0 (transparent) and 1.0 (opaque).
     */
    "alpha": number;
    /**
     * Determines a color's blue component. Valid values are
     * between 0 and 1.0.
     */
    "blue": number;
    /**
     * Determines a color's green component. Valid values are
     * between 0 and 1.0.
     */
    "green": number;
    /**
     * Determines a color's red component. Valid values are between
     * 0 and 1.0.
     */
    "red": number;
    /**
     * @remarks
     * Creates a new color using the specified color values.
     * @param red
     * @param green
     * @param blue
     * @param alpha
     */
    constructor(red: number, green: number, blue: number, alpha: number);
}

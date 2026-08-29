/**
 * Contains additional options for displaying a title and
 * optional subtitle.
 */
export class TitleDisplayOptions {
    /**
     * Fade-in time for the title and subtitle, in seconds.
     */
    "fadeInSeconds": number;
    /**
     * Fade-out time for the title and subtitle, in seconds.
     */
    "fadeOutSeconds": number;
    /**
     * Amount of time for the title and subtitle to stay in place.
     */
    "staySeconds": number;
    /**
     * Optional subtitle text.
     */
    "subtitle"?: string;
}

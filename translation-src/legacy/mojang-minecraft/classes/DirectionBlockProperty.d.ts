export class DirectionBlockProperty extends IBlockProperty {
    readonly "name": string;
    readonly "validValues": Direction[];
    "value": Direction;
    protected constructor();
}

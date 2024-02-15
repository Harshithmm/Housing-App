import { IpropertyBase } from "./IPropertybase";

export class Property implements IpropertyBase{
    Id!: number;
    SellRent!: number;
    Name!: string;
    Ptype!: string;
    BHK!: number;
    Ftype!: string;
    Price!: number;
    BuiltArea!: number;
    CarpetArea?: number;
    Address!: string;
    Address2?: string;
    city!: string;
    FloorNo?: string;
    TotalFloor?: string;
    RTM!: number;
    AOP?: string;
    MainEntrance?: string;
    Security?: number;
    Gated?: number;
    Maintenance?: number;
    Possession?: string;
    Image?: string;
    Description?: string;
    PostedOn!: string;
    PostedBy!: number;
}
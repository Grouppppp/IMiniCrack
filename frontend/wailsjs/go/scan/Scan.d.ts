// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {model} from '../models';
import {runtime} from '../models';

export function AddRegex(arg1:string,arg2:string):Promise<void>;

export function ChangeRegexStatus(arg1:string):Promise<model.Response>;

export function DelRegex(arg1:string):Promise<void>;

export function FindSensitiveInfo(arg1:string):Promise<string>;

export function GetRegx():Promise<model.Response>;

export function Init():Promise<void>;

export function SaveRegex():Promise<model.Response>;

export function SaveResult(arg1:string):Promise<string>;

export function ScanSensitive(arg1:string,arg2:number):Promise<model.Response>;

export function StopScan():Promise<string>;

export function UpdateRegex(arg1:string,arg2:string,arg3:string):Promise<void>;

export function WailsInit(arg1:runtime.Runtime):Promise<void>;

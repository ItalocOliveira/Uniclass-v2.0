import { CreateLocalDto } from "./CreateLocalDto";
import { GeoCoordinate, MapCoordinate } from "./LocalDomain";

export interface UpdateLocalDto extends Partial<CreateLocalDto>{}
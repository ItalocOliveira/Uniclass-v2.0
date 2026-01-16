import { CreateLocalDto } from "./CreateLocalDto";
import { GeoCoordinate, MapCoordinate } from "../../../entities/LocalDomain";

export interface UpdateLocalDto extends Partial<CreateLocalDto>{}
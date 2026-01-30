import { PartialType } from "@nestjs/mapped-types";
import { CreateEventoDto } from "./CreateEventoDto";

export class EditEventoDto extends PartialType(CreateEventoDto) {}
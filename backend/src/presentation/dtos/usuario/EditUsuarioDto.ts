import { PartialType } from "@nestjs/mapped-types";
import { CreateUsuarioDto } from "./CreateUsuarioDto";

export class EditUsuarioDto extends PartialType(CreateUsuarioDto) {}
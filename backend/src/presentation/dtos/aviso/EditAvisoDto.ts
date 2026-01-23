import { PartialType } from "@nestjs/mapped-types";
import { CreateAvisoDto } from "./CreateAvisoDto";

export class EditAvisoDto extends PartialType(CreateAvisoDto) {}
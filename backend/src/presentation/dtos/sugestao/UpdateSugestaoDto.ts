import { PartialType } from "@nestjs/mapped-types";
import { CreateSugestaoDto } from "./CreateSugestaoDto";

export class UpdateSugestaoDto extends PartialType(CreateSugestaoDto){}
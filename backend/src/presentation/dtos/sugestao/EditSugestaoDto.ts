import { PartialType, PickType } from "@nestjs/mapped-types";
import { CreateSugestaoDto } from "./CreateSugestaoDto";

export class EditSugestaoDto extends PartialType(PickType(CreateSugestaoDto, ['status'] as const)) {}
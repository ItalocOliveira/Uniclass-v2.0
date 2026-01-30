import { PartialType } from "@nestjs/mapped-types";
import { CreateInstituicaoDto } from "./CreateInstituicaoDto";

export class EditInstituicaoDto extends PartialType(CreateInstituicaoDto){}
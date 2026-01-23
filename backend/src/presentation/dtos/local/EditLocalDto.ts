import { PartialType } from "@nestjs/mapped-types";
import { CreateLocalDto } from "./CreateLocalDto";

export class EditLocalDto extends PartialType(CreateLocalDto) {}


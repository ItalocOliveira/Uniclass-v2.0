import { CreateSugestaoDto } from "./CreateSugestaoDto";

export interface UpdateSugestaoDto extends Partial<Pick<CreateSugestaoDto, 'status'>>{}
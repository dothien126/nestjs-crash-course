import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, MinLength } from "class-validator";

export  class CreateUserDto {
    @ApiProperty()
    @IsAlphanumeric()
    @MinLength(5)
    name: string
}
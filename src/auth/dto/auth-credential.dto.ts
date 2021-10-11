import { IsString, Matches, MaxLength, Min, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-z0-9]*$/, {
    message: 'password 형식 오류. 영어, 숫자만 가능',
  })
  password: string;
}

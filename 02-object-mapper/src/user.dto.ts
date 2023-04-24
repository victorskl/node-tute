import {AutoMap} from "@automapper/classes";

export class UserDto {
  @AutoMap()
  firstName: string = "";

  @AutoMap()
  lastName: string = "";

  @AutoMap()
  fullName: string = "";

  @AutoMap()
  username: string = "";

  @AutoMap(() => BioDto)
  bio: BioDto | undefined;
}

export class BioDto {
  @AutoMap()
  jobTitle!: string; // error TS2564: Property has no initializer https://stackoverflow.com/a/71706659

  @AutoMap()
  jobSalary!: number;

  @AutoMap()
  birthday!: string;

  @AutoMap()
  avatarUrl!: string;
}

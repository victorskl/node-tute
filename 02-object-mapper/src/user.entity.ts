import {AutoMap} from "@automapper/classes";

export class User {
  @AutoMap()
  firstName: string;

  @AutoMap()
  lastName: string;

  @AutoMap()
  username: string;

  password: string | undefined; // <- we purposely left this one out because we don't want to map "password"

  @AutoMap(() => Bio)
  bio: Bio | undefined;

  constructor(firstName?: string, lastName?: string, username?: string, password?: string, bio?: Bio) {
    this.firstName = firstName || "";  // error TS2564: Property has no initializer https://stackoverflow.com/a/71706659
    this.lastName = lastName || "";
    this.username = username ?? "";
    this.password = password;
    this.bio = bio;
  }
}

export class Bio {
  @AutoMap(() => Job)
  job: Job | undefined;

  @AutoMap()
  birthday: Date;

  @AutoMap()
  avatarUrl: string;

  constructor(job?: Job, birthday?: Date, avatarUrl?: string) {
    this.job = job;
    this.birthday = birthday || new Date(0);
    this.avatarUrl = avatarUrl ?? "";
  }
}

export class Job {
  @AutoMap()
  title: string;

  @AutoMap()
  salary: number | undefined;

  constructor(title?: string, salary?: number) {
    this.title = title || "";
    this.salary = salary;
  }
}

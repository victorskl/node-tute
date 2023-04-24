// https://automapperts.netlify.app/docs/tutorial/preface
//
// Usage:
//  npx tsc
//  node main

import {
  CamelCaseNamingConvention,
  createMap,
  forMember,
  mapFrom,
  namingConventions,
  typeConverter
} from '@automapper/core';
import {mapper} from "./mapper";
import {Bio, Job, User} from "./user.entity";
import {BioDto, UserDto} from "./user.dto";

const user = new User();
user.firstName = 'Chau';
user.lastName = 'Tran';
user.username = 'ctran';
user.password = '123456';

user.bio = new Bio();
user.bio.avatarUrl = 'google.com';
user.bio.birthday = new Date();

user.bio.job = new Job();
user.bio.job.title = 'Developer';
user.bio.job.salary = 99999;

console.log(user);

// ---
// createMap(mapper, Bio, BioDto);
// createMap(mapper, User, UserDto);
// const dto = mapper.map(user, User, UserDto);
// console.log(dto);

// ---
createMap(
  mapper,
  Bio,
  BioDto,
  typeConverter(Date, String, (date) => date.toDateString()),
  namingConventions(new CamelCaseNamingConvention())
);

createMap(
  mapper,
  User,
  UserDto,
  forMember(
    (destination) => destination.fullName,
    mapFrom((source) => source.firstName + ' ' + source.lastName)
  )
);

const dto2 = mapper.map(user, User, UserDto);

console.log(dto2);

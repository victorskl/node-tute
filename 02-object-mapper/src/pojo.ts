// https://automapperts.netlify.app/docs/strategies/pojos
//
// Usage:
//  npx tsc
//  node pojo

import {PojosMetadataMap} from "@automapper/pojos";
import {createMap, forMember, mapFrom} from "@automapper/core";
import {pojoMapper} from "./mapper";

interface User {
  firstName: string;
  lastName: string;
}

interface UserDto {
  firstName: string;
  lastName: string;
  fullName: string;
}

export function createUserMetadata() {
  PojosMetadataMap.create<User>('User', {
    firstName: String,
    lastName: String,
  });

  PojosMetadataMap.create<UserDto>('UserDto', {
    firstName: String,
    lastName: String,
    fullName: String,
  });
}

createUserMetadata();

createMap<User, UserDto>(
  pojoMapper,
  'User', // this needs to match what we passed in PojosMetadataMap.create()
  'UserDto', // this needs to match what we passed in PojosMetadataMap.create()
  forMember(
    (destination) => destination.fullName,
    mapFrom((source) => source.firstName + ' ' + source.lastName)
  )
);

// ---

const user = {firstName: 'Chau', lastName: 'Tran'}
console.log(user);

// ---

const dto = pojoMapper.map<User, UserDto>(
  user,
  'User', // this needs to match what we passed in PojosMetadataMap.create()
  'UserDto' // this needs to match what we passed in PojosMetadataMap.create()
); // { firstName: 'Chau', lastName: 'Tran', fullName: 'Chau Tran'
console.log(dto);

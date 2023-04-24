import {createMapper} from '@automapper/core';
import {classes} from '@automapper/classes';
import {pojos} from "@automapper/pojos";

// Create and export the mapper
export const mapper = createMapper({
  strategyInitializer: classes(),
});

export const pojoMapper = createMapper({
  strategyInitializer: pojos(),
});

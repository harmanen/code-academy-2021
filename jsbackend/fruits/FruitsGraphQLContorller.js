import { FruitTC } from "./FruitsRepository.js";

export const FruitQuery = {
  fruitMany: FruitTC.getResolver("findMany"),
  fruitPagination: FruitTC.getResolver("pagination"),
};

export const FruitMutation = {
  fruitCreateOne: FruitTC.getResolver("createOne"),
  fruitRemoveById: FruitTC.getResolver("removeById"),
};

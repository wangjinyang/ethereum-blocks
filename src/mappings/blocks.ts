import { ethereum, BigInt } from "@graphprotocol/graph-ts";

import { Block } from "../../generated/schema";

const limit = BigInt.fromI64(23510000);

export function handleBlock(block: ethereum.Block): void {
  let id = block.hash.toHex();
  let blockEntity = new Block(id);
  blockEntity.number = block.number;
  blockEntity.timestamp = block.timestamp;
  if (blockEntity.number.gt(limit)) {
    blockEntity.save();
  }
}

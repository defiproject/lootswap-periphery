import chai, { expect } from 'chai'
import { bytecode } from '@lootswap/core/build/UniswapV2Pair.json'
import { keccak256 } from '@ethersproject/solidity'

const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])

describe('constants', () => {
    describe('INIT_CODE_HASH', () => {
      it('matches computed bytecode hash', () => {
        expect(COMPUTED_INIT_CODE_HASH).to.eq('0x792891fe5061e302693d65b4f261bab0a629c27b32341741dea724c43a3098ec') // init is different when truffle compiling
      })
    })
  })
import chai, { expect } from 'chai'
import { bytecode } from '@lootswap/core/build/UniswapV2Pair.json'
import { keccak256 } from '@ethersproject/solidity'

const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])

describe('constants', () => {
    describe('INIT_CODE_HASH', () => {
      it('matches computed bytecode hash', () => {
        expect(COMPUTED_INIT_CODE_HASH).to.eq('0xfc6e1da9296e1ea8943039c46ced7ddc6b030e85b5a944ea17cc117d96469d92') // init is different when truffle compiling
      })
    })
  })
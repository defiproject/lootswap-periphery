import chai, { expect } from 'chai'
import { bytecode } from '@lootswap/core/build/UniswapV2Pair.json'
import { keccak256 } from '@ethersproject/solidity'

const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])

describe('constants', () => {
    describe('INIT_CODE_HASH', () => {
      it('matches computed bytecode hash', () => {
        expect(COMPUTED_INIT_CODE_HASH).to.eq('0x444017f293e8ad8ec0a364790d6b32f6b46851d943659709a227c1e359285618')
      })
    })
  })
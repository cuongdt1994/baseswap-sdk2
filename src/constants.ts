import { ChainId } from '@baseswapfi/sdk-core'

export const FACTORY_ADDRESS = '0x38015D05f4fEC8AFe15D7cc0386a126574e8077B'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54' // Uni default
export const POOL_INIT_CODE_HASH2 = '0xe040f12c7cee3904b78f24f8fc395629c2e69525c2815da7a659f7483e378ecb' // fee update, new hash
export const POOL_INIT_CODE_HASH3 = '0x146a9a61ada215bdbc7346c169e030cf383f441b85d40c70970f98c8aa070cd4' // arbitrum
const POOL_HASH_MODE = '0x4adf6002ac7c691132e09e25068a1ddc77accbf11c16b012cc95b7d1842a0af9'

export const POOL_INIT_CODE_HASH_MAP: { [chainId in ChainId]?: string } = {
  [ChainId.BASE]: POOL_INIT_CODE_HASH,
  [ChainId.BASE_GOERLI]: POOL_INIT_CODE_HASH2,
  [ChainId.SCROLL_SEPOLIA]: POOL_INIT_CODE_HASH2,
  [ChainId.ARBITRUM]: POOL_INIT_CODE_HASH3,
  [ChainId.MODE]: POOL_HASH_MODE
}

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  LOWEST = 80,
  LOW = 450,
  MEDIUM = 2500,
  HIGH = 10000
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200
}

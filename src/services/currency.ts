import axios from 'axios'
import { z } from 'zod/mini'
import { handleApiError } from '../utils'
import { GetRatesQueryParams, GetRatesResponseItem } from '@/api/schemas/frankfurterAPI'
import { type CurrencyCode, CurrencyCodeSchema } from '@/types/types'

const apiBaseUrl = 'https://api.frankfurter.dev/v2/rates'

export type GetRatesParams = {
  base?: CurrencyCode
  quotes?: CurrencyCode[]
  date?: string
  from?: string
  to?: string
}

export const GetRatesResponseSchema = z.array(
  GetRatesResponseItem.extend({
    base: CurrencyCodeSchema,
  }).omit({ providers: true }),
)

export type GetRatesResponse = z.infer<typeof GetRatesResponseSchema>

const serializeCurrencyList = (list?: CurrencyCode[]) => (list?.length ? list.join(',') : undefined)

const toOrvalGetRatesQueryParams = (
  params: GetRatesParams,
): z.input<typeof GetRatesQueryParams> => ({
  ...params,
  quotes: serializeCurrencyList(params.quotes),
})

export const getRates = async (params: GetRatesParams): Promise<GetRatesResponse> => {
  try {
    const response = await axios.get<unknown>(apiBaseUrl, {
      params: toOrvalGetRatesQueryParams(params),
    })

    return GetRatesResponseSchema.parse(response.data)
  } catch (error) {
    throw new Error(handleApiError(error))
  }
}

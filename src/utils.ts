import axios from 'axios'
import { z } from 'zod'

export const handleApiError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    return `Axios error: ${error.message}`
  } else if (error instanceof z.ZodError) {
    return `Validation issue: ${JSON.stringify(error.issues, null, 2)}`
  } else {
    let errorMessage = 'Something went wrong: '
    if (error instanceof Error) {
      errorMessage += error.message
    }
    return errorMessage
  }
}

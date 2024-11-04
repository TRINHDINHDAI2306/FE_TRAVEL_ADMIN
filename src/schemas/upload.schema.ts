import { z } from 'zod'

export const UploadSchema = z.object({
  file: z.instanceof(File, { message: 'File is required' }),
})

export type UploadDTO = z.infer<typeof UploadSchema>

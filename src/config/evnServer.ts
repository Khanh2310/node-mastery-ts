import { z } from 'zod'

const configSchema = z.object({
  API_URL: z.string()
})

const configProject = configSchema.safeParse({
  API_URL:  process.env.API_URL,
})
if (!configProject.success) {
  console.error(configProject.error.issues)
  throw new Error('Các giá trị khai báo trong file .env không hợp lệ')
}

const envServerConfig = configProject.data
export default envServerConfig

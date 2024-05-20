import authApiRequest from "@/apiRequest/Auth" 
import { RegistrationInput } from "@/schemas/Register"
import { responseClient } from "@/utils/server"

export async function POST(request: Request) {
    const body = await request.json() as RegistrationInput
    try {
      const res =  await authApiRequest.register(body)
      return responseClient({
        status: 200,
        body: {
          ...res.data,
          payload:{
            user: res.data.payload.user,
            
          } 
        }
      })
    }
    catch(e: any) {
      console.error(e?.response?.data || e.response)
      return responseClient({
        status: e.response.status,
        body: e.response.data
      })
    }
  }
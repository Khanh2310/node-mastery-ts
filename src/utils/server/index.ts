'use server'

import { OptionsCookie } from "@/types/token"

const baseHeader = {
    'Content-Type': 'application/json'
}


export const responseClient = ({status = 200, headerData, body}: {
    status?: number,
    headerData?: any,
    body?: any
}) => {
    const response = Response.json(body, {
        status: status,
        headers: {
          ...baseHeader, ...headerData
        }
      })

      return response
  }

  export const createSetCookieHeader = (name: string, value: string, options: OptionsCookie) => {
    let cookie = `${name}=${value}`;
    
    if (options.path) {
      cookie += `; Path=${options.path}`;
    }
    if (options.expires) {
      cookie += `; Expires=${options.expires}`;
    }
    if (options.maxAge) {
      cookie += `; Max-Age=${options.maxAge}`;
    }
    if (options.httpOnly) {
      cookie += '; HttpOnly';
    }
    if (options.secure) {
      cookie += '; Secure';
    }
    if (options.sameSite) {
      cookie += `; SameSite=${options.sameSite}`;
    }
    
    return cookie;
  }
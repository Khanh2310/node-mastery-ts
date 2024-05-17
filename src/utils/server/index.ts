'use server'
import { NextResponse } from "next/server";

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
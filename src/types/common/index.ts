import { z } from "zod";

export const PaginationQuery = z.object({
    page: z.coerce.number().positive().min(1),
    limit: z.coerce.number().positive().min(10)
  })
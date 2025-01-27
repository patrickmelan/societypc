import {z} from "zod"

export const formSchema = z.object({
    firstName: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }).max(40, {
      message: "Name cannot exceed 40 characters."
    }),
    lastName: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }).max(40, {
      message: "Name cannot exceed 40 characters."
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    message: z.string().min(2, {
      message: "Message must be at least 2 characters.",
    }).max(400, {
      message: "Message cannot exceed 400 characters."
    }),
  })
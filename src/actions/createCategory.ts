'use server'

import { db } from '@/lib/db'
import { z } from 'zod'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export type State = {
  errors?: {
    title?: string[]
  }
  message?: string | null
}

const CreateCategory = z.object({
  title: z.string().min(3, {
    message: 'Minimum of three characters required',
  }),
})

export async function create(prevStae: State, formData: FormData) {
  const validatedFields = CreateCategory.safeParse({
    title: formData.get('title'),
  })
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing fields0',
    }
  }

  const { title } = validatedFields.data

  try {
    await db.category.create({
      data: {
        title,
      },
    })
  } catch (error) {
    return {
      message: 'Database error',
    }
  }
  revalidatePath('/dashboard/categories/category/1')
  redirect('/dashboard/categories/category/1')
}

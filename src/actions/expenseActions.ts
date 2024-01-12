'use server'

import { z } from 'zod'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

const AddExpense = z.object({
  name: z.string(),
  amount: z.string(),
})

export async function createExpense(formData: FormData) {
  const { name, amount } = AddExpense.parse({
    name: formData.get('name'),
    amount: formData.get('amount'),
  })

  await db.expense.create({
    data: {
      name,
      amount,
    },
  })

  revalidatePath('/expense-tracker')
}

'use client'

import { createCategory } from '@/actions/create-category'

import { FormInput } from './form-input'
import { FormButton } from './form-buton'
import { useAction } from '@/hooks/use-action'

export const Form = () => {
  const { execute, fieldErrors } = useAction(createCategory, {
    onSuccess: (data) => {
      console.log(data, 'SUCCESS')
    },
    onError: (error) => {
      console.error(error)
    },
  })

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string

    execute({ title })
  }
  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={fieldErrors} />
      </div>

      <FormButton />
    </form>
  )
}

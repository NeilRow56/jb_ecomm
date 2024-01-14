'use client'

import { createCategory } from '@/actions/create-category'

import { useAction } from '@/hooks/use-action'
import { FormInput } from '@/components/form/form-input'
import { FormSubmit } from '@/components/form/form-submit'

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
        <FormInput label="Category Title" id="title" errors={fieldErrors} />
      </div>

      <FormSubmit>Save</FormSubmit>
    </form>
  )
}

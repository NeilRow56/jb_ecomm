'use client'

import { Input } from '@/components/ui/input'
import { useFormStatus } from '@/react-dom-shim'

interface FormInputProps {
  errors?: {
    title?: string[]
  }
}

export const FormInput = ({ errors }: FormInputProps) => {
  const { pending } = useFormStatus()
  return (
    <div>
      <Input
        id="title"
        name="title"
        required
        placeholder="Enter a category title"
        disabled={pending}
      />
      <div>
        {errors?.title ? (
          <div className="flex">
            {errors.title.map((error: string) => (
              <p key={error} className="text-rose-500">
                {error}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

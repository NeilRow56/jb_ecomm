import { Button } from '@/components/ui/button'
import { useFormStatus } from '@/react-dom-shim'

export const FormButton = () => {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending} variant="primary" type="submit">
      Submit
    </Button>
  )
}

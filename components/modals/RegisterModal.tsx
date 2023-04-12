import useLoginModal from "@/hooks/useLoginModal"
import useRegisterModal from "@/hooks/useRegisterModal"
import { useCallback, useState } from "react"
import Input from "../Input"
import Modal from "../Modal"

const RegisterModal = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername]= useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true)

      // TODO ADD REGISTER AND LOGIN 

      registerModal.onClose()      
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [registerModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Name"
        onChange={e => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
      <Input
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
        value={username}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  )
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Create an account"
      actionLabel="Register"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      />
  )
}

export default RegisterModal
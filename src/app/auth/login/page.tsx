import { Suspense } from 'react'
import LoginForm from './login-form'
import Navbar from '@/components/ui/navbarpublic'

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-indigo-50 px-4">
        <Suspense fallback={<div>Laster inn...</div>}>
          <LoginForm />
        </Suspense>
      </main>
    </>
  )
}

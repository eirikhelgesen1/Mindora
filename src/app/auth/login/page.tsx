import { Suspense } from 'react'
import LoginForm from './login-form'

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-indigo-50 px-4">
      <Suspense fallback={<div>Laster inn...</div>}>
        <LoginForm />
      </Suspense>
    </main>
  )
}

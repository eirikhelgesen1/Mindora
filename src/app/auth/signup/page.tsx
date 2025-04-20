import { Suspense } from 'react'
import SignupForm from './SignupForm'

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-indigo-50 px-4">
      <Suspense fallback={<div>Laster inn...</div>}>
        <SignupForm />
      </Suspense>
    </main>
  )
}

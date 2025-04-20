import { Suspense } from 'react'
import SignupForm from './SignupForm'
import Navbar from '@/components/ui/navbarpublic'

export default function SignupPage() {
  return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center bg-indigo-50 px-4">
          <Suspense fallback={<div>Laster inn...</div>}>
            <SignupForm />
          </Suspense>
        </main>
      </>
  )
}

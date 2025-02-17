import { SignIn } from '@clerk/nextjs';
 
export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <SignIn
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-xl rounded-xl border border-gray-200",
          }
        }}
      />
    </div>
  );
}
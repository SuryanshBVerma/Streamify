import React from 'react';
import { Link } from 'react-router-dom'; // Use 'react-router-dom' for navigation in React
import UserAuthForm from '@/components/custom/user-auth-form'; // Adjust the path to your component
import { buttonVariants } from '@/components/ui/button'; // Adjust the path to your component
import { cn } from '@/lib/utils'; // Adjust the path to your utility function
import Logo from '@/components/svg/logo';
import Sound from '@/components/svg/sound';



function AuthenticationPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">

      <Link
        to="/examples/authentication" // Replace 'href' with 'to' for react-router
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 hidden md:right-8 md:top-8'
        )}
      >
        Login
      </Link>

      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">

        <div className="absolute inset-0" >
          <img
            alt="bg-img"
            src="https://images.unsplash.com/photo-1571928098080-80f4008d111e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1VU0lDJTIwUEFSVFl8ZW58MHwxfDB8fHww"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
        </div>

        <div className="relative z-20 flex items-center text-lg font-medium">
          <Logo className="h-8 w-8 mr-2" />
          Streamify
        </div>

        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
            Discover, stream, and vibe to your favorite music anywhere, anytime. Your personalized soundtrack, always at your fingertips.
            </p>
            <footer className="text-xs">- Streamify</footer>
          </blockquote>
        </div>
      </div>


      <div className="flex h-full items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="flex text-2xl font-semibold tracking-tight items-center justify-center">
              Create an account 
              <Sound className="h-8 w-8 ml-3"/>
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-10 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our {''}
            <Link
              to="/terms"
              className="underline underline-offset-4 hover:text-[#2ecc71]"
            >
              Terms of Service
            </Link>
            {' '}
            and{' '}
            <Link
              to="/privacy"
              className="underline underline-offset-4 hover:text-[#2ecc71]"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationPage;

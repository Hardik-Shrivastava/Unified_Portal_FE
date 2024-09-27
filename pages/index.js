import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login-new'); // Redirect to login page
  }, []);

  return null; // This page won't render anything because of the redirect
}

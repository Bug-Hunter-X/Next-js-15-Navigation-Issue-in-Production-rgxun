```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/'); // redirect to home page
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go back to Home</button>
    </div>
  );
}
```
The problem was likely caused by an incorrect build process or a missing optimization step in the production build.  Ensure you have the necessary build steps for Next.js 15.
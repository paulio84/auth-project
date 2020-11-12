import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <h1>Whatever it was you're looking for, cannot be found :(</h1>
    <Link className="underline" to="/">
      Go Home
    </Link>
  </>
);

export default NotFound;

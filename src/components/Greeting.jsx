import { useSelector } from 'react-redux';

function Greeting() {
  const greeting = useSelector((state) => state.greeting.message);
  const status = useSelector((state) => state.greeting.status);
  return (
	<h3>{status === 'success' ? greeting.message: "comming soon...."}</h3>
  );
}

export default Greeting;

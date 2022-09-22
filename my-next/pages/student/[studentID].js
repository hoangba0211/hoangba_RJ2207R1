import Link from "next/link";
import { useRouter } from "next/router";

const Student = () => {
  const router = useRouter();
  const { studentID } = router.query;
  return (
    <div>
      <h2>Student Information</h2>
      <p>Student: {studentID}</p>
      <Link href="/layout">Back to Layout</Link>
    </div>
  );
};

export default Student;
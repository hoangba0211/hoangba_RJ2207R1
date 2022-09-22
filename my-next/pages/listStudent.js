import Layout from "./layout"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useRouter } from 'next/router'
import styles from '../styles/listStudent.module.css'
import Link from "next/link";
const students = [
    {
      id: 1,
      name: "Leanne Graham"
    },
    {
      id: 2,
      name: "Ervin Howell"
    },
    {
      id: 3,
      name: "Deckow Crist"
    },
    {
      id: 4,
      name: "Patricia Lebsack"
    },
    {
      id: 5,
      name: "Clementina DuBuque"
    },
    {
      id: 6,
      name: "Glenna Reichert"
    }
  ];
function listStudent() {
    return (
        <Layout>
            <div className={styles.container}>
                <main className={styles.main}>
                    <table className={styles.table}>
                        <thead>
                            <tr className={styles.tr}>
                                <th className={styles.th}>ID</th>
                                <th className={styles.th}>Name</th>
                                <th className={styles.th}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map(student => (
                                <tr className={styles.tr} key={student.id}>
                                    <td className={styles.td}>{student.id}</td>
                                    <td className={styles.td}>{student.name}</td>
                                    <td className={styles.td}>
                                        <Link href={`/student/${encodeURIComponent(student.id)}`}>
                                            <a>Show</a>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </main>
            </div>
        </Layout>
    )
}

export default listStudent
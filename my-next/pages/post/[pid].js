import {useRouter} from 'next/router'
export default function PostID() {
    const router = useRouter();
    const {pid} = router.query 
    return (
        <div>
            <h1>PID: {pid}</h1>
        </div>
    )
}
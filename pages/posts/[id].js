import { useRouter } from "next/router"
import Image from "next/image"
const Post = ({data}) => {
  // const router = useRouter()
  // const { id } = router.query
  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.id}</p>
      
    </div>
  )
}

export default Post

export async function getServerSideProps(context) {
  const { id } = context.query;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(
    (data)=> data.json()
  )
  return {
    props: { data: res}
  }
};

import Link from "next/link"

export default function Home() {
  let name = "park"
  return (
    <div>
      <h4 className="title" style={{fontSize : '30px'}}>애플후래시</h4>
      <p className="title-sub">by dev {name}</p>
    </div>
  )
}

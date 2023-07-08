//import Image from 'next/image'
//import 작명 from 'public/food0.png'
export default function List() {
    let name = "park"
    let 상품 = ['Tomatoes','Pasta','Coconut']
    return (
    <div>
        <h4 className="title" style={{fontSize : '30px'}}>상품목록</h4>
        {
            상품.map(
                function(a,i){
                    return(
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className='food-img'></img>
                            <h4>{상품[i]} $40</h4>
                        </div>
                    )
                }
            )
        }
{/*        <div className="food">
            <h4>{상품[0]} $40</h4>
        </div>
        <div className="food">
            <h4>{상품[1]} $40</h4>
        </div>
        <div className="food">
            <h4>{상품[2]} $40</h4>
    </div>*/}

    </div>
    )
  }
  
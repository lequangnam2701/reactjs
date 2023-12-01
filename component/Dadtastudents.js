const Danhsachhocsinh = () => {
    const item = [
    {
        id: 1,
        Image:'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/54/54103e1501fa5959807094c7877bcd7455750afb_full.jpg', 
        name:  'Phuc', 
        email:'hocsimh@gmail.com',
    },
    {
        id: 2,
        Image:'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/88/88affae552d014c1fb1434994e58334fdc67071b_full.jpg', 
        name:  'Linh ', 
        email:'namok@gmail.com',
    },
    {
        id: 3,
        Image:'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/24/240692660586ae790944959b09fc6581687013af_full.jpg', 
        name:  'Duc', 
        email:'duc2005@gmail.com',
    },
    {
        id: 4,
        Image:'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/c7/c78cc78081d5be3881c0477d724941ba3408e38b_full.jpg', 
        name:  'Nam', 
        email:'phucok6799@gmail.com',
    },
    
]
 return (
    <div className="container-fluid" >
    <div className="container">
        <div className="row">
            {item.map((item, index) => (
                <div className="col-lg-3 text-center  ">
                <div style={{ border: "1px solid #9a9595"   }} className="p-3" >
                    <img src={item.Image} />  
                    <p>{item.id}</p>  
                    <p>{item.name}</p>
                    
                    <p>{item.email}</p>
               </div>
                </div>
            ))}
        </div>
    </div>
</div>
 )
}
export default Danhsachhocsinh;

const itemList = () => {
    const item = [
        {
            id: 1,
            Image: ' https://picsum.photos/200/300',
            name: 'item 1',
            price: 25.99,
            rating: 4.5,
        },
        {
            id: 2,
            Image: ' https://picsum.photos/200/300',
            name: 'item 2',
            price: 25.99,
            rating: 4.5,

        },
        {
            id: 3,
            Image: ' https://picsum.photos/200/300',
            name: 'item 3',
            price: 25.99,
            rating: 4.5,
        },
        {
            id: 4,
            Image: ' https://picsum.photos/200/300',
            name: 'item 4',
            price: 25.99,
            rating: 4.5,
        },
        {
            id: 5,
            Image: ' https://picsum.photos/200/300',
            name: 'item 5',
            price: 25.99,
            rating: 4.5,
        },
        {
            id: 6,
            Image: ' https://picsum.photos/200/300',
            name: 'item 6',
            price: 25.99,
            rating: 4.5,
        },
        {
            id: 7,
            Image: ' https://picsum.photos/200/300',
            name: 'item 7',
            price: 25.88,
            rating: 4.5,
        },
        {
            id: 8,
            Image: 'https://picsum.photos/200/300',
            name: 'item 8',
            price: 25.9,
            rating: 4.5,
        },
    ]

    return (
        <div className="container-fluid" >
            <div className="container">
                <div className="row">
                    {item.map((item, index) => (
                        <div className="col-lg-3 text-center px-5 py-2 "  >
                        <div style={{ border: "1px solid #9a9595"   }} className="p-3" >
                            <img src={item.Image} />
                            <p>{item.name}</p>
                            <p>Price: ${item.price}</p>
                            <p>Rating: {item.rating}</p>
                       </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default itemList;

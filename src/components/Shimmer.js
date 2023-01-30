const Shimmer = ()=>{
    return (
        <div className="content__card">
            {Array.of(1,2,3,4).map(element=> <div className="content__card-item content__card-item--shimer"></div>)}
        </div>
    )
}

export default Shimmer;
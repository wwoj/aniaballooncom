function Gallery_Backdrops(){
const pictureArray = [
    "https://images.pexels.com/photos/5321423/pexels-photo-5321423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6113627/pexels-photo-6113627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6708951/pexels-photo-6708951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7336928/pexels-photo-7336928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4065881/pexels-photo-4065881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/704748/pexels-photo-704748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/796606/pexels-photo-796606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2388650/pexels-photo-2388650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1620784/pexels-photo-1620784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1445903/pexels-photo-1445903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1904733/pexels-photo-1904733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];
    return (
      <div className="page-view-container">
        <div className="gallery">
          {pictureArray.map((x, y) => (
            <div className="pics" key={y}>
              <img
                src={x}
                alt={`pic_${y}`}
              />
            </div>
          ))}
        </div>
      </div>
    );
}
export default Gallery_Backdrops;
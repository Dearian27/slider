import { images } from '../App';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const AnimationRow = ({children, shuffle=false, side='left', id, plus, length=5}) => {  
  const iterations = Array.from({ length: length }, (_, index) => index + 1);
  let array = iterations.map((_, i) => {
    console.log((i + plus) % images.length, images[(i + plus) % images.length])
    return images[(i + plus) % images.length]
  })
  if(shuffle) {
    array = shuffleArray(array);
  }
  const duration = Math.floor(Math.random() * 50 + 200)
  return (
    <div className='slider-row'>
      <div className={`slider-track ${side}`} style={{animationDuration: `${duration}s`}}>
        {array.map((url) => {
          return <img key={url + id} src={url} alt="" />
        })}

        {array.map((url) => {
          return <img key={url + id + 'key'} src={url} alt="" />
        })}
      </div>
    </div>
  )
}

export default AnimationRow
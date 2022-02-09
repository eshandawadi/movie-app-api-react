export const getRandomNumber= (min, max)=>{
    return (Math.random() * (max - min) + min).toFixed(0);
}
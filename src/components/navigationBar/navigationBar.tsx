import './navigationBar.css';

export default function NavigationBar() {
  return(
    <div className="flex justify-between gap-3 w-full border-2 border-white">
      <div className="flex">
        <button className="navigation-item"><span>Home</span></button>
        <button className="navigation-item"><span>Nutrition</span></button>
        <button className="navigation-item"><span>Dishes & Ingredients</span></button>
      </div>
        
      <div className='flex'>
        <div className="p-2 border-l-2 h-full">Welcome!</div>
        <button className='p-2 border-l-2'>Log out</button>
      </div>
    </div>
  )
}
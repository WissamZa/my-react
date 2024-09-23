import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className='bg-slate-300 h-screen w-screen'>
      <div className="absolute flex flex-col place-items-center justify-center top-1/4 left-[37%]">
        <span className='font-extrabold text-[3rem]'>404 Not Found</span>
        <Link className='bg-purple-400 rounded p-1 px-2 border shadow shadow-emerald-800 border-black hover:bg-purple-700' to="/">Home from Link</Link>
      </div>
    </div>
  );
}
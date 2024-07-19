'use client'
import { usePathname,useSearchParams,useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

const WAIT_BETWEEN_CHANGE = 300

const SearchEvents = () => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    console.log(pathname)
    const {replace} = useRouter()
    
    const Search = useDebouncedCallback((term)=>{
      const params = new URLSearchParams(searchParams)
      if(term){
        params.set('search',term)
      }else{
        params.delete('search')
      }
      replace(`${pathname}?${params.toString()}`)
    },WAIT_BETWEEN_CHANGE)

  return (
    <div className="flex items-center px-3 bg-alternative rounded-md  h-10 md:h-12 w-full">
          <form className="w-full">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="What are your looking for ...?"
              className=" p-3 bg-alternative focus:outline-none h-full w-full flex justify-center rounded text-black text-sm font-bold"
              defaultValue={searchParams.get("search")?.toString()}
              onChange={(e)=>Search(e.target.value)}
            />
          </form>
        </div>
  );
}

export default SearchEvents;

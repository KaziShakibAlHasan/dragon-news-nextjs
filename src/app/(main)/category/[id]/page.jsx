import LeftSideBar from "@/components/HomePage/news/LeftSideBar";
import RightSideBar from "@/components/HomePage/news/RightSideBar";
import { getCategories, getNewaCategoryId } from "@/lib/data";


const CategoryPage = async ({params}) => {
    const {id} = await params;
    const news = await getNewaCategoryId(id)
    const categories = await getCategories()
    return (
         <div className="w-11/12 mx-auto my-16 grid grid-cols-4">
      <div>
        <LeftSideBar categories={categories} activeId={id}/>
      </div>
      <div className="font-bold  bg-gray-200 col-span-2">
      <div className="space-y-4 ">

      {
        news.map( (n) => <div className="p-6 bg-gray-400 rounded-md border" key={n._id}>{n.title}</div>)
      }
      </div>
      </div>
      <div className=""><RightSideBar/></div>
    </div>
    );
};

export default CategoryPage;